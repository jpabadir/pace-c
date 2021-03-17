import React, { Component } from 'react';
import { Form, Button, Input, Select, notification } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import MenteeCompletion from '../MenteeCompletion/MenteeCompletion';
import {
  marshallMenteeInfo,
  pushToDB,
  getCamelCase,
} from '../../helper-methods';
import firebase from '../../firebase-init';
import timeZones from '../../timeZones.json';

const { Option } = Select;

/* Hardcoded array of skills that the Mentee can select from the multiselect 
dropdown
*/
const learnableSkills = [
  'Time management',
  'Leadership',
  'Interpersonal Communication',
  'Problem solving',
];

class MenteeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      name: '',
      selectedItems: [],
    };
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSkillsChange(event) {
    this.setState({ selectedItems: event });
  }

  /* Once Mentees submit the Mentee form, an email is sent to the email address 
  that they provided. 
  */
  sendEmail() {
    const email = this.state.email;
    const name = this.state.name;
    const templateParams = { name, email };

    fetch('http://localhost:8020/welcome-mentee', {
      method: 'post',
      body: JSON.stringify(templateParams),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return false;
  }

  onFinish(values) {
    firebase
      .database()
      .ref()
      .child('users')
      .orderByChild('email')
      .equalTo(values.emailInput)
      .once('value')
      .then((snapshot) => {
        // If the email address already exists in our DB, display a warning.
        if (snapshot.exists()) {
          notification.open({
            message: 'Warning',
            description:
              'The email address that you entered is already associated with an email address in our system.',
            icon: <WarningOutlined style={{ color: 'orangered' }} />,
          });
          this.setState({ isSubmitted: false });
          /* If the user doesn't exist, create a new Mentee user in the DB
          with the information provided, and jump to the completion page.
          */
        } else {
          this.sendEmail(values);
          const search = this.props.location.search;
          pushToDB(
            'users',
            marshallMenteeInfo(
              values,
              search.substring(search.indexOf('=') + 1),
            ),
          );
          this.setState({ isSubmitted: true });
          /* Opens a new tab to direct the user from the website the MenteeForm 
          is embedded on, to MentorMatch.
          */
          setTimeout(() => window.open('http://localhost:3000/'), 3000);
        }
      });
  }

  onFinishFailed(values) {
    console.log('Failed submit:', values);
  }

  render() {
    const { selectedItems } = this.state;

    if (this.state.isSubmitted) {
      return <MenteeCompletion />;
    }
    if (!this.state.isSubmitted) {
      return (
        <div className="MenteeForm">
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
            <h1>Sign up as a Mentee</h1>
            <Form.Item
              label="Name"
              id="nameInput"
              name="nameInput"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                disabled={this.props.isShowCaseMode}
                onInput={this.handleNameChange}
                id="nameid"
                placeholder="First name Last name"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              id="emailInput"
              type="email"
              name="emailInput"
              rules={[
                {
                  required: true,
                  message: 'Please enter your email in a proper format',
                },
              ]}
            >
              <Input
                onInput={this.handleEmailChange}
                id="emailid"
                disabled={this.props.isShowCaseMode}
                placeholder="name@example.com"
                type="email"
              />
            </Form.Item>
            <Form.Item
              label="Time-zone"
              name="timeZone"
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <Select
                placeholder="Select timezone.."
                showSearch
                disabled={this.props.isShowCaseMode}
              >
                {/* The time-zone dropdown options are populated from the timeZones.json file,
                which was imported on line 12
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
              name="skillset"
              label="Top 3 skills"
              tooltip="What skills are you looking to learn?"
              rules={[
                {
                  required: true,
                  message:
                    'Please tell us the skills you are seeking mentorship in',
                },
              ]}
            >
              <Select
                mode="multiple"
                disabled={this.props.isShowCaseMode}
                value={selectedItems}
                onChange={this.handleSkillsChange}
              >
                {/* Populates the multiselect with elements in the learnableSkills 
                array */}
                {learnableSkills.map((item) => (
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
                  message: 'Please introduce yourself to us.',
                },
              ]}
            >
              <Input.TextArea
                placeholder="Tell us a bit about yourself. Please be advised that this description will be shared with Mentors that you match with."
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
export default MenteeForm;
