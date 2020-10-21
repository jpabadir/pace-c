# Questions to be Answered From Peer Evaluations
*Note:* Questions from the Peer Evaluations have been reviewed, and  duplicate questions have been combined into one overarching question. In addition, the questions presented below have been filtered according to information that has not already been included or highlighted previously in the System Requirements and Design Document (for example: "What is the tech stack?"). 

## [Aleks] Matching Process/Prototype:
Can you explain how mentors and mentees will be matched? Will you use a specific algorithm or something more generic (match based on which attributes overlap the most)?

- The process of how mentors and mentees will be matched will be decided by the skills and skill levels that both the mentor and mentee possess. The mentor will then be able to view all of the mentees that have matched based on their skills and their level in those skills. The ultimate decision will be up to the mentor to accept the mentee.

- The system will also match the mentor and mentee based off of time zones, and availability of both users.

Is the system limited to a specific kind of mentoring, and will the mentors have to pay to be on this service?

- The system is not limited to a specific kind of mentoring. The mentee will have the ability to write down and select any skill(s) that they have. If there is a mentor who has the same type of skill(s) as the mentee, the mentee and mentor will be matched.

- The mentors/mentees do not need to pay for this service. 

What software did you use to make the wireframing? How will you convert your design sketches into an actual design for the website?

- The software we used to create the wireframe is called Balsamiq.

- We will convert the wireframe to the actual design by using HTML and CSS to model and improve our initial wireframe. 

## [Eric] Security:
Does safety in non-functional requirements mean security? Did the client ask for security to be non-functional?

How will security be approached when it comes to registration? (for example, to protect against SQL injection attacks, data encryption, etc.)

Do you guys have any system in place to deal with abuse, such as mentees constantly denying mentorship etc?

## [JP] Testing/Tech Stack:
Do you have a plan on which browsers you would like to support and how that will be incorporated into your testing process? Will the project be limited to desktops, or will it be usable on mobile?
- As per [this source](https://gs.statcounter.com/), the worldwide market share for browsers is as follows: Chrome 66.3%, Safari 16.76%, Firefox 4.08%, and other browsers. Therefore, those 3 browsers will be our main focus, and we will manually test the products on these browsers to ensure it works well across them. 
- Our primary focus will be on desktop development, with full mobile compatibility being more of a nice-to-have. However, we are hoping that the design libraries we use will help us with mobile compatibility, since many of them include solutions to this issue out of the box. 

When the Mentor and Mentee both import information into the database at the same time, how will the system handle multiple queries and results at the same time?
- This problem will be solved by using the dedicated Firebase solution, which is called [Transactions](https://firebase.google.com/docs/firestore/manage-data/transactions). From the linked document: "Cloud Firestore supports atomic operations for reading and writing data". 

Will there be a manual confirmation for admin and mentor signups? If not, what is the verification process going to look like other than the age verification?
- Regarding mentors, it is the admins who will have to validate their registration. For admins, we will have a fourth type of user, which we call the "superuser", who will be responsible for validating admin registration. Indeed, this will be a manual verification process, where there will be a UI for each type of user, with requests coming in, and options to accept or reject them. 

## [Katrina] Account Creation:
Why would the mentor complete the form before being verified? What is the benefit of storing information in a database that you may not use?
- Crucial to the matching process is for users to fill in their information through the form so that an appropriate mentor/mentee match can be found. Not only this, but by providing user information, the administrators from each organization can verify that the user is legitimate, which is why we’re gaining information from the user before verification. However, this could potentially result in information being stored in the database for an idle account, as the question addresses. To ensure only active users are considered, a timestamp could potentially be utilized. If a user doesn’t verify their email within a set timeframe (say, for a week), and the user doesn’t log onto the portal for an extended time (possibly a month), then their information could be removed from the database to reduce unnecessary storage. If the user was previously active, an email could be sent out before deletion to see if the user still wishes to remain in the system. 

Will the user be able to go back pages when signing up? I feel like you didn't express whether they can make changes to their account if they messed up or wished to change something?
- Since the form will be split up into different sections, a “Back” button will be available so that users can alternate between the various sections to modify their information.
- For the current scope of the project, we’re hoping that what users enter after filling out the form will remain accurate for a period of time. However, we recognize that users make errors, and their skills/availability may change. If time permits, we could find a user-friendly way for users to be able to modify their information after the form has been submitted. A potential solution would be to include a link in the verification email of the filled in form to the user to ensure the information is accurate, and if not, they can make changes through that link.

Does a mentor/mentee match require admin approval?
- This is not something that our team has considered. Currently the way that the system is setup is that admins approve mentors, and once mentors have been approved, they have the ability to accept mentee requests. As the platform grows, admin approval of mentee matching might be added on. 
