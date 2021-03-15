import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { resetPassword } from '../../helper-methods';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.localResetPassword = this.localResetPassword.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  /** Calls the 'resetPasword' method in helper-methods.js once
   the form with the input field has been sucessfully submited */
  localResetPassword() {
    resetPassword(this.state.email);
  }

  /** Update the application's state with the string that the user provided 
  so that the localResetPassword() method can perform validation on the input */
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div className="ForgotPassword">
        <Form>
          <h1>Reset your password</h1>
          <Form.Item
            label="Email"
            name="emailInput"
            rules={[
              {
                required: true,
                message: 'Please enter your email to reset your password',
              },
            ]}
          >
            <Input
              placeholder="name@example.com"
              onChange={this.handleEmailChange}
            />
          </Form.Item>
          <Button
            onClick={this.localResetPassword}
            type="primary"
            htmlType="submit"
          >
            Confirm
          </Button>
        </Form>
      </div>
    );
  }
}
export default ForgotPassword;
