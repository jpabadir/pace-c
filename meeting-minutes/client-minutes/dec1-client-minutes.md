# PACE GROUP C

# ELEVENTH CLIENT MEETING 12/01

## 1 DECEMBER 2020 / 9:00 - 9:49AM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Philip O., Maya T., Shannon F., Anthony B.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

- 11/10-03. The team should discuss possible ways of obtaining Mentor availability to send to an accepted Mentee, where the Mentee can then book a slot from the Mentor's available time slots. **In progress**
- 11/10-05. Research how a react component can be generated into an iFrame tag. **Will be investigated**
- 11/24-01. The team should decide how they want to proceed with the Skills fields **To be finalized**

#### NEW BUSINESS

1. Do "Stand Up" from the week.

- Remind the client that the past week was spent on conducting and attending peer heuristic evaluation sessions. The team has to submit a document on the findings from the sessions, which is a class deliverable that's due on December 2nd. Despite this, some minor improvements were made to the application (such as resizing the time-zone field and modifying the CSS on the mentor cards). Our Github Project Board will be shown at this time to let the client know about the tasks that we hope to work on in the future (these cards are currently in the 'Backlog'). The application could potentially be run at this time to refresh the client on the state of our application.

- Brief the client on this week's sprint plan:
  - Our team is primarily focused on finalizing our Peer Testing One report, which will be submitted on Wednesday.
  - If time allows, we will work on tasks in the 'backlog'.

2. Discuss "Road Blocks"

- There were no major roadblocks in the last week. Although we hope to continue development, this will most likely be slowed as we head into the final exam and Holiday season. To facilitate this, there are some areas that our team would like clarification on:
  - After discussing with the team on the multiselect versus 3 separate dropdowns to select skills, our team wants to confirm what the client's preference is. If the client is still partial towards the multiselect, the client will be reminded that this eliminates the weighted ranking. Likely, the matching would then be based on the number of common skills instead. If this client re-states that this trade-off is acceptable, our team will implement the multiselect as planned.
  - Can the client elaborate on their plan for email validation when it comes to verifying that Mentor's are associated to the company that they claim to be a part of?
  - Is it sufficient to have one field for the user's name, or should it be split into first and last name? It might not be necessary since we obtain the user's email and can correspond with the user via email, but we want to make sure this is acceptable with the client.

3. Brief the client on semester logistics and gage their expectations.

- December 4th is the last day of term one classes, and then Final Exams are from December 7th - December 22nd. As such, our team members will be focusing on studying and writing final exams. Development _could_ potentially still occur throughout December, but it will likely be slower.
- UBCO has extended the winter break by an extra week, so Term Two now beings on January 11th, 2021 (meaning that winter break is from December 23-January 11th).
- Confirm when the next client meeting will be held, and if there's anything not mentioned in our plans that our client would like us to work on.

### NOTES

Pace B commenced the meeting by informing the client of what they had worked on in the last week. They didn't run their application since they weren't able to make many changes development-wise due to conducting heuristic evaluations. They spent their time during the meeting discussing with the client some of the feedback that they received after running their peer evaluation sessions (such as to notify users upon successful account creation, incorporating tool-tips to help guide the users, etc.). They mentioned to the client that this is the last week of classes, and that the current client meeting would be the last one until next term. The client has tentatively booked **January 12th, 2021 from 9-10AM** as our next meeting.

Similar to Pace B, Pace A didn't run their application, opting to instead share their heuristic evaluation document since there weren't many changes in development during the last week. They're hoping to work on styling, and incorporating feedback from their peer evaluation sessions.

The client's recommended priority of tasks for the future:

1. Implement the Calendar Availability
2. Learn how to create an iFrame from the Mentee Form so that it can be embedded into a website.

An 'About Us' page was briefly mentioned, but it's not a priority. This would most likely be something that we incoporate towards the end of the project since it's not a priority.

During our standup, the client was made aware that the tasks within the backlog of our Github Project board are what we're hoping to work on in the future. To address the points that our team wanted clarification on (as denoted under 'New Business' section 2):

- Yes, the client prefers the multiselect option since it would condense the form. She is aware that we would then be matching based on _number_ of common skills, rather than using _weighted_ ranking. This is a trade-off that she is willing to make.
- After mentioning email validation: The client notes that ensuring that the Mentor is in fact part of the organization that they claim to be from is important. Since Mentors are invited via email only, there is a sense of implicit trust. The client was wondering if it would be possible that upon admins inviting mentors, if there would be a way to incorporate the ogranization information into the link that Mentors would access so that we can then associate that Mentor to the organization. Then, once an admin invites a Mentor by providing the Mentor's email address, the link the Mentor clicks to access the Mentor Form would have to verify that the email the Mentor provides on the form is one of the emails that the admin used to invite the Mentor user.
  - The client realizes that this might be a large task, and so she is fine if we don't prioritize this right away. Most likely, we will need to set up the Admin users first to allow admins to invite Mentors, and then we can figure out the security logistics as mentioned above.
- On the topic of the field for gaining the user's name, the client is fine with the one field rather than splitting first name and last name into separate fields.

After displaying our application the client made the following comments and recommendations:

#### In General:

- Pace uses [Ant Design's card components](https://ant.design/components/card/#header) quite often, so we could incoporate that feature into our application to enhance some of the styling (such as on the 'Login' page, and on the Mentee display). Doing so would make the feature more distinct to the user, so it could enhance the user's experience.
- Ant Design has [notification components](https://ant.design/components/notification/), so we could use those in our application if there's anything that we'd like to make the user aware of.
- The footer could be made into a "sticky footer" so that it's always on the bottom.

#### On the Mentee and Mentor Forms

- The client noticed that the field widths could be reduced.
- If possible, we could have the input areas starting at the same point and centered.
- The tooltip could be moved to the label, rather than on the field itself.

### ACTION ITEMS

- 12/1-01. We can proceed with changing the select dropdowns to the multiselect option.
- 12/1-02. The next client meeting will be held on January 12th, 2021 from 9-10AM, unless this changes in the coming weeks.
