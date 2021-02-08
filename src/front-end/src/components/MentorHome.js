import React, { Component } from 'react';
import { Button } from 'antd';
import { Route } from 'react-router-dom';
import MentorSuggested from './MentorSuggested';
import MentorAccepted from './MentorAccepted';
import MentorTutorial from './MentorTutorial/MentorTutorial';

// eslint-disable-next-line react/prefer-stateless-function
class MentorHome extends Component {
  render() {
    return (
      <>
        <Button
          type="primary"
          htmlType="button"
          id="mentorHome"
          href="/my-account/mentor-tutorial"
        >
          Mentor Tutorial
        </Button>
        <Button
          type="primary"
          htmlType="button"
          id="suggestedMentees"
          href="/my-account/suggested-mentees"
        >
          Suggested Mentees
        </Button>
        <Button
          type="primary"
          htmlType="button"
          id="acceptedMentees"
          href="/my-account/accepted-mentees"
        >
          Accepted Mentees
        </Button>

        <Route
          path="/my-account/suggested-mentees"
          component={MentorSuggested}
        />
        <Route path="/my-account/accepted-mentees" component={MentorAccepted} />
        <Route path="/my-account/mentor-tutorial" component={MentorTutorial} />
      </>
    );
  }
}
// exports:
export default MentorHome;
