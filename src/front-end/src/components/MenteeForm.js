import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import emailjs from 'emailjs-com';
import MenteeCompletion from './MenteeCompletion';

class MenteeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      name: '',
    };
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  sendEmail() {
    const email = this.state.email;
    const name = this.state.name;
    const templateParams = {
      nameInput: name,
      emailInput: email,
    };
    emailjs.send(
      'gmail',
      'template_kfjkdm4',
      templateParams,
      'user_2x3ekfRvEqEttZg87VyrZ',
    );
    return false;
  }

  onFinish(values) {
    this.setState({ isSubmitted: true });

    this.sendEmail(values);
    /// pushToDB('users', marshallMenteeInfo(values));
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
              id="nameInput"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input
                onInput={this.handleNameChange}
                id="nameid"
                name="nameInput"
                placeholder="please enter your name"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              id="emailInput"
              type="email"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input
                onInput={this.handleEmailChange}
                id="emailid"
                name="emailInput"
                placeholder="please enter your email"
              />
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
              label="Top 3 skills you seek for"
              name="Sought skill1"
              rules={[
                { required: true, message: 'Please choose your best skill' },
              ]}
              tooltip="Choose the three you require most"
            >
              <select>
                <option value="" disable selected>
                  Select your option
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select>
                <option value="" disable selected>
                  Select your option
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select>
                <option value="" disable selected>
                  Select your option
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Description">
              <Input.TextArea placeholder="Tell us a bit about yourself" />
            </Form.Item>
            <Button type="submit" value="send" htmlType="submit">
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
