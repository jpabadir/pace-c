import React, { Component } from 'react';
import { Form, Button } from 'antd';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

// NOTE: Fields surrounded by square brackets []
// denote fields that are required to be filled-in from the database

// eslint-disable-next-line react/prefer-stateless-function
class MentorHome extends Component {
  render() {
    return (
      // What looks like an empty tag (<>) is known as a Fragment
      // Fragments are needed to turn HTML into JSX
      <>
        {/* button below Redirects to MentorHome.js page: */}
        <Button type="primary" htmlType="button" id="mentorHome">
          Mentor Home
        </Button>
        {/* button below Redirects to MentorSuggested.js page: */}
        <Button type="primary" htmlType="button" id="suggestedMentees">
          Suggested Mentees
        </Button>
        {/* button below Redirects to MentorPending.js page: */}
        <Button type="primary" htmlType="button" id="pendingMentees">
          Pending Mentees
        </Button>
        {/* button below Redirects to MentorAccepted.js page: */}
        <Button type="primary" htmlType="button" id="acceptedMentees">
          Accepted Mentees
        </Button>
        {/* button below Redirects to an appropriate logout page: */}
        <Button type="primary" htmlType="button" id="logout">
          Logout
        </Button>
        <Form>
          <h1>
            <center>Welcome back, [Mentor Name from DB]</center>
          </h1>
          <h2>
            <center>This part is open to ideas maybe a mentor calendar</center>
            <center>that shows appointments with</center>
          </h2>
        </Form>
      </>
    );
  }
}
// exports:
export default MentorHome;
