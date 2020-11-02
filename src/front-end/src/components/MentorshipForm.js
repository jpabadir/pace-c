import React, { Component } from "react";
import { inputField } from "./Inputs";
import { Form, Button, Input, DatePicker, Tooltip, Select, TimePicker } from "antd";
import { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';



const { RangePicker } = DatePicker;
var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

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
                        placeholder="Placeholder for test"
                        prefix={
                            <Tooltip title="This field will likely be deleted. I just wanted to test out this feature.">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        } />
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
                    rules={[{ required: true, message: "This field is required" }]}
                >
                    <RangePicker
                        picker="month"
                    />
                </Form.Item>
                <Form.Item
                    label="Please Select Your Time-zone"
                    name="timeZone"
                    rules={[{ required: true, message: "This field is required" }]}
                >
                    <TimezonePicker
                        absolute={false}
                        defaultValue="America/Los_Angeles"
                        placeholder="Select timezone..."
                        onChange={this.handleChange}
                    />
                </Form.Item>
                <p> Please enter your reoccuring availability</p>
                <Form.Item
                    label="Monday"
                    name="availabilityMonday"
                >
                    <Select
                        mode="multiple" //so that multiple options can be selected 
                        style={{ width: '100%' }}
                        placeholder="select available time"
                        onChange={handleChange}
                        optionLabelProp="label"
                    >
                        <Option value="9-10AM" label="9-10AM">
                        </Option>
                        <Option value="10-11AM" label="10-11AM">
                        </Option>
                        <Option value="11AM-12PM" label="11AM-12AM">
                        </Option>
                        <Option value="12-1PM" label="12-1AM">
                        </Option>
                        <Option value="1-2PM" label="9-10AM">
                        </Option>
                    </Select>
                   
                </Form.Item>
                <Form.Item
                    label="Tuesday"
                    name="availabilityTuesday"
                >
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="select available time"
                        onChange={handleChange}
                        optionLabelProp="label"
                    >
                        <Option value="9-10AM" label="9-10AM">
                        </Option>
                        <Option value="10-11AM" label="10-11AM">
                        </Option>
                        <Option value="11AM-12PM" label="11AM-12AM">
                        </Option>
                        <Option value="12-1PM" label="12-1AM">
                        </Option>
                        <Option value="1-2PM" label="9-10AM">
                        </Option>
                    </Select>
                   
                </Form.Item>
                <Button type="primary" htmlType="submit">
                        Submit
        </Button>
            </Form>
        );
    }
}

export default MentorshipForm;