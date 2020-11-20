/* eslint-disable */
import React, { Component } from 'react';
import { Button } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class MenteeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.handleDeclineClick = this.handleDeclineClick.bind(this);
  }

  handleAcceptClick() {
    this.props.acceptMentee(this.props.menteeUid);
  }

  handleDeclineClick() {
    this.props.declineMentee(this.props.menteeUid);
  }

  render() {
    return (
      <div className="mentee-requests">
        <div className="individual-mentee">
          <table>
            <tbody>
              <tr>
                <th>
                  <UserOutlined className="user-icon" />
                  {this.props.name}
                </th>
              </tr>
              <tr>
                <td>
                  <strong> Email: </strong>
                  {this.props.email}
                </td>
              </tr>
              <tr>
                <td>
                  <strong> Skills Seeking Mentorship: </strong>
                  {this.props.skills}
                </td>
              </tr>
              <tr>
                <td>
                  <strong> Description: </strong> {this.props.description}
                </td>
              </tr>
              {this.props.request && (
                <tr>
                  <td>
                    <Button
                      type="text"
                      onClick={this.handleAcceptClick}
                      id="accept"
                    >
                      Accept
                      <CheckOutlined className="check" />{' '}
                    </Button>
                    <Button
                      type="text"
                      onClick={this.handleDeclineClick}
                      id="decline"
                    >
                      Decline
                      <CloseOutlined className="close" />{' '}
                    </Button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

MenteeDisplay.propTypes = {
  menteeUid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  request: PropTypes.bool.isRequired,
  acceptMentee: PropTypes.func.isRequired,
  declineMentee: PropTypes.func.isRequired,
};

export default MenteeDisplay;
