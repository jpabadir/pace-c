# Software Implementation Update

## Updated Test Report

(to be added)

<br>

## Know Bugs

- During the client meeting, I noticied that a TypeError displaying 'Cannot set property 'id' of null' occurs when navigating to the 'Accepted Mentees' tab.
- The 'Your Suggested Mentees have been updated' notification is displayed for both Mentor and Admin users upon login (the client mentioned that we could likely remove this notification altogether).
- There is an infinite loop somewhere in the code, and it fills the DB with info and crashes the front-end. It adds hundreds of times the same email address to the pendingMentors field of the DB.
