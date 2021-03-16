/* Once the Mentor Form has successfully been submitted by a user through email 
invite, this is what the user will see.
*/

import React from 'react';

export default () => (
  <div className="MentorCompletion">
    <p>
      Congratulations! You have successfully created your account. Please
      activate your account through the email we just sent and click&nbsp;
      <a
        className="loginlink"
        href="http://localhost:3000/my-account
      "
      >
        here&nbsp;
      </a>
      to access your account!
    </p>
  </div>
);
