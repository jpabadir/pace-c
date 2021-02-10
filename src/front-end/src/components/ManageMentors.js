import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import fire from '../firebase-init';
import {
  fetchOrganizationName,
  setOrganizationMentors,
} from '../helper-methods';

function requestMentor() {
  // insert code to request mentors
  window.alert('Your mentor request has been sent!');
}

// eslint-disable-next-line react/prefer-stateless-function
class ManageMentors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationMentors: {},
    };
  }

  authListener() {
    return new Promise((resolve) => {
      fire.auth().onAuthStateChanged((user) => {
        resolve(user.uid);
      });
    });
  }

  componentDidMount() {
    this.authListener().then((uid) => {
      fetchOrganizationName(uid).then((organizationName) => {
        setOrganizationMentors(organizationName, this);
      });
    });
  }

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
                {Object.keys(this.state.organizationMentors).length !== 0 && (
                  <center>
                    {this.state.organizationMentors.activeMentors.map(
                      (mentor) => {
                        return (
                          <i>
                            {mentor}
                            <br />
                          </i>
                        );
                      },
                    )}
                  </center>
                )}
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
                {Object.keys(this.state.organizationMentors).length !== 0 && (
                  <center>
                    {this.state.organizationMentors.pendingMentors.map(
                      (mentor) => {
                        return (
                          <i>
                            {mentor}
                            <br />
                          </i>
                        );
                      },
                    )}
                  </center>
                )}
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
                  <Form>
                    <Form.Item
                      label="Mentor's Email Address:"
                      id="inviteMentorEmail"
                      name="emailInput"
                      // must have an input:
                      rules={[
                        {
                          required: true,
                          message: "Please enter the mentor's email",
                        },
                      ]}
                    >
                      <Input
                        type="email"
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
                  </Form>
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
