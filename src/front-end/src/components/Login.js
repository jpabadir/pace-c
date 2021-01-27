import React, { Component } from 'react';
import { Form, Button, Input, Card } from 'antd';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
// eslint-disable-next-line import/no-extraneous-dependencies
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

  onChange(values) {
    this.setState({ [values.target.name]: values.target.value });
  }

  onLogin() {
    const userEmail = document.getElementById('useremail').value;
    const userPassword = document.getElementById('userpassword').value;

    // below is used to get current user
    const user = fire.auth().currentUser;

    if (userEmail && userPassword) {
      fire
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              break;
            case 'auth/wrong-password':
              window.alert('Your password is incorrect.');
              break;
            case 'auth/user-not-found':
              window.alert('Username does not exist.');
              break;
            default:
              break;
          }
        });
      // below is to verify user:
      if (user.emailVerified) {
        // email is verified.
      } else {
        window.alert(
          'Email is not verified. Please verify your email before you log in.',
        );
      }
    }
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
        <Card
          id="login-card"
          bordered
          hoverable
          bodyStyle={{
            backgroundColor: '#F0F2F5',
            border: '#001529',
          }}
        >
          <h1>Login to access the Mentorship Portal</h1>
          <Form
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            labelAlign="left"
          >
            <Form.Item
              type="email"
              label="Email"
              name="email"
              // must have an input:
              rules={[
                { required: true, message: 'Please enter your email address' },
              ]}
            >
              <Input
                type="email"
                placeholder=" please enter your email"
                id="useremail"
                onInput={this.onChange}
                value={this.state.email}
                onChange={this.handleEmailChange}
                prefix={<MailTwoTone twoToneColor="#adc6ff" />}
              />
            </Form.Item>
            <Form.Item
              type="password"
              label="Password"
              name="password"
              // must have an input:
              rules={[
                { required: true, message: 'Please enter your password' },
              ]}
            >
              <Input
                type="password"
                placeholder=" please enter your password"
                id="userpassword"
                onInput={this.onChange}
                prefix={<LockTwoTone twoToneColor="#adc6ff" />}
              />
            </Form.Item>
            <p>{/* used to space buttons */}</p>
            {/* button below should send the information from the page: */}
            {/* login to the database. To verify the account password/email */}
            <Button type="primary" htmlType="submit" onClick={this.onLogin}>
              Login
            </Button>
            {/* link below should allow the user to reset password: */}
            <p>
              <a
                className="loginlink"
                href="http://localhost:3000/ForgotPassword
              "
              >
                Forgot your password?&nbsp;
              </a>
            </p>
            {/* below is used as a space between the two links */}
            &nbsp;
            <p>Don&apos;t have a mentor account yet?</p>
            {/* button below should link to the createaccount page: */}
            <Button type="primary" htmlType="button" href="/signup">
              Create Account
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
// exports:
export default Login;
