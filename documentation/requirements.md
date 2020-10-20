# Functional Requirements for Each Milestone

According to the course website, the major target milestones within the course are as follows:
- Technical Requirements - October 21st, 2020
- Peer Testing #1 – December 2nd, 2020
- Peer Testing #2 - March 3rd, 2021
- Final Report, Code Repo, Video Demo - April (during Final Exam Period)

*The technical breakdown for each milestone is a such:*

## 1) Peer Testing #1
FR1. Create a static form that can be embedded into a website via iFrame (with Name, email, time-zone, availability, ranked skills, and user type [Mentee vs. Mentor]).

FR2. The form will be split into subsections, using a “next” button to navigate to the next section.

FR3. Both mentors and mentees will use a ranking system to indicate either their skills or areas seeking mentorship. This, as well as time-zone selection and availability will be used to weigh matching mentees to mentors.

FR4. The form should restrict the age of Mentors (anyone under 17 should not be able to become a mentor). 

FR5. Once the user submits the form, a popup will appear. The popup will state the domain address to access the Mentorship Portal, but it will redirect the user to the hosting organization’s website.

FR6. The “Mentorship Portal” will host 4 functionalities: Create Account, Login, Register Organization, and Forgot Password. A member of an organization will click on Register Organization to enter information about their organization and create an account within the system. That user will then be the Admin for the organization.

FR7. To register an organization successfully, a unique email must be entered. If that email has already been used in the database, an error message will be displayed. 

FR8. To correlate the company to the user, the domain name of the email will be used (i.e john.doe@UBC.ca signifies that John Doe’s organization is UBC). 

FR9. To complete organization registration, the user will create an account using the same email address, which will be their username. They will also need to provide a password (in the format of at least 6-10 characters, with at least one number). That user will then be allocated admin privileges. 

FR10. The Admin will publicly host the form (by embedding the form within their website via iFrame). 

FR11. Account registration for Mentors requires a unique email address, and a password. To register an account successfully, the email must not be associated to a pre-existing account but must match with an email used in the mentorship form. If the entered email has not been associated to a form, an error message directing the user to fill out a form will be displayed.

FR12. An email will be sent to the address provided in account registration. The user must click that link to be able to login to their account.

FR13. Mentors and Admins will be able to login from the Mentorship Portal. The login will be unsuccessful if either the email or password credentials do not align with what’s in the database (in which case, an error message will be displayed).

FR14. Mentors and Admins will be able to reset their password by clicking on “Forgot your password?” on the Mentorship Portal. The user will be required to enter an email address which has been associated with an account in the database. If successful, an email will be sent to that address, which the user can click to be brought to a separate page to reset their password.

FR15. Mentors and Admins will be able to logout of their account, to which they will return to the index of the mentorship portal, where they can login, create an account, retrieve their password, or register an organization. 

FR16. Logged in Mentors on the Mentorship Portal will be able to accept Mentees that they have matched with (based off of similar skills, availability, and timezone).

FR.17 Once a Mentor has accepted a Mentee, an email will be sent to the Mentee to notify them of a successful match. The two can then correspond through email. 

## 2) Peer Testing #2
FR18. The Admin will decide how to host the Mentorship form. (either publicly, or internally through email invite).

FR19. Internally hosted forms need to be able to support email invites for access.

FR20. The form will be dynamic in the way that Admins can edit the fields of the form to suit their needs.

FR21. The form will be dynamic in the way that depending on the user filling out the form (i.e either mentor or mentee), once the radio button is selected for the type of user, the form will display appropriate information for each. 

FR22. The email that notifies Mentees that they have been matched to a Mentor will link to a third-party calendar (such as Google Calendar) with the Mentor's availability. Mentees will be able to create an appointment with Mentors through that calendar. 

FR23. To "unmatch" Mentees and Mentors, the Mentee can remove themself from the calendar, cancelling all future appointments. The Mentor could then remove them for their dashboard on the Mentorship Portal. 

FR24. Mentors who validate their email address will be able to login, however, they will not be able to view any matched Mentees until an 
Admin approves their account.

FR25. Admins will be able to approve Mentors through the Mentorship Portal.

## 3) Final Report 
FR26. Ensure all components of the system are functional, fixing any final bugs. 

FR27. Implement “bonus features” (a.k.a features that are not required of the system, but that would be nice to have):
- Allow Mentees to create an account with the system, and develop surrounding UI, with additional features.
- Allow Mentors the ability to continue receiving Mentee requests, or put them on hold.
- Allow a user to be both a Mentor and Mentee 
- Allow Admins to be associated with more than one organization
- Allow the system to support more than one language. 

## User Stories:
Mentee:
-	I want to be able to be matched with a Mentor from an organization who is offering mentorship so I can learn more about specific skills. 
-	As a mentee, I want to be able to provide information about myself, including my preferences in meeting availability and skills that I’m seeking mentorship in. 
-	I want to create an appointment with a mentor once we’ve been matched, and the ability to communicate with them via email so we can stay in touch.

Mentors:
-	I want to be able to select skills that I’m able to provide mentorship in, as well as other relevant information about myself.
-	I want to be able to create an account so that I can view a list of the mentees I’m mentoring.
-	I want to be able to accept Mentees that I want to Mentor and view a list of Mentees that I’m mentoring. 
-	I want to select my availability and have this sent out to Mentees so that they can book an appointment. 

Admins:
-	I want to be able to sign up for the mentorship platform on behalf of my organization.
-	I want to have the ability to create an account where I can view the Mentors and Mentees within our organization.
-	I want to be able to verify and approve Mentors who want to mentor through our organization.
-	I want to be able to edit the intake form for the organization’s preferences.
-	I want the ability either to host the form publicly, or internally through the organization by email invite. 

References:
https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story/

https://www.theserverside.com/featureThe-7-user-story-guidelines-every-Agile-developer-should-know?_ga=2.191533999.44778962.1602895908-2114816780.1602895908




# Non-Functional Requirements and Environmental Constraints

### What are non-functional requirements and environmental constraints? 
(Source: https://en.wikipedia.org/wiki/Non-functional_requirement)

First, I'm pretty sure environmental constraints and non-functional requirements are fairly synonymous. 

Broadly, functional requirements define what a system is supposed to do and non-functional requirements define how a system is supposed to be. Functional requirements are usually in the form of "system shall do <requirement>". In contrast, non-functional requirements are in the form of "system shall be <requirement>", an overall property of the system as a whole or of a particular aspect and not a specific function. 

Non-functional requirements are often called "quality attributes" of a system. Other terms for non-functional requirements are "qualities", "quality goals", "quality of service requirements", "constraints", "non-behavioral requirements", or "technical requirements". Informally these are sometimes called the "ilities", from attributes like stability and portability.

Refer to wikipedia page linked above for a list of examples of non-functional requirements. Below are some of the ones I think are relevant to our project.

Adaptability  
Availability  
Capacity, current and forecast  
Documentation  
Durability  
Exploitability  
Extensibility (adding features, and carry-forward of customizations at next major version upgrade)  
Flexibility (e.g. to deal with future changes in requirements)  
Stability  
Supportability  
Testability  
Usability (human factors) by target user community  
