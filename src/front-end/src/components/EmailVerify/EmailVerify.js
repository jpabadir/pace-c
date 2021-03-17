/* This component is only displayed if the user hasn't verified their account.
This is to ensure that only valid email addresses are used for account 
creation. If a fraudulent email was used, the user won't be able to access
the functionality that a verified user can.
*/
import React, { Component } from 'react';
import { Button } from 'antd';
import fire from '../../firebase-init';
import { resendVerificationEmail } from '../../helper-methods';

/**
 Obtains information about the logged in user and passes it 
to the helper method so that the verification email can be resent
 */
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
              Please verify your email address in order to access your account.
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
export default EmailVerify;
