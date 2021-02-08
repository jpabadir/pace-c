# PACE GROUP C

# NINTH CLIENT MEETING 11/17

## 17 NOVEMBER 2020 / 9:00AM-9:36AM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Philip O., Anthony B., Shannon F.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

- 11/10-01. Separate the Mentee and Mentor forms. **Completed**
- 11/10-02. The team should decide whether we want to remove the time-zone dropdown and replace it with obtaining a user's location. **Completed, will be mentioned to the client**
- 11/10-03. The team should discuss possible ways of obtaining Mentor availability to send to an accepted Mentee, where the Mentee can then book a slot from the Mentor's available time slots. **In progress**
- 11/10-05. Research how a react component can be generated into an iFrame tag. **Will likely be investigated after peer testing #1 milestone**

#### NEW BUSINESS

1. Do "Stand Up" from the week.

- Mention that last week's sprint consisted of working on the following tasks (the Github Project Board will briefly be shown at this time. The application will likely be displayed at this time as well):

  - Adding Login functionality.
  - Implementing the 'forgot password' feature.
  - Saving the information from a submitted form into Firebase.
  - Building a completion page after registration.
  - Sending an email to a created user to validate their account after signup.
  - Creating the UI for how mentees (suggested and accepted) are displayed to the logged in Mentor.
  - Refining the UI for how a Mentor interacts with the system when logged in (React routing for various tabs).
  - Styling the login form.
  - Planning for Peer Testing

- Brief the client on this week's sprint plan:
  - Pulling mentee information into the Mentor UI.
  - Adding functionality to the 'accept' and 'decline' buttons for Mentee requests.
  - Refining both forms to include a description field, as well as skill fields, and sending that to the DB.
  - Styling the Mentor UI.
  - Sending a welcome email to Mentees after form submission.

2. Discuss "Road Blocks"

- Follow-up on whether the client received the email from Thursday morning discussing the suggested UX flow for gaining availability, as well as if there's project budget.
- Inform the client that the course requires us to conduct heuristic evaluations, so our focus this week will be on finializing functionality by Friday. The next week will be spent conducting peer evaluations.
- A video demo of our progress will be submitted on November 25th, and that is a deliverable the client will be ranking.

### NOTES

Similar to last week, Pace A's client liaison could not attend the meeting and didn't have a representative. Pace B's liaison was waiting for another team member to join. So, Pace C commenced the meeting.

Our project board on Github was displayed to show the client the tickets that we completed in the last week, as well as what we're hoping to achieve for next week. To visualize the progress in our application, the application was run, and the client was walked through each component (i.e creating an account through the Mentor Form, receiving a verification email, logging in, changing passwords, and our plans for the Mentor UI).

The client's recommended modifications after the walkthrough are as follows:

#### Mentor Form

- It could be beneficial to have a "Confirm Password" field, where the user is required to enter the same password as the 'Password:' input field before form submission.
- Remove "Please Select/Enter Your" wording from the Time-Zone and Password fields, and just have it say: "Time-Zone" and "Password".
  - The same note applies to the MenteeForm

#### Login

- As a general note about react routing, the routes are often _lowercase_, so she recommends following that convention (i.e Rather than http://localhost:3000/Auth/MentorTutorial, it should be http://localhost:3000/auth/mentortutorial)
- The client recommends creating a link out of the words "Forgot Your Password?", routing to a 'Forgot Your Password' page, where the user is then required to enter their email address, and then sends an email to that user to reset their password.

#### Logged in Mentor

- The client recommends not investing too much time into the 'Tutorial' Page, since things will likely change throughout our development (and it might not be neccessary for the client's overall product). However, for the sake of Welcoming/Informing the user of basic functionality for peer testing, it's ok to keep that tab.
- The client would like to see the logout button in the top right corner.
- For Suggested Mentees, when it comes to displaying the 'Mentee Card', the client would prefer for the 'Accept' and 'Decline' buttons to be under the 'description' section, in a separate divider. She also thinks that the instructions could be removed later on, and to just add the word 'Accept' infront of the checkmark button, and 'Decline' infront of the X.

The client was then informed about the upcoming peer testing milestone, and how we hope to achieve completing all of our tickets under the 'To Do' of our project board on Friday. The client is aware that we will be creating a Video Demo of our project thus far, and that is something that she will be ranking among the Pace groups. When we are conducting our peer testing sessions next week, the client recommends creating a ticket of that so that she's aware of what we're working on during that week's sprint, and that it's ok if development slows while we focus on deliverables that the course is requiring.

The client wasn't able to respond to the email sent in regard to obtaining user availability/project budget, but she will respond as soon as possible.

The meeting was then open for Pace B to discuss what they did in the last week. They didn't display their project board or application to the client. But, they're hoping to work on being able to create users and completing a lot of the functionality for next week. Anthony was working on setting up Firebase from last week, and mentioned deployment. Rather than having users remote control to their device, and using the application via localhost, they want to deploy their website via a firebase link, so that they can send that to their peer testing participants.

Since there was time left in the meeting, Katrina asked Shannon about the 'location' field. Her rationale behind that was that time-zones could be handled by the calendar feature. 'Location' is essentially the same thing as a time-zone (The client thinks that 'Location' could be a more friendly term for the user). For the upcoming deadline, leaving the current time-zone setup as is fine.

Overall, the client is impressed and pleased with our progress.

### ACTION ITEMS

- 11/17-01. Since we were only able to identify one task for Aleks for this week's sprint, another task could be incorporating the client's feedback into our project (besides the user cards, since Katrina can incorporate those changes when she creates the card component).
- 11/17-02. Katrina will relay the information to our team once Shannon replies to our email.
