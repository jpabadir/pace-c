import React, { Component } from "react";
import { inputField } from "./Inputs";
import { Form, Button, Input, DatePicker, Tooltip } from "antd";
import { InfoCircleOutlined} from '@ant-design/icons';


const { RangePicker } = DatePicker;


class MentorshipForm extends Component {
    render() {
        return (
            <Form>
                <Form.Item
                    label="Test"
                    name="testInput"
                    rules={[{ required: true, message: 'Please input something!' }]}
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
                    rules={[{ required: true, message: 'Please pick an estimated duration for how long you would like to use the platform' }]}
                    >
                       <RangePicker 
                       picker = "month" 
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