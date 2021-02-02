# PACE GROUP C

# FIFTEENTH CLIENT MEETING 02/3

## 3 February 2021 / 12:00 PM/ VIA GOOGLE MEETS

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
