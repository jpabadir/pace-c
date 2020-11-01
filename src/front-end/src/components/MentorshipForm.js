import React, { Component } from "react";
import { inputField } from "./Inputs";
import { Form, Button, Input, DatePicker, Tooltip } from "antd";
import { InfoCircleOutlined} from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

const { RangePicker } = DatePicker;

class MentorshipForm extends Component {
    render() {
        return (
            <Form>
                <Form.Item
                    label="Test"
                    name="testInput"
                    rules={[{ required: true, message: "Please input something" }]}
                >
                   <Input 
                    placeholder = "Placeholder for test"
                    prefix={
                        <Tooltip title="This field will likely be deleted. I just wanted to test out this feature.">
                          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                      }/>
                </Form.Item>
                <Form.Item 
                    label = "Timeframe Seeking Mentorship"
                    name = "selectedStartDate"
                    rules={[{ required: true, message: "Please pick an estimated duration for how long you would like to use the platform" }]}
                    >
                       <RangePicker 
                       picker = "month" 
                       />
                </Form.Item>
                <Form.Item
                label = "Please Select Your Time-zone"
                name = "timeZone"
                rules={[{ required: true, message: "This field is required" }]}
                >
                    <TimezonePicker
                    absolute = {false}
                    defaultValue = "America/Los_Angeles"
                    placeholder = "Select timezone..."
                    onChange = {this.handleChange}
                    />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form>
        );
    }
}

export default MentorshipForm;