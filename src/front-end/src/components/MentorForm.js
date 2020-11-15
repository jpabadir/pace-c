import React, { Component } from 'react';
import { Form, Button, Input, Tooltip } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { InfoCircleOutlined } from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import firebase from '../firebase-init';
import MentorCompletion from './MentorCompletion';

class MentorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
  }

  onFinish(values) {
    this.setState({ isSubmitted: true });

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.emailInput, values.password)
      .catch((error) => {
        console.log(error);
      });
  }

  onFinishFailed(values) {
    console.log('Failed submit:', values);
  }

  render() {
    if (this.state.isSubmitted) {
      return <MentorCompletion />;
    }
    if (!this.state.isSubmitted) {
      return (
        <div className="MentorForm">
          <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <h1>Sign up as a mentor</h1>
            <Form.Item
              // TEST ITEM (will be deleted):
              label="Organization"
              name="Organization"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input
                placeholder="Please enter your Organization"
                prefix={
                  // tooltip test:
                  <Tooltip title="Organization you're planning to be a Mentor with">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item
              label="Name"
              name="nameInput"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input placeholder="please enter your name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="emailInput"
              type="email"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input placeholder="please enter your email" />
            </Form.Item>
            <Form.Item
              label="Please Select Your Time-zone"
              name="timeZone"
              // must have an input:
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <TimezonePicker
                // time zones:
                absolute={false}
                defaultValue="America/Los_Angeles"
                placeholder="Select timezone..."
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Please enter your password"
              name="password"
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input
                type="password"
                placeholder="Please enter your password"
                prefix={
                  // tooltip test:
                  <Tooltip title="Password should be at least 8 characters.">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Description">
              <Input.TextArea placeholder="Tell us a bit about yourself" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      );
    }
    return null;
  }
}
// exports:
export default MentorForm;
