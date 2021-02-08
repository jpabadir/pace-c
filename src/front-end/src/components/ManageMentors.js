import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import firebase from '../firebase-init';

// eslint-disable-next-line react/prefer-stateless-function

const nodemailer = require('nodemailer');

class ManageMentors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.requestMentor = this.requestMentor.bind(this);
  }

  handleEmailChange(values) {
    this.setState({ email: values.target.value });
  }

  sendEmail() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'wrc9817@gmail.com', // generated ethereal user
        pass: '13163338455', // generated ethereal password
      },
    });
    transporter.sendMail({
      from: 'wrc9817@gamil.com', // sender address
      to: this.state.email, // list of receivers
      subject: 'Pace Mentorship', // Subject line
      text: 'Hi, link: http://localhost:3000/mentor-form-embed', // plain text body
      html: '<p>Hi, link: http://localhost:3000/mentor-form-embed</p>', // html body
    });
    /* 
    const email = this.state.email;
    const templateParams = {
      nameInput: '',
      emailInput: email,
      link: 'http://localhost:3000/mentor-form-embed',
    };
    const loggedPromise = fire.database
      .ref('users/' + fire.auth().currentUser.uid)
      .on('values', (snapshot) => {
        templateParams.nameInput = snapshot.val().name;
      });
    Promise.all([loggedPromise]).then(() => {
      emailjs.send('gmail', '', templateParams, 'user_2x3ekfRvEqEttZg87VyrZ');
    });
  */
  }

  requestMentor(values) {
    firebase
      .database()
      .ref()
      .child('users')
      .orderByChild('email')
      .equalTo(values.emailInput)
      .once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.sendEmail(values);
          window.alert('The link of mentor form has been sent.');
        } else {
          window.alert(
            'The email address has not been registered in the system.',
          );
        }
      });
  }

  render() {
    return (
      <div className="ManageMentors" style={{ paddingTop: '10px' }}>
        <div className="container">
          <h1>
            <font size="7">
              <center> Manage and Invite Mentors </center>
            </font>
          </h1>
          <br />
          <br />
          <div id="CurrentActiveMentors">
            <h1>
              <center>
                <i>
                  <font size="5"> Current/Active Mentors: </font>
                </i>
              </center>
            </h1>
            <p>
              <font size="4">
                <center>
                  **(under development)**
                  <br />
                  Insert/pull current/active mentors here.
                </center>
              </font>
            </p>
          </div>
          <div id="InvitedPendingMentors">
            <h1>
              <center>
                <i>
                  <font size="5"> Invited/Pending Mentors: </font>
                </i>
              </center>
            </h1>
            <p>
              <font size="4">
                <center>
                  **(under development)**
                  <br />
                  Insert/pull invited/pending mentors here.
                </center>
              </font>
            </p>
          </div>
          <div id="InviteTab">
            <h1>
              <center>
                <i>
                  <font size="5"> Invite A Mentor! </font>
                </i>
              </center>
            </h1>
            <p>
              <font size="4">
                <center>
                  <i> How To Invite A Mentor: </i>
                  <br />
                  To invite a user to join Mentor Match as a mentor that is
                  associated with your organization, type their email address in
                  the text box below and then click the &apos;request&apos;
                  button.
                  <br />
                  <br />
                  The mentor will then receive a link via email which will take
                  them to Mentor Match&apos;s Mentor Form.
                  <br />
                  <br />
                  <Form onFinish={this.requestMentor}>
                    <Form.Item
                      label="Mentor's Email Address:"
                      id="inviteMentorEmail"
                      name="emailInput"
                      // must have an input:
                      rules={[
                        {
                          required: true,
                          message: "Please enter the mentor's email",
                        },
                      ]}
                    >
                      <Input
                        type="email"
                        onInput={this.handleEmailChange}
                        id="inviteMentorEmail"
                        placeholder="Email Address"
                      />
                    </Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="formSubmitButton"
                      size="large"
                    >
                      Request Mentor
                    </Button>
                  </Form>
                </center>
              </font>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
// exports:
export default ManageMentors;
