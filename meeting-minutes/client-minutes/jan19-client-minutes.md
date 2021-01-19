# PACE GROUP C

# THIRTEENTH CLIENT MEETING 01/19

## 19 JANUARY 2021 / 9:00 - 10:01 AM/ VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Philip O. Anthony B., Maya T., Shannon F.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

- 11/10-03. The team should discuss possible ways of obtaining Mentor availability to send to an accepted Mentee, where the Mentee can then book a slot from the Mentor's available time slots. **Hopefully due for next wednesday**
- 11/10-05. Research how a React component can be generated into an iFrame tag. **Hopefully due for next wednesday**

#### NEW BUSINESS

1. Conduct "Stand Up".

- Our Github project board will be displayed at this time to showcase that in the last week our team has been working on testing all of our React components. The application will also be run to showcase the work that was done over the winter break (primarily changes to formatting on the forms and UI).

2. Discuss "Road Blocks"

- Due to the final exam period and the holidays, development on the application slowed last month.
- The course requires unit testing, so we wanted to ensure that the app was functioning as expected before furthering development.

3. Inform the client of semester logistics.

- Reading Break is Feb. 15 - 19.
- Peer Testing sessions will occur Feb 22-26, so development might slow during that week.
- April 9 is our last day of the term.

4. Inquire about the Client Review (from the Canvas message, it sounds like the instructor has looked into this and that the client will be re-submitting the reviews. The client might mention this as well)

### NOTES

All attendees in the meeting arrived on time, and the client apologized for forgetting about last week's meeting. The client called on Pace B to see what their sprint plan for the week was. Since the last meeting, they made some stylistic changes for their application and had some points of clarification for the client. They had worked on creating a create account/login page, which contained inputs for an email, password, and a dropdown to select the user's type (either Mentee, Mentor, or Admin). Once the account had been created, the 'Sign Up' button changed to 'Logout'. Their hopes were that by including a dropdown for the user to select their user-type, upon account creation, the application would then route them to the correct form (i.e if I select 'Mentor', I would then be taken to the 'Mentor Form'). The client mentioned that the dropdown could likely be removed, since the users can be identified by a type in the database based on the form that they fill out. She also stated that as a part of the minimum viable product, Mentees aren't required to have an account so creating an account for Mentees/any surrounding UI should be low in priority.
Pace B had some concerns with security (their Github Repo is public, and so they don't want their firebase keys out in the open).The client mentioned that the [dotenv](https://www.npmjs.com/package/dotenv) library could be used to store keys in a file that won't be added to Github.
In this week's sprint Pace B is hoping to work on some of the points that the client had mentioned.

The client then called on Pace A to conduct their 'Stand Up'. Pace A screenshared a prototype of the application that their team had created, rather than running their application. This had a different user-flow, as they were hoping to incorporate a 'Contact Me' button for Mentees, that Mentors could click to connect with Mentees. They incorporated a notification system setup and were planning on adding events such as 'ice breakers'. Pace A's team was concerned for user's security by allowing people to be contacted through email, and so they wanted to develop a system that would allow mentees and mentors to be matched without using personal emails. Although the client thought that the functionality was interesting, she did not believe that it could be achieved in the remaining four months of the course. The client reminded the attendees that Mentees do not need an account for the M.V.P, and focus should be towards the process of matching mentees, embedding the Mentee From in an iFrame, and gaining availability.

When Pace C was called on, only 10 minutes remained in the meeting. To address the points under 'New Business':

1. Conduct "Stand Up".

- Our project board was displayed to show the issues that we have been working on. When it was mentioned that we were testing, the client recommended looking into Mock Functions (which JP had included in his writeup on Discord). Our application was quickly shown so that the client could see that her feedback from December had been incorporated, and she seemed happy with the direction that we were going.
  - The client's only feedback after walking through the application, was that the 'Login' card component could also contain a white background like the cards in the 'Suggested' and 'Accepted' Mentee cards. However, this is low on the priority list and could be changed in the future.

3. Inform the client of semester logistics.

- After mentioning that Reading Break is Feb. 15 - 19, the other client liaisons mentioned that we likely won't have a meeting that week. The client suggested removing the meeting for now so that we won't officially have a meeting that week, but contacting her via email if anything comes up that we'd like addressed. The client seemed to appreciate discussing important dates so that she can plan her calendar accordingly.

There wasn't enough time in the meeting to ask about the Peer evals, and the other attendees hadn't mentioned it earlier in the meeting. Hopefully we will receive the modified feedback soon.

### ACTION ITEMS

- 1/19-01. The client was wondering if our client meetings will stop once classes are over (April 13) like in December, or if we'd continue to have meetings during the final exam period. Since the course seems to have project deliverables due during the final exam period, Katrina will ask the instructor during Friday's class.
