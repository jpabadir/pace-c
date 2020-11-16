# Meeting Minutes - November 16th

## Agenda Items:
- 「Aleks」Reminder that I will not be able to attend meeting on 23rd
- 「Aleks」Reminder that meeting on The 30th is now on 29Th
-  [Eric] Need an issue to organize all the pages properly at the end.
- [Katrina] Are Mentor's passwords currently being stored in the DB? When I look at PR #259, it wasn't a field in the JSON file, but it might have been added since.
- [Katrina] As a team, it might be useful to walk through how to [Sign Up for peer testing](https://docs.google.com/spreadsheets/d/1hl-bVGtlN1JMaNCbpx4tqgj7R5T_lkqo-KdooR9Aevk/edit#gid=245939495) 
- [Katrina] Does anyone know what the 'Video Demo' due on the 25th is referring to? At first, I assumed that it meant the recordings that we capture when we conduct peer testing, but that seems to be blocked off for later that week. 
- [Katrina] Can we schedule a time this week to conduct a test run for the peer testing to make sure the software is working and that we're following a similar methodology?
- [Katrina] Get clarification from Eric on if the [questionnaire linked in heuristic-evaluation-experiment-instructions.md](https://docs.google.com/forms/d/1K0egKKFqWlHBHL8dpMpvDg4dmS5h3WP_Hp-WnMYRE7Q/prefill) is the same as what the [instructor linked to](https://docs.google.com/forms/d/e/1FAIpQLSc8ruVs9LssMNB9NCcXvgANTe7sL_qppknM35Kkuhwnz3Y3TQ/viewform),and if it can be opened for public access (it's currently only available via email request)
- 「Aleks」Check over the Mentor Home UI for issue 246 (I added 3 new tabs to the mentor home, to re-design the ui in order to make it more clean and easy to use), also I think this will help when the information from the database is pulled to the cards so that the mentor can have a clear/seprate view of what mentees are (accepted, suggested, and pending)
- 「Aleks」I set up buttons for the react routing UI for the mentor UI and tried to implement react routing but i can not figure out how to make it work in my case
- 「Aleks」Do we want to create a home page for the website?
- 「Aleks」Do we want to create a logout page for the website?
- 「Aleks」When selecting different buttons from mentor home the top bar switched to log in, not sure how to fix this.
- 「Aleks」We can add a task to create the UI for the mentor home page (right now it is empty and only used for buttons) 
- 

## Detailed Notes:
- Everyone now has access to DB
- Be careful when you are going through DB. try not to delete it, etc.
- Passwords are not stored in DB
- Authentication and real time are not linked (only if someone manually links them through code)
- Creates user in firebase by passing in email/password to firebase, but does not store password
- Kat will be the "leader" for peer testing
- re-work the refine UI issue (#246)
- 

## Action Items (Due by next sprint: November 23rd):
- Ask more about video demo that is due on 25th, get more information maybe email prof if needed
- Kat will be the "leader" for peer testing, she will give us roles/what to do/give us more information about peer testing
- delete suggested tab
- only keep mentorhome, accepted, and pending tab
- 
