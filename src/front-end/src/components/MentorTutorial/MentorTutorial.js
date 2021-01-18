import React, { Component } from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

// eslint-disable-next-line react/prefer-stateless-function
class MentorTutorial extends Component {
  render() {
    return (
      <>
        <div className="MentorTutorial">
          <h1>
            <center>Welcome To Mentor Match&apos;s Mentor Tutorial!</center>
          </h1>
          <h3>
            <center>
              This is the mentor tutorial page where you can learn how to see
              and interact with:
              <ul style={{ listStyleType: 'none' }}>
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
          <p>
            The suggested mentees tab is located on the top of the page. On the
            suggested mentee page you will be able to view all of your suggested
            mentees and details about each mentee. To accept a mentee click on
            the &apos;Accept <CheckOutlined className="check" />
            &apos; button below the mentee&apos;s information. To decline a
            mentee click on the &apos;Decline
            <CloseOutlined className="close" />
            &apos; button below the mentee&apos;s information.
          </p>
          {/* eslint-disable-next-line react/self-closing-comp */}
          <p></p>
          <h3>
            <b>Accepted Mentees:</b>
          </h3>
          <p>
            The accepted mentees tab is also located on the top of the page next
            to the suggested mentee tab. On the accepted mentees tab you can
            view the information of all mentees that have been accepted from the
            suggested mentees tab.
          </p>
        </div>
      </>
    );
  }
}
// exports:
export default MentorTutorial;
