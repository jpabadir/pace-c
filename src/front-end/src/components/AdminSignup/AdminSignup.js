import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';

class AdminSignup extends Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  onFinish() {}

  onFinishFailed() {}

  handleEmailChange() {}

  handleNameChange() {}

  sendEmail() {}

  render() {
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
            name="organization"
            tooltip="The organization you're planning to be a Mentor with"
            rules={[{ required: true, message: 'Please input something' }]}
          >
            <Input placeholder="Please enter your Organization" />
          </Form.Item>
          <Form.Item
            label="Name"
            id="nameInput"
            name="nameInput"
            // must have an input:
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
            // must have an input:
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
}

export default AdminSignup;
