# PDF Report

## Description of MentorMatch

The software we are building is to create a web-based Mentorship platform that would allow users to register as a mentor or a mentee. In addition, users from the organization using our product can register and sign in as administrators. After registering, a mentor or mentee are required to fill a mentorship form for identification. Then, the platform shows viewable calendar for availability of mentors from which mentees can request for a meeting, and, on their version of the site, mentors can view and manage mentees' mentorship requests.

<br>

## User Groups

### Mentor

System requires mentors to create their own accounts and fill out the sign-up form in order to approve mentee's matching requests via emails. In addition, the system requires mentors to provide email address and availability of their schedule for mentees to book an appointment. (Example scenario needs to be added)

### Mentee

System does not require mentees to have their own account. Instead, they are required to fill out the sign-up form in order to view availability of mentors they are going to match with. Also, they need to provide contact info while filling the form. (Example scenario needs to be added)

### Admins

The role of an Admin is to decide how to host the form, edit the form, and approve Mentors. The Admin could have the ability to remove Mentors, and possibly pass on Admin privileges to another user if that Admin decides to leave the platform. (Example scenario needs to be added)

<br>

## DFD

### DFD Level 0

* [DFD Level 0](https://github.com/jpabadir/pace-c/blob/requirements-milestone/documentation/dfd-level0.pdf)

* A description of this DFD can be found at the bottom of the linked image.

### DFD Level 1

* [DFD Level 1](https://github.com/jpabadir/pace-c/blob/requirements-milestone/documentation/dfd-level-1/dfd-full.jpg)
* This DFD shows the system architecture within more detail.
* It is encouraged to download the image to view it with more ease.
* This DFD has the same three external entities as the previous one, but the mentor and mentee are duplicated in a few different places in order to avoid data flows crossing one another. Furthermore, it goes deeper into showing how accounts are actually created, and matches actually made. In addition, this DFD also shows the system's data stores, as opposed to its level 0 counterpart.
* Any feature included in a red rectangle is to be completed for the Peer Review #2 milestone.
* Any feature included in a dotted rectangle (or shown in a dotted fashion itself) is to be completed for the Final Project milestone.

<br>

## Functional Requiremnets

FR1. Create a static form that can be embedded into a website via iFrame (with Name, email, time-zone, availability, ranked skills, and user type [Mentee vs. Mentor]).

FR2. The form will be split into subsections, using a “next” button to navigate to the next section, and a "back" button to view the previous one.

FR3. Both mentors and mentees will use a ranking system to indicate either their skills or areas seeking mentorship. This, as well as time-zone selection and availability will be used to weigh matching mentees to mentors.

FR4. The form should restrict the age of Mentors (anyone 17 and under should not be able to become a mentor).

FR5. Once the user submits the publicly hosted form, a popup will appear. The popup will state the domain address to access the Mentorship Portal, but it will redirect the user to the hosting organization’s website.

FR6. The “Mentorship Portal” will host 3 functionalities: Login, Forgot Password, and Register. A member of an organization will click on Register to select their user-type (either Mentor or Organization) to enter information about themselves and create an account within the system.

FR7. To register Organizations and Mentors successfully, a unique email must be entered. If that email has already been used in the database, an error message will be displayed.

FR8. To correlate the company to the user, the domain name of the email will be used (i.e john.doe@UBC.ca signifies that John Doe’s organization is UBC).

FR9. To complete organization registration, the user will create an account using the same email address, which will be their username. They will also need to provide a password (in the format of at least 6-10 characters, with at least one number). That user will then be allocated admin privileges.

FR10. The Admin will publicly host the form (by embedding the form within their website via iFrame) for Mentee registration.

FR11. Account registration for Mentors requires a unique email address, and a password. To register an account successfully, the email must not be associated to a pre-existing account but must match with an email used in the mentorship form (which will be accessible through email invite). If the entered email has not been associated to a form, an error message directing the user to fill out a form will be displayed.

FR12. An email will be sent to the address provided in account registration. The user must click that link to be able to login to their account.

FR13. Mentors and Admins will be able to login from the Mentorship Portal. The login will be unsuccessful if either the email or password credentials do not align with what’s in the database (in which case, an error message will be displayed).

FR14. Mentors and Admins will be able to reset their password by clicking on “Forgot your password?” on the Mentorship Portal. The user will be required to enter an email address which has been associated with an account in the database. If successful, an email will be sent to that address, which the user can click to be brought to a separate page to reset their password.

FR15. Mentors will be required to fill in the form through email invite.

FR16. Mentors and Admins will be able to logout of their account, to which they will return to the index of the mentorship portal, where they can login, retrieve their password, or register.

FR17. Logged in Mentors on the Mentorship Portal will be able to accept Mentees that they have matched with (based off of similar skills, availability, and timezone).

FR18. Once a Mentor has accepted a Mentee, an email will be sent to the Mentee to notify them of a successful match. The two can then correspond through email.

FR19. The Admin will decide how to host the Mentorship form (either publicly, or internally through email invite). The source code for publicly embedded forms will be generated by clicking a "Generate" button so that Admins can add the iFrame tag to their organization's public website.

FR20. The form will be dynamic in the way that Admins can edit the fields of the form to suit their needs.

FR21. The form will be dynamic in the way that depending on the user filling out the form on public sites (i.e either mentor or mentee), once the radio button is selected for the type of user, the form will display appropriate information for each.

FR22. The email that notifies Mentees that they have been matched to a Mentor will link to a third-party calendar (such as Google Calendar) with the Mentor's availability. Mentees will be able to create an appointment with Mentors through that calendar.

FR23. To "unmatch" Mentees and Mentors, the Mentee can remove themselves from the calendar, cancelling all future appointments. The Mentor could then remove them for their dashboard on the Mentorship Portal.

FR24. Mentors who validate their email address will be able to login, however, they will not be able to view any matched Mentees until an Admin approves their account.

FR25. Admins will be able to approve Mentors through the Mentorship Portal.

FR26. Ensure all components of the system are functional, fixing any final bugs.

FR27. Implement “bonus features” (a.k.a features that are not required of the system, but that would be nice to have):

* Allow Mentees to create an account with the system, and develop surrounding UI, with additional features.
* Allow Mentors the ability to continue receiving Mentee requests, or put them on hold.
* Allow a user to be both a Mentor and Mentee
* Allow Admins to be associated with more than one organization
* Allow the system to support more than one language.
* Allow Admins to pass their admin privileges to another user if that current admin no longer wishes to sustain an Admin role.

<br>

## Technical Specifications

 (needs to be added)
