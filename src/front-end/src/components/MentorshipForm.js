import React, { Component } from 'react';
import { Form, Button, Input, DatePicker, Tooltip, Select } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

const { RangePicker } = DatePicker;

const { Option } = Select;

const calendarStyle = {
  border: 'solid 1px #777',
};

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
            style={calendarStyle}
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
            // time zones:
            absolute={false}
            defaultValue="America/Los_Angeles"
            placeholder="Select timezone..."
            onChange={this.handleChange}
          />
        </Form.Item>
        <p> Please enter your reoccuring availability:</p>
        <iframe
          title="avail"
          src="https://calendar.google.com/calendar/embed?height=300&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FVancouver&amp;src=a2F0cmluYS5qb2xpLm1hcnRlbEBnbWFpbC5jb20&amp;src=ZGZ1a24wN2M4M21zaGRqNGg5NzhjZ2l0aWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Z29vZ2xlLmNvbV9jZ2wwNTdjNDFhYmRwMXQ5aGFlaWJmaTg2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%23D81B60&amp;color=%2333B679&amp;color=%234285F4&amp;color=%230B8043&amp;showTitle=0&amp;showPrint=0"
          style={{ border: 'solid 1px #777' }}
          width="400"
          height="300"
          frameBorder="0"
          scrolling="no"
        />
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <p>{/* used to space buttons */}</p>
        <Button type="primary" htmlType="button">
          Back
        </Button>
        <Button type="primary" htmlType="button">
          Next
        </Button>
      </Form>
    );
  }
}
// exports:
export default MentorshipForm;
