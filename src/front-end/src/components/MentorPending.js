import React, { Component } from 'react';
import { Form, Button } from 'antd';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

// NOTE: Fields surrounded by square brackets []
// denote fields that are required to be filled-in from the database

// eslint-disable-next-line react/prefer-stateless-function
class MentorPending extends Component {
  render() {
    return (
      // What looks like an empty tag (<>) is known as a Fragment
      // Fragments are needed to turn HTML into JSX
      <>
        <Form>
          <h1>
            <center>These are your pending mentees:</center>
          </h1>
        </Form>
        {/* replace what's in square brackets [] w/ info from DB */}
        <div className="mentee-requests">
          <p>
            Click <CheckOutlined className="check" /> to accept a Mentee&apos;s
            request or <CloseOutlined className="close" /> to decline.
          </p>
          <div className="individual-mentee">
            <table>
              <tr>
                <th>
                  <UserOutlined className="user-icon" />
                  [Name from DB]
                  <Button type="text" onClick={this.handleButtonClick}>
                    <CheckOutlined className="check" id="accept" />{' '}
                  </Button>
                  <Button type="text" onClick={this.handleButtonClick}>
                    <CloseOutlined className="close" id="decline" />{' '}
                  </Button>
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
export default MentorPending;
