import React, { Component } from 'react';
import { Button } from 'antd';
import fire from '../firebase-init';
import { resendVerificationEmail } from '../helper-methods';

function resendVerifyEmail() {
  const myUser = fire.auth().currentUser;
  resendVerificationEmail(myUser);
}

// eslint-disable-next-line react/prefer-stateless-function
class EmailVerify extends Component {
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
              <ul style={{ listStyleType: 'none' }}>
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
            onClick={resendVerifyEmail}
            type="primary"
            htmlType="submit"
            className="formSubmitButton"
            size="large"
          >
            Resend Verification Email
          </Button>
        </center>
      </div>
    );
  }
}
// exports:
export default EmailVerify;
