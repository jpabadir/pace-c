import React, { Component } from 'react';
import { Form, Button, Input, Tooltip } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { InfoCircleOutlined } from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import MentorCompletion from './MentorCompletion';
import {
  setInDB,
  createUserInFirebase,
  marshallMentorInfo,
  pushToDB,
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
    const arr = [best, second, third];
    const description = document.getElementById('description').value;
    // pushes
    pushToDB(
      'users',
      marshallMentorInfo({
        arr,
        description,
      }),
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
              label="Top 3 skills"
              name="skill list"
              rules={[
                { required: true, message: 'Please choose your best skill' },
              ]}
              tooltip="What skill can you help people learn?"
            >
              <select id="best">
                <option value="" disable selected>
                  Select your option
                </option>
                <option>Time management</option>
                <option>LearderShip</option>
                <option>Interpersonal Communication</option>
                <option>Problem solving</option>
              </select>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select id="second">
                <option value="" disable selected>
                  Select your option
                </option>
                <option>Time management</option>
                <option>LearderShip</option>
                <option>Interpersonal Communication</option>
                <option>Problem solving</option>
              </select>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select id="third">
                <option value="" disable selected>
                  Select your option
                </option>
                <option>Time management</option>
                <option>LearderShip</option>
                <option>Interpersonal Communication</option>
                <option>Problem solving</option>
              </select>
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: 'Please introduce yourself to us.',
                },
              ]}
            >
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
