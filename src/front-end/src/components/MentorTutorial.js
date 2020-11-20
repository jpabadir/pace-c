import React, { Component } from 'react';
import { Form } from 'antd';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class MentorTutorial extends Component {
  render() {
    return (
      <>
        <div className="Login">
          <Form>
            <h1>
              <center>Welcome To Mentor Match&apos;s Mentor Tutorial!</center>
            </h1>
            <h3>
              <center>
                This is the mentor tutorial page where you can learn how to see
                and interact with:
                <ul>
                  <li>
                    <i>Suggested Mentees</i>
                  </li>
                  <li>
                    <i>Accepted Mentees</i>
                  </li>
                </ul>
              </center>
            </h3>
            <h3>
              <b>Suggested Mentees:</b>
            </h3>
            <p1>
              The suggested mentees tab is located on the top of the page. On
              the suggested mentee page you will be able to view all of you
              suggested mentees and details about each mentee. To accept a
              mentee click on the green check mark button below the
              mentee&apos;s information. To decline a mentee click on the red X
              button below the mentee&apos;s information.
            </p1>
            {/* eslint-disable-next-line react/self-closing-comp */}
            <p></p>
            <h3>
              <b>Accepted Mentees:</b>
            </h3>
            <p2>
              The accepted mentees tab is also located on the top of the page
              next to the suggested mentee tab. On the accepted mentees tab you
              can view the information of all mentees that have been accepted
              from the suggested mentees tab.
            </p2>
          </Form>
        </div>
      </>
    );
  }
}
// exports:
export default MentorTutorial;
