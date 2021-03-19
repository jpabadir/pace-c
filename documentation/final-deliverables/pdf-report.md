# PDF Report

## Description of MentorMatch

The software that we have created over the duration of this project is a web-based Mentorship platform. The goal of this system is to facilitate the matching process between users seeking to learn skills (Mentees) and individuals who can offer guidance in sought after skills (Mentors). At the heart of this project are the Organizations (Admins), who host instances of the Mentee form on their public facing website and request Mentors internally from their organization. Suitable matches are created based on the foundations of common organizations, number of similar skillsets, and time-zones. These matches are displayed as requests to Mentors, who then have the flexibility to accept or deny requests. Once a Mentor accepts a request, the accepted Mentee is notified, allowing the two users to communicate, and for the Mentoring to begin.

<br>

## User Groups

Within our system, there are three user groups: Admins, Mentors, and Mentees.

### 1) Admins

Admins register their Organization by creating an account on our platform. To register, they need to provide the name of the Organization that they're from, as well as their name, email address, and a password. Once registered, an Admin can invite Mentors to join MentorMatch, and see which Mentor requests are pending as well which Mentors are actively using the system. Admins can view the Mentor Form that requested Mentors receive the link to in an email upon being requested, as well as the Mentee Form, which they can generate an iFrame tag for to embed on their Organization's public website.

**An example of how Admins interact with the system:**<br>

After learning about MentorMatch through a friend, and talking to individuals within our Organization, I decided to register. MentorMatch facilitates the process of bringing together skilled individuals from our organization so that they can aide in our vision of teaching skills to others. By going to MentorMatch and clicking on the 'create account' button, I'm able to register my organization and become the admin account holder. Once my email has been verified, I can manage my Organization's mentors by viewing who is a Mentor on the platform, as well as which individuals that I have requested haven't yet registered. Requesting Mentors is simple, as only providing a valid email address is required to notify prospective Mentors that I'd like to register on the platform.
I can view the form that requested Mentors receive by navigating to the 'View Mentor Form' tab, and by going to the 'View Mentee Form' tab, I can see the Mentee Form. Clicking on the 'Generate iFrame Tag' button allows me to grab the HTML tag which can be embedded on my organization's public website.

### 2) Mentor

Once requested by an Admin, Mentor users will receive an email with a link which brings them to that Organization's Mentor Form. Through this link, the user becomes associated with that Organization upon successful form submission. Within the form itself, Mentors provide information about the skills they are able to teach, when they're available to mentor via a calendar link, and some basic information about themselves such as their name, email address, and a description. To be able to create their account, a unique email address must be provided. If the form has been filled out according to specifications, the user will be required to verify their email address before they can access Mentor functionalities within MentorMatch. Verified Mentors can view mentee requests and decide whether to accept or decline them. Communication with Mentees occurs externally from MentorMatch.

**An example of how Mentors interact with the system:**<br>

- As an individual currently working for an Organization registered on MentorMatch, I have experience in valuable skillsets that I would like to share with others. After receiving an email invite to join MentorMatch by my Organization's Admin, the Mentor Form reflects intuitive labels to indicate what information is required and offers tooltips and useful warnings in case I get stuck. Having the ability to provide a calendar link to my preferred calendar allows flexibility for when I'm available to Mentor, since these changes can be reflected as booking times for potential Mentees. After filling out the form and verifying my email, the tutorial gives a brief introduction to what I'm able to do as a Mentor. The Mentee requests offers plasticity, as it allows me to decide whether I'd like to accept or decline a request based on the skills the mentee is seeking. The 'Accept Mentees' tab provides me with a reminder of who I'm currently mentoring, as well as basic information about the Mentee so that I can tailor my mentor sessions towards their needs.

### 3) Mentee

Mentees register through the Mentee Form, which can be accessed through an Organization's public website. Our system does not require mentees to have their own account. The Mentee Form prompts users to provide the skills that they want to be Mentored in as well as some basic information about themselves. Once the form has been submitted, a welcome email will be sent to the email address provided, informing the user that they will be notified once a Mentor has accepted their request. Based on the information provided on the form, MentorMatch will suggest Mentees to Mentors, considering common skills and time zones. After a Mentor accepts a Mentee request, that Mentee will receive an email containing information about the Mentor who accepted them, as well as the link which displays when the Mentor is available. From there, the two user types can correspond through email to arrange meetings.

**An example of how Mentees interact with the system:**<br>

- After browsing through an Organization's website, I noticed that the Organization is registered on MentorMatch. Since I can relate to the Organization's mission, and I want to further my knowledge in the skillsets that they offer, I decide to register. The Mentee registration form is within the organization's website, and by following the tooltips and fixing any errors that are displayed, I submit the form, which notifies me that my submission has been successful, and that I'll be routed to MentorMatch in a new tab. Navigating to the new tab allows me to explore MentorMatch to see additional information. After checking my emails, I see one from MentorMatch welcoming me to the platform and letting me know that I'll be notified once a Mentor accepts my request.
  By checking my emails, I'm eventually notified that a Mentor has accepted my request. Within this email, I can see the Mentor's name, their email address, a description about the individual, and a link to their calendar. Navigating to their calendar allows me to book an available time to meet.

<br>

## DFD

### DFD Level 0

- [DFD Level 0](https://github.com/jpabadir/pace-c/blob/requirements-milestone/documentation/dfd-level0.pdf)

- A description of this DFD can be found at the bottom of the linked image.

### DFD Level 1

- [DFD Level 1](https://github.com/jpabadir/pace-c/blob/requirements-milestone/documentation/dfd-level-1/dfd-full.jpg)
- This DFD shows the system architecture within more detail.
- It is encouraged to download the image to view it with more ease.
- This DFD has the same three external entities as the previous one, but the mentor and mentee are duplicated in a few different places in order to avoid data flows crossing one another. Furthermore, it goes deeper into showing how accounts are actually created, and matches actually made. In addition, this DFD also shows the system's data stores, as opposed to its level 0 counterpart.
- Any feature included in a red rectangle is to be completed for the Peer Review #2 milestone.
- Any feature included in a dotted rectangle (or shown in a dotted fashion itself) is to be completed for the Final Project milestone.

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

- Allow Mentees to create an account with the system, and develop surrounding UI, with additional features.
- Allow Mentors the ability to continue receiving Mentee requests, or put them on hold.
- Allow a user to be both a Mentor and Mentee
- Allow Admins to be associated with more than one organization
- Allow the system to support more than one language.
- Allow Admins to pass their admin privileges to another user if that current admin no longer wishes to sustain an Admin role.

<br>

## Technical Specifications

(needs to be added)
