# PACE GROUP C
# SECOND CLIENT MEETING 09/29

## 29 SEPTEMBER 2020 / 9:00 AM - 9:57AM (PST) / VIA ZOOM

### AGENDA

### ATTENDEES
Katrina M., Maya T., Philip O., Anthony B., Shannon F., Christian P.

#### BUSINESS FROM THE PREVIOUS MEETING
- 09/24-01. Katrina will confirm that Maya has created a recurring Zoom meeting for Tuesdays from 9-10AM by the end of September 24th, 2020. ***Completed***
- 09/24-02. Katrina will create a public Google Doc for Pace A, Pace B, and Pace C groups to collaborate on to establish a shared understanding of system requirements by September 25th, 2020. ***Completed***
- 09/24-03. The document that will be created to establish an understanding will be sent to Shannon from Katrina by September 28th, 2020 so that it can be reviewed with the client during September 29th’s client meeting. ***Completed***
- 09/24-04. Details of the introductory meeting will be reviewed during the team meeting on September 28th at 7AM(PST) to ensure all team members have a concrete preliminary understanding of the project. ***Completed***
- 09/24-05. Each team member should create a low-fidelity prototype from our understanding of the system requirements. During the team meeting on September 28th, we will collaborate to compile one prototype to present to the client during the September 29th client meeting. ***Completed***

#### NEW BUSINESS
- Present the questions listed under the heading "Crucial Questions" from the shared Pace A, B, and C Google Doc (https://docs.google.com/document/d/1-HVqCCNYMcoAogibk1kxf6jSctOxwx1C3bm43M_d6ZA/edit?usp=sharing)
- Present the low-fidelity prototype Katrina made on Balsamiq (https://balsamiq.cloud/sfw1uih/pro9tuh)

### NOTES
Please be advised: I am currently referring to the Mentorship/Mentee login platform (website) where Mentors and Mentees are matched as the ‘mentorship portal’. It will continue to be referred to as such throughout the duration of this week’s client meeting notes. 

The meeting started by Shannon sharing her screen and providing answers to the questions provided on the Pace A, B, and C shared Google Doc. The corresponding questions and answers are as follows (questions are numbered 1-10, answers are denoted by “i.”):

1.	Do you have any preferences for coding styles. I.e. variable names and such for integration with your stuff.
    1. The coding style is up to each team. However, teams should look up the best practice for the language of choice. Javascript: testVariableName (camel case), python: test_variable_name (snake case)

2.	Should we make our own repo or do you have something to provide for us.
    1. Yes, teams are to create their own repo on github.

3.	What are the end users? Mentors, Mentees, anything else? (Admins, maybe? If so, what kind?)
    1. End users include: Mentors, Mentees, and Admins. 
    2. Admins create an account for their organization. 

4.	For the machine learning aspect of matching mentors to mentees, will we be using a specific service that Pace has access to, or using and/or implementing a new service?
    1.  Machine Learning is not a necessary requirement for the project at the moment. The matching process is based around conditional logic based on similar number of skills, etc. Therefore, no, machine learning is not needed at this point. 

5.	Will there be localization?
    1.  English, as the first step. If we can support more languages, that’s a bonus, but it’s not necessary. Being able to handle time zones is more important.

6.	Validation of users working for a company?
    1. Admins should be able to invite mentors through email. Start with associating admins to a company based on their email (i.e @ubc.ca would be associated with UBC). It is essentially up to the admin of the organization who signed up whether they choose to display the form publicly on their website, or through an invitation-based email.

7.	How does a company sign up who is in charge of the admin account?
    1. The person that creates/ registers the organization is the admin. This is done through the user providing a unique email. 

8.	Is there PACE admins?
    1. In a round-about way. Whoever creates the account is the admin, so if someone from PACE decides to create an account, that person would be the admin for the mentorship site for Pace.

9.	Is there a support system?
    1. There is no customer support system.

10.	Is there a database that we will be working with?
    1. Teams are to create their own database. 

After discussing the questions and answers from that Google Doc, Katrina asked if anyone had prototypes to share since that was discussed at the last meeting. Pace A and B’s prototypes were still in progress, so they didn’t have anything to show. Since many questions from our team’s Google Doc titled “Pace C System Requirements” could be answered by walking through the prototype, Katrina offered to show the prototype from Balsamiq. The information gained from walking through the prototype is as follows:
-	Yes, the form is to be **dynamic** so that organizations can modify the fields. 
-	The way the form is currently set up (where fields are dynamically displayed whether the “mentor” vs. “mentee” radio button is selected, as well as having the form split up into sections by “next”) is acceptable. 
    - A suggestion would be to rank the skills according to importance when gathering the user’s skills (rather than checkboxes). This will help streamline the matching process. 
-	The way the prototype has the form embedded publicly is fine, but remember that an admin might not want to display the form publicly, and so that form would then be accessed  on an invite basis (like the functionality on Google Docs where the accessibility can be set to be viewed by only people with the link/email addresses  can be manually added on). 
-	Rather than having the user signup on the embedded form itself, have the user signup/login on the mentorship portal.
-	Once the user completes the signup form, it’s a good idea to have a popup saying something along the lines of “Thank you for your interest in the mentoring program! To access your account, go to domainname.com” (like it’s currently setup in the prototype, where domainname.com represents the mentorship portal).
-	The index of the mentorship portal should display a way to login, create an account, register an organization, and obtain a forgotten password.
-	When a user is registering for either a mentee or mentor account, **the email is the most important part**. For simplicity, **a user cannot be both a mentee and a mentor**. For the system requirements, that is not necessary for the end-product. However, if teams want, they can play around to see if there’s a way to allow a user to be both a mentee and mentor. The key idea is that *emails are unique. A user cannot create multiple accounts using the same email. The email address is essentially the username and is therefore unique. *
-	We have the choice of either: 
    1.	Allowing mentors and mentees the ability to login to their account right after account creation 
    2.	Requiring the user to validate their account by receiving a link through their email. 
        -	In either case, for Mentors: it would be a good idea to limit the amount of information that is available about Mentees on the mentorship portal until an administrator has approved the mentor. This is for security purposes to ensure mentors are safe and trusted users. 
-	From the Balsamiq prototype slide titled “Mentorship Display”, Shannon liked what was being presented (availability, matched mentees/mentors, and ability to add more mentees/mentors). She noted that the calendar was very user friendly, and could be implemented using a library for calendars through means such as Bootstrap or Material UI.
    - Another suggestion would be to use input field to see/modify availability.



The meeting was then open for other attendees to ask question. The following bullet points outline notes from the topics discussed:
-	The demographic for the platform is quite open. 
    - Mentors should be at least 17 and older (essentially end of high school and up). Mentors should strictly not be between ages 5 – 10. 
-	In regard to non-functional requirements: Security is a great starting point since we’ve discussed the ability for admins to be able to request users, account approval, and account activation through email. 
-	For databases: Firebase could be simple to use. Essentially, we should **use third party tools wherever possible** (for example, libraries for authentication, user search, calendar, etc). Shannon suggested the following:
    - Firebase (Authentication or DB)
    - Google Cloud - hosts different db’s / backend servers
    - AWS - hosts different db’s / backend servers
    - mlab: MongoDB
-	In regard to the tech stack, Shannon suggested the following:
*Front end Javascript libraries*
- React
- Vue.js
- Angular

*UI Libraries*
- Ant design
- Material UI
- Bootstrap
- Tailwind CSS
- Bulma

*Backend*
- Node with express.js (Javascipt)
- Python: flask, Django, nameko
- PHP: laravel (this has it’s own templating engine )
-	In regard to the weighting for matching Mentees with Mentors:
    1.	Matching Time Availability is the most important.
    2.	The number of skills that are matched is the second most important.

-	When it comes to administrators registering their organization, for now, just assume that an administrator account can only be associated to one organization. Depending on how the project goes, it may be possible to associate an account to more than one organization (similar to the issue with users being both a mentor and mentee). 

-	The name of the website is up to us. 

-	Shannon reminded us of the Scrum process, where each week we start a new sprint. This often times entails creating a minimum viable product which works towards the end goal. This can then be improved upon during the next sprint.

-	Shannon is happy to answer any questions, even if it’s not requirements based (like industry standards)

Action Items: *Still in the process of being finalized* 
- 09/29-01. Aleks and Eric will the modify the prototype to incorporate the following changes:
    - Instead of the skills being a checkbox, make it a ranking system. 
    - On the mentorship portal, ensure that there’s options to login, create an account, and register an organization (which also entails that the user creates an account to become an admin). 
        - Show the UI for each of those pages. 
- 09/29-02. When we create the form, we can create it to be static first, and then modify it to be dynamic later on. 
- 09/29-03. Team members should think of a name for the website (currently dubbed as the "mentorship portal"). 

