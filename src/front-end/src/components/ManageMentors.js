import React, { Component } from 'react';
import { Button } from 'antd';

function requestMentor() {
  // insert code to resend verification email
  // or insert code to re-route to resend verification email page
  window.alert('Verification Email Sent!');
}

// eslint-disable-next-line react/prefer-stateless-function
class ManageMentors extends Component {
  render() {
    return (
      <div className="EmailVerify">
        <center>
          <h1>
            <font size="6">
              A verification email has been sent to your email address!
            </font>
          </h1>
        </center>
        <br />
        <center>
          <h2>
            <font size="5">
              Please verify your email address in order to access:
            </font>
            <font size="4">
              <ul>
                <li>
                  <i>Your Mentor Account</i>
                </li>
                <li>
                  <i>The Mentor Tutorial</i>
                </li>
                <li>
                  <i>Your Suggested Mentees</i>
                </li>
                <li>
                  <i>Your Accepted Mentees</i>
                </li>
              </ul>
            </font>
          </h2>
        </center>
        <br />
        <center>
          <font size="5">
            If you did not recieve a verification email or if the verification
            email has already expired, click the button below to resend a
            verification email.
          </font>
        </center>
        <br />
        <center>
          <Button
            onClick={requestMentor}
            type="primary"
            htmlType="submit"
            className="formSubmitButton"
            size="large"
          >
            Request Mentor
          </Button>
        </center>
      </div>
    );
  }
}
// exports:
export default ManageMentors;
