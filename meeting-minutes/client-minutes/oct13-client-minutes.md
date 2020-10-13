# PACE GROUP C
# FOURTH CLIENT MEETING 10/13

## 13 OCTOBER 2020 / 9:00 - 10:04AM(PST) / VIA ZOOM

### AGENDA

### ATTENDEES
Katrina M., Maya T., Philip O., Anthony B., Shannon F., Christian P.

#### BUSINESS FROM THE PREVIOUS MEETING
- 09/29-01. Aleks and Eric will the modify the prototype to incorporate the following changes:
    - Instead of the skills being a checkbox, make it a ranking system. 
    - On the mentorship portal, ensure that there’s options to login, create an account, and register an organization (which also entails that the user creates an account to become an admin). 
        - Show the UI for each of those pages. 
    - This should be done by the end of the Scrum Sprint. **In progress** 
- 09/29-02. When we create the form, we can create it to be static first, and then modify it to be dynamic later on. This should be completed before the first peer testing milestone. **Definitive Date will be determined once we know when we can start programming**
- 09/29-03. Team members should think of a name for the website (currently dubbed as the "Mentorship Portal"). **In progress. Should be completed by October 13**

#### NEW BUSINESS
1.  Send the client the team Trello board.
    - Ask if it's ok if the client refers to the team's Project Board on Github rather than using Trello. 
2. Do "stand-up" for the week
    - State that we've been finalizing system requirements for the milestones 
    - Send Google Slides Presentation if ready so that the client can look over what we've worked on.
    - State that the plan for the week is to submit the requirements slides and video documents. Then the course requires all teams to view each other's videos, so we'll be spending at least 4 hours on completing course specific tasks. The rest of the week will be for members to familiarize themselves with the tech stack. 
    - Hopefully by early next week programming will begin, so by the end of October we should have something to demonstrate. 
3. Clarify how organizations register.
    - How do they find the site (Word of Mouth)?
    - Does the organization need a separate account, or is it vicariously through the admin? (For example, does Girls in Tech need their own account, or would someone from Girls in Tech go to the Mentorship Portal, click "Register Organization", enter which organization they're from, and information about themselves to create an account. That person would then be the admin.) 
4. Clarify the functionality for Admins. 
    - Do they just need to be able to view mentor and mentee information, as well as approve mentors?
 
 ### NOTES
 During today's meeting, Shannon allowed each team to go over their Trello boards, do their "stand-up" from the week, and ask any questions. 
 The answers to the questions defined under "New Business" are as follows:
 1. Ask if it's ok if the client refers to the team's Project Board on Github rather than using Trello
    - Yes, we can use the Github Project Board rather than using Trello. 
 3. Clarify how organizations register
    - An organization can hear about the platform through means such as seeing the publicly embedded form. A "web token" can be on the embedded form which states something along the lines of "Created by: UBC and Pace". An example of this can be seen from the site https://jwt.io/ , where there's an icon in the top right corner saying "Crafted By:" 
    - Organizations do not need their own account on the platform. The organization is 'created' once an admin registers, associating their account to an organization. In a sense, an admin is the organization. 
4. Clarify the functionality for Admins. 
    - Admins might not actually **need** to be created for the minimum system requirements, however, having an admin would be **extremely useful** to help sort out user privileges. 
    -  The role of an admin is to create an account on behalf of an organization, invite mentors to the platform (i.e through the internally hosted embedded iframe form), and see the information for mentees as well as mentors, to approve mentors. 

Shannon was interested in reviewing the documentation that had been created. This was done through screensharing. The feedback received from doing so is outlined below:
- Feedback on the Tech Stack: The chart looks good for sorting out pros and cons. The client approves of our current tech stack (Front-end: React + UI libraries; Back end: NodeJS; Database and authentication: Firebase). 
- Feedback on Testing: The client agrees with our choice of testing for using React Testing Library as well as Jest (especially since testing using Enzyme is now being moved away from within the industry). She didn't see the portion in our document on ESLint, but when Pace B was going over their requirements, the client suggested linting, and mentioned ESLint. Overall, it sounds like our choices are strong based on client experience and personal recommendation. 
- Functional Requirements: The client noted that the general guideline looks good for our current milestone. However, as we start development, we'll need to split tasks down further to align with weekly sprints. 
- DFD Level0 - At a glance the DFD level 0 looks fine. The client mentioned that mentors and mentees will need to interact, which they will, but they will interact primarily outside of the mentoring system. 
For the sake of time, the description of the milestone and non-functional requirements were not reviewed. The powerpoint was briefly shown, to highlight what was dispalyed for the prototype. 

General notes taken as Maya and Philip presented on behalf of their group:
- Mentors should be associated with an organization. They should not be able to mentor independently without an organization.
- Mentees should be matched with a mentor from the organization that they applied to (for example: if a mentee applies through the UBC embedded form, they should match with a mentor from UBC, not someone from Girls in Tech).
    - Organizations will not be sharing information between each other.  
- When starting development, we can work locally first, then apply CI when we deploy the website to view changes easier.
- When creating tickets on Github: 
    - it would be useful to create them with acceptance criteria. This would help ensure that the task is in fact complete, and can be moved to the 'done' board.
    -  subtasks can be created.
- To create our database, we could potentially use Firebase to assist in managing users (for authentication login, password retrieval). Firebase hosts the database right away. We could also use a separate database which utilizes PostgreSQL, such as Google Cloud. This would allow us to work locally first, and then deploy when the website is running, rather than hosting the database right away. 
- When constructing entities in the database, we should try to find overlap between mentors and mentees. In other words, we might not need to separate mentors and mentees. They could potentially be encapsulated under a "user" entity, which contains a field for the type of user. 

### ACTION ITEMS
- 09/29-02. When we create the form, we can create it to be static first, and then modify it to be dynamic later on. This should be completed before the first peer testing milestone. **Definitive Date will be determined once we know when we can start programming**
- 09/29-03. Team members should think of a name for the website (currently dubbed as the "Mentorship Portal"). **In progress. Should be completed by October 13**
- 10/13-01. Is the team ok with Katrina screen-sharing to show Shannon what was accomplished during the week? Keep in my mind that members from other teams can also see this. This decision should be made during the next team meeting, so either on **October 16* or *October 19**
- 10/13-02. The team should decide on what should be shown to Shannon during October 20th's meeting if there's anything that needs to be clarified for the System Requirements Document, which is due on October 21st. This should be done during the **October 19th** team meeting.

