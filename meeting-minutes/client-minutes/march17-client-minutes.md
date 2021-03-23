# PACE GROUP C

# TWENTIETH CLIENT MEETING 03/17

## 17 MARCH 2021 / 12:16-1:05PM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Shannon F., Philip O., Maya T.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

3/10-01. Remove the notification upon login stating that the user's suggested mentees have been updated. **To do**
3/10-02. Solidify a course of action regarding the GET request. **To be mentioned to client**
3/10-03. Look into the back-end security of our website. **To do**

#### NEW BUSINESS

1. Conduct "Stand Up".

- Our Github project board will be displayed to show what we're planning on accomplishing during the upcoming sprint. Our application will be run to demonstrate the changes made to the 'Manage Mentors' tab.

2. Discuss "Road Blocks"

- As we head into the final weeks of the term, lots of deadlines are coming up. The instructor has indicated that our focus should shift away from development of new features.

3. Modifying our DB for numeric parameters in the GET request instead of strings will be time-intensive, and given the limited time remaining for the project, it likely will not be possible.

## Notes

Due to the PST time change, the client joined the meeting at 12:16pm. Although this slightly delayed the start time, we were still able to have a productive meeting.

The client asked Pace B to conduct their standup first. In the last week, they split their Mentor registration into two processes: First, they utilize their form to gather the name and email of the user, and once that has been filled, it creates the user's account and redirects them to their dashboard. Here, the user can provide a link to their calendar and select their skills. The client suggested that their team modify this, since the calendar and skill selection fields will likely only need to be accessed once (not every time the user logs in). Like we've already done, the client mentioned that the calendar and skills input fields can be on the form itself.

Pace A then informed the client of what they had worked on. They modified some of the UI in their application and walked through their navbar. To display some of the other components, Pace A's client liaison showed the client screenshots, but didn't display this through a live demo.

Ten minutes remained in the meeting once it was time for our standup. To start, the client was informed that the course requires us to complete a Final deliverable at the end of the term, which entails video presentations and submission of a report. As such, our team will shift focus to fulfill those requirements, but we'll do our best to implement any suggestions that she has. The client seemed very understanding, so this shouldn't be an issue.
After letting the client know that we unit tested and started to prepare our codebase for handoff, the application was displayed to show the changes made to the 'Manage Mentors' tab. The client suggested expanding the width of the columns so they each take up 50% of the window's width; moving the placement of the 'Request Mentor' button/modal to the upper right corner of the 'Requested/Pending Mentors' column; and changing the name of the columns so it's just one or two words without the '/' (i.e 'Pending Mentors' rather than 'Invited/Pending Mentors'.).
We then navigated to the 'View Mentor Form' tab so we could discuss the Organization string in the GET request. When I mentioned why it would be time consuming to change to a numeric ID, the client was very understanding, and so it's fine if we leave things as is. Her main concern is that the functionality is there, and so I _very quickly_ demonstrated an aspect of this by showing the emails that mentors receive when requested, how the Admin's organization is in the link, and how this gets associated to the Mentor. I explained that similarly, the Admin's organization is in the GET request of the iFrame link, and so the same process occurs for Mentees. I then logged into my Mentor account to display how only one Mentee request is in the 'Suggested Mentees' tab since only one user in the DB satisfies the criteria of being from the same organization.
The one recommendation that the client provided, is that if we have time, we could prohibit form submission unless the user was requested (i.e so that only requested users can submit the form successfully). The client mentioned that it looks like everything has come together nicely on our application.

### ACTION ITEMS

3/17-01. Incorporate minor modifications to the 'Manage Mentors' tab per the client's suggestions (expand the width of the columns so they each take up 50% of the window's width; move the placement of the 'Request Mentor' button/modal to the upper right corner of the 'Requested/Pending Mentors' column; and change the name of the columns so it's just one or two words without the '/' (i.e 'Pending Mentors' rather than 'Invited/Pending Mentors'.).)
3/17-02. Prohibit Mentor Form submission unless the user was requested (i.e so only requested users can submit the form. This could likely be done by seeing if the email that was inputted onto the form matches with any email addresses for that Organization's 'pendingMentors' field in the DB).
