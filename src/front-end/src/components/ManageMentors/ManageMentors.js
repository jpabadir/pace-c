/* This component allows admins to view current Mentors in their organization, 
as well as request and view pending Mentors.
*/
import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  notification,
  Card,
  Typography,
  Modal,
} from 'antd';
import {
  SmileOutlined,
  UserSwitchOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import fire from '../../firebase-init';
import {
  fetchOrganizationName,
  setOrganizationMentors,
} from '../../helper-methods';

const { Title } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class ManageMentors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationMentors: {},
      organizationName: '',
      visible: false,
    };
    this.requestMentor = this.requestMentor.bind(this);
    this.addPendingMentorToDB = this.addPendingMentorToDB.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  authListener() {
    return new Promise((resolve) => {
      fire.auth().onAuthStateChanged((user) => {
        resolve(user.uid);
      });
    });
  }

  /* Updates state with organization name of the admin currently logged in,
  and the pending and accepted mentors of the admin's organization.
  */
  componentDidMount() {
    this.authListener().then((uid) => {
      fetchOrganizationName(uid).then((organizationName) => {
        this.setState({ organizationName });
        setOrganizationMentors(organizationName, this);
      });
    });
  }

  /** Once an Admin requests a Mentor by providing an email address,
  that email address will be added to the 'pendingMentors' field 
  under the Admin's organization in the database */
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
          <Card
            style={{
              width: '47.5%',
              fontSize: '30px',
              backgroundColor: 'rgb(250, 250, 250)',
            }}
            title={<Title level={3}>Active Mentors:</Title>}
            id="CurrentActiveMentors"
          >
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
                              <Card
                                hoverable
                                style={{
                                  width: '300px',
                                  textAlign: 'left',
                                  fontSize: '18px',
                                }}
                              >
                                <UserAddOutlined style={{ fontSize: '300%' }} />
                                {'  '}
                                {mentor}
                              </Card>
                              <br />
                            </i>
                          );
                        },
                      )}
                    </center>
                  )}
              </font>
            </p>
          </Card>
          <Card
            style={{
              width: '47.5%',
              fontSize: '30px',
              backgroundColor: 'rgb(250, 250, 250)',
            }}
            title={
              <div>
                <Title style={{ display: 'inline' }} level={3}>
                  Pending Mentors:
                </Title>
                <Button
                  style={{ display: 'inline', marginLeft: '11em' }}
                  type="primary"
                  htmlType="submit"
                  size="large"
                  onClick={this.showModal}
                >
                  Request Mentor
                </Button>
              </div>
            }
            id="InvitedPendingMentors"
          >
            <p>
              <font size="2">
                {Object.keys(this.state.organizationMentors).length !== 0 &&
                  this.state.organizationMentors.pendingMentors && (
                    <center>
                      {this.state.organizationMentors.pendingMentors.map(
                        (mentor) => {
                          return (
                            <i>
                              <Card
                                hoverable
                                style={{
                                  width: '300px',
                                  textAlign: 'left',
                                  fontSize: '18px',
                                }}
                              >
                                <UserSwitchOutlined
                                  style={{ fontSize: '200%' }}
                                />
                                {'  '}
                                {mentor}
                              </Card>
                              <br />
                            </i>
                          );
                        },
                      )}
                    </center>
                  )}
              </font>
            </p>
          </Card>
          {/*           <Button
            type="primary"
            htmlType="submit"
            size="large"
            onClick={this.showModal}
          >
            Request a Mentor
          </Button> */}
          <Modal
            title="How To Invite A Mentor"
            centered
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer=""
          >
            <Form style={{ height: '85px' }} onFinish={this.requestMentor}>
              <Form.Item
                label="Mentor's Email Address:"
                id="inviteMentorEmail"
                name="emailInput"
                tooltip="To invite a user to join Mentor Match as a mentor that is associated with your organization, type their email address in the text box below and then click the 'request' button. The mentor will then receive a link via email which will take them to Mentor Match's Mentor Form."
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
              <div
                style={{
                  position: 'absolute',
                  right: '10pt',
                  bottom: '10pt',
                }}
              >
                <Button
                  style={{ marginRight: '10px' }}
                  size="medium"
                  key="back"
                  onClick={this.handleCancel}
                >
                  cancel
                </Button>
                <Button
                  style={{ marginRight: '10px', marginBottom: '10px' }}
                  type="primary"
                  htmlType="submit"
                  className="formSubmitButton"
                  size="medium"
                >
                  Send request
                </Button>
              </div>
            </Form>
          </Modal>
        </div>
      </div>
    );
  }
}
export default ManageMentors;
