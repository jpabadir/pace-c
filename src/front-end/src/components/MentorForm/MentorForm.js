import React, { Component } from 'react';
import { Form, Button, Input, Select, notification } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import MentorCompletion from '../MentorCompletion';
import timeZones from '../../timeZones.json';

import {
  setInDB,
  createUserInFirebase,
  marshallMentorInfo,
  getCamelCase,
} from '../../helper-methods';

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
          notification.open({
            message: 'Warning',
            description:
              'The email address that you entered is already associated with an email address in our system. Please login to access your account.',
            icon: <WarningOutlined style={{ color: 'orangered' }} />,
          });
        } else {
          // Add mentor to DB
          setInDB('users', createUserAttempt.uid, marshallMentorInfo(values));

          // Remove mentor email address from pending mentors in organization
          fetch(
            `http://localhost:8020/remove-email?organization=${values.organization.toLowerCase()}&emailAddress=${
              values.emailInput
            }&uid=${createUserAttempt.uid}`,
          );

          // Add suggested mentees to mentor
          fetch(
            `http://localhost:8020/match-with-mentees?uid=${createUserAttempt.uid}`,
          ).then((res) => {
            if (res.status === 200) {
              window.alert('Your suggested mentees have been updated.');
            }
          });
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
              rules={[{ required: true, message: 'Please input something' }]}
            >
              <Input placeholder="Please enter your Organization" />
            </Form.Item>
            <Form.Item
              label="Name"
              name="nameInput"
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
              label="Calendar link"
              name="calendarLink"
              tooltip="Paste the link to your Google Calendar so Mentees can book timeslots when you're available to mentor them"
              rules={[
                {
                  required: true,
                  message: 'Please provide a valid link to your calendar.',
                },
              ]}
            >
              <Input
                type="url"
                pattern="https://calendar.google.com/calendar/.*"
                placeholder="The link of your available timeslots to provide mentorship"
              />
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
                  message: 'Please introduce yourself to us. ',
                },
              ]}
            >
              <Input.TextArea placeholder="Tell us a bit about yourself. Please be advised that this description will be shared with Mentees that you accept to mentor." />
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
