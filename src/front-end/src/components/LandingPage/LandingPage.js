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
          <font size="5">
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
            <center>
              <i> As an Admin... </i>
            </center>
          </h1>
          {/* Insert Image for Admin here. */}
          <center>
            <h3>Admin Image Place Holder</h3>
          </center>
          <p>
            <font size="4">
              <center>
                Register your organization. Invite potential mentors from your
                company. Embed the mentee form in your organization&apos;s
                website.
              </center>
            </font>
          </p>
        </div>
        <div id="mentorMiddle">
          <h1>
            <center>
              <i> As a Mentor... </i>
            </center>
          </h1>
          {/* Insert Image for Mentor here. */}
          <center>
            <h3>Mentor Image Place Holder</h3>
          </center>
          <p>
            <font size="4">
              <center>
                Accept mentees' requests to start teaching. Meetings are based
                around your schedule. Choose as many or as little mentees to
                mentor as desired.
              </center>
            </font>
          </p>
        </div>
        <div id="menteeRight">
          <h1>
            <center>
              <i> As a Mentee... </i>
            </center>
          </h1>
          {/* Insert Image for Mentee here. */}
          <center>
            <h3>Mentee Image Placeholder</h3>
          </center>
          <p>
            <font size="4">
              <center>
                You&apos;ll be matched with experienced individuals who can help
                with the skills you need. Matches are made on common
                skillsets and timezones.
              </center>
            </font>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
