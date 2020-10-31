import React, { Component } from "react";
import { inputField } from "./Inputs";
import { Form, Button, Input } from "antd";


class MentorshipForm extends Component {
    render() {
        return (
            <Form>
                <Form.Item
                    label="Test"
                    name="testInput"
                    rules={[{ required: true, message: 'Please input something!' }]}
                >
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form>
        );
    }
}

export default MentorshipForm;