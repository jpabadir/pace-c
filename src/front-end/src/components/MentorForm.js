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

/* TODO: reduce redundancy by putting skills array in another file 
and importing it both here and in mentee form */
class MentorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      teachableSkills: [
        'Time management',
        'Leadership',
        'Interpersonal Communication',
        'Problem solving',
      ],
    };
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
  }

  onFinish(values) {
    // Set submit to true
    this.setState({ isSubmitted: true });

    // Create user and store user's form info
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
                // time zones:
                absolute={false}
                defaultValue="America/Los_Angeles"
                placeholder="Select timezone..."
                onChange={this.handleChange}
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
              label="Top 3 skills"
              tooltip="What skills can you help people learn?"
            >
              <Form.Item
                name="skill1"
                rules={[
                  {
                    required: true,
                    message: 'Please choose your best skill',
                  },
                ]}
              >
                <Select>
                  {this.state.teachableSkills.map((skill) => {
                    return <Option value={getCamelCase(skill)}>{skill}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name="skill2"
                rules={[
                  {
                    required: true,
                    message: 'Please choose your second best skill',
                  },
                ]}
              >
                <Select>
                  {this.state.teachableSkills.map((skill) => {
                    return <Option value={getCamelCase(skill)}>{skill}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name="skill3"
                rules={[
                  {
                    required: true,
                    message: 'Please choose your third best skill',
                  },
                ]}
              >
                <Select>
                  {this.state.teachableSkills.map((skill) => {
                    return <Option value={getCamelCase(skill)}>{skill}</Option>;
                  })}
                </Select>
              </Form.Item>
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
