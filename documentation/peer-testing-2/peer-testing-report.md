# Pace C Peer Testing Milestone #2

## Brief Description of The System

Our system, MentorMatch, allows people to sign up to be matched with a mentor, who can teach them skills they are interested in. The system supports three types of users. First, there are Admins. Admins register their organization by creating an account on our platform. To register, they need to provide the name of the Organization that they're from, as well as their name, email address, and a password. Once registered, an Admin can invite Mentors to join the platform, and see which Mentor requests are pending as well which Mentors are actively using the system. Admins can view the Mentor Form that requested Mentors receive the link to in email upon being requested, as well as the Mentee Form, which they can generate an iFrame tag for to embed on their Organization's public website. The second user type are Mentors. Mentors fill out the Mentor Form once requested by an Admin, and they provide information about the skills they are able to teach people, the organization they belong to (this is because MentorMatch aims at eventually being used by organizations which can customize the platform to their needs), when they're available to mentor, and some basic information about themselves. Mentors are able to view mentee requests, and decide whether to accept or decline them. The third user group are Mentees. Mentees register through the Mentee Form, which can be accessed through an Organization's public website. They provide the skills that they want to be Mentored in as well as some basic information about themself. Based on this information, MentorMatch will suggest mentees to mentors based on common skills and time zones. Once a Mentor accepts a Mentee request, that Mentee will receive an email containing information about the Mentor who accepted them. From there, the two user types can correspond through email to arrange meetings.

## Current Set of Features Available in the System - Katrina

The list of features currently within our system is as follows:

1. **Register as an Admin**

- The Admin/Organization form can be located by clicking the 'Create Account' button on the login page.
- All fields on this form (Organization, name, email, password, and confirm password) are required. Form submission will be unsuccessful if any of these fields have not been entered according to the requested format.
- An email not currently in our database must be entered to successfully register (i.e a user can't sign up to be a Mentor and an Admin with the same email).

2. **Request a Mentor**

- Logged in Admins are able to enter an email address in the 'Mentor's Email Address' input field within the 'Manage Mentors' tab.
- Once an email address has been provided, an email will be sent to the address that the Admin user entered.

3. **Embed the Mentee Form**

- By going to the 'Mentee Form' tab, Admins can view the Mentee form.
- Clicking on the 'Generate iFrame Tag' button displays an iFrame tag to the admin. The admin can then copy and paste this tag into the source code of their organization's public website to embed the Mentee form onto their website.

4. **View Mentor Form**

- By going to the 'View Mentor Form' tab, Admins can see the form requested Mentors receive.

5. **Sign-up as a Mentor**

- Once requested by an Admin, Mentors receive an email containing a link which routes the user to the 'Mentor Form'.
- The Mentor form is a static form which requires users to input their organization, name, email, time-zone, password, top 3 skills, and a description.
- If the form is submitted without some of its fields being filled, red error messages are displayed to bring the user's attention on how to remediate the error.
- Similar to the Admin form, tool tips are utilized to provide additional information about the field. Specific to the Mentor form, tool tips are on the Organization, Password, Availability, and Skill selection fields.
- The time-zone field populates the dropdown with time-zones from a JSON file. These options can either be selected via the dropdown list, or by the user typing into the field and selecting the field which matches what they typed.
- The email and password fields must follow a specific format in order for the form to be successfully submitted.
- For this iteration, only Google Calendar links are accepted in the Availability field.
- The skills input field is a multiselect field and limits the user to providing a maximum of three skills.
- Upon successfully filling out the form, a new Mentor user is created in our database.

6. **Match Mentors and Mentees**

- Upon login, the Mentor's mentee requests are updated. These matches are based on the number of skills in common and the least difference in time-zone.

7. **Interact with the Mentor UI and Accept or Decline Mentee Requests**

- Logged in Mentors can view the 'Mentor Tutorial' tab which provides a brief description of how to interact with the system.
- The 'Suggested Mentee' tab displays mentee requests.
  - If the user declines a request, the mentee is removed from the display. The next time the user logs in, the Mentee request that they've declined will no longer be suggested
  - If the user accepts the mentee request, they can view that mentee in the 'Accepted Mentee' tab.

8. **Verify Email After Registering**

- Upon successful form submission of the Mentor and Admin/Organization forms, users receive an email to validate their account.

9. **Resend Verification Email**

- A registered user is unable to access features of the website associated with their user type until they verify their email address. By clicking on the 'Resend Verification Email' button, another verification email is sent to that user's email address.
  - These requests must happen a minute apart, otherwise the user will receive a popup notifying them that they've sent too many requests, and to check their email's inbox and junk folder.

10. **Login**

- The 'Login' tab brings the user to a page where they must enter their email and password credentials.
- If an email is entered which isn't in our database, the user receives an error message in the form of a pop-up.
- If an email is entered which is associated to a user in our database, but the password is incorrect, a pop-up will be displayed to the user to indicate that an incorrect password was entered.
- Once the user has submitted correct credentials, they're able to login.
- The 'Create Account' button directs the user to the Admin/Organization Form.

11. **Forgotten Password**

- The 'Login' page has a link for users to reset their password.
- If an email correlating to an existing user is entered, the user is notified through a pop-up to check their email address to reset their password.
- If an email address that isn't in our system is entered, a pop-up is displayed informing the user of such.
- Upon opening the link within the password reset email, the user is redirected to a new tab to fill in the password field.
- Once reset, Mentors and Admins can login with their new password.

12. **Logout**

- Logged in Mentors and Admins are able to logout from their account by clicking on the 'logout' button in the top right corner. Once pressed, the user is redirected back to the login page.

13. **Register as a Mentee**

- The 'Mentee Form' tab routes to a static form which requires users to input their name, email, time-zone, top 3 skills, and a description.
- If the form is submitted without some of its fields being filled, red error messages are displayed to bring the user's attention on how to remediate the error.
- The email field must follow a specific format in order for the form to be submitted.
- Once filled out correctly, a new Mentee user is created in our database.

14. **Welcome Email for Mentees**

- Mentees receive an email welcoming them to the program after filling out the mentee form. This email states that Mentees will be notified via email once a Mentor has accepted their request.

15. **Notify Mentees once a Mentor Accepts their Request**

- Mentees receive an email notifying them once a Mentor accepts their request. This email contains the Mentor's name, skills the mentor can provide mentorship in, their email address, calendar of available timeslots, and the mentor's description they provided upon registration.

16. **Book Appointments and Contact Mentors**

- Once Mentees receive the email notifying them that they've been matched, they can book appointments through the Mentor's calendar link and contact them through email.

## Number of Participants - Everyone

In total, **\_** individuals took part in our peer testing sessions. The members in the table are labelled according to how they were entered in the [sign-up document](https://docs.google.com/spreadsheets/d/1hl-bVGtlN1JMaNCbpx4tqgj7R5T_lkqo-KdooR9Aevk/edit#gid=1784474127). A table of this can be seen below:
| Pace C Team Member Conducting the Session | Participant's Name | Completion status and video link |
|-------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------|
| JP | Andrew Dai | Thinkaloud, completed. https://youtu.be/eoLe0BolW7g |
| JP | Jaden Balogh | Thinkaloud, completed. https://youtu.be/pixJKiM8qZg |
| Katrina | Jeff Hatton | Thinkaloud, unable to complete. The participant did not join the scheduled session on Feb.26 from 8:30AM-9:30AM. https://drive.google.com/file/d/1k6zD8HmNpZ2L2Y3mqbg3Ijo-FtYthCcN/view?usp=sharing|
| Katrina | Matthew Currie | Remote, completed. https://drive.google.com/file/d/1o_ntBiBYjW7zKHu8OgcnYmwjNKb-yX5o/view?usp=sharing |
| Aleks | Taha Ilyas | Completed. Thinkaloud: https://youtu.be/fkxPLrxQeDo |
| Aleks | Aaron Mahnic | Person did not show up to the assigned testing time: Feb.25 from 9:30PM-10:30PM. Thinkaloud: N/A |
| Eric | Henter Yang | Completed. Thinkaloud: https://drive.google.com/file/d/1_FdA0rP5zLAmFA0Aos2wamYdOZxMxHJd/view?usp=sharing|
| Eric | Shawn Zhao | Completed. Remote: https://drive.google.com/file/d/1-0M3x3Uhek9k9XlFJKXyyF9WFvIFvIFR/view?usp=sharing|

## User Groups and List of Tasks that Participants Completed - Katrina

Mentor Match supports three user types: Admins, Mentors, and Mentees. The functionality for each of these users, which participants completed during the peer testing sessions is as follows:

## Tasks as an Admin

1. View the landing page of the application. See what you can interact with as a user who isn't logged in.
2. Create an account by filling in the Organization sign-up form.
3. Notice how the 'Login' tab now changes to include part of your email address. Click on this tab.
4. View your email to see if you've received a verification email (this could be in your junk folder or inbox). Do not click this email. Instead, click the 'Resend Verification Email' button (Note: the verification email will send once a minute has passed from the first verification email being received).
5. Verify your email. Go back to our application and refresh the page. You have now successfully registered your Organization on Mentor Match, and are an Administrator for the Organization in our system.
6. On the 'Manage Mentors' tab, type your email address into the 'Mentor's Email Address' field, and click 'Request Mentor'.
7. Verify that you receive an email, indicating that you've been invited to be a Mentor.
8. View the 'Mentee Form' tab. There are two main components within this tab: The 'Generate iFrame' button, and the Mentee Form. If you click on the button, an iFrame tag will be created. If you copy and paste this tag into the source code of a public website, the Mentee Form (as seen below the button) will be placed onto the site. This is how Mentees will register.
9. Click on the 'Mentor Form Tab'. This is where the link that requested Mentors receive in an email will be redirected. From here, Mentors can register for an account.
10. Logout.

## Tasks as a Mentor

1. Access the Mentor Form through the email link that you receive from being invited by an admin.
2. Try to register with the same email address that you used to become an admin. Notice how this results in a popup, requiring you to provide a different email address.
3. Provide a link to any website (for example: https://www.ubc.ca/) in the 'Availability' input field. Notice how this is not an accepted format. Try a Google Calendar link instead (https://calendar.google.com/calendar/u/0?cid=ZGZ1a24wN2M4M21zaGRqNGg5NzhjZ2l0aWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ).
4. Once the form has been submitted successfully, verify your email.
5. Navigate to your account by clicking on the tab with part of your email address in it, and view what a logged in Mentor sees.
6. Go to the 'Suggested Mentee' tab.
7. Decline a Mentee, making note of their name.
8. Logout.
9. Login.
10. Go to the 'Suggested Mentee' tab again and notice how the Mentee you declined is no longer recommended.
11. Accept a Mentee.
12. Navigate to the 'Accepted Mentee' tab. See how the user that you've accepted is now in this tab.
13. Logout.
14. When a Mentee requests a meeting during an available timeslot, reflect that the time they've requested is no longer available for other Mentees.

## Tasks as a Mentee

**Please note:** Since we used the same peer testers as the first peer testing milestone, participants were not required to register using the Mentee form.

1. View the email that will be received once a Mentor accepts your request.
2. Notice how the Mentor's email address is within that email, and you can now correspond with that Mentor by using their email address.
3. View the Google Calendar link (https://calendar.google.com/calendar/u/0?cid=ZGZ1a24wN2M4M21zaGRqNGg5NzhjZ2l0aWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ) and look at the times that the Mentor is available.
4. Let the Mentor know that you wish to meet with them during one of the timeslots that they're available (either by emailing them directly or using the Google Calendar email feature (i.e by clicking on the envelope)).

## List of Issues Discovered and Their Priority - Everyone

#### High

- Server sometimes accidentally shut down for unexpected reason.
- Mentor user should not have to logout and login to update their suggested mentees
- Modify the wording of the 'Availability' field so that it's clearer to the user that they should provide a link.
- There is an infinite loop somewhere in the code that causes the DB to get filled with wrong data and the front-end to crash.
-

#### Medium

- Illustration for avaliability field should be more specific. (contain a picture of an example link in the hint)
- The purpose of mentee form tab and view mentor form tab should be clarified.
- The name of tabs for viewing mentee and mentor forms are not consistent.
- The page is not routed after finishing filling AdminForm.
- After signing up as a mentor, we are routed to an empty page.

#### Low

- One of the people testing said it would be nice to let mentees add a picture of themself on their suggested/accepted mentee card
- Need an extra tab for mentors to view the history of their declined mentee.
- It might be useful to have the user's type displayed on the page when they're logged in (i.e explicitly stating whether the user is an Admin or Mentor).
- On the 'Mentor Tutorial' page, it could be nice to have screenshots to visualize how to interact with the system as a mentor, rather than just descriptive text.
- In mentor tutorial, should have a button underneath each category to take the user to the right tab.

## Quantitative Data - JP

**To be completed after the peer testing sessions**

### Testimonials from the Participants to Explain the Graph - Everyone

**To be completed after the peer testing sessions**

- After finishing filling AdminForm and verfying new account, user was confused for what to do next because the page remained on 'verification email has been sent'.
- User tried to fill the sample forms of mentor and mentee as an admin, which should not happen.
- "what about google.com" a user said when he noticed that he needed to enter a URL in the availability field, which indicates that using a tooltip to hint to users is not specific enough.
- "How can I accept mentees" user said when he logged in as a mentor for the first time. The suggested mentees were not updated yet when he clicked on the 'suggested mentee' tab.
- User was confused and did not know what was happening when he was asked to relogin and logout for several times. This because the backend server was somehow not working accidentally.
- "I don't have a place to see who I just declined" user said when he was trying to find a history of who he just declined.
- "Maybe I need a link to go to home page" user said when he finished reseting password but needed a button or link to go back to home page.
- [After clicking the 'Generate iFrame Tag' button] "Oh cool! That's really cool. So you can embed this on a website?"
- In regard to the system being "simple, clear, and aesthetically pleasing", a user said the following after declining a Mentee request: "Oh nice, that's really cool how it disappears like that."
- To demonstrate how our system allows for "visibility of system status", a user noted how the pop-up informed them of how they were unable to successfully register as a Mentor with the same email address that they used for their Admin account.
- "Very clean design"
- "Aesthetically pleasing"
- "Tasks are easy to navigate and easy to complete"
- "The tutorial and home page are very helpful for people who just signed up and wants to learn how the website works"
- "Very cool design. The design of how the mentors accept and decline mentees is very practical"
- "I feel like [being able to see this form] didn't add too much to my understanding of the process"
- "I didn't feel to confused, just disappointed"
- "The site doesn't have the highest quality redirection"
- "Maybe the page failed to load, I'm not quite sure at this time."
- "I thought it was pretty reasonable, though the navbar is a bit confusing"
-
