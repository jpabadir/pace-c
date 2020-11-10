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
      // CSS class names follow kebab-case naming conventions
      <div className="mentorship-form">
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
              placeholder="select available time"
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
              className="time-zone-picker"
              // time zones:
              absolute={false}
              defaultValue="America/Los_Angeles"
              placeholder="Select timezone..."
              onChange={this.handleChange}
            />
          </Form.Item>
          <p> Please enter your availability:</p>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <p>{/* used to space buttons */}</p>
          <Button className="back-button" type="primary" htmlType="button">
            Back
          </Button>
          <Button className="next-button" type="primary" htmlType="button">
            Next
          </Button>
        </Form>
      </div>
    );
  }
}
// exports:
export default MentorshipForm;
