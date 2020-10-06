# Meeting Minutes - October 5

## Agenda Items:
- Miscellaneous tech / housekeeping stuff
- Better ways to do weekly reports with gitstats (so that marks count)
- Update on prototypes 
- Eric: the client did not talk about environment constraints right? 
- Katrina’s questions 

## Detailed Notes:
- Make sure issues are linked to PRs
- Update on prototype: Eric and Aleks will: 
1. Read all of Katrina’s notes from meetings
2. Start from the prototype Katrina has, and add anything that is missing 
3. Commit any changes to the prototype in the prototypes branch and make a PR 
- Katrina may ask in Oct 6 meeting with client for environmental constraints 
- Katrina’s questions:
1. Do mentors create events that mentees can see and sign up for? 
2. How do mentors and mentees communicate? Is it just email? 
3. What does “matching” mean, is there even a concept of matching beyond just signing up for an event that a mentor offers? 
JP’s potential answer: there is no real concept of matching, you just sign up for events that mentors offer and both parties can see that. You can also view the past events / mentors you worked with, which is the closest thing to matching. 
4. Can you cancel on someone? How does that work with the matching?
5. Superadmins
6. Naming of the project? 
7. When will we start implementation? 

A potential solution to the superadmins problem:<br>
Hierarchy: <br>

Superadmin -> Pace <br>
Admin -> various companies<br>
Admin signs up <br>
Has to be validated by superadmin to use as company admin<br>
When another admin signs up: “Are you part of an organization that already has accounts with us?” Yes -> GIT: sends request to current GIT admins<br><br>

Users (mentors and mentees)

