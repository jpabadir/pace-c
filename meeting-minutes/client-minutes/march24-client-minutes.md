# PACE GROUP C

# TWENTIETH CLIENT MEETING 03/24

## 24 MARCH 2021 / 12:00 - 1:03 PM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Shannon F., Philip O., Maya T.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

3/17-01. Incorporate minor modifications to the 'Manage Mentors' tab per the client's suggestions **To do**
3/17-02. Prohibit Mentor Form submission unless the user was requested **To do**

#### NEW BUSINESS

1. Conduct "Stand Up".

- Our Github project board will be displayed to show what we're planning on accomplishing during the upcoming sprint. Our application will be running, however, since there were no major changes to the UI from the last sprint, there won't be anything to explicitly show the client (unless she requests to see something).

2. Discuss "Road Blocks"

- Further clarification from the client on the two following points would be beneficial:
  - In regards to backend security: a) Is there a specific API that the client recommends? b) If we decide to disable CORS apart from our domain, is that acceptable?
  - Back in October, we briefly mentioned 'unmatching', but this seemed to be an aside to our discussion while we learnt the scope of the project. A proposed solution for this was external of the application itself, as we talked about how Mentors could reflect their calendars accordingly (i.e re-opening the calendar event so it can be booked by another Mentee). Is this still the case?

## Notes

The client asked Pace B to conduct their standup first. They still have to incorporate the client's feedback from last week (modifying their signup from being two processes), but they were able to pull users from their database into the Mentor's column for Mentee requests. They're also now able to have the Mentee information displayed in the 'Accepted Mentees' column once the 'accept' button is clicked. They have a field for Admins to request Mentors, and have their Mentee Form being displayed in an iFrame tag. Their matching is based on the number of common skills. They're hoping to be able to associate Mentee and Mentor forms to the Admin's organization soon.

Since none of the Pace applications have been deployed yet, the client noted that if we've hardcoded the GET request links of the iFrame src attribute and/or the link to the website in the Mentor request emails to be 'localhost', it'd be good to document this and see if we can dynamically generate the URLs. She mentions that having the ability to embed the Mentee form via an iFrame is more important than having the link be dynamic, so it's not a huge issue if we can't get to it.

The client mentioned that once a Mentor accepts a Mentee request, the popup that a Mentor receives could state the next steps so that it's more obivous to the user what's happening (i.e state that an email notifying the mentee has been sent, and that the two users can communicate via email).

The client then asked what our group was able to accomplish in the last week. I informed the client that our focus has shifted towards completing deliverables for the course, however, we're planning on incorporating her feedback that she provided last week into the Manage Mentors tab. In regards to the roadblocks listed above:

- When it comes to backend security, since we're using Firebase, the client recommends using [Firebase ID Tokens](https://firebase.google.com/docs/auth/admin/verify-id-tokens). She mentioned that we could send the ID Token based on the logged in user to the backend, then ensure that the token does in fact exist for that user before obtaining backend information. If the token does not exist, we could return an Authorization Error (401).
  - I asked the client about disabling CORS apart from our domain, and she said that would work as well. However, if we are able to secure the backend, she recommends using Firebase ID tokens.
- As for 'unmatching', the client appreciated that we mentioned it. She notes that it would be nice to have that feature, but given the remaining time, it's not something that we have to worry about.

Pace A then conducted their standup. Their team had a busy week due to midterms, and so they weren't able to work too much on the project. They changed the colour scheme of their application, and demonstrated what a logged in admin can see. Since their client liaison didn't have the latest version of the application running, they showed screenshots of how Mentors view and accept requests.

Since classes end April 13, I wanted to confirm if April 7th was our last client meeting, since that is when the Google Meets has been scheduled until. The client confirmed that the 7th is our last meeting, but that she's also able to update meetings if needed. Pace B asked what we needed to handover, and the client mentioned that if there's anything specific to login credentials (i.e emails, Firebase, etc), that we can document things in a general way so that it reflects something that's opensource (such as how to setup Firebase, where any API keys in our program are to be updated).

### ACTION ITEMS

3/17-02. Prohibit Mentor Form submission unless the user was requested (i.e so only requested users can submit the form. This could likely be done by seeing if the email that was inputted onto the form matches with any email addresses for that Organization's 'pendingMentors' field in the DB).
3/24-01. Mention that the GET requests URLs are on localhost, and that these would need to be updated if the site is deployed.
3/24/02. Within step-by-step-guide.md, ensure that everything under the heading 'Maintenance Issues' has been written in a general way so that anyone who decides to use our codebase can create a Firebase/gmail account and know what needs to be updated in our code for it to work.
3/24/03. Make the notification that a Mentor receives after accepting a Mentee request state that an email notifying the mentee has been sent, and that the two users can communicate via email.
