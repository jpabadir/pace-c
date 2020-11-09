import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  render() {
    return (
      <Form>
        <p>Welcome to MentorMatch!</p>
        <p>Login to access the mentorship portal</p>
        <Form.Item
          label="Email"
          name="email"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input placeholder="please enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input placeholder="please enter your password" />
        </Form.Item>
        <p>{/* used to space buttons */}</p>
        {/* button below should send the information from the page: */}
        {/* login to the database. To verify the account password/email */}
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        {/* link below should allow the user to reset password: */}
        <p>Forgot your password? Click here!</p>
        {/* below is used as a space between the two links */}
        &nbsp;
        <p>Don&apos;t have an account yet?</p>
        {/* button below should link to the createaccount page: */}
        <Button type="primary" htmlType="button">
          Create Account
        </Button>
      </Form>
    );
  }
}
// exports:
export default Login;
