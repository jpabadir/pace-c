import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

class MenteeForm extends Component {
  render() {
    return (
      <div className="MenteeForm">
        <Form>
          <h1>Sign up as a mentee</h1>
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
}
// exports:
export default MenteeForm;
