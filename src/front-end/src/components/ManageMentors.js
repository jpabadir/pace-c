/* This component allows admins to view current Mentors in their organization, 
as well as request and view pending Mentors.
*/
import React, { Component } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import fire from '../firebase-init';
import {
  fetchOrganizationName,
  setOrganizationMentors,
} from '../helper-methods';

// eslint-disable-next-line react/prefer-stateless-function
class ManageMentors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationMentors: {},
      organizationName: '',
    };
    this.requestMentor = this.requestMentor.bind(this);
    this.addPendingMentorToDB = this.addPendingMentorToDB.bind(this);
  }

  authListener() {
    return new Promise((resolve) => {
      fire.auth().onAuthStateChanged((user) => {
        resolve(user.uid);
      });
    });
  }

  // Obtains the organization name of the admin currently logged in
  componentDidMount() {
    this.authListener().then((uid) => {
      fetchOrganizationName(uid).then((organizationName) => {
        this.setState({ organizationName });
        setOrganizationMentors(organizationName, this);
      });
    });
  }

  /* Once an Admin requests a Mentor by providing an email address,
  that email address will be added to the 'pendingMentors' field 
  under the Admin's organization in the database
  */
  addPendingMentorToDB(mentorEmailAddress) {
    const organizationRef = fire
      .database()
      .ref('organizations/' + this.state.organizationName.toLowerCase());

    organizationRef.once('value', (snapshot) => {
      const pendingMentors =
        snapshot.val() && snapshot.val().pendingMentors
          ? snapshot.val().pendingMentors
          : [];
      pendingMentors.push(mentorEmailAddress);
      organizationRef.child('pendingMentors').set(pendingMentors);
    });
  }

  requestMentor(values) {
    /* Once an admin provides an email address in the input field, the input is 
    passed to the back-end along with the admin's organization in a GET request.
    This is so that nodemailer can configure and send an email to the 
    address provided, with a link to access the Mentor form associated with
    the admin's organization.
    */
    fetch(
      `http://localhost:8020/invite-mentor?emailAddress=${values.emailInput}&organization=${this.state.organizationName}`,
    ).then((res) => {
      // If the request is successful, the admin is notified
      if (res.status === 200) {
        document.getElementById('inviteMentorEmail').value = '';
        notification.open({
          description: 'Your mentor request has been sent!',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
          placement: 'bottomRight',
        });
        this.addPendingMentorToDB(values.emailInput);

        // Update component state with proper values
        this.setState((prevState) => ({
          organizationMentors: {
            activeMentors: prevState.organizationMentors.activeMentors,
            pendingMentors: [
              ...prevState.organizationMentors.pendingMentors,
              values.emailInput,
            ],
          },
        }));
      }
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
          <div className="column" id="CurrentActiveMentors">
            <h1>
              <center>
                <i>
                  <font size="5"> Current/Active Mentors: </font>
                </i>
              </center>
            </h1>
            <p>
              <font size="4">
                {/* Displays the email addresses of the users in the activeMentors field for that admin's organization
                 */}
                {Object.keys(this.state.organizationMentors).length !== 0 &&
                  this.state.organizationMentors.activeMentors && (
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
          <div className="column" id="InvitedPendingMentors">
            <h1>
              <center>
                <i>
                  <font size="5"> Invited/Pending Mentors: </font>
                </i>
              </center>
            </h1>
            <p>
              <font size="4">
                {/* Displays the email addresses of the users in the pendingMentors field for that admin's organization
                 */}
                {Object.keys(this.state.organizationMentors).length !== 0 &&
                  this.state.organizationMentors.pendingMentors && (
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
          <div className="column" id="InviteTab">
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
                  <Form onFinish={this.requestMentor}>
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
                        id="inviteMentorEmail"
                        placeholder="Email Address"
                      />
                    </Form.Item>
                    <Button
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
export default ManageMentors;
