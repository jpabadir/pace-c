# PACE GROUP C

# FIFTEENTH CLIENT MEETING 02/3

## 3 February 2021 / 12:00-12:52 PM/ VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Shannon F., Philip O., Maya T., Anthony B.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

1/27-01. Wednesdays at 12pm PST seem to be a better time to hold meetings for the client. We'll see if meetings on Wednesday are better, or if we'd like to return to Tuesday meetings at 9AM PST. _In progress_

#### NEW BUSINESS

1. Conduct "Stand Up".

- Our Github project board will be displayed at this time to show what we're planning to accomplish during the upcoming sprint. The client will be walked through the application so she can see the updates to the home page, the ability to create Admins, and obtain an iframe tag from the Mentor form. The node server will be running at this time as well so that the client can see the values change depending on the Mentor UID that has been passed.

2. Discuss "Road Blocks"

- The first roadblock encountered this week was with the availability functionality. It doesn't look like we'll be able to use the Google Calendars API to achieve what we'll need (especially if we're to not incur costs).
  - Since Mentors and Mentees are expected to communicate via email, can they figure out their own availability?
  - Can we prioritize other functionality in the meantime?
- Back in October, our team debated using Cloud Functions, however, we'd need to update our plan to the Blaze payment plan. After further development, it looks like we'll be able to achieve the required functionality without Cloud Functions, by hosting via a node server. As pointed out by a member of the team, if we write the server using node 14, that's what Cloud Functions use. So, it would support the ability to migrate later on.
  - Is this alright with the client?
- When it comes to how Mentors receive the Mentor form upon an Admin's request:
  - Is it alright if all requested users receive the same link? Potentially, a user who receives the Mentor form could then forward the link of the form to another user who hasn't been requested.
    - If that poses a problem, a possible work-around would be for whoever takes over the site to manually go onto Firebase and approve users. This would take some time to implement, but could probably work.

### NOTES

Since Pace B was waiting for a group member to join the call, and Pace A's client liaison hadn't joined the call yet, the client asked what Pace C had done during the week. Our github project board was shown so that the client could see which tickets we completed from the previous sprint, as well as what we plan to accomplish for the current sprint. The app was then run so that the client could visually see our progress, and she was impressed with what the team had done since last week. The client mentioned that we should keep in mind that Mentees should also be associated with an organization so that they can be matched with a mentor from that organization, and so I showed the client that that is something we're planning to incorporate after this week's sprint. She seemed impressed that we had thought of that as well. There were no suggestions for things to change.

To address the roadblocks from above:

1. After letting the client know of our current roadblock with the availability, unfortunately, the ability for mentees to book timeslots with mentors seems to be important to the client. She mentioned that ideally, Mentee's would receive a link to the Mentor's calendar in an email.

- Given this, I asked if instead of our previous user flow (where Mentors create their calendar after registering, with our application managing user's calendars) if it would be possible to require Mentors to create their own calendars external of our application. The calendar process would then be handled outside of our application, BUT, as a part of the Mentor form, we could require Mentors via an input field to provide a link to whichever calendar platform they prefer. This link could then be sent to the Mentee in an email. That Mentee would then have access to the Mentor's calendar (For clarity: If I'm registering as a Mentor, I could create a calendar of my availability using an external calendar platform. I would copy the link to this external platform's calendar with my availability, and include that in an input field when I create my account on the Mentor Form. This link would then be sent to whatever Mentee that I accept the request for).
- The client stated that this work-around would be acceptable. She notes that if we have time, we could continue to see if there's any other way. I mentioned that given the time remaining for the project, we might not be able to circle back to this issue to see if another platform would be free for us to use. So, overall, the way that I proposed today should be alright if we're unable to figure something else out before project completion.
  - Please note: This work-around only occurred to me while talking with the client today. I wish I would have had time to propose this to the team beforehand, but I was thinking out loud.

2. Using a Node server is not a problem, especially if our version is compatible in case whoever takes over the project later on wants to use Cloud Functions.

3. Although requested Mentors receiving the link to the Mentor form and forwarding that link to other people is a valid issue, it's not the greatest concern. If we have time, we can implement something to prohibit users who haven't been requested from registering. But, this is lower on the priority list.

Pace A then displayed their project board on Github. In the last week, they were doing their 'monthly testing'. This week, they're hoping to finalize their user flow diagrams to document how each user group interacts with the system. Doing so will help them organize how the system is supposed to look so they can program the design. A member of their team found a matching API, so they're going to investigate that further. They didn't run their application, and so the client has requested that they demo their application next week.

Pace B didn't run their application either. Over the last week, they had investigated implementing cookies onto their website for logged in users. They were also contemplating whether they wanted to use Firebase or MySQL for their database. The client then screenshared Firebase documentation to demonstrate how [Firebase authentication](https://firebase.google.com/docs/auth/admin/manage-cookies) could eliminate the need for session cookies.

Due to rescheduling the client meetings to be on Wednesdays rather Tuesdays, the client wanted to go over term logistics. It has been confirmed that there will not be a meeting during reading break (Feb. 17), and the last client meeting will be April 7th.

### ACTION ITEMS

- 2/02-1. Update the Mentor form to have an input field to intake a link to the user's calendar for availability. Reflect this in the DB and send this link in the email to the Mentee when accepted.
