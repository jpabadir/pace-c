import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { resetPassword } from '../helper-methods';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.localResetPassword = this.localResetPassword.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  localResetPassword() {
    // TODO: implement some validation here
    resetPassword(this.state.email);
    window.alert('We sent you an email with a link to reset your password.');
  }

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
            // must have an input:
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
// exports:
export default ForgotPassword;
