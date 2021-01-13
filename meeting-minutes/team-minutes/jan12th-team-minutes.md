## Before Team Meeting Things To Do:
- Have reviewed all of Katrina's PRs
- Be up to date on the issues we currently have outstanding, try to think of at least 2 you'd like to take care of. If there are none or not enough available, then open up the website, and try to think of things we need to do that would interest you and note them down as issues. That will make the meeting a lot faster. 
- 

## Agenda Items:
- [aleks] agree on a weekly meeting time
- [jp] Start sprint planning
- [jp] Start/Figure out how to do unit testing
- [Katrina] Provide the team with a refresher on what the client mentioned to prioritize from the Dec. 1st client meeting (First, implementing the calendar availability, and then converting the mentee form to an embedded iFrame)
-	[Katrina] After reviewing the course website, it doesn’t seem like there’s many linked items in the ‘resource’ column (which makes sense since the peer testing and video demos are things we’ve already done, so I’d assume the criteria is the same). However, during the final exam period, a ‘Final report’ is listed. I’m planning on asking the instructor about what’s expected from this, just to keep it in mind for the future and be able to chip away at if possible.
-	[Katrina] Minor health update (not a priority item, just an FYI but I don't want to forget to mention)
-	

## Detailed Notes:
### Testing Notes:
- Testing plan details is located below under "Testing Plan"
- At the moment, do not work on the project until JP is done with ForgotPassword (Will be notified by Discord message)
- Every member will have tasks for testing.
- Not each and every method needs to be tested. Use common sense and programming knowledge to make sure important parts are being tested in order to get a good overall coverage.
- 

### General Notes:
- Jan 13th is a bonus report. Therefore, all issues that are assigned to people in this meeting are due on Wed 20th
- Before anymore progress is made to the project we must first implement testing. After the testing tasks are finished and if you want more tasks, send a message on Discord and we can assign you more tasks.
- Weekly meeting time is not yet confirmed (waiting for other peoples classes and when they have to attend)
- 

### Task Priority:
- Current week's priority: Add unit testing (getting good overall coverage, refer to Testing Plan below for what each person should test)
- Next week's priority: Adding a Calendar availability (not yet assigned to anyone, after finishing your testing tasks and if you want more tasks, send a message in Discord if you would like to do this task)
- Next week's priority: Add iFrame exporting (not yet assigned to anyone, after finishing your testing tasks and if you want more tasks, send a message in Discord if you would like to do this task)
- Next week's priority: Other tasks. If above tasks are already being worked on and you want more tasks, send a message in Discord
-

## Action Items (Due by next sprint: January 12th):
### JP
- Check for and d card component after adding sample users back in
- Check and approve Katrina's PR
- Finish testing setup and then let the team know that it is done
- Test the below sections under "Testing Responsibilities Breakdown" that are assigned to your name:
- Auth.js - JP  
- ForgotPassword.js - JP  
- Login.js - JP  
- 

### Katrina
- Ask the prof what the final report will involve and if we should start to prepare and plan for it now or if we should wait until it becomes more closer
- Test the below sections under "Testing Responsibilities Breakdown" that are assigned to your name:
- MenteeCompletion.js - Katrina  
- MenteeDisplay.js - Katrina  
- MenteeForm.js - Katrina 
- 

### Eric
- Test the below sections under "Testing Responsibilities Breakdown" that are assigned to your name:
- MentorAccepted.js - Eric  
- MentorCompletion.js - Eric  
- MentorForm.js - Eric  
- 

### Aleks
- Test the below sections under "Testing Responsibilities Breakdown" that are assigned to your name:
- MentorHome.js - Aleks  
- MentorSuggested.js - Aleks  
- MentorTutorial.js - Aleks
- 

## Testing Plan: 
- We'll start with catching up on unit testing our whole codebase. The aim is to have this done in 5 to 7 days.
- We'll share the work as follows. Each person is responsible for adding the tesing to 3 files. JP will get one file done ASAP and others can follow the example. Note that the source code and the testing files should be moved to a new folder under the components containing both, as per JP's example. 
### Testing responsibilities breakdown:
Auth.js - JP  
ForgotPassword.js - JP  
Login.js - JP  
MenteeCompletion.js - Katrina  
MenteeDisplay.js - Katrina  
MenteeForm.js - Katrina  
MentorAccepted.js - Eric  
MentorCompletion.js - Eric  
MentorForm.js - Eric  
MentorHome.js - Aleks  
MentorSuggested.js - Aleks  
MentorTutorial.js - Aleks

To complete the task, I suggest the following resources: 
- [Jest documentation](https://jestjs.io/docs/en/getting-started)
- [React testing library documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [A helpful video I found](https://www.youtube.com/watch?v=3e1GHCA3GP0)
