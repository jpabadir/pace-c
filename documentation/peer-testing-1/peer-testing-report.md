# Pace C Peer Testing Milestone #1

## Brief Description of The System

Our system, MentorMatch, allows people to sign up to be matched with a mentor, who can teach them skills they are interested in. In its current iteration, the system supports two types of users. First, there are mentors. They can fill out a form, where they will enter the skills they are able to teach people, the organization they belong to (this is because MentorMatch aims at eventually being used by organizations which can customize the platform to their needs), and some basic information about themselves. Then, there are mentees. Mentees can also sign up on the platform, and they also enter the skills they want to be taught and some basic information. Based on this information, MentorMatch will suggest mentees to mentors, which they can choose to accept or reject. If a mentee is accepted by a mentor, they receive an email to let them know and put them in touch with the mentor.
Note: the matching algorithm and the sending of an email to a mentee once they are accepted by a mentor are still to be implemented.

## Current Set of Features Available in the System

The list of features which were tested within our system during the peer testing sessions is as follows:

1. **Sign-up as a Mentor**

- The 'Mentor Form' tab routes to a static form which requires users to input their organization, name, email, time-zone, password, top 3 skills, and a description.
- If the form is submitted without certain fields being filled, red error messages are displayed to bring the user's attention on how to remediate the error.
- Tool tips are utilized on the Organization, Password, and Skill selection fields to provide the user with additional information about those fields.
- The email and password fields must follow a specific format in order for the form to be successfully submitted.
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
- Upon opening the link within the password reset email, the user is redirected to a new tab to fill in a password field.
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

## Number of Participants

In total, \_\_\_ individuals took part in our peer testing sessions. The members in the table are labelled according to how they were entered in the [sign-up document](https://docs.google.com/spreadsheets/d/1hl-bVGtlN1JMaNCbpx4tqgj7R5T_lkqo-KdooR9Aevk/edit#gid=1784474127). A table of this can be seen below:
| Pace C Team Member Conducting the Session | Participant's Name | Completed? [Link to video if yes, if partially complete state why, or if the session wasn't conducted say no] |
|-------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------|
| JP | Andrew Dai | Thinkaloud session, completed <br> https://youtu.be/kXaaTNM4xDw <br>(A small part of the video was cut out because I had to stop another app running on my machine.) |
| JP | Jaden Balogh | Remote session, completed <br> https://youtu.be/gE7sHhqmTF8 |
| Katrina | Jeff Hatton | Thinkaloud session, completed <br> https://1drv.ms/v/s!AkdNuTe3o4iRjSWDMI7EZIhrg-0- |
| Katrina | Matthew Currie | Remote session, completed - https://1drv.ms/v/s!AkdNuTe3o4iRjSarlnj12ptd4UVU |
| Aleks | Aaron Mahnic | Thinkaloud session, completed <br> https://drive.google.com/file/d/1uXFvFiiN1yc6-SzBoKF5isCCfTlds3us/view?usp=sharing |
| Aleks | Taha Ilyas | Thinkaloud session, completed <br> https://drive.google.com/file/d/1Yzp2Yam7Fi3GFtrNtAnT3c7f9rWOQf8S/view?usp=sharing |
| Eric |Shawn Zhao | Remote session, completed <br> https://drive.google.com/file/d/1ShiqTAuYx-A4fGYGX3kxUzmvrkmj7XxW/view?usp=sharing|
| Eric |Henter Yang| Thinkaloud session, completed <br> https://drive.google.com/file/d/1BUfx8tWtxhA7n3y22yBHnbYKdaHj22cf/view?usp=sharing|

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

## List of Issues Discovered and Their Priority

#### High

- The default option of timezone field cannot be recognized when selected.
- Timezone field does not "glow" red if the user did not enter anything, it only shows the text "please select your time-zone". (mentor and mentee form)
- There should be a confirm message at each important button-clicking like clicking on submit buttons.
- A help page or a FAQ page should be built.
- When signing in, if the user does not enter anything for email and password, it just says "please input something" for both fields, and then a pop-up that says "the email address is badly formatted" however both fields are blank. (login page)
- From the above point, we should change "please input something" to "please input password" or "please input email", for the red text that pops up at the bottom of the field if the user does not enter an email address in the login page. (login page)
- If the user enters a incorrect username and password, the website creates a popup that is "wordy" and maybe difficult to understand. (login page)
- We should make different messages depending on of if the user did not enter any information in login screen (password/email) or if the user entered information but the information is wrong/does not have an account. (login page)
- From above points, change the login pop up messages depending on what is and is not filled in. Change the red text that popups at the bottom of the field depending on what is and is not filled in. (login page)
- When resetting the password using the forgot password feature, we do not enforce password constraints (we have a minimum length rule that is enforced on the sign up form)
- The password constraints should be displayed without having to hover over the information icon
- The form can be blocked frm being submitted with an error showing on the timezone, even though the user has filled the timezone field.
- People are confused by the skills field, they often think they can type in there, while, in fact, it is a dropdown menu.

#### Medium

- The suggested and accepted mentee pages take some time to load, a loading message should display.
- participant took longer time to find logout button than expected.
- participants always took longer time to find out what to do next. Probably need a tutorial for beginners.
- It is not natural to still be able to see the word "login" after the user is already logged in.
- It is confusing for mentors whether they are accepting / rejecting requests that mentees put in manually to them, or whether they are accepting suggestions from our algorithm.
- Add styling (such as bolded words) to draw the user's attention to important information on the 'congratulations' screens (such as to check their email).
- Add more colour to the website.
- If user did not enter something for organization, it says "please input something", we should change to this to something like "please enter your organization". (metnor form)
- Show more information on what "organization" is supposed to be (add more onto the tooltip). (mentor form)
- Add images/graphics. (mentor and mentee form, and login page)
- There is an extra horizontal line which appears above the description field in the mentee cards when viewing accepted mentees.

#### Low

- The instruction page right after logging in should be displayed.
- The popup should be changed to a toast message that doesn't block user flow
- Have the time-zone field be highlighted in red since it's a required field, and the other required fields are also highlighted in red if a value is missing.
- Add more skills to "Top 3 skills". (mentor and mentee form)
- Change "Please enter your email in a proper format" to "Please enter a valid email", this is used more often in popular websites. (mentor and mentee form)
- If user did not select a time zone, the error message has a capital "T" in time zone, this should be changed to a lower case "t". (mentor and mentee form)
- User was not sure to enter first and last name into the name field or just their first name. (mentor and mentee form)
- Allow more freedom in the way timezones are entered: my participant tried to type "PST" in the timezone field, and nothing came up (because we need "PST")

## Quantitative Data

See the attached chart which shows the average score given to us by our participants for several evaluated heuristic, on a scale from 1 to 5.

### Testimonials from the Participants to Explain the Graph

- "what is the organization?" my participant asked when he was confused about what the organization field was for.
- "what should I do?" or "what is this?" when he logged in and don't know what to do next.
- My participant tried to directly click on here to login rather than check their emails first.
- "This field is required but there is no red star deside it." my participant mentioned when he was inputting skill field.
- "Can you try to type?" (my participant was making me try to type in the skills field, meaning it is not immediately obvious that it is a dropdown)
- To demonstrate how the system has mechanisms to help users against making mistakes, users said the following:
  - "Oh cool! It [the input fields] does the error highlighting [when required fields are left blank]!"
  - "I liked the simplicity of the system. I was able to make mistakes without the system breaking or throwing unexpected errors."
- When interacting with the form, one user said: "Oh, I like that this [the fields to select skills] is a dropdown! Nice!". This is an example for how users are able to maintain control and have freedom to do what is needed.
- In regards to the system being "simple, clear, and aesthetically pleasing", when viewing the Mentee requests in the "Suggested Mentees" tab, a user said the following: "[the Accept and Decline buttons] are appropriately and intuitively defined, with the accept button containing a green checkmark, and the decline button having a red x".
- To show that the signup and login pages work together and show the user the correct order to fill out the forms:
  - Everything works smoothly and follows a flow. (while going through survey)
- To show that the website right now is similar to other popular websites:
  - Great website, hard to find something to change. (while user was filling out the survery questions)
- To show that website has a simple design, but may need more images/graphics:
  - Clean website. Easy to use. (while user was filling out the mentor form)
- To show that both mentor and mentee signup forms are easy to navigate and complete:
  - Simple website, easy to read and fill out forms. (while filling in mentor and mentee forms)
- Showing that the mentor login screen is clean but not much functionality for the mentor/mentee matching:
  - Simple UI for mentor home but not much functionality for the mentor/mentee matching system right now. (while looking at suggested and accepted mentees)
  - "Can you try to type?" (my participant was making me try to type in the skills field, meaning it is not immediately obvious that it is a dropdown)
- "Oh, you have a popup!" (my participant was confused about the password requirements and only noticed when I activated it that we have a popup which details them)
- "The popup [alert] is a bit annoying, maybe center it because otherwise the user has to move their eyes away"
- "Middle and top is the right place for me [to view a popup]"
- "Oh, this is what I'm teaching people?" (my participant said this after filling in the skills and hovering over the information icon, presumably out of curiosity)
- "I feel like I don't really know the context of this mentoring" (my participant was a bit confused about what exactly it entails to be a mentor on this platform)
- "If I'm declining a mentee, are they actually making a request to me, like what am I declining?"
- "Can I just type? Oh no, it's just a dropdown menu"
