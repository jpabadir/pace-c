# PACE GROUP C

# EIGTH CLIENT MEETING 11/10

## 10 NOVEMBER 2020 / 9:00AM - 9:50AM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Philip O., Anthony B., Shannon F.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

- 11/2-01. Katrina will check-in with Eric on how the heuristic evaluation is going in preparation for Friday's lecture. **Completed**

#### NEW BUSINESS

1. Do "Stand Up" from the week.

- Mention that last week's sprint consisted of working on the following tasks (the Github Project Board will briefly be shown at this time, but running the application to visualize/demonstrate what we worked on will be the main focus):

  - Creating the UI for the Login Page (input fields for username and password, and buttons for "Forgot Password" and "Create Account")
  - Creating the UI for a Logged in Mentor (displaying mentees on a dashboard, having a logout button).
  - Validation of unique usernames before account creation.
  - Connecting the Login to the Backend and the Database.
  - Solidifying the availability feature on the form.
  - Adding front-end unit testing capabilities to the repo.
  - Using routing to split the form from the login system.
  - Styling the form.
  - Researching possible solutions for availability.

- Brief the client on this week's sprint plan:
  - Migrate the backend from a node server to Cloud Functions.
  - Refine the UI for a logged in mentor (display possible mentee matches with a button to accept or decline. Display the matched mentees. This includes pulling the information from our database once sample data has been setup).
  - Implement 'forgot password' functionality.
  - Build a page that the user gets redirected to upon successful form completion.
  - Send email to user to complete registration/validate their account.
  - Work on surrounding logistics for peer testing milestone.

2. Discuss "Road Blocks"

- Explain to the client the complexity that matching based on availability entails.
  - Ask whether matching according to availability is a **must**, or if we can match solely on common skills and time-zones.
    - If the answer is yes, and the client is still partial towards a calendar UI, inform that client that a calendar time-picker will likely be used.
- Inform the client that the course requires us to conduct heuristic evaluations, so our focus will likely have to divert slightly over the next two weeks to setup for those.

### NOTES

Pace A's client liaison could not attend the meeting, so the meeting consisted of the client and two other members from Pace B.

Pace B commenced the meeting by informing the client of what they worked on in the last week. Two of their members were following along with React tutorials, while their other member was working on setting up Firebase and using React to test out creating input fields. Since they faced some road blocks when it came to setting up Firebase, the client gave some suggestions. She recommended using [Postman](https://www.postman.com/) when it comes to handling requests, since this can be used to trigger requests on the backend if the input field has yet to be created on the front-end.

Once Pace B completed their stand-up, our Github Project board was displayed to show what our team completed during the week. The application was then walked through, and the client noted that it sounds like we're making great progress. The client was especially pleased that we're working on creating separate forms for Mentee and Mentor sign-up. An important objective for today's meeting was to clear up some roadblocks surrounding the form, these concerns were addressed as follows:

- It was mentioned that the form could be split into subsections (one section for obtaining user input with a 'next' button to navigate to the second subsection for account creation). Is this a must for the end-product, or can we have all information on one page?
  - All of the information can be on one page, so **we don't have to separate the form into subsections**.
- Can we confirm exactly what fields should be included on Mentee forms, as well as Mentor forms?
  - **Mentee Forms**
    - Name, email, list of ranked skills, text-area to obtain a description from the user about themselves/their goals for the program.
    - The 'Timeframe Seeking Mentorship' field can be removed (later on in development, the client might want to have the feature, but she said it's not needed as of now).
    - Reminder: Mentees do not need to create an account, and so they do not need a password.
  - **Mentor Forms**
    - Name, email, list of ranked skills, text-area to obtain a description from the user about themselves/their goals for the program, some way of obtaining the user's availability, and password for account creation.
  - NOTE: After discussing what input fields are necessary on each form, the client was contemplating whether we should be collecting the user's time-zone, or if collecting the user's location would suffice. She mentioned that the time-zone could possibly be extracted from the user's browser, but location alone might suffice.
- A road block from this week was the complexity that matching based on common availability introduces. Is common availability **required** when it comes to making mentee and mentors matches, or can we match primarily based on skills and time-zones?
  - The client recognizes the complexity that matching based on common availability might have. As such, when creating mentee and mentor matches, **common availability does not need to be considered**.
    - The client's recommended course of action: The process can be analogous to a job recruiting process (i.e The individual conducting interviews sends out a calendar to the interviewee. The interviewee receives a calendar of available time slots, and picks one). Therefore, for our project we can:
      - Obtain availability for Mentors only.
      - Once a match has been made, send the Mentor's availability to the Mentee.
      - The mentee can then select a timeslot based on when the Mentor is available.

The client asked how our team was progressing with our use of Firebase, so the MentorshipForm.js file was shown since authentication was worked on over the last sprint. The client recommended also initializing Firebase within App.js as well (so that all the components being called from App.js have access to the information in the database).

The client also mentioned that we should keep in mind that the Mentor form will be embedded onto a public website, so we should consider how it will be turned into an iFrame tag.

### ACTION ITEMS

11/10-01. Re-vamp the Mentee and Mentor forms to include the input fields as listed. Since Eric was working on separating the MentorshipForm.js into a form for Mentees in specific, and another for Mentors, he could potentially refine the fields for each. **Should be completed by the end of this week's sprint [Monday]**
11/10-02. The team should decide whether we want to remove the time-zone dropdown and replace it with obtaining a user's location. Potentially, we could keep the time-zone dropdown and add a field to obtain the user's location. We could present this during next week's client meeting, and inform the client of associated pros and cons to determine if we replace time-zone with user location. **This should be discussed with the team, and decided on by Wednesday so we can incorporate changes if necessary**
11/10-03. The team should discuss possible ways of obtaining Mentor availability to send to an accepted Mentee, where the Mentee can then book a slot from the Mentor's available time slots. **Ideally, the team will brainstorm some ideas and come up with a solution that can be implemented by Thursday morning at the latest**
11/10-04. Import Firebase into App.js **Either JP or Eric can do this when working on a task for the back-end**
11/10-05. Research how a react component can be turned converted into an iFrame tag. **Katrina and/or Aleks can investigate**
