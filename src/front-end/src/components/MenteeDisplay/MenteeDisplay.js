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

  renderEmail() {
    if (this.props.email != '') {
      return (
        <div>
          <strong>Email: </strong>
          {this.props.email}
        </div>
      );
    } else {
      return;
    }
  }

  handleAcceptClick() {
    this.props.acceptMentee(this.props.menteeUid);

    // Prepare parameters to send mentee acceptance email
    const templateParams = {
      mentorEmail: '',
      mentorName: '',
      mentorAvailability: '',
      mentorDescription: '',
      menteeEmail: '',
      menteeName: '',
      skills: '',
    };

    // Set mentor email, name, skills.
    templateParams.mentorEmail = fire.auth().currentUser.email;
    const mentorPromise = fire
      .database()
      .ref('users/' + fire.auth().currentUser.uid)
      .on('value', (snapshot) => {
        templateParams.mentorName = snapshot.val().name;
        templateParams.skills = snapshot.val().rankedSkills;
        templateParams.mentorDescription = snapshot.val().description;
        templateParams.mentorAvailability = snapshot.val().availability;
      });

    // Set mentee email and name
    const menteePromise = fire
      .database()
      .ref('users/' + this.props.menteeUid)
      .on('value', (snapshot) => {
        templateParams.menteeEmail = snapshot.val().email;
        templateParams.menteeName = snapshot.val().name;
      });

    // Send email
    Promise.all([menteePromise, mentorPromise]).then(() => {
      emailjs.send(
        'gmail',
        'template_bbajqvj',
        templateParams,
        'user_2x3ekfRvEqEttZg87VyrZ',
      );
    });
  }

  handleDeclineClick() {
    this.props.declineMentee(this.props.menteeUid);
  }

  render() {
    return (
      <div className="mentee-card">
        <>
          <Card
            hoverable
            style={{ width: '350px' }}
            title={[
              <UserOutlined className="user-icon" key={this.props.menteeUid} />,
              this.props.name,
            ]}
            actions={[
              this.props.request && (
                <td id="mentee-request-row">
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
              ),
            ]}
          >
            <p>{this.renderEmail()}</p>
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
