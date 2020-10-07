# PACE GROUP C
# THIRD CLIENT MEETING 10/6

## 6 OCTOBER 2020 / 9:00-9:45 AM (PST) / VIA ZOOM

### AGENDA

### ATTENDEES
Katrina M., Maya T., Philip O., Anthony B., Shannon F., Christian P.

#### BUSINESS FROM THE PREVIOUS MEETING
- 09/29-01. Aleks and Eric will the modify the prototype to incorporate the following changes:
    - Instead of the skills being a checkbox, make it a ranking system. 
    - On the mentorship portal, ensure that there’s options to login, create an account, and register an organization (which also entails that the user creates an account to become an admin). 
        - Show the UI for each of those pages. 
    - This should be done by the end of the Scrum Sprint. **In progress** 
- 09/29-02. When we create the form, we can create it to be static first, and then modify it to be dynamic later on. This should be completed before the first peer testing milestone. **Definitive Date will be determined once we know when we can start programming**
- 09/29-03. Team members should think of a name for the website (currently dubbed as the "Mentorship Portal"). **In progress. Should be completed by October 12**

#### NEW BUSINESS
1. Confirm logistics surrounding the "Mentorship Portal"
    - How do mentees and mentors communicate (i.e via email or some other method)?
    - When mentees and mentors are matched, what exactly does this mean?
        - Is matching based on events being held sufficient (so one mentor to many mentees for that event), or is "matching" like a one-to-one request, where a mentee requests a mentor, and the mentor approves?

### NOTES
- The meeting commenced with Shannon allowing anyone with questions to ask their questions. Pace B was waiting on some members to join the call, and Pace A didn't have any questions. Katrina then asked the questions under the heading "New Business".
    - How do mentees and mentors communicate (i.e via email or some other method)?  
        - Mentees and Mentors will communicate via email. The mentoring platform itself does not need to support messaging.  
    - When mentees and mentors are matched, what exactly does this mean?
        - This could depend on implementation. For the first iteration of requirements, a possible flow could be as follows:
            - The mentee creates a request for a mentor through the form.
            - The mentor logs onto the Mentorship Portal, where they can view a list of current mentees. The mentor can then accept mentee requests.
            - Once a mentee has been accepted by a mentor, they could receive an email stating that a mentor match has been made. 
            - Google Calendars could be used to show mentor availability. Mentees could then navigate from their acceptance email to that calendar to arrange a meeting time. 
            - A mentee has now been matched with a mentor, and they have a set meeting time, and can communicate via email. 
    - The matching process should be general, rather than a mentee requesting a specific mentor from a company. For example, if Girls in Tech publicly embeds the form, and a user fills in the Girls in Tech Form, a mentor from Girls in Tech would then be matched to that mentee. If that same user then goes to Pace's website, and there's a mentorship form, that user would then also be matched to someone from Pace. **In essence, a mentee will have only one Mentor from each organization. But, one mentee could have more than one mentor, as long as they're from a different organization.**
        - Therefore, it's not necessary in the system requirements for a mentee to have an account on the Mentorship Portal for the minimum system requirements. **However**, this could be added on if there's anything that our team wants to add on for mentee functionality. 
            - To get started, Mentees are just users who need to be able to access the embedded form, fill it out with information, and then receive a match to a mentor, where a meeting time can be finalized through a calendar (such as Google Calendar). 
            - Mentors are required to have an account so that they can approve or decline mentees.
    - To clarify the difference between account registration and the sign-up form:
        - The form is meant for mentees and mentors to provide information about themselves, as well as skillsets, and general availability to facilitate the matching process, as well as to identify the ogranization that the mentoring is occuring through. 
        - Account Registration for the minimum requirements is for mentors to be able to accept mentees. 
    - If a mentee no longer is seeking mentorship from a mentor, they can remove themself from the Google Calendar. An additional functionality could be that the mentor can remove that mentee on their end of the system. Another added function could be that mentors could limit the number of mentees that they have/request to not receive any additional mentee requests.  
    - Does the system have a capacity for mentors to hold events for mentees to attend?
        - This is not required for the system, since there are other platforms such as EventBrite for events to be held. For now, the system should be able to support the matching between mentors and mentees in a one-to-one meeting. 
- **To summarize the main take-away from the notes above**: *The minimum functional requirement of the system is to have a way for mentees and mentors to match.* Teams are able to get creative with implementation and the flow of the system. 

Pace B then asked about the tech stack. Shannon's top pick for front-end in general, is React, then Vue, and then Angular. For backend, she seems partial towards Node and Firebase. **But, the tech stack has to work for our team. So it's up to us**

We then discussed possible formats for future client meetings:
- Similar to what we've done so far, the meeting can be a space for all teams to ask questions.
- Once we start programming, the meetings can also be used to show Shannon our code, as well as visuals of our progress. 
- Meetings could commence with "stand-up meetings", where each client liaison (and other members from that team) could share what was worked on since the last meeting, as well as any road blocks.
    - This could align well with team sprints, where teams decide on milestones for the week, and that can be shared during the meeting. Client meetings could potentially signify the end of a sprint.

### ACTION ITEMS
- 09/29-01. Aleks and Eric will modify the prototype to incorporate the following changes:
    - Instead of the skills being a checkbox, make it a ranking system. 
    - On the mentorship portal, ensure that there’s options to login, create an account, and register an organization (which also entails that the user creates an account to become an admin). 
        - Show the UI for each of those pages. 
    - **Add in any other features that you think would be useful after reading the client notes.**
    - This should be done by the end of the Scrum Sprint. **In progress** 
- 09/29-02. When we create the form, we can create it to be static first, and then modify it to be dynamic later on. This should be completed before the first peer testing milestone. **Definitive Date will be determined once we know when we can start programming**
- 09/29-03. Team members should think of a name for the website (currently dubbed as the "Mentorship Portal"). **In progress. Should be completed by October 12**
- 10/6-01. The issues listed on Github for the Requirements Milestone should reflect client feedback from today's meeting. **If possible, this should be done by Friday (October 9) so that we can discuss our work and begin creating the video presentation**
- 10/6-02. The requirements video presentation should be **finalized by October 14th, 9PM (PST)** so that it can be submitted by October 15th by 10:20AM (PST).


