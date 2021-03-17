## Before Team Meeting Things To Do:
- 

## Agenda Items:
- [Aleks] menteeformembedder, making a test that tests the iframe.
- [Aleks] Review the file software-implementation-update's known bugs section to make sure they are up to date.
- [Aleks] I made a folder called final-deliverables that has each of the 4 documents we need according to <https://people.ok.ubc.ca/bowenhui/499/finalReport.html>. I made sections on each of the files of what needs to be done. I already wrote most of what we are able to write however, once the project is complete we will need to fill in the sections that were not yet filled in.
- [Katrina] Has Dr. Hui responded to the email that JP sent last week?
- [Katrina] The final report looks fairly lengthy (we'll have to update information from the Requirements Milestone report, create presentation slides, create and edit a 'promo video', and then record the final video). Should we mainly shift our focus from this sprint onwards to fulfilling requirements for the final deliverable? 
- [Katrina] Possible tasks for this week's sprint:
  - [Task] Remove the notification upon login stating that the user's suggested mentees have been updated. Further clean and comment code.
  - [Exploration] Look into the back-end security of our website (https://github.com/public-apis/public-apis). Possibly also provide some ideas of how to configure Firebase so it's more secure (it's currently in test/developer mode. If this site it to be deployed, we should make a note of this for handover since in it's current state, it'd be *really* insecure). 
  - [Task] Update the Functional Requirements/User Stories, Description of MentorMatch, and User Groups (currently the final document has descriptions from the first milestone, and since then the client has adjusted the scope of certain aspects of the project so these sections should be updated). 
  - [Task] Update DFDs.
  - [Task] Begin the 'updated test' portion of the final document (i.e see if anything from the Requirements Milestone report needs to be updated, and document any components that we haven't been able to unit test and why).
  - [Task] Document features that the client will need to maintain (i.e Gmail account for Nodemailer, Firebase, etc). Also begin to note any limitations of the application (ex. the way we obtain individual's availability is external from our application through the Calendar link field on the Mentor form, this is currently restricted to Google Calendar links. Mentees and Mentors communicate via email, so if the application is to be developed in the future, Mentees would need an account if the application were to support internal communication).


## Detailed Notes:
### General Notes:
- Login, Auth, AccountMenuItem components need Firebase mocking in order to test these components
- 

### Current Week Tasks:
- 

## Action Items (Due by next sprint: March 24th):
### JP
- Remove the notification upon login stating that the user's suggested mentees have been updated. Further clean and comment code.
- Also, work on unit testing:
  - MentorSuggested.js
  - Mentoraccepted.js
- Look into the back-end security of our website (https://github.com/public-apis/public-apis). Possibly also provide some ideas of how to configure Firebase so it's more secure (it's currently in test/developer mode. If this site it to be deployed, we should make a note of this for handover since in its current state, it'd be really insecure).
- 

### Katrina
- Update DFDs.
- Update the Functional Requirements/User Stories, Description of MentorMatch, and User Groups (currently the final document has descriptions from the first milestone, and since then the client has adjusted the scope of certain aspects of the project so these sections should be updated).
- Run client meeting
- 

### Eric
- Test the following componenents:
  - MentorHome.js
  - Mentorcompletion.js
- Notes about testing: firebase auth mocking is not required, and test the presence of specific inner components (such as MentorTutorial in the mentor home) rather than the full components. You can do that by checkin that a specific string is present in the component.
- 

### Aleks
- Unit test the following components (Firebase auth mocking not expected):
  - AdminHome
  - ManageMentor
  - Menteeformembedder: make a test that tests the iframe generation
- Document features that the client will need to maintain (i.e Gmail account for Nodemailer, Firebase, etc). Also begin to note any limitations of the application (ex. the way we obtain individual's availability is external from our application through the Calendar link field on the Mentor form, this is currently restricted to Google Calendar links. Mentees and Mentors communicate via email, so if the application is to be developed in the future, Mentees would need an account if the application were to support internal communication)
- Start organizing the presentation: go through the requirements and break them down into sections that we will be able to then assign to people to present. You don't need to actually make slides for anything, just "in-between" slides. Submit the google slides link in your PR.
Requirements link: https://people.ok.ubc.ca/bowenhui/499/finalReport.html
- 









