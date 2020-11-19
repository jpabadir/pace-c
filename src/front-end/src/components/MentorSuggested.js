/* eslint-disable */
import React, { Component } from 'react';
import { Form } from 'antd';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import MenteeDisplay from './MenteeDisplay';
import fire from '../firebase-init';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

// NOTE: Fields surrounded by square brackets []
// denote fields that are required to be filled-in from the database

// eslint-disable-next-line react/prefer-stateless-function
class MentorSuggested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedMentees: [],
    };
  }

  componentDidMount() {
    this.authListener().then((uid) => {
      this.fetchSuggestedMenteesIDs(uid);
    });
  }

  authListener() {
    return new Promise((resolve) => {
      fire.auth().onAuthStateChanged((user) => {
        resolve(user.uid);
      });
    });
  }

  fetchSuggestedMenteesIDs(loggedUserUid) {
    const userRef = fire.database().ref('users/' + loggedUserUid);
    userRef.on('value', (snapshot) => {
      this.fetchSuggestedMenteesFullInfo(snapshot.val().suggestedMentees);
    });
  }

  fetchSuggestedMenteesFullInfo(suggestedMenteesIDs) {
    suggestedMenteesIDs.forEach((menteeId) => {
      const menteeRef = fire.database().ref('users/' + menteeId);
      menteeRef.on('value', (snapshot) => {
        this.setState({
          suggestedMentees: this.state.suggestedMentees.concat(snapshot.val()),
        });
      });
    });
  }

  render() {
    return (
      // What looks like an empty tag (<>) is known as a Fragment
      // Fragments are needed to turn HTML into JSX
      <>
        <Form>
          <h1>
            <center>These are your suggested mentees:</center>
          </h1>
          <p>
            <center>
              Click <CheckOutlined className="check" /> to accept a
              Mentee&apos;s request or <CloseOutlined className="close" /> to
              decline.
            </center>
          </p>
        </Form>
        <br />
        {this.state.suggestedMentees.map((mentee) => {
          return (
            <MenteeDisplay
              name={mentee.name}
              email={mentee.email}
              skills={mentee.rankedSkills.join(', ')}
              description={mentee.description}
              request
            />
          );
        })}
      </>
    );
  }
}
// exports:
export default MentorSuggested;
