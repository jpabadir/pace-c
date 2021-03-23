# PDF Report

## Description of MentorMatch

The software that we have created over the duration of this project is a web-based Mentorship platform. The goal of this system is to facilitate the matching process between users seeking to learn skills (Mentees) and individuals who can offer guidance in sought after skills (Mentors). At the heart of this project are the Organizations (Admins), who host instances of the Mentee form on their public facing website and request Mentors internally from their organization. Suitable matches are created based on the foundations of common organizations, number of similar skillsets, and time-zones. These matches are displayed as requests to Mentors, who then have the flexibility to accept or deny requests. Once a Mentor accepts a request, the accepted Mentee is notified, allowing the two users to communicate, and for the Mentoring to begin.

<br>

## User Groups

Within our system, there are three user groups: Admins, Mentors, and Mentees.

### 1) Admins

Admins register their Organization by creating an account on our platform. To register, they need to provide the name of the Organization that they're from, as well as their name, email address, and a password. Once registered, an Admin can invite Mentors to join MentorMatch, and see which Mentor requests are pending as well as which Mentors are actively using the system. Admins can view the Mentor Form that requested Mentors receive the link to in an email upon being requested, as well as the Mentee Form, which they can generate an iFrame tag for to embed on their Organization's public website.

**An example of how Admins interact with the system:**<br>

After learning about MentorMatch through a friend, and talking to individuals within our Organization, I decided to register. MentorMatch facilitates the process of bringing together skilled individuals from our organization so that they can aide in our vision of teaching skills to others. By going to MentorMatch and clicking on the 'create account' button, I'm able to register my organization and become the admin account holder. Once my email has been verified, I can manage my Organization's mentors by viewing who is a Mentor on the platform, as well as which individuals that I have requested haven't yet registered. Requesting Mentors is simple, as only providing a valid email address is required to notify prospective Mentors that I'd like them to register on the platform.
I can view the form that requested Mentors receive by navigating to the 'View Mentor Form' tab, and by going to the 'View Mentee Form' tab, I can see the Mentee Form. Clicking on the 'Generate iFrame Tag' button allows me to grab the HTML tag which can be embedded into my organization's website's source code.

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

<br>

## Functional Requirements

FR1. Create a static Mentee form which can be embedded into a website via an iFrame tag (with name, email, time-zone, availability, ranked skills, and description fields).

FR2. Both mentors and mentees will use a multiselect dropdown (limited to a maximum of three selectable items) to indicate either their skills or areas seeking mentorship. This, as well as time-zone selection and common organization name will be used to match mentees with mentors.

FR3. Once the user submits the publicly hosted Mentee form, they will be notified whether their submission was successful. A new tab will then be opened to MentorMatch so that the user can chose whether they want to remain on their Organization's website or explore MentorMatch's website.

FR4. Upon successful Mentee Form registration, the user will receive a welcome email informing them that they'll be notified once a Mentor has accepted their request.

FR5. Create a static Organization registration form with organization, name, email, password, and confirm password fields.

FR6. The MentorMatch login page will host 3 functionalities: Login, Forgot Password, and Create Account. A member of an organization will click on the Create Account button to access the Organization Form to register their organization and create an account within the system.

FR7. To register Organizations and Mentors successfully, a unique email must be entered. If that email has already been used in the database, a warning message will be displayed to the user.

FR8. Unique email addresses will be used as the user's username. They will also need to provide a password (in the format of at least 8 characters).

FR9. Logged in Admins will be able to publicly host the Mentee Form by clicking on the 'Generate iFrame tag' button on the 'View Mentor Form' tab, copying the contents, and pasting it into their organization's website's source code.

FR10. Logged in Admins will be able view current Mentors in their organization.

FR11. Logged in Admins will be able to request Mentors by providing the Mentor's email address. They will be able to view a list of the Mentors that they have requested.

FR12. Logged in Admins will be able to view the Mentor form.

FR13. Once an Admin requests a Mentor, the email address that the Admin entered will receive an email with a link to the instance of that Organization's Mentor Form.

FR14. Create a static Mentor form with name, email, time zone, calendar link, password, confirm password, top three skills, and description fields.

FR15. Associate the Mentee and Mentor forms with the Admin's Organization that the form was accessed through so Mentees and Mentors only match from the same organization.

FR16. Account registration for Mentors requires a unique email address, and a password. To register an account successfully, the user must be invited by an admin.

FR17. A verification email will be sent to the address provided in account registration to Mentors and Admins. The user must click that link to be able to login to their account so that they can access the features specific to their user type.

FR18. Mentors and Admins will be able to login through MentorMatch's login page. The login will be unsuccessful if either the email or password credentials do not align with what’s in the database (in which case, an error message will be displayed).

FR19. Mentors and Admins will be able to reset their password by clicking on the “Forgot your password?” link on the Login page. The user will be required to enter an email address which has been associated with an account in the database. If successful, an email will be sent to that address, which the user can click to be brought to a separate page to reset their password.

FR20. Mentors and Admins will be able to logout of their account, to which they will return to the login page, where they can login, retrieve their password, or register.

FR21. Logged in Mentors will be able to accept Mentees that they have matched with (based off of similar skills, common organization name, and time-zone).

FR22. Once a Mentor has accepted a Mentee, an email will be sent to the Mentee to notify them of a successful match. The two can then correspond through email, and the Mentee will be able to set a time to meet with the Mentor via the Mentor's calendar link.

FR23. To "unmatch" Mentees and Mentors, the Mentee can remove themselves from the calendar, cancelling all future appointments.

<br>

## Technical Specifications

(needs to be added)
