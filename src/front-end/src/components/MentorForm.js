import React, { Component } from 'react';
import { Form, Button, Input, Select } from 'antd';
import MentorCompletion from './MentorCompletion/MentorCompletion';
import timeZones from '../timeZones.json';
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
            autoComplete="off"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            labelAlign="left"
          >
            <h1>Sign up as a Mentor</h1>
            <Form.Item
              label="Organization"
              name="organization"
              tooltip="The organization you're planning to be a Mentor with"
              // must have an input:
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input placeholder="Please enter your Organization" />
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
              <Select placeholder="Select timezone.." showSearch>
                {timeZones.map((zone) => {
                  return (
                    <Option key={zone.id} value={getCamelCase(zone.id)}>
                      {[zone.id, ' ', zone.area]}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              tooltip="Password should be at least 8 characters."
              rules={[
                {
                  required: true,
                  message: 'Please enter your password for your new account',
                },
              ]}
            >
              <Input type="password" placeholder="Password" minLength="8" />
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
                minLength="8"
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
            <Button
              type="primary"
              htmlType="submit"
              className="formSubmitButton"
              size="large"
            >
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
