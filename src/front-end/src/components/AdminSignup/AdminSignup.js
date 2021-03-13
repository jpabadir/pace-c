import React, { Component } from 'react';
import { Form, Button, Input, notification } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import {
  setInDB,
  createUserInFirebase,
  marshallAdminInfo,
} from '../../helper-methods';
import EmailVerify from '../EmailVerify';

class AdminSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
  }

  /* Once the form has been submitted, only create a user in the Fireabse
  database if the email provided isn't already in the database. If the email
  has already been authenticated in the database, display a warning message.
  */
  onFinish(values) {
    createUserInFirebase(values.emailInput, values.password).then(
      (createUserAttempt) => {
        if (createUserAttempt.code === 'auth/email-already-in-use') {
          notification.open({
            message: 'Warning',
            description:
              'The email address that you entered is already associated with an email address in our system. Please login to access your account.',
            icon: <WarningOutlined style={{ color: 'orangered' }} />,
          });
        } else {
          setInDB('users', createUserAttempt.uid, marshallAdminInfo(values));
          this.setState({ isSubmitted: true });
        }
      },
    );
  }

  onFinishFailed(values) {
    console.log('Failed submit:', values);
  }

  render() {
    if (this.state.isSubmitted) {
      return <EmailVerify />;
    }
    if (!this.state.isSubmitted) {
      return (
        <div className="AdminSignup">
          <Form
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            labelAlign="left"
          >
            <h1>Register your Organization on Mentor Match</h1>

            <Form.Item
              label="Organization"
              name="organizationInput"
              tooltip="The name of the organization that you're associated with"
              rules={[
                {
                  required: true,
                  message: 'Please enter name of your organization',
                },
              ]}
            >
              <Input placeholder="Please enter your Organization" />
            </Form.Item>
            <Form.Item
              label="Name"
              id="nameInput"
              name="nameInput"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                onInput={this.handleNameChange}
                id="nameid"
                placeholder="First name Last name"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              id="emailInput"
              type="email"
              name="emailInput"
              rules={[
                {
                  required: true,
                  message: 'Please enter your email in a proper format',
                },
              ]}
            >
              <Input
                onInput={this.handleEmailChange}
                id="emailid"
                placeholder="name@example.com"
                type="email"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              tooltip="Password should be at least 8 characters."
              rules={[
                {
                  required: true,
                  message: 'Please enter your password for your new account',
                },
              ]}
            >
              <Input type="password" placeholder="Password" minLength="8" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('The password fields do not match'),
                    );
                  },
                }),
              ]}
            >
              <Input
                type="password"
                placeholder="Confirm your password"
                minLength="8"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="formSubmitButton"
              size="large"
            >
              Submit
            </Button>
          </Form>
        </div>
      );
    }
    return null;
  }
}

export default AdminSignup;
