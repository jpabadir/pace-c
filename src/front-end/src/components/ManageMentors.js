import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

function requestMentor() {
  // insert code to request mentors
  window.alert('Your mentor request has been sent!');
}

// eslint-disable-next-line react/prefer-stateless-function
class ManageMentors extends Component {
  render() {
    return (
      <div className="ManageMentors" style={{ paddingTop: '10px' }}>
        <div className="container">
          <h1>
            <font size="7">
              <center> Manage and Invite Mentors </center>
            </font>
          </h1>
          <br />
          <br />
          <div id="CurrentActiveMentors">
            <h1>
              <center>
                <i>
                  <font size="5"> Current/Active Mentors: </font>
                </i>
              </center>
            </h1>
            <p>
              <font size="4">
                <center>
                  **(under development)**
                  <br />
                  Insert/pull current/active mentors here.
                </center>
              </font>
            </p>
          </div>
          <div id="InvitedPendingMentors">
            <h1>
              <center>
                <i>
                  <font size="5"> Invited/Pending Mentors: </font>
                </i>
              </center>
            </h1>
            <p>
              <font size="4">
                <center>
                  **(under development)**
                  <br />
                  Insert/pull invited/pending mentors here.
                </center>
              </font>
            </p>
          </div>
          <div id="InviteTab">
            <h1>
              <center>
                <i>
                  <font size="5"> Invite A Mentor! </font>
                </i>
              </center>
            </h1>
            <p>
              <font size="4">
                <center>
                  <i> How To Invite A Mentor: </i>
                  <br />
                  To invite a user to join Mentor Match as a mentor that is
                  associated with your organization, type their email address in
                  the text box below and then click the &apos;request&apos;
                  button.
                  <br />
                  <br />
                  The mentor will then receive a link via email which will take
                  them to Mentor Match&apos;s Mentor Form.
                  <br />
                  <br />
                  <Form.Item
                    label="Mentor's Email Address:"
                    id="inviteMentorEmail"
                    // must have an input:
                    rules={[
                      {
                        required: true,
                        message: "Please enter the mentor's email",
                      },
                    ]}
                  >
                    <Input
                      onInput={this.handleNameChange}
                      id="inviteMentorEmail"
                      placeholder="Email Address"
                    />
                  </Form.Item>
                  <Button
                    onClick={requestMentor}
                    type="primary"
                    htmlType="submit"
                    className="formSubmitButton"
                    size="large"
                  >
                    Request Mentor
                  </Button>
                </center>
              </font>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
// exports:
export default ManageMentors;
