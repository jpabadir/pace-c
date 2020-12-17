import React, { Component } from 'react';
import { Form, Button, Input, Select } from 'antd';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import emailjs from 'emailjs-com';
import MenteeCompletion from './MenteeCompletion';
import { marshallMenteeInfo, pushToDB, getCamelCase } from '../helper-methods';

const { Option } = Select;

class MenteeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      name: '',
      learnableSkills: [
        'Time management',
        'Leadership',
        'Interpersonal Communication',
        'Problem solving',
      ],
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

    pushToDB('users', marshallMenteeInfo(values));
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
          <Form
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autocomplete="off"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            labelAlign="left"
          >
            <h1>Sign up as a mentee</h1>

            <Form.Item
              label="Name"
              id="nameInput"
              name="nameInput"
              // must have an input:
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                onInput={this.handleNameChange}
                id="nameid"
                placeholder="please enter your name"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              id="emailInput"
              type="email"
              name="emailInput"
              // must have an input:
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
                placeholder="name@example.com"
                type="email"
              />
            </Form.Item>
            <Form.Item
              label="Time-zone"
              name="timeZone"
              // must have an input:
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <TimezonePicker
                // time zones:
                absolute={false}
                defaultValue=""
                placeholder="Select timezone..."
                onChange={this.handleChange}
                className="time-zone-picker"
              />
            </Form.Item>
            <Form.Item
              label="Top 3 skills"
              tooltip="What skills are you looking to learn?"
            >
              <Form.Item
                name="skill1"
                rules={[
                  {
                    required: true,
                    message: 'What do you most want to learn?',
                  },
                ]}
              >
                <Select>
                  {this.state.learnableSkills.map((skill) => {
                    return <Option value={getCamelCase(skill)}>{skill}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name="skill2"
                rules={[
                  {
                    required: true,
                    message: "What's something else you want to learn?",
                  },
                ]}
              >
                <Select>
                  {this.state.learnableSkills.map((skill) => {
                    return <Option value={getCamelCase(skill)}>{skill}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name="skill3"
                rules={[
                  {
                    required: true,
                    message: 'what is the last skill you want to learn?',
                  },
                ]}
              >
                <Select>
                  {this.state.learnableSkills.map((skill) => {
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
export default MenteeForm;
