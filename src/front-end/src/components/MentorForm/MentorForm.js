import React, { Component } from 'react';
import { Form, Button, Input, Select, notification } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import MentorCompletion from '../MentorCompletion/MentorCompletion';
import timeZones from '../../timeZones.json';

import {
  setInDB,
  createUserInFirebase,
  marshallMentorInfo,
  getCamelCase,
} from '../../helper-methods';

const { Option } = Select;

/* Hardcoded array of skills that Mentors can select from the multiselect 
dropdown
*/
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
        // If the user exists in the database, display a warning
        if (createUserAttempt.code === 'auth/email-already-in-use') {
          notification.open({
            message: 'Warning',
            description:
              'The email address that you entered is already associated with an email address in our system. Please login to access your account.',
            icon: <WarningOutlined style={{ color: 'orangered' }} />,
          });
        } else {
          // Get organization from url bar
          const search = this.props.location.search;
          const organization = decodeURI(
            search.substring(search.indexOf('=') + 1),
          );
          // Add mentor to DB
          setInDB(
            'users',
            createUserAttempt.uid,
            marshallMentorInfo(values, organization),
          );

          // Remove mentor email address from pending mentors in organization
          fetch(
            `http://localhost:8020/remove-email?organization=${organization.toLowerCase()}&emailAddress=${
              values.emailInput
            }&uid=${createUserAttempt.uid}`,
          );

          // Add suggested mentees to mentor
          fetch(
            `http://localhost:8020/match-with-mentees?uid=${createUserAttempt.uid}`,
          );
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
            // Adjust the placement of labels
            labelCol={{ span: 3 }}
            // Adjust the placement of inputs
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            labelAlign="left"
          >
            <h1>Sign up as a Mentor</h1>
            <Form.Item
              label="Name"
              name="nameInput"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                placeholder="First name Last name"
                disabled={this.props.isShowCaseMode}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="emailInput"
              rules={[
                {
                  required: true,
                  message: 'Please enter your email in a proper format',
                },
              ]}
            >
              <Input
                type="email"
                placeholder="name@example.com"
                disabled={this.props.isShowCaseMode}
              />
            </Form.Item>
            <Form.Item
              label="Time-zone"
              name="timeZone"
              rules={[
                {
                  required: true,
                  message: 'Please select your Time-zone',
                },
              ]}
            >
              <Select
                placeholder="Select timezone.."
                showSearch
                disabled={this.props.isShowCaseMode}
              >
                {/* The time-zone dropdown options are populated from the timeZones.json file,
                which was imported on line 5
                 */}
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
                disabled={this.props.isShowCaseMode}
                type="url"
                /* Restricts the user to only providing a link in the specific 
                format (i.e a Google Calendar)
                */
                pattern="https://calendar.google.com/calendar/.*"
                placeholder="https://calendar.google.com/calendar/abcdefg"
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
              <Input
                disabled={this.props.isShowCaseMode}
                type="password"
                placeholder="Password"
                minLength="8"
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
                    /* Checks whether the input entered in 'confirm password'
                    is the same as what's in the 'password' field
                    */
                    if (!value || getFieldValue('password') === value) {
                      // Remove the red error text
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
                disabled={this.props.isShowCaseMode}
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
                disabled={this.props.isShowCaseMode}
                mode="multiple"
                value={selectedItems}
                onChange={this.handleSkillsChange}
              >
                {/* Populates the multiselect with elements in the teachableSkills 
                array */}
                {teachableSkills.map((item) => (
                  <Option
                    key={item}
                    value={getCamelCase(item)}
                    // Limits the user to select 3 skills at most
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
              <Input.TextArea
                placeholder="Tell us a bit about yourself. Please be advised that this description will be shared with Mentees that you accept to mentor."
                disabled={this.props.isShowCaseMode}
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="formSubmitButton"
              size="large"
              disabled={this.props.isShowCaseMode}
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
export default MentorForm;
