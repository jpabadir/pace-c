import React, { Component } from 'react';
import { Form, Button, Select } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import fire from '../firebase-init';

const { Option } = Select;

// eslint-disable-next-line react/prefer-stateless-function
class MentorHome extends Component {
  constructor(props) {
    super(props);
    this.Logout = this.Logout.bind(this);
  }

  Logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <Form>
        <h1>
          <center>Welcome back, Mentor!</center>
        </h1>
        <Form.Item label="Your current mentees" name="userMentees">
          <Select
            // so that single options can be selected:
            mode="single"
            style={{ width: '100%' }}
            placeholder="select a mentee"
            optionLabelProp="label"
          >
            {/* the amount of options should be the amount of mentees */}
            <Option value="Mentee1" label="Mentee1" />
            <Option value="Mentee2" label="Mentee2" />
            <Option value="Mentee3" label="Mentee3" />
          </Select>
        </Form.Item>
        <h2> Information about &quot;insert selected mentee name&quot;</h2>
        {/* the form below should change the information depeding on: */}
        {/* the mentee selected */}
        <p>
          Information 1: &quot;insert information1 about selected mentee&quot;
        </p>
        <p>
          Information 2: &quot;insert information2 about selected mentee&quot;
        </p>
        <p>
          Information 3: &quot;insert information3 about selected mentee&quot;
        </p>
        {/* button below should link to an appropriate page, once logged out */}
        <Button onClick={this.Logout} type="primary" htmlType="button">
          Logout
        </Button>
      </Form>
    );
  }
}
// exports:
export default MentorHome;
