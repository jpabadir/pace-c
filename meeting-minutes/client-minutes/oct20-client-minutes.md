# PACE GROUP C
# FIFTH CLIENT MEETING 10/20

## 20 OCTOBER 2020 / 9:08 - 10:00AM(PST) / VIA ZOOM

### ATTENDEES
Katrina M., Maya T., Philip O., Anthony B., Shannon F., Christian P.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING
- 09/29-01. Aleks and Eric will finalize the prototype **Complete** 
- 09/29-02. When we create the form, we can create it to be static first, and then modify it to be dynamic later on. This should be completed before the first peer testing milestone. **Definitive Date will be determined once we know when we can start programming**
- 09/29-03. Team members should think of a name for the website (currently dubbed as the "Mentorship Portal"). **Complete**

#### NEW BUSINESS
1. Do "Stand Up" from the week. 
- Notify Shannon that the past week was spent finalizing the video presentation and peer reviewing the other presentations from the class.
- Screenshare our Github Project Board to display what we hope to accomplish during this week's sprint (Compile all system requirements in one document to be submitted, create a basic application to setup front-end and back-end so we can begin implementing features).
2. Discuss "Road Blocks"
- Refer to October 19th's team meeting minutes. Specifically: 
    - Confirm that we're to make our own website with our own domain address for the mentor/admin login system.  
    - Present the two options for hosting the iFrame (either privately through email invite which links to the form hosted through the mentor/admin login system [which can only be accessed through that link]. Or, by generating the html iFrame code so that it can be embedded publicly within the organization's website) 
    - Run through the process for Signup Form Vs. Account Registration 
        - Two ways to create an account: Either directly through the form, or by selecting an organization who has publicly hosted the form on the sign-in page, to which the user would then be redirected to that organization's signup form to create their account.
        - Admins don't have to fill out the signup form, they just register through Mentormatch as an organization and approve Mentors.

### NOTES
Today's meeting had a delayed start since we were waiting to be let into the Zoom meeting by the host. Since the same thing happened last week, the client is now considering hosting the meetings through Google Meet, rather than Zoom. 
Pace A and B were waiting for members to join the call, so Katrina started the stand up. The notes addressing the points above are as follows:
1. Confirm that we're to make our own website with our own domain address for the mentor/admin login system.  
- Yes, we will be creating our own website. However, we can focus on running our program locally first, and then looking into domain names once we deploy the website. Some deployment sites generate a URL that we then have access to, so as long as our project can be publicly available, we should be fine. We can worry about associating it with a name later on.
2. Present the two options for hosting the iFrame
- The client thinks that this would be a good way to do things. Since the iFrame is a small chunk of code, the Admin should be fine with placing it into the source code of their website to publicly display the form. As we're to make our own website, for the forms that are internal, it's also fine to host those forms on our website where we can then invite users to fill out that form through the link. 
3. Run through the process for Signup Form Vs. Account Registration - Two ways to create an account: 
- The client agrees that this is a good way to ensure that users can access the form. Admins would just have to provide the URL to the system so that we know where the form is hosted publicly to redirect the user once they select the organization that they want to Mentor with through our website.
4. Confirm the role of the Admin
- Admins do not need to fill out any information on the embedded iFrame form. The iFrame form should only be used to gain information about Mentors and Mentees. As such, the radio button on the prototype titled "Organization" can be removed. If a user of an organization navigates to another organization's website, sees the form, and is interested in the program, we can have a web token on our form, which would link to our website. From there, that user would be able to gain information about our platform, and then follow the flow of creating an admin account for their organization. 
- The role of an Admin is to decide how to host the form, edit the form, and approve Mentors. The Admin could have the ability to remove Mentors, and possibly pass on Admin privileges to another user if that Admin decides to leave the platform. 

General Notes:
- Pace B asked if Mentors should then be included in the publicly hosted form as well, or if the public iFrame forms should only be used to gain information about Mentees.
    - The client  mentioned that for security purposes, it's possible that the only users who would fill in information on **publicly** displayed forms would be Mentees. 
    - Mentors would then only ever access **private** forms. To access private forms to become a Mentor, the admin would have to send out the link. Therefore, this could ensure security since Admins would only ever recruit users who are known to the company. This would also eliminate the possible need for Admins to approve Mentors. 
    - Katrina's suggestion on this note: Similar to above, a user who is part of an organization who's form is public might come across the form on the organization's website and become interested in being a Mentor. If there's no option to register as a Mentor publicly, that user wouldn't be able to become a Mentor unless they recieve a link from an 
    Admin. A potential solution could be for that user to then display their interest to the Admin to become a Mentor. 
        - When Katrina asked the client about the roles of an Admin, the client didn't say that Admins shouldn't be approving mentors, or that Mentors shouldn't be included on public sites. Therefore, **our team should decide whether we allow for Mentors to sign up publicly (where Admins would then need to approve these users), or if we restrict Mentor sign-up through private forms only accessed through link invite from Admins (eliminating the need for manual Admin approval).**

### ACTION ITEMS
10/20-1. The team needs to decide on how Mentors register, and reflect any changes in the System requirements document **Due October 20th**
10/20-2. The team shoud discuss how we want to deploy the site **During October 23 Team Meeting**
