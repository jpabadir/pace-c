# PACE GROUP C

# EIGHTEENTH CLIENT MEETING 03/3

## 3 MARCH 2021 / 12:00 - 12:48PM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Shannon F., Philip O., Maya T.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

2/24-01. Obtain consent from the team on whether they're comfortable if Codebar decides to fork our repo after April **Complete**

2/24-02. Replace Alerts with Ant Design's Notifications **Complete**

#### NEW BUSINESS

1. Conduct "Stand Up".

- Our Github project board will be displayed to show what we're planning on accomplishing during the upcoming sprint (likely incorporating feedback from the peer testing sessions and fixing bugs). Our application will be run to demonstrate the modifications to the application in the past week (fixes to routing, notifications rather than alerts, etc).

2. Discuss "Road Blocks"

- Due to the course requiring peer testing, development slowed.

### NOTES

The client called on our group to update her on what we worked on in the last week. I let her know that our team gives our consent if Codebar wants to fork the repo after April.

After demonstrating our application, the client made the following comments/suggestions:

- The error messages upon unsuccessful login (when invalid credentials are provided) could be a security vulnerability (i.e the username notification persists until a valid email address has been provided, then if the password is incorrect, the notification lets the user know. Potentially, someone could try to hack into someone's account by testing out emails, then trying passwords. _However, this isn't something that the client is worried about or something that we need to prioritize_, she just wanted to mention it since it's good to keep in mind).
- The columns for 'Current/Active Mentors', 'Invited/Pending Mentors', and 'Invite a Mentor' in the 'Manage Mentors' tab could be encapsulated by a Card component to add more contrast.
- The description under 'Invite a Mentor' is a bit wordy, and could be trimmed down. Possibly, in a tool tip beside the 'Mentor's Email Address' label.

Pace A's client liaison was having trouble with their internet, and so they didn't screenshare to demo their application or Github Project Board. Instead, they verbally told the client what they had worked on, and what their plans for the following sprint are. They primarily were focused on creating alerts to let the user know when a certain functionality has occurred (i.e Once a mentor accepts a Mentee, once the Mentor has new Mentee requests, etc.). Their team wanted further clarification on what events should trigger the sending of emails to Mentors and Mentees. This week, they want to focus on implementing the colour scheme that their team had agreed on.

Pace B then briefly demonstrated their application. Their team had met with the client separately the day before to obtain clarification, and so they didn't have too much to go over today. They created the tabs that an Admin sees, and added placeholder components for Mentee requests until they fill that information in from their database. They're hoping to modify the way they obtain skills on the Mentee/Mentor form to be multiselect, rather than 3 separate dropdowns.

### ACTION ITEMS

N/A
