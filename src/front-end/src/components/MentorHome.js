import React, { Component } from 'react';
import { Button } from 'antd';
import { Route } from 'react-router-dom';
import fire from '../firebase-init';
import MentorSuggested from './MentorSuggested';
import MentorAccepted from './MentorAccepted';
import MentorTutorial from './MentorTutorial/MentorTutorial';

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
          href="/Auth/mentor-tutorial"
        >
          Mentor Tutorial
        </Button>
        <Button
          type="primary"
          htmlType="button"
          id="suggestedMentees"
          href="/Auth/SuggestedMentees"
        >
          Suggested Mentees
        </Button>
        <Button
          type="primary"
          htmlType="button"
          id="acceptedMentees"
          href="/Auth/MentorAccepted"
        >
          Accepted Mentees
        </Button>
        {/* replace what's in square brackets [] w/ info from DB */}
        {/* <Button
          type="primary"
          htmlType="button"
          id="logout_button"
          onClick={this.onLogout}
          size="large"
          // href="[insert logout page path here]"
        >
          Logout
        </Button> */}

        <Route path="/Auth/SuggestedMentees" component={MentorSuggested} />
        <Route path="/Auth/MentorAccepted" component={MentorAccepted} />
        <Route path="/Auth/mentor-tutorial" component={MentorTutorial} />
      </>
    );
  }
}
// exports:
export default MentorHome;
