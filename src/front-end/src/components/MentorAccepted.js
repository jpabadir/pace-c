import React, { Component } from 'react';
import { Form } from 'antd';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import MenteeDisplay from './MenteeDisplay';

// NOTE: Fields surrounded by square brackets []
// denote fields that are required to be filled-in from the database

// eslint-disable-next-line react/prefer-stateless-function
class MentorAccepted extends Component {
  render() {
    return (
      // What looks like an empty tag (<>) is known as a Fragment
      // Fragments are needed to turn HTML into JSX
      <>
        <Form>
          <h1>
            <center>These are your accepted mentees:</center>
          </h1>
          <MenteeDisplay
            name="Name from DB"
            email="Email from DB"
            skills="Skills from DB"
            description="Description from DB"
          />
        </Form>
        {/* insert mentee card/for loop here */}
      </>
    );
  }
}
// exports:
export default MentorAccepted;
