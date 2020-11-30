# Pace C Peer Testing Milestone #1

## Brief Description of The System
Our system, MentorMatch, allows people to sign up to be matched with a mentor, who can teach them skills they are interested in. In its current iteration, the system supports two types of users. First, there are mentors. They can fill out a form, where they will enter the skills they are able to teach people, the organization they belong to (this is because MentorMatch aims at eventually being used by organizations which can customize the platform to their needs), and some basic information about themselves. Then, there are mentees. Mentees can also sign up on the platform, and they also enter the skills they want to be taught and some basic information. Based on this information, MentorMatch will suggest mentees to mentors, which they can choose to accept or reject. If a mentee is accepted by a mentor, they receive an email to let them know and put them in touch with the mentor. 
Note: the matching algorithm and the sending of an email to a mentee once they are accepted by a mentor are still to be implemented. 

## Current Set of Features Available in the System
[Placeholder until we identify the features] - ((common - Katrina))

## Number of Participants  - ((individual))
In total, \_\_\_ individuals took part in our peer testing sessions. The members in the table are labelled according to how they were entered in the [sign-up document](https://docs.google.com/spreadsheets/d/1hl-bVGtlN1JMaNCbpx4tqgj7R5T_lkqo-KdooR9Aevk/edit#gid=1784474127). A table of this can be seen below:
| Pace C Team Member Conducting the Session | Participant's Name | Completed? [Link to video if yes, if partially complete state why, or if the session wasn't conducted say no] |
|-------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------|
| JP | Andrew Dai | https://youtu.be/kXaaTNM4xDw A small part of the video was cut out because I had to stop another app running on my machine. |
| JP | Jaden Balogh | https://youtu.be/gE7sHhqmTF8 |
| Katrina | | |
| Katrina | | |
| Aleks | Aaron Mahnic | https://drive.google.com/file/d/1uXFvFiiN1yc6-SzBoKF5isCCfTlds3us/view?usp=sharing |
| Aleks | Taha Ilyas | https://drive.google.com/file/d/1Yzp2Yam7Fi3GFtrNtAnT3c7f9rWOQf8S/view?usp=sharing |
| Eric | | |
| Eric | | |

## User Groups and List of Tasks that Participants Completed

[Will most likely insert what Eric identified within list-of-tasks.md Potentially, we could also include the task breakdown table from deadlines-for-peer-testing-milestone.md as well] - ((common - Katrina))

## List of Issues Discovered and Their Priority - ((individual))

#### High

- Timezone field does not "glow" red if the user did not enter anything, it only shows the text "please select your time-zone". (mentor and mentee form)
- When signing in, if the user does not enter anything for email and password, it just says "please input something" for both fields, and then a pop-up that says "the email address is badly formatted" however both fields are blank. (login page)
- From the above point, we should change "please input something" to "please input password" or "please input email", for the red text that pops up at the bottom of the field if the user does not enter an email address in the login page. (login page)
- If the user enters a incorrect username and password, the website creates a popup that is "wordy" and maybe difficult to understand. (login page)
- We should make different messages depending on of if the user did not enter any information in login screen (password/email) or if the user entered information but the information is wrong/does not have an account. (login page)
- From above points, change the login pop up messages depending on what is and is not filled in. Change the red text that popups at the bottom of the field depending on what is and is not filled in. (login page)
- When resetting the password using the forgot password feature, we do not enforce password constraints (we have a minimum length rule that is enforced on the sign up form)
- The password constraints should be displayed without having to hover over the information icon
- The form can be blocked from being submitted with an error showing on the timezone, even though the user has filled the timezone field. 
- People are confused by the skills field, they often think they can type in there, while, in fact, it is a dropdown menu. 

#### Medium

- If user did not enter something for organization, it says "please input something", we should change to this to something like "please enter your organization". (metnor form)
- Show more information on what "organization" is supposed to be (add more onto the tooltip). (mentor form)
- Add images/graphics. (mentor and mentee form, and login page)
- It is not natural to still be able to see the word "login" after the user is already logged in. 
- It is confusing for mentors whether they are accepting / rejecting requests that mentees put in manually to them, or whether they are accepting suggestions from our algorithm. 
- There is an extra horizontal line which appears above the description field in the mentee cards when viewing accepted mentees. 

#### Low

- Add more skills to "Top 3 skills". (mentor and mentee form)
- Change "Please enter your email in a proper format" to "Please enter a valid email", this is used more often in popular websites. (mentor and mentee form)
- If user did not select a time zone, the error message has a capital "T" in time zone, this should be changed to a lower case "t". (mentor and mentee form)
- User was not sure to enter first and last name into the name field or just their first name. (mentor and mentee form)
- The popup should be changed to a toast message that doesn't block user flow 
- Allow more freedom in the way timezones are entered: my participant tried to type "PST" in the timezone field, and nothing came up (because we need "PST")

## Quantitative Data - ((common - JP))
See the attached chart which shows the average score given to us by our participants for several evaluated heuristic, on a scale from 1 to 5. 

### Testimonials from the Participants to Explain the Graph - ((indivial - unassigned))
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
