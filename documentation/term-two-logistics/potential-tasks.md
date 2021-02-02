# Potential Tasks for Jan 27 - Feb 3 Sprint

1. We'll need to set up a user type of Admin in the DB. Admins should have the following properties: Organization, Name, email address, and password. We'll likely need to use the UID to identify the organization so that when it's embedded on the organization's website, we can link that instance of the iFrame back to the organization. There might be a more efficient way to go about this though.

2. Create the sign up form for organizations/admins. We only need to ensure that the email address is unique (i.e we don't have to worry about duplicate organizations/verifying that the domain name of the email is associated to that organization).

3. Add some styling to the 'Home' page and incorporate the client's feedback (can be found in my meeting minutes).

# Potential Tasks for the Upcoming Sprint Feb 3 - Feb 10

1. Depending on the user type who logs in, route the user to the correct display (i.e for Mentors, display what we currently have. If it's an admin, display the page for admins similar to what has been outlined in the userflow diagram for a logged in admin).

2. Send logged in Mentor UIDs to the backend upon login, and display what's returned from the matching algorithm on the front-end for Suggested Mentees.

3. Allow Admins to enter an email address, which sends an email with the link to the Mentor Form. Ensure that the form can successfully be filled out from this link.

4. Display users under the correct headings (Current/Active Mentors or Invited/Pending Mentors) of the 'Manage Mentors' tab.

   - Potentially could be done by creating an array for 'Current/Active Mentors' and one for 'Invited/Pending Mentors'. When an admin enters an email address to request mentors, they could automatically be added to the 'Invited/Pending Mentors' array. Once an email address in the Invited/Pending array has been associated with a mentor account, they then get moved to the 'Current/Active Mentors' section.

5. Create the outline for the upcoming Peer Testing sessions.
