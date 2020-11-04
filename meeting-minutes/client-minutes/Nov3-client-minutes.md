# PACE GROUP C

# SEVENTH CLIENT MEETING 11/3

## 3 NOVEMBER 2020 / 9:00AM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Maya T., Philip O., Anthony B., Shannon F., Christian P.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

- 09/29-02. Create static form with input fields for name, email, user type, availability, time, and "next" as well as "back" buttons will be worked on for the end of this week's sprint **First iteration complete**

#### NEW BUSINESS

1. Do "Stand Up" from the week.

- Discuss how the past week was spent learning React for 3/4 of the team. Apart from that, members worked on setting up ESLint for automatic code linting, setting up the database (including saving form input), as well as creating parts of the static form.
  - MentorshipForm.js will be displayed at this time
- Mention that this week will be spent on the following tasks:
  - Splitting the form into subsections and creating a subsection for providing account credentials.
  - Creating the UI for the Login Page (input fields for username and password, and buttons for "Forgot Password" and "Join Now"), as well as for Logged in Mentors (display mentees on a dashboard and allow logout).
  - Validation for unique usernames before account creation.
  - Connecting the Login to the Backend and the Database.
  - Sending a verification email after account creation.
  - Solidifying the availability feature on the form.
  - Creating methodology for heuristic evaluation (suggested class deliverable for Friday).

2. Discuss "Road Blocks"

- Many team members had midterms last week, and have more midterms this week.

### NOTES

The meeting commenced with Shannon asking Katrina what Pace C had accomplished in the last week. Katrina mentioned the points as listed above, and demonstrated the static form from the react app.

- While walking through the form, Katrina mentioned that some of the input fields still need to be added (such as a field for determining the user’s age and entering ranked skillsets). Shannon mentioned that the age field may not be necessary, since we can assume that the only people who would be accessing the form would be 16 and older. As such, the feature of disabling the form dependent on user age may not be required for this week’s sprint.
- On the topic of gaining user availability, Shannon agrees that the current setup (where the time-range options are hardcoded) limits users, and that a dynamic feature would be better. A possible solution was then shown to Shannon, which would provide a cleaner, and more dynamic UI (https://fullcalendar.io/). We then discussed different options, since others had also been contemplated, such as Calendly and Google Calendar. To explain Katrina’s rationale:
  - Calendly wasn’t strongly considered since developers need to pay to use the API (Christian also supported this point from his experience with Calendly as a TA, where the first user is free, but each user after would cost ~thousands).
  - Google Calendar was heavily considered in Katrina’s research. But, access tokens are needed, and it would require that users log in with a google account before accessing the form. Therefore, to not limit the users to only those with google accounts, Katrina opted away from Google Calendar.
- The client then agreed with the points that were brought up, but also mentioned that we could opt for the simplest way of gaining user availability first (such as Google Calendars), and then work on improving the feature later on.
- The client mentioned that the way our form is currently setup looks good, and that we can continue working on features as planned in our sprint so that we’re able to gain user information, create users in the database, and login using the provided credentials. **However**, later on in development, we might have to split that basic form into two: one specifically for mentors, and one for mentees, so that it’s accessed through email invite. Essentially, there could be two routes: “localhost/MentorCreate” for the Mentor form, and “localhost/MenteeCreate” for mentees. The client’s thought process with this, is that Mentors should be part of an organization, and so she wants to make sure that those users only access the form through a given link, instead of finding the form publicly.

We briefly discussed routing (since we intend to use routing for separating the mentorship form and the login page). The client recommended using React Router. As a sidenote, the client also mentioned that React recently introduced Hooks (https://reactjs.org/docs/hooks-intro.html), which would be useful to learn since that will be a skillset that could be beneficial to have within the tech industry.

Pace A and B then discussed what they did in the previous week, their blockers, and their plans for this week’s sprint. Their teams had quite a few midterms, and so they spent time learning React and setting up their IDEs.

- The client recommends when planning the sprints, teams should generally try to make planned tickets small, so that each ticket works towards some additional functionality.
  - It could be beneficial to ensure each front-end component is associated to the back-end with the corresponding working functionality, before developing too much of the front-end.
- Over the last week, the client talked with a company called Code Bar (https://codebar.io/), who would be interested in the functionality of the Mentorship Platform. As such, they could be a good company to partner with once we near the end of our Capstone Project.
  - The client will continue to be in contact with them, and they might have some suggestions for us to incorporate after our minimum functional requirements have been met.

### ACTION ITEMS

- 11/2-01. Katrina will check-in with Eric on how the heuristic evaluation is going in preparation for Friday's lecture.
