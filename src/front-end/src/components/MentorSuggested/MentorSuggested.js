import React, { Component } from 'react';
import { Form, notification } from 'antd';
import MenteeDisplay from '../MenteeDisplay/MenteeDisplay';
import fire from '../../firebase-init';
import { fetchMenteesIDs, fetchMenteesFullInfo } from '../../helper-methods';

// eslint-disable-next-line react/prefer-stateless-function
class MentorSuggested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: [],
      loggedUid: null,
    };

    this.acceptMentee = this.acceptMentee.bind(this);
    this.declineMentee = this.declineMentee.bind(this);
  }

  acceptMentee(menteeUid) {
    const userRef = fire.database().ref('users/' + this.state.loggedUid);
    userRef.once('value', (snapshot) => {
      // Build updated declined and suggested mentees arrays
      const acceptedMentees = snapshot.val().acceptedMentees
        ? snapshot.val().acceptedMentees
        : [];
      acceptedMentees.push(menteeUid);
      const suggestedMentees = snapshot.val().suggestedMentees;
      suggestedMentees.splice(suggestedMentees.indexOf(menteeUid), 1);

      // Update the accepted and suggested mentees in DB
      userRef.child('acceptedMentees').set(acceptedMentees);
      userRef.child('suggestedMentees').set(suggestedMentees);

      // Update the state to reflect the DB changes
      const currentMentees = this.state.mentees;
      const newMentees = currentMentees.filter((mentee) => {
        return mentee.id !== menteeUid;
      });
      this.setState({
        mentees: newMentees,
      });

      // Confirm with the user that this was successful
      notification.success({
        message:
          "Mentee request accepted! The mentee will be notified of their acceptance through email. You can view their email address from the 'Accepted Mentees' tab if you'd like to email them",
      });
    });
  }

  declineMentee(menteeUid) {
    const userRef = fire.database().ref('users/' + this.state.loggedUid);
    userRef.once('value', (snapshot) => {
      // Build updated declined and suggested mentees arrays
      const declinedMentees = snapshot.val().declinedMentees
        ? snapshot.val().declinedMentees
        : [];
      declinedMentees.push(menteeUid);
      const suggestedMentees = snapshot.val().suggestedMentees;
      suggestedMentees.splice(suggestedMentees.indexOf(menteeUid), 1);

      // Update the accepted and suggested mentees in DB
      userRef.child('declinedMentees').set(declinedMentees);
      userRef.child('suggestedMentees').set(suggestedMentees);

      // Update the state to reflect the DB changes
      const currentMentees = this.state.mentees;
      const newMentees = currentMentees.filter((mentee) => {
        return mentee.id !== menteeUid;
      });
      this.setState({
        mentees: newMentees,
      });

      // Confirm with the user that this was successful
      notification.error({
        message:
          "Mentee request accepted! The mentee will be notified of their acceptance through email. You can view their email address from the 'Accepted Mentees' tab if you'd like to email them",
      });
    });
  }

  authListener() {
    return new Promise((resolve) => {
      fire.auth().onAuthStateChanged((user) => {
        this.setState({ loggedUid: user.uid });
        resolve(user.uid);
      });
    });
  }

  componentDidMount() {
    this.authListener().then((uid) => {
      fetchMenteesIDs(uid, 'suggested').then((menteesIDs) => {
        fetchMenteesFullInfo(menteesIDs, this);
      });
    });
  }

  render() {
    return (
      <>
        <Form>
          <h1>
            <center>Suggested Mentees:</center>
            <p3>
              <center>
                <i>
                  After a mentee is accepted, you can view your accepted mentee
                  on the accepted mentees page
                </i>
              </center>
            </p3>
          </h1>
        </Form>
        <br />
        {this.state.mentees.map((mentee) => {
          return (
            <MenteeDisplay
              name={mentee.name}
              /* For privacy, Mentee emails will only be displayed to Mentors 
              once Mentors accept the request
              */
              email=""
              skills={mentee.rankedSkills.join(', ')}
              description={mentee.description}
              request
              acceptMentee={this.acceptMentee}
              declineMentee={this.declineMentee}
              menteeUid={mentee.id}
            />
          );
        })}
      </>
    );
  }
}
export default MentorSuggested;
