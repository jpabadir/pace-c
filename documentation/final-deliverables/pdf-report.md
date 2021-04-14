# PDF Report

## Description of MentorMatch

The software that we have created over the duration of this project is a web-based Mentorship platform. The goal of this system is to facilitate the matching process between users seeking to learn skills (Mentees) and individuals who can offer guidance in sought after skills (Mentors). At the heart of this project are the Organizations, represented by one or more Admins, who host instances of the Mentee form on their public facing website and request Mentors internally from their part of our website: the admin's account. Suitable matches are created based on the number of similar skillsets and time-zone proximity. Mentors can only be matched with Mentees who signed up on the website of the organization a mentor is part of. These matches are displayed as requests to Mentors, who then have the option to accept or deny requests. Once a Mentor accepts a request, the accepted Mentee is notified, allowing the two users to communicate, and for the Mentoring to begin.

<br>

## User Groups

Within our system, there are three user groups: Admins, Mentors, and Mentees.

### 1) Admins

Admins register their Organization by creating an account on our platform. To register, they need to provide the name of the Organization that they're from, as well as their name, email address, and a password. Once registered, an Admin can invite Mentors to join MentorMatch, and see which Mentor requests are pending as well as which Mentors are actively using the system. Admins can view the Mentor Form that requested Mentors receive the link to in an email upon being requested, as well as the Mentee Form, which they can generate an iFrame tag for to embed on their Organization's public website.

**An example of how Admins interact with the system:**<br>

After learning about MentorMatch through a friend, and talking to individuals within our Organization, I decided to register. MentorMatch facilitates the process of bringing together skilled individuals from our organization so that they can aide in our vision of teaching skills to others. By going to MentorMatch and clicking on the 'create account' button, I'm able to register my organization and become the admin account holder. Once I have verified my email address by clicking a link I receive, I can manage my Organization's mentors by viewing who is a Mentor on the platform, as well as which of the Mentors that I have requested haven't yet registered. Requesting Mentors is simple, as only providing a valid email address is required to notify prospective Mentors that I'd like them to register on the platform.

### 2) Mentor

Once requested by an Admin, Mentor users will receive an email with a link which brings them to that Organization's Mentor Form. Through this link, the user becomes associated with that Organization upon successful form submission. On that form, Mentors provide information about the skills they are able to teach, when they're available to mentor via a calendar link, and some basic information about themselves such as their name, email address, and a description. To be able to create their account, a unique email address must be provided. If the form has been filled out according to specifications, the user will be required to verify their email address before they can access Mentor functionalities within MentorMatch. Verified Mentors can view mentee requests and decide whether to accept or decline them. Though MentorMatch initially puts Mentors and Mentees in contact with each other, they then communicate outside of MentorMatch.

**An example of how Mentors interact with the system:**<br>

- As an individual currently working for an Organization registered on MentorMatch, I have experience in valuable skillsets that I would like to share with others. After receiving an email invite to join MentorMatch by my Organization's Admin, I am taken to a form which contains intuitive labels to indicate what information is required of me and offers tooltips and useful warnings in case I get stuck. Having the ability to provide a calendar link to my preferred Google calendar allows for flexibility in my choice of hours of availability, since these changes can be reflected on my calendar by booking times for confirmed Mentees, ensuring double-booking does not happen. After filling out the form and verifying my email, I can read a tutorial which gives a brief introduction to what I'm able to do as a Mentor. The "Mentee Requests" feature offers flexibility, as it allows me to decide whether I'd like to accept or decline a request based on the skills the Mentee is seeking to learn. The 'Accept Mentees' tab provides me with a reminder of the Mentors whose request I have already accepted, as well as basic information about each Mentee so that I can tailor my mentorship sessions towards their needs.

### 3) Mentee

Mentees register through the Mentee Form, which can be accessed through an Organization's public website. Our system does not require mentees to have their own account. The Mentee Form prompts users to provide the skills that they want to be Mentored in as well as some basic information about themselves. Once the form has been submitted, a welcome email will be sent to the email address provided, informing the user that they will be notified once a Mentor has accepted their request. Based on the information provided on the form, MentorMatch will suggest Mentees to Mentors, considering common skills and time zones. After a Mentor accepts a Mentee request, that Mentee will receive an email containing information about the Mentor who accepted them, as well as the link which displays the Mentor's availability. From there, both users can correspond through email to arrange meetings.

**An example of how Mentees interact with the system:**<br>

- After browsing through an Organization's website, I noticed that the Organization is registered on MentorMatch. Since I can relate to the Organization's mission, and I want to further my knowledge in the skillsets that they offer, I decide to register. The Mentee registration form is embedded within the organization's website, and by following the tooltips and fixing any errors that are displayed, I submit the form, which notifies me that my submission has been successful, and that I'll be routed to MentorMatch in a new tab. Navigating to the new tab allows me to explore MentorMatch to see additional information. After checking my emails, I see one from MentorMatch welcoming me to the platform and letting me know that I'll be notified once a Mentor accepts my request. By checking my emails, I'm eventually notified that a Mentor has accepted my request. Within this email, I can see the Mentor's name, their email address, a description about the individual, and a link to their calendar. Navigating to their calendar allows me to view the Mentor's availability so that I can request a time to be mentored.

<br>

## DFD

### DFD Level 0

- [DFD Level 0](https://github.com/jpabadir/pace-c/blob/develop/documentation/final-deliverables/dfd/dfd-level0.pdf)

- A description of this DFD can be found at the bottom of the linked image.

### DFD Level 1

- [DFD Level 1](https://github.com/jpabadir/pace-c/blob/develop/documentation/final-deliverables/dfd/dfd-level-1-full.png)
- This DFD shows the system architecture within more detail.
- It is encouraged to download the image to view it with more ease.
- This DFD has the same three external entities as the previous one, but the mentor and mentee are duplicated in a few different places in order to avoid data flows crossing one another. Furthermore, it goes deeper into showing how accounts are actually created, and matches actually made. In addition, this DFD also shows the system's data stores, as opposed to its level 0 counterpart.

<br>

## Functional Requirements

FR1. Create a static Mentee form which can be embedded into a website via an iFrame tag (with name, email, time-zone, availability, ranked skills, and description fields).

FR2. Both mentors and mentees will use a multiselect dropdown (limited to a maximum of three selectable items) to indicate either their skills or areas seeking mentorship. This, as well as time-zone selection and common organization name will be used to match mentees with mentors.

FR3. Once the user submits the publicly hosted Mentee Form, they will be notified whether their submission was successful. A new tab will then be opened to MentorMatch so that the user can chose whether they want to remain on their Organization's website or explore MentorMatch's website.

FR4. Upon successful Mentee Form registration, the user will receive a welcome email informing them that they'll be notified once a Mentor has accepted their request.

FR5. Create a static Organization registration form with organization, name, email, password, and confirm password fields.

FR6. The MentorMatch login page will host 3 functionalities: Login, Forgot Password, and Create Account. A member of an organization will click on the Create Account button to access the Organization Form to register their Organization and create an account within the system.

FR7. To register Organizations and Mentors successfully, a unique email must be entered. If that email already exists in the database, a warning message will be displayed to the user and they will be blocked from signing up with that email.

FR8. Unique email addresses will be used as the user's username. They will also need to provide a password (containing at least 8 characters).

FR9. Logged in Admins will be able to publicly host the Mentee Form by clicking on the 'Generate iFrame tag' button on the 'View Mentee Form' tab, copying the piece of code that appears, and pasting it into their organization's website's source code.

FR10. Logged in Admins will be able view current Mentors in their organization.

FR11. Logged in Admins will be able to request Mentors by providing the Mentor's email address. They will be able to view a list of the Mentors that they have requested.

FR12. Logged in Admins will be able to view the Mentor Form.

FR13. Once an Admin requests a Mentor using the mentor's email address, the Mentor will receive an email with a link to the Admin's Organization's Mentor Form.

FR14. Create a static Mentor Form with name, email, time zone, calendar link, password, confirm password, top three skills, and description fields.

FR15. Associate the Mentee and Mentor forms with the Admin's Organization that the form was accessed through so Mentees and Mentors only match from the same organization.

FR16. Account registration for Mentors requires a unique email address, and a password. To register an account successfully, the user must be invited by an admin.

FR17. A verification email will be sent to the address provided in account registration to Mentors and Admins. The user must click that link to be able to login to their account so that they can access the features specific to their user type.

FR18. Mentors and Admins will be able to login through MentorMatch's login page. The login will be unsuccessful if either the email or password credentials do not align with what’s in the database (in which case, an error message will be displayed).

FR19. Mentors and Admins will be able to reset their password by clicking on the “Forgot your password?” link on the Login page. The user will be required to enter an email address which has been associated with an account in the database. If successful, an email will be sent to that address, with a link which the user can click to be brought to a separate page to reset their password.

FR20. Mentors and Admins will be able to logout of their account, taking them to the login page, where they can login, retrieve their forgotten password, or register.

FR21. Logged in Mentors will be able to accept Mentees that they have matched with (based off of similar skills, common organization name, and time-zone).

FR22. Once a Mentor has accepted a Mentee, an email will be sent to the Mentee to notify them of a successful match. The two can then correspond through email, and the Mentee will be able to view the mentor's availability via the Mentor's calendar link.

FR23. To "unmatch" Mentees and Mentors, the Mentee can communicate with the Mentor in order to cancel all future appointments, which the Mentor can reflect on his / her calendar.

<br>

## Technical Specifications

**Overview:**

Although the decision for our chosen tech stack was ultimately up to us, our client has technical experience, and so she offered recommendations for front-end and back-end libraries back in September. As such, we aimed to align with the client’s technical suggestions, as well as to pick an MVC model which was well documented. Ultimately, this resulted in React being used for our front-end, Node for our back-end, and Firebase for our database.

**Technical Specifications on the Front-end:**

- React is a library that utilizes JavaScript to create user interfaces.
- Code pertaining to the front-end can be accessed by navigating to the ‘src’ folder, then by clicking on the ‘front-end’ folder.
- ‘App.js’ is the main page that launches upon the application being run.
  - Every other UI page is split into components that are rendered dependent on the program’s state from the user’s actions. Given this, all of our UI components exist in their own folder named according to what they display within the central folder titled ‘components’.
- ‘helper-methods.js’ contains various functions that are called throughout the application. The majority of these functions play a crucial role for interacting with the Firebase database (for example, to create users after form submission, to send verification and password reset emails for authenticated users, etc.).
- Credentials for interacting with the database are within firebase-init.js.
- ‘index.js’ allows the Mentee and Mentor forms to be rendered independently from the rest of the website. This is useful when we need to show only the mentor form to a mentor we just invited via email, and when we need to embed only the mentee form in another organization's website. 
- ‘timeZones.json’ is utilized to populate the ‘time zone’ dropdown on the Mentee and Mentor forms.

A major benefit to using React is the ability to use UI Libraries (we opted for Ant Design), as well as to integrate with our back-end Node server. The main Ant Design components utilized throughout the app are Notifications, Cards, Forms, Icons, Tabs, and Modals.

**Technical Specifications on the Back-end:**

- Node is a back-end environment which uses JavaScript.
- Our back-end is accessed from the ‘back-end’ folder within ‘src’.
- ‘App.js’ contains functions that are triggered from events on a specific port. For example, functions exist for generating matches between Mentees and Mentors (by finding the least difference in time zones, number of commons skills, and same organization string) as well as route calls for inviting new mentors and accepting mentees.
- ‘Email-helpers.js’ houses functions that send custom emails to users via nodemailer.
- The back-end is configured to use the Firebase Admin SDK as a way of securing user information.

Note that both the front-end and back-end contain files to assist in catching errors (.eslintrc.json) and for automatic formatting adjustments (.prettierrc.json). The package-lock.json files contain the list of dependencies which are installed whenever the ‘npm install’ command is run in the terminal before running the front-end and back-end.

**Technical Specifications of the Database:**

- Firebase is a real-time NoSQL database owned by Google, which is hosted on the cloud.
- By navigating to the ‘Realtime Database’ tab of the Firebase console, the JSON data can be referenced. Two nodes exist in our database’s structure:

1.  Organizations - Allow multiple Admins to exist within an Organization, as well as contain mentor email addresses who are either active or pending (for clarity: activeMentors and pendingMentors are ‘children’ of the ‘Organization’ node).
2.  Users – Contains unique user IDs for each type of user (Admin, Mentor, or Mentee), with the information (i.e ‘children’ of the ‘Users’ node) gathered from the form used to register.

- The ‘Authentication’ tab of the Firebase console allows us to verify Mentor and Admin identities upon account creation as well as to validate credentials upon login. All users are required to verify their email address before being able to access Admin or Mentor privileges of the website.
  - Our Firebase configuration uses the ‘Email/Password’ Sign-in method. This can be modified if needed in the future by going to the ‘Sign-in method’ tab under ‘Authentication’.
  - Authentication also handles password reset changes.

Disclaimer: Our application does not have a UI to remove users. If a user is to be removed, go to the ‘Authentication’ tab of Firebase, find the user’s email address, then click on the three vertical dots. Simply click ‘Delete Account’ to remove that user. To ensure that the database isn’t cluttered, it would also be a good idea to remove that user from the Realtime Database.

<br>

## Limitations of MentorMatch (and future improvements)

- The way that a mentor's availability is obtained is through a url input field on the Mentor form. This field is currently limited to only accept Google Calendar links.

- Mentees and Mentors communicate via email messages externally from MentorMatch. Due to this, if MentorMatch was further developed to require internal communication between Mentors and Mentees, Mentees would also need a MentorMatch account.

- Mentors will have to manually update their calendar to reflect booked timeslots with Google Calendars. _Note_: (Google Appointment Slots)[https://support.google.com/calendar/answer/190998?co=GENIE.Platform%3DDesktop&hl=en] would help to remediate this, but since we don't have access to an organization or school Google Calendar, it is not something that we are able to test. However, organizations will likely be able to use Appointment Slots.

- In the case that MentorMatch grows and needs to send >500 emails per day, Nodemailer will become a limitation.
