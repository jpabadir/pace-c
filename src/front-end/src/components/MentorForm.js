import React, { Component } from 'react';
import { Form, Button, Input, Tooltip, Select } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { InfoCircleOutlined } from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import MentorCompletion from './MentorCompletion';
import {
  setInDB,
  createUserInFirebase,
  marshallMentorInfo,
  getCamelCase,
} from '../helper-methods';

const { Option } = Select;
const teachableSkills = [
  'Time management',
  'Leadership',
  'Interpersonal Communication',
  'Problem solving',
];

/* TODO: reduce redundancy by putting skills array in another file 
and importing it both here and in mentee form */
class MentorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      selectedItems: [],
    };
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
  }

  onFinish(values) {
    createUserInFirebase(values.emailInput, values.password).then(
      (createUserAttempt) => {
        if (createUserAttempt.code === 'auth/email-already-in-use') {
          window.alert('mail already exists.');
        } else {
          setInDB('users', createUserAttempt.uid, marshallMentorInfo(values));
          this.setState({ isSubmitted: true });
        }
      },
    );
  }

  onFinishFailed(values) {
    console.log('Failed submit:', values);
  }

  handleSkillsChange(event) {
    this.setState({ selectedItems: event });
  }

  render() {
    const { selectedItems } = this.state;
    if (this.state.isSubmitted) {
      return <MentorCompletion />;
    }
    if (!this.state.isSubmitted) {
      return (
        <div className="MentorForm">
          <Form
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autocomplete="off"
          >
            <h1>Sign up as a mentor</h1>
            <Form.Item
              label="Organization"
              name="organization"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input
                placeholder="Please enter your Organization"
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
              <Input type="email" placeholder="name@example.com" />
            </Form.Item>
            <Form.Item
              label="Time-zone"
              name="timeZone"
              // must have an input:
              rules={[
                {
                  required: true,
                  message: 'Please select your Time-zone',
                },
              ]}
            >
              <TimezonePicker
                absolute={false}
                defaultValue=""
                placeholder="Select timezone..."
                onChange={this.handleChange}
                className="time-zone-picker"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter your password for your new account',
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Password"
                minlength="8"
                prefix={
                  <Tooltip title="Password should be at least 8 characters.">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
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
                minlength="8"
              />
            </Form.Item>
            <Form.Item
              name="teachables"
              label="Top 3 skills"
              tooltip="What skills can you help people learn?"
              rules={[
                {
                  required: true,
                  message:
                    'Please tell us the skills that you can provide mentorship in',
                },
              ]}
            >
              <Select
                mode="multiple"
                value={selectedItems}
                onChange={this.handleSkillsChange}
              >
                {teachableSkills.map((item) => (
                  <Option
                    key={item}
                    value={getCamelCase(item)}
                    disabled={
                      selectedItems.length >= 3 &&
                      !selectedItems.includes(getCamelCase(item))
                    }
                  >
                    {item}
                  </Option>
                ))}
              </Select>
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
