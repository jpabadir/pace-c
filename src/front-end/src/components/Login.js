import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import fire from '../firebase-init';
import { resetPassword } from '../helper-methods';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.localResetPassword = this.localResetPassword.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onLogin() {
    const userEmail = document.getElementById('useremail').value;
    const userPassword = document.getElementById('userpassword').value;
    fire
      .auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .catch((error) => {
        const errorMessage = error.message;
        // eslint-disable-next-line
        window.alert(errorMessage.trim());
      });
  }

  onChange(values) {
    this.setState({ [values.target.name]: values.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  localResetPassword() {
    // TODO: implement some validation here
    resetPassword(this.state.email);
  }

  render() {
    return (
      <div className="Login">
        <Form>
          <h1>Login to access the mentorship portal</h1>
          <Form.Item
            type="email"
            label="Email"
            name="email"
            // must have an input:
            rules={[{ required: true, message: 'Please input something' }]}
          >
            <Input
              placeholder="please enter your email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            // must have an input:
            rules={[{ required: true, message: 'Please input something' }]}
          >
            <Input placeholder="please enter your password" type="password" />
          </Form.Item>
          <p>{/* used to space buttons */}</p>
          {/* button below should send the information from the page: */}
          {/* login to the database. To verify the account password/email */}
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          {/* link below should allow the user to reset password: */}
          <p>
            Forgot your password? Enter your email above and click&nbsp;
            <Button onClick={this.localResetPassword}>here!</Button>
          </p>
          {/* below is used as a space between the two links */}
          &nbsp;
          <p>Don&apos;t have an account yet?</p>
          {/* button below should link to the createaccount page:  */}
          <Button type="primary" htmlType="button">
            Create Account
          </Button>
        </Form>
      </div>
    );
  }
}
// exports:
export default Login;
