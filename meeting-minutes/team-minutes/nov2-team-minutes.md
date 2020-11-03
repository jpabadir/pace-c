# Meeting Minutes - November 2nd

## Agenda Items:
- [Eric] Discuss about grading and distribute work we have done.
- [Eric] Need a new requirement to work on.
- [Eric] Explanation of #155. CI has been implemented before I was assigned to the issue #155
- [Eric] Setup DB.
- [Eric] Fix 'Unexpected end of JSON input'
- [Aleks] Should we use console to pull/commit or VS to pull/commit
- [Aleks] Does it matter if we use VS or console to pull/commit
- [Aleks] On the form for front end we have a "submit" button but we also have a "back" and "next" button, what is the purpose of the "back" and "next" buttons?
- [JP] Extraneous files in top-level src
- [JP] Explain ESLint process
- [Katrina] Discuss possible ways to obtain user availability (the current way is a field for the day of a week, and pre-determined time ranges in a drop-down to choose from. A possible alternative could be something like this: https://fullcalendar.io/)
- [Katrina] The course website (https://people.ok.ubc.ca/bowenhui/499/) outlines suggested bullet points for November 6th (Friday). We should discuss how to tackle this (possibly, since heuristics evaluations deal with the flow/how users interact with the platform (primarily concerned with the client side)), the front-end team members could work on that.
- 

## Detailed Notes:
- Every meeting we are going to do a status update meeting
- Status meeting is where everyone tells what they have been working on during the sprint and if they had any problems
- Delete the time availability for the front end form
- Database is setup
- Basic front end is setup
- Code will automatically run ESLint
- ESLint will keep all syntax the same 
- Run ESLint before you start the program locally so that your syntax is the same as the standard we are using
- Fix the ESLint problems before you make a pull request to the github repo
- We can use the Prettier code formater to help with the ESLint errors 
- Can change the settings of Prettier in VS so that it works better with ESLint
- If you see ESLint errors, You have to run the commands given in the tech directives, and you may have to fix them manually as well
- Look in tech directives for more information on how to start/fix ESLint problems
- We can use Ctrl+Shigt+L to select all occurrences of a current selection
- Look up VS shortcuts for help on fixing ESLint problems
- 2-3 issues per week
- If you want more issues go to the documentation, find an issue you want to do, and then tell the group chat on discord what you will work on
- The form will be a progress bar which is will require back and next button
- The last part of the form/progress bar will have the submit button
- deleted the json files that were added accidently
- Meeting time is staying the same for the end of the term
- 

## Action Items (Due by next sprint: November 9th):
- [aleks] Fix mentor/mentee placeholder text
- [aleks] Change email field to check for only emails. Text field show only accept emails
- [aleks] For checking emails: https://ant.design/components/form/#components-form-demo-basic
- [kat] Will fix issues with ESLint for the past issues we had
- [kat] Talk about mentee/mentor availability with the client
- [eric] Will do the Cl tests, which allow for us to write local unit tests on our local repo
- [eric] Will do the 3 tasks from (11/06) section on course website
- [aleks] Move submit button to last page
- [aleks] Create account sign up page
- [aleks] Account sign up page will use back and next buttons to navigate
- [kat] Style the form
- [eric] Validating unique usernames for the DB
- [aleks] Split app between login-page and static form, add 3 ranked skills
- [aleks] Build UI for login page
- [jp] Connect login to backend and DB
- [jp] Send email to user for account validation
- [aleks] Create UI for logged in mentor
- [kat] Implement in age requirment and availability
- 
