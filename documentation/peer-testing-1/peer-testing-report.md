# Pace C Peer Testing Milestone #1

## Brief Description of The System

[Placeholder until a description has been created] - ((common - JP))

## Current Set of Features Available in the System

The list of features which were tested within our system during the peer testing sessions are as follows:

1. **Sign-up as a Mentor**

- The 'Mentor Form' tab routes to a static form which requires users to input their organization, name, email, time-zone, password, top 3 skills, and a description.
- If the form is submitted without input, red error messages are displayed to bring the user's attention on how to remediate the error.
- Tool tips are utilized on the Organization, Password, and Skill selection fields to provide the user with additional information about those fields.
- The email and password fields must follow a specific format in order for the form to be submitted.
- Upon successfully filling out the form, a new Mentor user is created in our database.

2. **Verify Mentor Email**

- Upon successful form submission, users receive an email to validate their account.

3. **Login as a Mentor**

- The 'Login' tab brings the user to a page where they must enter their email and password credentials.
- If an email is entered which isn't in our database, the user receives an error message in the form of a pop-up.
- If an email is entered which is associated to a user in our database, but the password is incorrect, a pop-up will be displayed to the user to indicate that an incorrect password was entered.
- Once the user has submitted correct credentials, they're able to login.
- The 'Create Account' button directs the user to the Mentor Form.

4. **Forgotten Password**

- The 'Login' page has an option for users to reset their password. If an email correlating to an existing user is entered, the user is notified through a pop-up to check their email address to reset their password.
- Upon opening the link within the password reset email, the user is redirected to a new tab to fill in a password field. This password follows the same convention as the Mentor Form (i.e a password must be greater than 8 characters).
- Once reset, the Mentor user can login with their new password.

5. **Interact with the Mentor UI and Accept or Decline Mentee Requests**

- Logged in Mentors can view the 'Mentor Tutorial' tab which provides a brief description of how to interact with the system.
- The 'Suggested Mentee' tab displays mentee requests. If the user declines a request, the mentee is removed from the display. If the user accepts the mentee request, they can view that mentee in the 'Accepted Mentee tab'.

6. **Logout**

- Logged in Mentors are able to logout from their account by clicking on the 'logout' button in the top right corner. Once pressed, the user is redirected back to the login page.

7. **Register as a Mentee**

- The 'Mentee Form' tab routes to a static form which requires users to input their name, email, time-zone, top 3 skills, and a description.
- If the form is submitted without input, red error messages are displayed to bring the user's attention on how to remediate the error.
- The email field must follow a specific format in order for the form to be submitted.
- Once filled out correctly, a new Mentee user is created in our database.

8. **Welcome Email for Mentees**

- Mentees receive an email welcoming them to the program after filling out the mentee form.

## Number of Participants - ((individual))

In total, \_\_\_ individuals took part in our peer testing sessions. The members in the table are labelled according to how they were entered in the [sign-up document](https://docs.google.com/spreadsheets/d/1hl-bVGtlN1JMaNCbpx4tqgj7R5T_lkqo-KdooR9Aevk/edit#gid=1784474127). A table of this can be seen below:
| Pace C Team Member Conducting the Session | Participant's Name | Completed? [Link to video if yes, if partially complete state why, or if the session wasn't conducted say no] |
|-------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------|
| JP | | |
| JP | | |
| Katrina | Jeff Hatton | https://1drv.ms/v/s!AkdNuTe3o4iRjSWDMI7EZIhrg-0- |
| Katrina | Matthew Currie | https://1drv.ms/v/s!AkdNuTe3o4iRjSarlnj12ptd4UVU |
| Aleks | | |
| Aleks | | |
| Eric | | |
| Eric | | |

## User Groups and List of Tasks that Participants Completed

The two user groups within our system are Mentors and Mentees. The list of tasks participants completed according to each user group were as follows:

## Tasks as a Mentor

1. A Mentor is required to fill in the Mentor Form to provide information about themself and to create an account. From the Login page (which the running application currently displays), navigate to the Mentor Form.
2. By looking at the form, understand what content is required to be filled in.
3. Leave some required fields blank while filling out others. Try to submit. Do the displayed errors make sense? Do displayed errors by leaving required fields blank provide sufficient information to make the correction of these errros simple to fix?
4. View the 'congratulations' screen after successfully submitting the mentor form. Follow the prompts to complete your registration (i.e check your email for the verification email to verify your account, follow the hyperlink on the word 'here').
5. Mentors are automatically logged in after form submission. Explore what a logged-in mentor can do by navigating through the various tabs.
6. Confirm that the 'Accepted Mentees' tab does not display any mentees.
7. Go to the 'Suggested Mentees' tab to view mentee requests. Accept a mentee request, and decline a request.
8. Confirm that the 'Accepted Mentees' tab displays the mentee request that you accepted.
9. Logout.
10. Login using the credentials from filling out the mentee form. Logout again.
11. Reset your password by clicking on the 'Forgot your password'? link. Enter your email in the field, click submit, then navigate to your email. Follow the link to reset your password.
12. Login using your new credentials. Verify that your accepted mentee is still being displayed in the 'Accepted Mentees' tab. Logout.

## Tasks as a Mentee

1. Navigate to the 'Mentee Form'.
2. Leave some required fields blank while filling out others. Try to submit. Fix any errors from incorrectly formatted fields.
3. Follow the instructions on the 'Congratulations' page after successfully submitting the form (i.e check your email to confirm that you've received a welcome email).

## List of Issues Discovered and Their Priority - ((individual))

#### High

- Include a red asterisk beside the input for the 'Top 3 skills' label.

#### Medium

- Add styling (such as bolded words) to draw the user's attention to important information on the 'congratulations' screens (such as to check their email).
- Add more colour to the website.

#### Low

- Have the time-zone field be highlighted in red since it's a required field, and the other required fields are also highlighted in red if a value is missing.

## Quantitative Data - ((common - JP))

[This would most likely come from the Google Forms which outlines the 10 point heuristics.]

### Testimonials from the Participants to Explain the Graph - ((indivial - unassigned))

- To demonstrate how the system has mechanisms to help users against making mistakes, users said the following:
  - "Oh cool! It [the input fields] does the error highlighting [when required fields are left blank]!"
  - "I liked the simplicity of the system. I was able to make mistakes without the system breaking or throwing unexpected errors."
- When interacting with the form, one user said: "Oh, I like that this [the fields to select skills] is a dropdown! Nice!". This is an example for how users are able to maintain control and have freedom to do what is needed.
- In regards to the system being "simple, clear, and aesthetically pleasing", when viewing the Mentee requests in the "Suggested Mentees" tab, a user said the following: "[the Accept and Decline buttons] are appropriately and intuitively defined, with the accept button containing a green checkmark, and the decline button having a red x".
