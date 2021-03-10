# PACE GROUP C

# NINETEENTH CLIENT MEETING 03/10

## 10 MARCH 2021 / 12:00PM / VIA GOOGLE MEETS

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
