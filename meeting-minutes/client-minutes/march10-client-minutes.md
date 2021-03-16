# PACE GROUP C

# NINETEENTH CLIENT MEETING 03/10

## 10 MARCH 2021 / 12:00 - 12:46PM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Shannon F., Philip O., Maya T.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

N/A

#### NEW BUSINESS

1. Conduct "Stand Up".

- Our Github project board will be displayed to show what we're planning on accomplishing during the upcoming sprint (unit testing, starting documentation, incorporating the client's suggestion). Our application will be run to demonstrate the modifications to the application in the past week (disabling the Mentor/Mentee in the admin tabs, routing the user to our application after Mentee Form submission).

2. Discuss "Road Blocks"

- Overall, it's been an extremely busy week for the team.

3. Update the client on how we're linking organizations to the Mentor and Mentee Forms
   - Currently, this done via a GET request by adding the admin's organization to the URL of the MentorForm in an email/the iFrame src property of the MenteeForm. This then gets extracted from the URL so that the user can be associated with the organization once the Mentee or Mentor Form has been successfully submitted. Matches are made based on Mentees and Mentors being from the same organization.
     - The main concern is that Organization names are in the URL. Does the client see a way of allowing for the same functionality, without using a GET request? Keeping in mind that there's only 4 weeks left of the project, and so we might not be able to refactor extensively. However, we'll do our best to take client feedback into account.

### NOTES

Similar to previous weeks, the client called on our group first to update her on what we achieved over the last sprint. The client was walked through our application to demonstrate how the Mentee and Mentor forms are disabled in their respective tabs for a logged in admin. The email a mentor receives once an admin requests them was also shown to highlight how the URL now contains the name of the organization, as well as the updated URL for the iFrame tag.
**In regard to Action Item 3 from above**:

- Yes, passing information via a GET request is acceptable to associate invited Mentors and registered Mentees to the organization. The client didn't mind the organization's string being in the GET request, but she noted that we could possibly use the Organization's ID from our database instead (that way, multiple organizations can have the same name, but only be matched with the instance of the organization that the form was accessed through).
  - Note: I realized after the meeting that our current setup in the database allows for organizations to be separated by their names (rather than how Mentees/Mentors/Admins have user IDs). I could email the client to see if leaving the organization name is acceptable, or if she prefers that we use a numeric ID instead. If she prefers a numeric ID, to save us from having to drastically change the setup of our database, we could possibly create an ID field in our database with a pseudo-random numeric for each organization. This could then replace the organization name. I'll give this some more thought to see if I can come up with any other alternatives.

As a part of our demo, we registered as a Mentee user to showcase how a new tab is created, redirecting the user to our website. After logging in as a Mentor to show the update to the Mentee requests, I informed the client that we wouldn't have any suggested mentees since there are currently no mentee users matching the organization name. When the notification displayed stating that the mentee users had been updated upon login, the client noted that the notification might be confusing for the user, and that we could likely remove it altogether. However, she was happy that Mentee emails will only be displayed after being accepted (and our overall progress).

The client asked whether we had a way to remove mentees from our system, and I let the client know that there's nothing directly in our system's UI itself that allows mentees to be removed, however, we can manually remove Mentee users from firebase. The client said that this setup works, and that we won't need to worry about admins being able to remove mentees then.

As briefly noted from Feb 23rd, something that's important to the client/Codebar is security. As such, if time permits, the client would like us to look into the back-end security of our website to make sure that user information isn't able to be queried/accessed. Since we planned our sprint this morning, I let the client know that this may not be something that we're able to deliver before next week. However, it is something that we can keep in mind for the remaining weeks of the course if we have the time. I also mentioned to the client that the course requires us to deliver a final report (where we document our codebase), and so likely our focus will shift to fulfilling remaining course logistics. The client understands that ensuring the security of our back-end might be a large task, and to keep her updated if we're not able to look in this, so that she can let Codebar know. Realistically, this is likely something that we'll include in our final documentation as a limitation if we're unable to ensure the security of our back-end.

Pace B then demonstrated their application. They made progress on the front-end by creating the UI for accepted/declined mentees. At the moment, they're using hard-coded data, but they're hoping to pull information from their database soon. They were also working on the matching algorithm.

Pace A demonstrated their application to show the update to the UI (mainly changing some navigation links to access the various forms, as well as adding the colour scheme to their website). Most of their work has been on the backend, and so they're hoping to connect the back-end with the front-end so that the client will have a visual of what their application can do.

### ACTION ITEMS

3/10-01. Remove the notification upon login stating that the user's suggested mentees have been updated.
3/10-02. Solidify a course of action regarding the GET request.
3/10-03. Look into the back-end security of our website.
