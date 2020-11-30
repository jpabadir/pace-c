# PACE GROUP C

# TENTH CLIENT MEETING 11/24

## 24 NOVEMBER 2020 / 9:00-9:50AM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Philip O., Maya T., Shannon F., Daniel E.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

- 11/10-03. The team should discuss possible ways of obtaining Mentor availability to send to an accepted Mentee, where the Mentee can then book a slot from the Mentor's available time slots. **In progress**
- 11/10-05. Research how a react component can be generated into an iFrame tag. **Will likely be investigated after peer testing #1 milestone**
- 11/17-01. Incorporate the client's feedback into our project from Nov.17 Meeting. **Completed**
- 11/17-02. Katrina will relay the information to our team once Shannon replies to our email. **Completed**

#### NEW BUSINESS

1. Do "Stand Up" from the week.

- Mention that last week's sprint consisted of working on the following tasks (the Github Project Board will briefly be shown at this time. The application will be demonstrated to highlight new features):

  - Adding description and skill selection fields to Mentee and Mentor forms.
  - Pulling matched Mentees into the Mentor UI.
  - Allowing Mentee requests to be either accepted or denied.
  - Sending a welcome email to the Mentee once the Mentee form has been filled and submitted.
  - Preparing logistics for the peer testing milestone (Class deliverable).

- Brief the client on this week's sprint plan:
  - Each member will conduct and attend two peer sessions. The findings from participants will be documented as a class deliverable.
  - The timezone width will be expanded so that it's the same as the other fields.
  - Incorporate any styling changes the client mentions.

2. Discuss "Road Blocks"

- There were no major roadblocks in the last week. Development in the next week will be slowed as we focus on the peer testing class deliverable.

### NOTES

Pace A's client liaison opened the meeting by giving their stand-up since they were absent from the last two meetings. They displayed their Github Project Board, which mentioned that they have been primarily focused on setting up Firebase for authentication as well as automatic linting. Later in the meeting, Daniel demonstrated the application, which allows a user to login and logout. If the application is routed to an admin, basic user-information is displayed. They're planning on refining their UI so it has some stlying, as well as the sign-up form to create users.

Shannon then asked what Pace C had worked on. Our project board was shared so that the client could see what tickets we completed, as well as what we have planned for the upcoming week. The client is aware that our development will be less since we will be working on conducting the peer evaluation sessions, but that we're going to be implementing improvements to our application (such as the width of the time-zone field). The feedback received after demonstrating the application is as follows:

#### On the Mentee and Mentor Forms:

- The client mentioned that a possible way to obtain the skills could be to use one input field, but one which allows users to select multiple options. Katrina mentioned that doing so might impact the 'ranking' system that we had previously discussed, and the client realizes that implementing the [multiselect](https://ant.design/components/select/#header) would be a trade-off. She mentioned that a possible work-around would be to use the multiselect (eliminating the 'ranking' from the form UI), and then to handle matching based on common skills in the Mentor UI (i.e show the mentee users who have more common skills to the mentor first, and then those mentees with less common skills lower down).
  - Although the client mentions that she's leaning towards the multiselect option, she noted that it's **up to us** to decide what might work best functionality-wise. So, if we decide to keep three drop-downs, that'd be alright as well (but if this is the case, she'd like 3 labels [i.e 'First choice: '], rather than the dropdowns being under one label).

#### In the Mentor UI:

- The client mentioned that the contrast between the mentor-card UI and the background stands out. We could possibly use [Ant Design's Card](https://ant.design/components/card/#header) to adjust the broder's contrast.

#### Generally on the site:

- We could change the font from the default HTML font.

Pace B then showed their Trello board. They focused on the UI quite a bit. They have a navigation bar, with Mentee, Mentor, Admin, and Sign-up tabs. When their application runs on port 3000, a general sign-up form is displayed (the ability to create an account upon form submission is still being worked on). Their team has been able to setup Firebase so that a user can login and logout. The client isn't looking for anything specific on the home page of the website, but a brief description of the platform could be something that gets included later on. Something that the client liked from what Pace B had produced was that they had created a small logo ('Pace B' with a peace sign) for the site.

### ACTION ITEMS

- 11/10-05. Research how a react component can be generated into an iFrame tag. **Will likely be investigated after peer testing #1 milestone**
- 11/24-01. The team should decide how they want to proceed with the Skills fields **Due by the end of Nov.29th's team meeting**
