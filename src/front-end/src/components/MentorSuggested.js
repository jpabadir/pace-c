import React, { Component } from 'react';
import { Form } from 'antd';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import MenteeDisplay from './MenteeDisplay';
// will need below when cards are implemented:
// import { UserOutlined, CheckOutlined, CloseOutlined }from'@ant-design/icons';

// NOTE: Fields surrounded by square brackets []
// denote fields that are required to be filled-in from the database

// eslint-disable-next-line react/prefer-stateless-function
class MentorSuggested extends Component {
  render() {
    return (
      // What looks like an empty tag (<>) is known as a Fragment
      // Fragments are needed to turn HTML into JSX
      <>
        <Form>
          <h1>
            <center>These are your suggested mentees:</center>
          </h1>
          <MenteeDisplay />
        </Form>
        {/* insert mentee card/for loop here */}
      </>
    );
  }
}
// exports:
export default MentorSuggested;
