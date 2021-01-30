import React from 'react';

function LandingPage() {
  return (
    <div className="LandingPage" style={{ paddingTop: '20px' }}>
      <h1>
        <center>
          <font size="7">Welcome to Mentor Match!</font>
        </center>
      </h1>
      {/* eslint-disable-next-line react/self-closing-comp */}
      <p>&nbsp;</p>
      <h2>
        <center>
          <font size="6">How Mentor Match Works</font>
        </center>
      </h2>
      <p>
        <center>
          <font size="4">
            <p>
              Mentor Match brings together mentors and mentees through a
              matching system. Mentors and mentees are matched based on the
              skills that they want to learn, the timezone they are located in,
              and their availability. Below is a brief overview of each user
              type.
            </p>
          </font>
        </center>
      </p>
      {/* eslint-disable-next-line react/self-closing-comp */}
      <p>&nbsp;</p>
      <div className="container">
        <div id="adminLeft">
          <h1>
            <center> As an Admin... </center>
          </h1>
        </div>
        <div id="mentorMiddle">
          <h1>
            <center> As a Mentor... </center>
          </h1>
        </div>
        <div id="menteeRight">
          <h1>
            <center> As a Mentee... </center>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
