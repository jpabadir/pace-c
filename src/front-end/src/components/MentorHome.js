import React, { Component } from 'react';
import { Form, Button, Select } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

const { Option } = Select;

// eslint-disable-next-line react/prefer-stateless-function
class MentorHome extends Component {
  render() {
    return (
      <>
        <Button type="primary" htmlType="button" id="logout">
          Logout
        </Button>
        <Form>
          <h1>
            <center>Welcome back, [Mentor Name from DB]</center>
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
        </Form>
        {/* the form below should change the information depeding on: */}
        {/* the mentee selected */}
        {/* button below should link to an appropriate page, once logged out */}
        <div className="mentee-requests">
          <h2> Pending Mentee Requests</h2>
          <p>
            Click <CheckOutlined className="check" /> to accept a Mentee&apos;s
            request or <CloseOutlined className="close" /> to decline.
          </p>
          <div className="individual-mentee">
            <table>
              <tr>
                <th>
                  <UserOutlined className="user-icon" />
                  [Name from DB]
                  <Button type="text" onClick={this.handleButtonClick}>
                    <CheckOutlined className="check" id="accept" />{' '}
                  </Button>
                  <Button type="text" onClick={this.handleButtonClick}>
                    <CloseOutlined className="close" id="decline" />{' '}
                  </Button>
                </th>
              </tr>
              <tr>
                <td> Email: [Email from Database]</td>
              </tr>
              <tr>
                <td>
                  {' '}
                  Skills Seeking Mentorship: [Skills Array From Database]{' '}
                </td>
              </tr>
              <tr>
                <td> Description: [Description From Database] </td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}
// exports:
export default MentorHome;
