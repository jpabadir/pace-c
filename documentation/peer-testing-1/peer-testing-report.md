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
| Aleks | | |
| Aleks | | |
| Eric | | |
| Eric | | |

## User Groups and List of Tasks that Participants Completed

[Will most likely insert what Eric identified within list-of-tasks.md Potentially, we could also include the task breakdown table from deadlines-for-peer-testing-milestone.md as well] - ((common - Katrina))

## List of Issues Discovered and Their Priority - ((individual))

#### High

- When resetting the password using the forgot password feature, we do not enforce password constraints (we have a minimum length rule that is enforced on the sign up form)
- The password constraints should be displayed without having to hover over the information icon
- The form can be blocked from being submitted with an error showing on the timezone, even though the user has filled the timezone field. 
- People are confused by the skills field, they often think they can type in there, while, in fact, it is a dropdown menu. 

#### Medium

- It is not natural to still be able to see the word "login" after the user is already logged in. 
- It is confusing for mentors whether they are accepting / rejecting requests that mentees put in manually to them, or whether they are accepting suggestions from our algorithm. 
- There is an extra horizontal line which appears above the description field in the mentee cards when viewing accepted mentees. 

#### Low

- The popup should be changed to a toast message that doesn't block user flow 
- Allow more freedom in the way timezones are entered: my participant tried to type "PST" in the timezone field, and nothing came up (because we need "PST")

## Quantitative Data - ((common - JP))
[This would most likely come from the Google Forms which outlines the 10 point heuristics. I think Eric set this up - but we'll need to confirm]

### Testimonials from the Participants to Explain the Graph - ((indivial - unassigned))
- "Can you try to type?" (my participant was making me try to type in the skills field, meaning it is not immediately obvious that it is a dropdown)
- "Oh, you have a popup!" (my participant was confused about the password requirements and only noticed when I activated it that we have a popup which details them)
- "The popup [alert] is a bit annoying, maybe center it because otherwise the user has to move their eyes away"
- "Middle and top is the right place for me [to view a popup]"
- "Oh, this is what I'm teaching people?" (my participant said this after filling in the skills and hovering over the information icon, presumably out of curiosity)
- "I feel like I don't really know the context of this mentoring" (my participant was a bit confused about what exactly it entails to be a mentor on this platform)
- "If I'm declining a mentee, are they actually making a request to me, like what am I declining?"
- "Can I just type? Oh no, it's just a dropdown menu"