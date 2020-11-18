import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import { marshallMenteeInfo, pushToDB } from '../helper-methods';
import MenteeCompletion from './MenteeCompletion';

class MenteeForm extends Component {
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

    pushToDB('users', marshallMenteeInfo(values));
  }

  onFinishFailed(values) {
    console.log('Failed submit:', values);
  }

  render() {
    if (this.state.isSubmitted) {
      return <MenteeCompletion />;
    }
    if (!this.state.isSubmitted) {
      return (
        <div className="MenteeForm">
          <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <h1>Sign up as a mentee</h1>
            <Form.Item
              label="Name"
              name="nameInput"
              // must have an input:
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="First name Last name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="emailInput"
              // must have an input:
              rules={[
                {
                  required: true,
                  message: 'Please enter your email in a proper format',
                },
              ]}
            >
              <Input placeholder="name@example.com" />
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
export default MenteeForm;
