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

FR3. Both mentors and mentees will use a ranking system to indicate either their skills or areas seeking mentorship. This, as well as time-zone selection will be used to weigh matching mentees to mentors.

FR4. The form should restrict the age of Mentors (anyone under 17 should not be able to become a mentor). 

FR5. Once the user submits the form, a popup will appear. The popup will state the domain address to access the mentorship portal, but it will redirect the user to the hosting organization’s website.

FR6. The “mentorship portal” will host 4 functionalities: Create Account, Login, Register Organization, and Forgot Password. A member of an organization will click on Register Organization to enter information about their organization and create an account within the system. 

FR7. To register an organization successfully, a unique email must be entered. If that email has already been used in the database, an error message will be displayed. 

FR8. To correlate the company to the user, the domain name of the email will be used (i.e john.doe@UBC.ca signifies that John Doe’s organization is UBC). 

FR9. To complete organization registration, the user will create an account using the same email address, which will be their username. They will also need to provide a password (in the format of at least 6-10 characters, with at least one number). That user will then be allocated admin privileges. 

FR10. The admin will publicly host the form (by embedding the form within their website via iFrame). 

FR11. Account registration for Mentors and Mentees requires a unique email address, and a password. To register an account successfully, the email must not be associated to a pre-existing account but must match with an email used in the mentorship form. If the entered email has not been associated to a form, an error message directing the user to fill out a form will be displayed.

FR12. An email will be sent to the address provided in account registration. The user must click that link to be able to login to their account.

FR13. Mentees and Mentor will be able to login from the mentorship portal. The login will be unsuccessful if either the email or password credentials do not align with what’s in the database (in which case, an error message will be displayed).

FR14. Mentors and Mentees will be able to reset their password by clicking on “Forgot your password?” on the mentorship portal. The user will be required to enter an email address which has been associated with an account in the database. If successful, an email will be sent to that address, which the user can click to be brought to a separate page to reset their password.

FR15. After logging in, Mentees will immediately be able to see Mentors they matched with, as well as a calendar stating their availability. The same goes for Mentors.

FR16. Mentees, Mentors, and Admins will be able to logout of their account, to which they will return to the index of the mentorship portal, where they can login, create an account, retrieve their password, or register an organization. 

## 2) Peer Testing #2
FR17. The admin will decide how to host the Mentorship form. (either publicly, or internally through email invite)

FR18. The form will be dynamic in the way that admins can edit the fields of the form to suit their needs.

FR19. The form will be dynamic in the way that depending on the user filling out the form (i.e either mentor or mentee), once the radio button is selected for the type of user, the form will display appropriate information for each. 

FR20. Mentees should be able to change their availability using a calendar.

FR21. Mentors who validate their email address will be able to login, however, they will not be able to view any mentees until an admin approves their account.

FR22. Admins will be able to approve mentors through the mentorship portal

FR23. Mentees should be able to select Mentors they want to work with from the ones that they matched with. This would appear under a heading titled “Current Mentors”.

## 3) Final Report 
FR24. Ensure all components of the system are functional, fixing any final bugs. 

FR25. Implement “bonus features” (a.k.a features that are not required of the system, but that would be nice to have):
    - Allow a user to be both a Mentor and Mentee 
    - Allow admins to be associated with more than one organization
    - Allow the system to support more than one language. 


