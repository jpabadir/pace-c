import React, { Component } from 'react';
import { Form, Button, Input, DatePicker, Tooltip, Select } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

const { RangePicker } = DatePicker;

const { Option } = Select;

class MentorshipForm extends Component {
  render() {
    return (
      <Form>
        <Form.Item
          // TEST ITEM (will be deleted):
          label="Test"
          name="testInput"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input
            placeholder="Placeholder for test"
            prefix={
              // tooltip test:
              <Tooltip title="This field will likely be deleted. I just wanted to test out this feature.">
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
        {/* the email validation for below is more complicated than expected */}
        <Form.Item
          label="Email"
          name="emailInput"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input placeholder="please enter your email" />
        </Form.Item>
        <Form.Item
          label="Are you a mentor or mentee?"
          name="mentorMentee"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Select
            // only one option can be selected:
            mode="single"
            style={{ width: '100%' }}
            placeholder="select mentor or mentee"
            optionLabelProp="label"
          >
            <Option value="Mentor" label="Mentor" />
            <Option value="Mentee" label="Mentee" />
          </Select>
        </Form.Item>
        <Form.Item
          label={
            <span>
              Timeframe Seeking Mentorship&nbsp;
              <Tooltip title="Please pick an estimated duration for how long you would like to use the platform">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          name="selectedStartDate"
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <RangePicker picker="month" />
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
        <p> Please enter your reoccuring availability:</p>
        <Form.Item label="Monday" name="availabilityMonday">
          <Select
            // so that multiple options can be selected:
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="select available time"
            optionLabelProp="label"
          >
            <Option value="9-10AM" label="9-10AM" />
            <Option value="10-11AM" label="10-11AM" />
            <Option value="11AM-12PM" label="11AM-12AM" />
            <Option value="12-1PM" label="12-1PM" />
            <Option value="1-2PM" label="1-2PM" />
          </Select>
        </Form.Item>
        <Form.Item label="Tuesday" name="availabilityTuesday">
          <Select
            // so that multiple options can be selected:
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="select available time"
            optionLabelProp="label"
          >
            <Option value="9-10AM" label="9-10AM" />
            <Option value="10-11AM" label="10-11AM" />
            <Option value="11AM-12PM" label="11AM-12PM" />
            <Option value="12-1PM" label="12-1PM" />
            <Option value="1-2PM" label="1-2PM" />
          </Select>
        </Form.Item>
        <p> Please enter your 1st ranked skill:</p>
        <Form.Item label="1st Ranked Skill" name="1stSkill">
          <Select
            // so that single option can be selected:
            mode="single"
            style={{ width: '100%' }}
            placeholder="select your 1st ranked skill"
            optionLabelProp="label"
            // options for skills below, more skills can be added:
          >
            <Option value="Communication" label="Communication" />
            <Option value="Teamwork" label="Teamwork" />
            <Option value="Problem Solving" label="Problem Solving" />
            <Option value="Planning" label="Planning" />
            <Option value="Organising" label="Organising" />
            <Option value="Technology" label="Technology" />
            <Option value="Self-management" label="Self-management" />
            <Option value="Learning" label="Learning" />
          </Select>
        </Form.Item>
        <p> Please enter your 2nd ranked skill:</p>
        <Form.Item label="2nd Ranked Skill" name="2ndSkill">
          <Select
            // so that single options can be selected:
            mode="single"
            style={{ width: '100%' }}
            placeholder="select your 2nd ranked skill"
            optionLabelProp="label"
            // options for skills below, more skills can be added:
          >
            <Option value="Communication" label="Communication" />
            <Option value="Teamwork" label="Teamwork" />
            <Option value="Problem Solving" label="Problem Solving" />
            <Option value="Planning" label="Planning" />
            <Option value="Organising" label="Organising" />
            <Option value="Technology" label="Technology" />
            <Option value="Self-management" label="Self-management" />
            <Option value="Learning" label="Learning" />
          </Select>
        </Form.Item>
        <p> Please enter your 3rd ranked skill:</p>
        <Form.Item label="3rd Ranked Skill" name="3rdSkill">
          <Select
            // so that single options can be selected:
            mode="single"
            style={{ width: '100%' }}
            placeholder="select your 3rd ranked skill"
            optionLabelProp="label"
            // options for skills below, more skills can be added:
          >
            <Option value="Communication" label="Communication" />
            <Option value="Teamwork" label="Teamwork" />
            <Option value="Problem Solving" label="Problem Solving" />
            <Option value="Planning" label="Planning" />
            <Option value="Organising" label="Organising" />
            <Option value="Technology" label="Technology" />
            <Option value="Self-management" label="Self-management" />
            <Option value="Learning" label="Learning" />
          </Select>
        </Form.Item>
        <p>{/* used to space buttons */}</p>
        {/* this button should redirect the user to the createaccount page */}
        {/* this requires react routing */}
        <Button type="primary" htmlType="button">
          Next
        </Button>
      </Form>
    );
  }
}
// exports:
export default MentorshipForm;
