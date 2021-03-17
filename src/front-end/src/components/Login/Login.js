import React, { Component } from 'react';
import { Form, Button, Input, Card, notification } from 'antd';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import fire from '../../firebase-init';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.onLogin = this.onLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(values) {
    this.setState({ [values.target.name]: values.target.value });
  }

  // Called when the 'Login' button has been clicked
  onLogin() {
    const userEmail = document.getElementById('useremail').value;
    const userPassword = document.getElementById('userpassword').value;

    if (userEmail && userPassword) {
      fire
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then((userCredentials) => {
          /* Passes the userID of the logged in user to update the 
          back-end matching algorithm 
          */
          fetch(
            `http://localhost:8020/match-with-mentees?uid=${userCredentials.user.uid}`,
          ).then((res) => {
            if (res.status === 200) {
              notification.open({
                message: 'Your suggested mentees have been updated.',
              });
            }
          });
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              break;
            case 'auth/wrong-password':
              notification.warning({
                message: 'Your password is incorrect.',
              });
              break;
            case 'auth/user-not-found':
              notification.warning({
                message: 'Username does not exist.',
              });
              break;
            default:
              break;
          }
        });
    }
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
            // Adjust the placement of labels
            labelCol={{ span: 5 }}
            // Adjust the placement of inputs
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            labelAlign="left"
          >
            <Form.Item
              type="email"
              label="Email"
              name="email"
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
            {/* button below should send the information from the page: */}
            {/* login to the database. To verify the account password/email */}
            <Button type="primary" htmlType="submit" onClick={this.onLogin}>
              Login
            </Button>
            <p>
              <a
                className="loginlink"
                href="http://localhost:3000/forgot-password
              "
              >
                Forgot your password?&nbsp;
              </a>
            </p>
            {/* below is used as a space between the two links */}
            &nbsp;
            <p>Don&apos;t have an account yet?</p>
            {/* button redirects to the Admin account creation form */}
            <Button type="primary" htmlType="button" href="/signup">
              Create Account
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Login;
