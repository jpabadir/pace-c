/* eslint-disable */
import React, { Component } from 'react';
import { Form, Button, Input, DatePicker, Tooltip, Select } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

const { RangePicker } = DatePicker;

const { Option } = Select;

class MentorForm extends Component {
  render() {
    return (
    <div className="MentorForm"> 
      <Form>
        <Form.Item
          // TEST ITEM (will be deleted):
          label="Organization"
          name="Organization"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input
            placeholder="Please type the organization that you're planning to be a Mentor with"
            prefix={
              // tooltip test:
              <Tooltip title="Organization">
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
          type = "email"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input placeholder="please enter your email" />
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <p>{/* used to space buttons */}</p>
        <Button className ="BackButton-InMentor"type="primary" htmlType="button">
          Back
        </Button>
        <Button className ="NextButton-InMentor"type="primary" htmlType="button">
          Next
        </Button>
      </Form>
      </div> 
    );
  }
}
// exports:
export default MentorForm;
