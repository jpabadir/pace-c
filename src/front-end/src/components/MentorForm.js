import React, { Component } from 'react';
import { Form, Button, Input, Tooltip } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { InfoCircleOutlined } from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import MentorCompletion from './MentorCompletion';
import firebase from '../firebase-init';
import {
  setInDB,
  createUserInFirebase,
  marshallMentorInfo,
} from '../helper-methods';

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
    // put selected values in an array
    const best = document.getElementById('best').value;
    const second = document.getElementById('second').value;
    const third = document.getElementById('third').value;
    // values in the form
    const organization = document.getElementById('organization').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const timezone = document.getElementById('timezone').value;
    const arr = [best, second, third];
    const description = document.getElementById('description').value;
    // pushes
    this.saveMessage(
      organization,
      email,
      name,
      timezone,
      'Mentor',
      arr,
      description,
    );
    // set submit to true
    this.setState({ isSubmitted: true });

    createUserInFirebase(values.emailInput, values.password).then(
      (createdUser) => {
        setInDB('users', createdUser.uid, marshallMentorInfo(values));
      },
    );
  }

  onFinishFailed(values) {
    console.log('Failed submit:', values);
  }

  saveMessage(
    organization,
    email,
    name,
    timezone,
    userType,
    skills,
    description,
  ) {
    const messageRef = firebase.database().ref('users');
    const newMessageRef = messageRef.push();
    newMessageRef.set({
      organization,
      email,
      name,
      timezone,
      userType,
      Skills: [skills[0], skills[1], skills[2]],
      description,
    });
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
              label="Organization"
              name="organization"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input
                placeholder="Please enter your Organization"
                id="organization"
                prefix={
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
              <Input id="name" placeholder="please enter your name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="emailInput"
              type="email"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input id="email" placeholder="please enter your email" />
            </Form.Item>
            <Form.Item
              label="Please Select Your Time-zone"
              name="timeZone"
              // must have an input:
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <TimezonePicker
                // time zones:
                id="timezone"
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
                  <Tooltip title="Password should be at least 8 characters.">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item
              label="Best skill"
              name="Best"
              rules={[
                { required: true, message: 'Please choose your best skill' },
              ]}
            >
              <select id="best">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Form.Item>
            <Form.Item
              label="Second best skill"
              name="Second"
              rules={[
                { required: true, message: 'Please choose your best skill' },
              ]}
            >
              <select id="second">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Form.Item>
            <Form.Item
              label="Third best skill"
              name="Third"
              rules={[
                { required: true, message: 'Please choose your best skill' },
              ]}
            >
              <select id="third">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea
                id="description"
                placeholder="Tell us a bit about yourself"
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
export default MentorForm;
