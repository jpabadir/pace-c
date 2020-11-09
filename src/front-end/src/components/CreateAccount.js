import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class CreateAccount extends Component {
  render() {
    return (
      <Form>
        {/* email from the mentorship form page should be placed below */}
        <p>Your email is: *place email here*</p>
        <Form.Item
          // password fields:
          type="password"
          label="Password"
          name="password"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input placeholder="please enter your password" />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input placeholder="please enter your password again" />
        </Form.Item>
        <p>{/* used to space buttons */}</p>
        {/* this button should redirect the user to the mentorshipform page */}
        {/* this requires react routing */}
        <Button type="primary" htmlType="button">
          Back
        </Button>
        {/* button below should send the information from the pages: */}
        {/* createaccount, and mentorshipform to the database) */}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
// exports:
export default CreateAccount;
