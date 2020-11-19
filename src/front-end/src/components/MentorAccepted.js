import React, { Component } from 'react';
import { Form } from 'antd';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import MenteeDisplay from './MenteeDisplay';
import fire from '../firebase-init';
import { fetchMenteesIDs, fetchMenteesFullInfo } from '../helper-methods';

// eslint-disable-next-line react/prefer-stateless-function
class MentorAccepted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: [],
    };
  }

  authListener() {
    return new Promise((resolve) => {
      fire.auth().onAuthStateChanged((user) => {
        resolve(user.uid);
      });
    });
  }

  componentDidMount() {
    this.authListener().then((uid) => {
      fetchMenteesIDs(uid, 'accepted').then((menteesIDs) => {
        fetchMenteesFullInfo(menteesIDs, this);
      });
    });
  }

  render() {
    return (
      <>
        <Form>
          <h1>
            <center>These are your accepted mentees:</center>
          </h1>
        </Form>
        <br />
        {this.state.mentees.map((mentee) => {
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
export default MentorAccepted;
