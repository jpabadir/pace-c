import React, { Component } from 'react';
import { Form } from 'antd';
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
            <center>Accepted Mentees:</center>
            <p4>
              <center>
                <i>Below you can view details about each accepted mentee</i>
              </center>
            </p4>
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
              request={false}
              menteeUid={mentee.id}
            />
          );
        })}
      </>
    );
  }
}
// exports:
export default MentorAccepted;
