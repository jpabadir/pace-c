# PDF Report

## General Information

### Description of MentorMatch

The software that we have created over the duration of this project is a web-based Mentorship platform. The goal of this system is to facilitate the matching process between users seeking to learn skills (Mentees) and individuals who can offer guidance in sought after skills (Mentors). At the heart of this project are the Organizations, represented by one or more Admins, who host instances of the Mentee form on their public facing website and request Mentors internally from their part of our website: the admin's account. Suitable matches are created based on the number of similar skillsets and time-zone proximity. Mentors can only be matched with Mentees who signed up on the website of the organization a mentor is part of. These matches are displayed as requests to Mentors, who then have the option to accept or deny requests. Once a Mentor accepts a request, the accepted Mentee is notified, allowing the two users to communicate, and for the Mentoring to begin.

<br>

### User Groups

Within our system, there are three user groups: Admins, Mentors, and Mentees.

#### 1) Admins

Admins register their Organization by creating an account on our platform. To register, they need to provide the name of the Organization that they're from, as well as their name, email address, and a password. Once registered, an Admin can invite Mentors to join MentorMatch, and see which Mentor requests are pending as well as which Mentors are actively using the system. Admins can view the Mentor Form that requested Mentors receive the link to in an email upon being requested, as well as the Mentee Form, which they can generate an iFrame tag for to embed on their Organization's public website.

**An example of how Admins interact with the system:**<br>

After learning about MentorMatch through a friend, and talking to individuals within our Organization, I decided to register. MentorMatch facilitates the process of bringing together skilled individuals from our organization so that they can aide in our vision of teaching skills to others. By going to MentorMatch and clicking on the 'create account' button, I'm able to register my organization and become the admin account holder. Once I have verified my email address by clicking a link I receive, I can manage my Organization's mentors by viewing who is a Mentor on the platform, as well as which of the Mentors that I have requested haven't yet registered. Requesting Mentors is simple, as only providing a valid email address is required to notify prospective Mentors that I'd like them to register on the platform.

#### 2) Mentor

Once requested by an Admin, Mentor users will receive an email with a link which brings them to that Organization's Mentor Form. Through this link, the user becomes associated with that Organization upon successful form submission. On that form, Mentors provide information about the skills they are able to teach, when they're available to mentor via a calendar link, and some basic information about themselves such as their name, email address, and a description. To be able to create their account, a unique email address must be provided. If the form has been filled out according to specifications, the user will be required to verify their email address before they can access Mentor functionalities within MentorMatch. Verified Mentors can view mentee requests and decide whether to accept or decline them. Though MentorMatch initially puts Mentors and Mentees in contact with each other, they then communicate outside of MentorMatch.

**An example of how Mentors interact with the system:**<br>

- As an individual currently working for an Organization registered on MentorMatch, I have experience in valuable skillsets that I would like to share with others. After receiving an email invite to join MentorMatch by my Organization's Admin, I am taken to a form which contains intuitive labels to indicate what information is required of me and offers tooltips and useful warnings in case I get stuck. Having the ability to provide a calendar link to my preferred Google calendar allows for flexibility in my choice of hours of availability, since these changes can be reflected on my calendar by booking times for confirmed Mentees, ensuring double-booking does not happen. After filling out the form and verifying my email, I can read a tutorial which gives a brief introduction to what I'm able to do as a Mentor. The "Mentee Requests" feature offers flexibility, as it allows me to decide whether I'd like to accept or decline a request based on the skills the Mentee is seeking to learn. The 'Accept Mentees' tab provides me with a reminder of the Mentors whose request I have already accepted, as well as basic information about each Mentee so that I can tailor my mentorship sessions towards their needs.

#### 3) Mentee

Mentees register through the Mentee Form, which can be accessed through an Organization's public website. Our system does not require mentees to have their own account. The Mentee Form prompts users to provide the skills that they want to be Mentored in as well as some basic information about themselves. Once the form has been submitted, a welcome email will be sent to the email address provided, informing the user that they will be notified once a Mentor has accepted their request. Based on the information provided on the form, MentorMatch will suggest Mentees to Mentors, considering common skills and time zones. After a Mentor accepts a Mentee request, that Mentee will receive an email containing information about the Mentor who accepted them, as well as the link which displays the Mentor's availability. From there, both users can correspond through email to arrange meetings.

**An example of how Mentees interact with the system:**<br>

- After browsing through an Organization's website, I noticed that the Organization is registered on MentorMatch. Since I can relate to the Organization's mission, and I want to further my knowledge in the skillsets that they offer, I decide to register. The Mentee registration form is embedded within the organization's website, and by following the tooltips and fixing any errors that are displayed, I submit the form, which notifies me that my submission has been successful, and that I'll be routed to MentorMatch in a new tab. Navigating to the new tab allows me to explore MentorMatch to see additional information. After checking my emails, I see one from MentorMatch welcoming me to the platform and letting me know that I'll be notified once a Mentor accepts my request. By checking my emails, I'm eventually notified that a Mentor has accepted my request. Within this email, I can see the Mentor's name, their email address, a description about the individual, and a link to their calendar. Navigating to their calendar allows me to view the Mentor's availability so that I can request a time to be mentored.

<br>

### DFD

#### DFD Level 0

- [DFD Level 0](https://github.com/jpabadir/pace-c/blob/develop/documentation/final-deliverables/dfd/dfd-level0.pdf)

- A description of this DFD can be found at the bottom of the linked image.

#### DFD Level 1

- [DFD Level 1](https://github.com/jpabadir/pace-c/blob/develop/documentation/final-deliverables/dfd/dfd-level-1-full.png)
- This DFD shows the system architecture within more detail.
- It is encouraged to download the image to view it with more ease.
- This DFD has the same three external entities as the previous one, but the mentor and mentee are duplicated in a few different places in order to avoid data flows crossing one another. Furthermore, it goes deeper into showing how accounts are actually created, and matches actually made. In addition, this DFD also shows the system's data stores, as opposed to its level 0 counterpart.

<br>

### Functional Requirements

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

### Technical Specifications

**Overview:**

Although the decision for our chosen tech stack was ultimately up to us, our client has technical experience, and so she offered recommendations for front-end and back-end libraries back in September. As such, we aimed to align with the client’s technical suggestions, as well as to pick well-documented technologies. Ultimately, this resulted in React being used for our front-end, Node for our back-end, and Firebase for our database.

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
- ‘app.js’ contains functions that are triggered from requests on specific ports. For example, functions exist for generating matches between Mentees and Mentors (by finding the least difference in time zones, number of commons skills, and same organization string) as well as route calls for inviting new mentors and accepting mentees.
- ‘Email-helpers.js’ houses functions that send custom emails to users via nodemailer.
- The back-end is configured to use the Firebase Admin SDK. This is needed to give our backend full access to our firebase database, which is, otherwise, secured by rules.

Note that both the front-end and back-end contain files to assist in catching errors (.eslintrc.json) and for automatic formatting adjustments (.prettierrc.json). The package-lock.json files contain the list of dependencies which are installed whenever the ‘npm install’ command is run in the terminal before running the front-end and back-end.

**Technical Specifications of the Database:**

- Firebase is a real-time NoSQL database owned by Google, which is hosted on the cloud.
- By navigating to the ‘Realtime Database’ tab of the Firebase console, the JSON data can be referenced. Two nodes exist in our database’s structure:

1.  Organizations - Allow multiple Admins to exist within an Organization, as well as contain mentor email addresses who are either active or pending (for clarity: activeMentors and pendingMentors are ‘children’ of the ‘Organization’ node).
2.  Users – Contains unique user IDs for each type of user (Admin, Mentor, or Mentee), with the information (i.e ‘children’ of the ‘Users’ node) gathered from the form used to register.

- The ‘Authentication’ tab of the Firebase console allows us to verify Mentor and Admin identities upon account creation as well as to validate credentials upon login. All users are required to verify their email address before being able to access Admin or Mentor privileges of the website. Note that the user id of each user in the 'Authentication' menu is the same as the user id of each user found under the 'Realtime Database' menu.
  - Our Firebase configuration uses the ‘Email/Password’ Sign-in method. This can be modified if needed in the future by going to the ‘Sign-in method’ tab under ‘Authentication’.
  - Authentication also handles password reset changes.
  - Since we use Firebase's 'Authentication' service, we never have to worry about encrypting or storing users' passwords, because that is also handled for us.

Disclaimer: Our application does not have a UI to remove users. If a user is to be removed, go to the ‘Authentication’ tab of Firebase, find the user’s email address, then click on the three vertical dots. Simply click ‘Delete Account’ to remove that user. To ensure that the database isn’t cluttered, it would also be a good idea to remove that user from the Realtime Database.

<br>

### Limitations of MentorMatch, and Future Improvements Needed

- The way that a mentor's availability is obtained is through a url input field on the Mentor form. This field is currently limited to only accept Google Calendar links.

- Mentees and Mentors communicate via email messages externally from MentorMatch. Due to this, if MentorMatch was further developed to require internal communication between Mentors and Mentees, Mentees would also need a MentorMatch account.

- Mentors will have to manually update their calendar to reflect booked timeslots with Google Calendars. _Note_: (Google Appointment Slots)[https://support.google.com/calendar/answer/190998?co=GENIE.Platform%3DDesktop&hl=en] would help to remediate this, but since we don't have access to an organization or school Google Calendar, it is not something that we are able to test. However, organizations will likely be able to use Appointment Slots.

* In the case that MentorMatch grows and needs to send >500 emails per day, Nodemailer will became a limitation.

* In the code, when providing an explicit URL was required, 'localhost' was used as the domain name. When the website is deployed, a more permanent solution will need to be implemented. This can be done using environment variables, for instance.

* Currently, anybody who has access to the mentor form url can sign up to be a mentor. We need to make sure that only invited mentors are able to sign up. This can be done upon mentor signup through a simple check of the DB.

* If the website is to be used with its current configuration, our team will need to communicate with Pace to transfer ownership of the Firebase project, as well as that of the gmail account we created for this website. Please see the step-by-step section for more information about this.

* While efforts have been made in the last sprint to start implementing security measures for the site, there are still large security gaps in the site that need to be addressed. The ones we can think of are:

- The backend needs to be secured to accept only requests from our specific client app. This should be able to be done by changing its CORS settings.
- The database security rules most likely need to be improved and fine-tuned, although a good starter version is already deployed in production.

* Currently, any mentor or mentee can change the url we give them when filling out the signup form in order to signup under the name of any company they choose. This is because we are currently using a get-request parameter that we set in the url we give the user in order to determine the name of the organization of the mentor who invited them. This process should be made impervious to potential user interference.

* In the case that MentorMatch grows and needs to send >500 emails per day, Nodemailer (the solution we use to send custom emails) may become a limitation.

## Implementation Update

### Updated Test Report

All of our front-end components within our application are in the 'components' folder within 'src'. Each component folder has a respective '.test.js' file for unit testing purposes. Generally, our team primarily focused on feature development during each sprint of the project's duration, which included rigorous manual testing before merging the PR. These features were then tested to assure quality by unit testing through Jest (a testing framework recommended by React, aimed at specifically testing JavaScript).

In addition, our Github repository has regression testing, which ensures that all unit tests have passed before any open PR can be merged (ensuring that no new additions to the repo will impact existing features in an adverse way). Continuous Integration within our repo assisted with quality assurance since it served to find any potential issues early in development once pushed. Before pushing, EsLint and Prettier screened for errors and warnings, displaying any areas requiring attention on the console.

In total, we have 15 test suites, with 57 tests that pass.
[Reminder to myself to add something about total coverage here]

### Unimplemented Requirements

As our application stands, all features required to meet Minimum Viable Product functionality have been developed. As such, there are no requirements that have been unimplemented or that are only partially working. Any feature that might have limitations or that could benefit from future development is listed under the "Limitations and Future Improvements" section.

Although the majority of features have been unit tested, there are components that we were not able to fully unit test due to the time intensivity of Firebase mocking. Components requiring Firebase mocking have a comment disclosing this. For reference, the files that we were unable to fully test due to the fact that they require a Firebase call to render properly are as follows:

- AdminHome.test.js
- ManageMentors.test.js
- MentorAccepted.test.js
- MentorSuggested.test.js

Despite manually testing to ensure functionality, the back-end could benefit in the future from unit testing via Jest.

<br>

### Known Bugs

After testing each user flow of the application multiple times, no bugs have been found since we have worked to fix any bugs that we have come across. For reference, some of the bugs that we have fixed can be found in our repository by going to the 'documentation' folder, then clicking on 'known-bugs.md'.

- Although this isn't necessarily a bug, it is important to note that a TypeError displaying 'Cannot set property 'id' of null' may occur when navigating to the 'Accepted Mentees' tab. If this occurs, reference the Firebase database to see if the logged in mentor has any suggested or accepted mentees’ IDs that don’t exist in the database. If a mentee ID appears in either field and that mentee doesn't exist as a user in the database, remove that UID. Note: The TypeError is only displayed when the app is being run on localhost, and would not crash the application if deployed.

## Step-by-step guide

### Where to Find the Code

The code for MentorMatch can be found in the GitHub repository: <https://github.com/jpabadir/pace-c>. This repo can be forked in order for the code to be used by anyone.

### Setup Installation Details

#### General

Install Node:

1. Install nvm: run the following command in a terminal: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash`
2. Run `nvm install node` (this will install the latest version of node for you)
3. Run `node -v` to check that node is installed and that you're using the latest version.
4. Open your IDE, checkout the develop branch, and pull (`git checkout develop`, `git pull`)

#### Front-end

1. In your terminal, navigate to `pace-c/src/front-end` (`cd pace-c/src/front-end`)
2. Run `npm install`. This will look into the package.json, and install all required dependencies
3. Run `npm start`. This will start the MentorMatch app! You should see the homepage of MentorMatch open in your browser.
4. Your front-end setup is done!

#### Back-end

Note that for the website to work properly, you need to run the backend at the same time as you run the frontend. Therefore, we suggested opening another terminal window or tab before running the instructions below.

1. In your terminal, navigate to `pace-c/src/back-end`.
2. Run `npm install`. This will install all required dependencies.
3. Run `nodemon src/app.js`. Nodemon is a small package that helps us develop faster. All it does is detect when the file `app.js` has been modified, and stops and re-runs the server so we don't have to do it manually.
4. Your back-end setup is done!

### Unit Testing Packages Installation Details

1. Install Jest: run the following command in a terminal:
   `npm install --save-dev jest@26.6.0`
2. Install React test renderer: run the following command in a terminal:
   `npm install react-test-renderer`
3. Now, running `cd src/front-end/; npm run test` from the project's top-level directory will run the test suites.

### Linting Installation Details

Our team decided to share linting rules, and to enforce these with our continuous integration pipeline. Should your team choose to do the same, you can follow the instructions below in order to copy our setup.

1. In VSCode (assuming you are using VSCode), click on the "Extensions" icon on the leftmost navigation bar.
2. Install "Prettier - Code formatter" and "ESLint".
3. In the terminal type `cd src/front-end`
4. Run the follow script `npx install-peerdeps --dev eslint-config-airbnb`
   - For the first prompt, select npm by entering `2`
   - Enter `2` to indicate that you prefer the ESLint and Prettier configurations to be formatted as .json
   - When asked to "Write .eslintrc.js (Y/n)? Enter `Y`
   - For the max line length, say `80`
   - When asked about the trailing commas, enter `3`
5. Now, running `eslint src/front-end/src/**/*.js src/back-end/src/**/*.js` from the project's top-level directory will lint the entire codebase.

### About Continuous Integration

As mentioned, our team uses continuous integration (CI). Our CI pipeline does two things. First, it runs ESLint on the code, and fails if the code is not properly linted. Then, it runs the project's tests, and fails if any of them fail. It is set-up to do so when a Pull Request is made to develop or master, our two default, protected branches. This is all piloted by the `link.yml` file in this repo, please look there to fully understand and modify the CI steps.

### Maintenance Issues

There are two required associated external entities that anyone interested in using this project will want to be aware of: an email address to message users, and a Firebase project. For Pace, who is the original client of this project, there is an option to receive ownership of these two accounts directly from our team. Anyone else using this project in an open-source fashion will need to setup their own Firebase project and email accounts, and change the code in order to link this software to the new accounts.
Should pace choose to use the same accounts we do, there are three files which are "gitignored" which we will transfer to them: a `.env` file, which stores the password to the Gmail account, a `credentials.json` file, which stored information about our Firebase projects (API key, project ID, etc...) and another file with a very long name which stores information pertaining to the firebase admin SDK, which is therefore used by our backend to bypass the firebase rules.

#### Gmail Account Details

Our team created the following Gmail address, which is currently being used to message users: "pacementormatch@gmail.com". Our team is happy to transfer the password to this email account, should Pace wish to use it. Otherwise, the email address used to message users can easily be changed in the `email-helpers.js` file.

#### Firebase Account Details

Ownership of the Firebase project we created can be transferred to Pace, and our team is happy to schedule a meeting in order to do so, should Pace choose to use the same project. Otherwise, the project being used can be changed in the Firebase configuration files, in the code.

### Untested Existing Features, Unimplemented Features

Please see the "Updated Test Report" as well as the "Unimplemented Requirements" sections for a note about this.

## Links

### GitHub repository link

<https://github.com/jpabadir/pace-c>

### Link to promotion video

<https://link-to-video>

### Link to presentation video

<https://link-to-video>

### Link to slideshow

<https://docs.google.com/presentation/d/1sVmy_5QQ0siq0K7j4UhdK43ZlHqF2yE5FaPrWn5iHbU/edit?usp=sharing>
