import React, { Component } from 'react';
import { Form, Button } from 'antd';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import { UserOutlined } from '@ant-design/icons';

// NOTE: Fields surrounded by square brackets []
// denote fields that are required to be filled-in from the database

// eslint-disable-next-line react/prefer-stateless-function
class MentorAccepted extends Component {
  render() {
    return (
      // What looks like an empty tag (<>) is known as a Fragment
      // Fragments are needed to turn HTML into JSX
      <>
        <Button type="primary" htmlType="button" id="mentorHome">
          Mentor Home
        </Button>
        <Button type="primary" htmlType="button" id="suggestedMentees">
          Suggested Mentees
        </Button>
        <Button type="primary" htmlType="button" id="pendingMentees">
          Pending Mentees
        </Button>
        <Button type="primary" htmlType="button" id="acceptedMentees">
          Accepted Mentees
        </Button>
        <Button type="primary" htmlType="button" id="logout">
          Logout
        </Button>
        <Form>
          <h1>
            <center>These are your accepted mentees:</center>
          </h1>
        </Form>
        {/* replace what's in square brackets [] w/ info from DB */}
        <div className="mentee-requests">
          <div className="individual-mentee">
            <table>
              <tr>
                <th>
                  <UserOutlined className="user-icon" />
                  [Name from DB]
                </th>
              </tr>
              <tr>
                <td>
                  <strong> Email: </strong> [Email from Database]
                </td>
              </tr>
              <tr>
                <td>
                  <strong> Skills Seeking Mentorship: </strong> [Skills Array
                  From Database]
                </td>
              </tr>
              <tr>
                <td>
                  <strong> Time Zone: </strong> [Time Zone From Database]
                </td>
              </tr>
              <tr>
                <td>
                  <strong> Description: </strong> [Description From Database]{' '}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}
// exports:
export default MentorAccepted;
