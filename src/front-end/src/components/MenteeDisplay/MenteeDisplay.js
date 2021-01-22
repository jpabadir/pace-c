/* eslint-disable */
import React, { Component } from 'react';
import { Button, Card } from 'antd';
import emailjs from 'emailjs-com';
import fire from '../../firebase-init';
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
    // send email to accepted mentee
    const menteeRef = fire
      .database()
      .ref('users/' + this.props.menteeUid)
      .child('email');
    const menteeNameRef = fire
      .database()
      .ref('user/' + this.props.menteeUid)
      .child('name');
    const loggedRef = fire
      .database()
      .ref('users/' + this.props.loggedUid)
      .child('email');
    const loggedNameRef = fire
      .database()
      .ref('users/' + this.props.loggedUid)
      .child('name');
    const templateParams = {
      loggedName: '',
      loggedEmail: '',
      menteeName: '',
      menteeEmail: '',
    };
    menteeRef.on('value', (snapshot) => {
      templateParams.menteeEmail = snapshot.val();
    });
    menteeNameRef.on('value', (snapshot) => {
      templateParams.menteeName = snapshot.val();
    });
    loggedRef.on('value', (snapshot) => {
      templateParams.loggedEmail = snapshot.val();
    });
    loggedNameRef.on('value', (snapshot) => {
      templateParams.loggedName = snapshot.val();
    });
    emailjs.send(
      'gmail',
      'template_bbajqvj',
      templateParams,
      'user_2x3ekfRvEqEttZg87VyrZ',
    );
  }

  handleDeclineClick() {
    this.props.declineMentee(this.props.menteeUid);
  }

  render() {
    return (
      <div className="mentee-requests">
        <div className="individual-mentee">
          <>
            <Card
              hoverable
              style={{ width: '350px' }}
              title={[
                <UserOutlined
                  className="user-icon"
                  key={this.props.menteeUid}
                />,
                this.props.name,
              ]}
              actions={[
                this.props.request && (
                  <tr id="request-row">
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
                ),
              ]}
            >
              <p>
                <strong> Email: </strong>
                {this.props.email}
              </p>
              <p>
                <strong> Skills Seeking Mentorship: </strong>
                {this.props.skills}
              </p>
              <p>
                {' '}
                <strong> Description: </strong> {this.props.description}
              </p>
            </Card>
          </>
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
