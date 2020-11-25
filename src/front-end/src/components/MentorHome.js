import React, { Component } from 'react';
import { Button } from 'antd';
import { Route } from 'react-router-dom';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import fire from '../firebase-init';
import MentorSuggested from './MentorSuggested';
import MentorAccepted from './MentorAccepted';
import MentorTutorial from './MentorTutorial';

// eslint-disable-next-line react/prefer-stateless-function
class MentorHome extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <>
        <Button
          type="primary"
          htmlType="button"
          id="mentorHome"
          href="/Auth/MentorTutorial"
        >
          Mentor Tutorial
        </Button>
        {/* button below Redirects to MentorSuggested.js page: */}
        <Button
          type="primary"
          htmlType="button"
          id="suggestedMentees"
          href="/Auth/SuggestedMentees"
        >
          Suggested Mentees
        </Button>
        {/* button below Redirects to MentorAccepted.js page: */}
        <Button
          type="primary"
          htmlType="button"
          id="acceptedMentees"
          href="/Auth/MentorAccepted"
        >
          Accepted Mentees
        </Button>
        {/* replace what's in square brackets [] w/ info from DB */}
        <Button
          type="primary"
          htmlType="button"
          id="logout_button"
          onClick={this.onLogout}
          // href="[insert logout page path here]"
        >
          Logout
        </Button>

        <Route path="/Auth/SuggestedMentees" component={MentorSuggested} />
        <Route path="/Auth/MentorAccepted" component={MentorAccepted} />
        <Route path="/Auth/MentorTutorial" component={MentorTutorial} />
      </>
    );
  }
}
// exports:
export default MentorHome;
