import React, { Component } from 'react';
import { Button } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

// eslint-disable-next-line react/prefer-stateless-function
class MenteeDisplay extends Component {
  render() {
    return (
      <div className="mentee-requests">
        <h2> Pending Mentee Requests</h2>
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
              </th>
            </tr>
            <tr>
              <td>
                <strong> Email: </strong> [Email from Database]
              </td>
            </tr>
            <tr>
              <td>
                <strong> Skills Seeking Mentorship: </strong> [Skills Array From
                Database]
              </td>
            </tr>
            <tr>
              <td>
                <strong> Description: </strong> [Description From Database]{' '}
              </td>
            </tr>
            <tr>
              <td>
                <Button type="text" onClick={this.handleButtonClick}>
                  Accept
                  <CheckOutlined className="check" id="accept" />{' '}
                </Button>
                <Button type="text" onClick={this.handleButtonClick}>
                  Decline
                  <CloseOutlined className="close" id="decline" />{' '}
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default MenteeDisplay;
