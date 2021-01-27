# PACE GROUP C

# FOURTEENTH CLIENT MEETING 01/27

## 27 JANUARY 2021 / 12:00-1:10 PM/ VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Philip O., Maya T., Shannon F., Christian P., Anthony B.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

- 11/10-03. The team should discuss possible ways of obtaining Mentor availability to send to an accepted Mentee, where the Mentee can then book a slot from the Mentor's available time slots. **Complete**
- 11/10-05. Research how a React component can be generated into an iFrame tag. **Complete**
- 1/26-01. Katrina will update the team on Discord when the client responds. Depending on the response, another meeting for this week could potentially be booked, or Katrina can email the client any questions that we have. **Complete**

#### NEW BUSINESS

1. Conduct "Stand Up".

- Our Github project board will be displayed at this time to showcase that we completed unit testing for most components, and have worked towards exploration tasks for creating the matching algorithm, embedding the mentee form in an iframe, and ways of obtaining Mentor availability. The application will also be run on the 303-make-routing-and-navbar-make-sense branch to showcase the work that was done, as well as to confirm the logistics discussed within documentation/updated-system-description.md. The email that mentees receive once their request has been submitted will also be shown.

2. Discuss "Road Blocks"

- To ensure development is progressing in the right direction, a better understanding of the following will be obtained:
  - When it comes to unit testing, what is the client's preferences/list of priorities?
  - Is the system layout correct? For a non-logged in user, what should they see?(Currently, The Navbar contains the "Home" and "Login" buttons. Eventually, logged in Admins could view Mentee and Mentor Form tabs in addition to the "Home" tab. Should a logged in Mentor just see the sub-navbar (tutorial/suggested/accepted tabs)?).
    - Should users who access our website see a list of organizations currently registered? If so, how should this be displayed?
    - How should Admins register and interact with our system?
      - How should they sign-up? (would they click the 'Create account' button on the login page, which takes them to an Admin signup? To prevent duplicate organizations from registering: Should the 'Organization' text-field be replaced by a dropdown to view currently registered organizations, with the option to enter a new one?)
      - Should admins be able to invite Mentees via an email (like they can with Mentors?)

3. Inform the client of semester logistics.

- Our last client meeting could potentially be on the last day of class (April 13).
- The client will be ranking the second peer testing milestone at the end of February/beginning of March, as well as our final report and demo in April.

### NOTES

January 26: Katrina, Philip, and Maya joined the meeting by 9AM, and waited for the client to join. At around 9:15AM, Maya decided to email the client to see if she would be able to attend the meeting. By 9:50AM, the client had not responded to Maya's email, or joined the Google Meets call. Philip emailed the client at 9:52AM with Maya and myself CC'ed to check-in. Depending on if the client responds, we might be able to reschedule this week's meeting, or be able to email any questions that we'd like addressed before next Tuesday. Hopefully the client is doing well.

January 27: Since the client missed yesterday's meeting, it was rescheduled for January 27th. Katrina started the meeting by showing our project board, and running through the changes to our application. The client's responses to questions our team wanted clarification on are as follows:

- Do we need to do Firebase mocking (for example, to test user login)?

  - The client mentioned that once we learn how to mock our Firebase functions with Jest, it should be simple to do. However, there's no minimum amount of tests that she is requiring (our tests don't have to have 100% code coverage), and there's not any specific components that she would deem as crucial to test.

- When it comes to unit tests, how complete does our testing have to be? What kind of coverage does the client want?
  - As long as we have a standard, and we ensure that features are functional before merging, that should be sufficient.

Do we need to do any other kind of testing? Smoke testing, etc.

- Unit tests with Jest should suffice. If we have time, we could perform additional tests. However, to summarize the above: _testing isn't a high priority for the client_. If there are members on the team who are interested in learning more about testing, the client notes that learning how to test is an important skill for the computer science industry. So, if any members on our team want to further their knoweldge in testing, they can do so, but to restate: it's not on the top of the list as a priority.

Should users who access our website see a list of organizations currently registered? If so, how should this be displayed?

- Users do not have to be able to view which organizations are currently using the platform. In the future, our website's landing page (currently the 'Home' tab) could display registered organization's icons, but since organizations are dynamic, it could add a layer of complexity that isn't necessary for the M.V.P. Something that we could do later on would be to include a general description of our website, as well as some of the features that are availble with pictures. As an example, view the [Pace website](https://www.pacerevenue.com/).

Can anyone register their organization?

- Yes.

What should Admins be able to view (i.e currently active mentor and mentees, or just be able to view the forms and invite mentors?)?

- Admins should be able to view the Mentor and Mentee forms, as well as have the ability to email invite Mentors to the Mentor form. It would be nice if we could view a list of active Mentors, as well as pending Mentors (those who have been invited to register, but that haven't yet).
- As a potential bonus feature: We could allow Admins to have the ability to 'opt-in' to be a Mentor.

Is there any validation for the Admin form to ensure the individual is from the organization that they say they’re from? Should we worry about duplicate organizations?

- For now, we do not have to worry about the possibility of duplicate organizations registering (i.e If someone from Girls in Tech has already registered, it's fine if someone else later comes along and registers Girls in Tech again). We also do not have to validate that the domain name of the email address entered is associated to the inputted organization (i.e user@gmail.com would be accepted, it doesn't have to be user@girlsintech.com).
  - Sidenote from Katrina (not yet discussed with the client): I am completely aware of the security risks associated with not validating an admin's/mentor's identity. It's definitely not secure to go by the honor system in hopes that individuals who claim to be from a company actually are. If by the end of the project we're not able to circle back to this to find a way to make our setup more secure, I would advise highlighting this in our final report as a disclaimer.
- **The only thing we have to ensure is that the email entered does not already exist within our database**.
- In regard to what information we should be gaining from Admins, we should have input fields to obtain: Their organization's name, the user's name, the user's email address, a password, and their confirmed password.

As part of the MVP, do we still need to allow Admins to edit the fields of the form?

- No, we do not have to worry about making the forms editable by an admin. As long as we can embed the Mentee form, the client will be happy. If we have enough time, allowing admins to edit the form could be a bonus feature.

#### Potential changes that we could incorporate as mentioned by the client:

- Rather than the text on the landing saying 'Home', we could change it to stay 'Mentor Match'.
- Within the email that a Mentee receives once a Mentor has accepted their request, we could also include the description that the Mentor entered on their form.
  - If we decide to do this, we should also indicate to the Mentor via a tooltip that the description that they type will be shared with Mentees that they accept.
- (Not mentioned this week, but from last week):the 'Login' card component could also contain a white background like the cards in the 'Suggested' and 'Accepted' Mentee cards.

Pace B then demonstrated their application (the ability to login and logout, their placeholder for the logged in Mentor page, and the ability to send users an email after clicking the 'submit' button on their Mentee form.).

Pace A then showed a prototype to the client to better understand the flow of the application.

The client restated that their list of priorities is as follows:

1. Allow the Mentee form to be embeddable in an iFrame tag.
2. Implement the Mentee matching algorithm.
3. Gain mentor availability.

### ACTION ITEMS

1/27-01. Wednesdays at 12pm PST seem to be a better time to hold meetings for the client. We'll try having future meetings at this time instead.
