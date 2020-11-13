import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import firebase from '../firebase-init';
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

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.emailInput, values.password)
      .catch((error) => {
        console.log(error);
      });
  }

  onFinishFailed(values) {
    this.setState({ isSubmitted: false });
    console.log('Failed submit:', values);
  }

  render() {
    if (this.state.isSubmitted) {
      <MenteeCompletion />;
    } else if (!this.state.isSubmitted) {
      return (
        <div className="MenteeForm">
          <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
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
