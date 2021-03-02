# PACE GROUP C

# SEVENTEENTH CLIENT MEETING 02/24

## 24 February 2021 / 12:00 - 1:00PM / VIA GOOGLE MEETS

### ATTENDEES

Katrina M., Philip O., Maya T., Shannon F., Daniel E.

### AGENDA

#### BUSINESS FROM THE PREVIOUS MEETING

N/A

#### NEW BUSINESS

1. Conduct "Stand Up".

- Our Github project board will be displayed to show what we're planning on accomplishing during the upcoming sprint (this will likely consist of tasks for completing peer testing sessions and composing the report). Our application will be running at this time for the client incase there's anything that she'd like to view.

2. Discuss "Road Blocks"

- Due to the reading break last week, development slowed. However, since the course requires us to conduct and participate in peer testing sessions, we created a plan for running those sessions and have created a video demo of the application.
  - The video demo is a deliverable that the client will be ranking.
- Conducting and participating in peer testing sessions will likely be the main focus of this week's sprint.

3. As we head into March, we're hoping to incorporate the feedback that we receive, and to finalize the application.

### NOTES

Similar to the last couple of weeks, the client called on our group to see what we had worked on in the last week. The client was made aware that we were testing the app, using emailjs to send mentor request emails, creating peer testing logistics, and the video demo.

During the reading break, the client requested that each Pace group email screenshots of their application so that she could talk with the non-profit organization [Codebar](https://codebar.io/) about what we're working on. The client stated that Codebar is excited about what we're doing, and that it's possible that Codebar would like to fork a Pace group's repository after April to use. The client mentioned four points that she'd like us to keep in mind, in case Codebar decides to use our program in the future:

1. We should be able to have multiple admins associated to the same organization.
2. On our Mentee request cards, for privacy reasons, we should either remove the email address completely from the card, or asterisk out some of the address.
3. We should ensure that pages with personal information aren't accessible to the public when queried (i.e we shouldn't be able to see a list of Mentee information if we haven't been authenticated). The client screenshared this [github repo](https://github.com/public-apis/public-apis), specifically pointing out the 'Auth' column in the various tables. She notes that this could be too complicated to setup in the remaining time though.
4. After we finalize the embedding on the Mentee form, we could redirect the Mentee user to our platform. This would be in preparation for the possibility of Mentees having accounts in the future.

Given that there's only 6 weeks left of the course, I mentioned to the client that it may not be feasible to incorporate new functionality, especially since we want to ensure that what we've created is functioning 100% as expected.
Although it would be great if we could incorporate those things, she seemed to understand that we don't have a lot of time remaining. Technically, once we're able to associate embeddable mentee forms with the Organization (and create matches based on that) all minimum viable product functionality for the project will have been met. Therefore, anything else is considered as bonus. We should discuss as a team how we choose to proceed.

Stylistic wise, the client doesn't have any preferences, since the organization taking over the application might refactor that completely. However, she does prefer Ant Design's notification component over the pop-ups.

From our conversations with the client, the priority seems to be:

- Finalizing the iFrame form so that it's associated with the organization.
- Creating matches with Mentees and Mentors from common organizations.
- Switching to the notification component from the pop-ups.

Pace A then ran their application to show the new nav bar they created and the ability to only access the Auth page when logged in.

Pace B demonstrated what they worked on, and they modified their admin and mentee forms, as well as the ability to send emails.

### ACTION ITEMS

2/24-01. If Codebar does decide to clone our repository to work on what we've done after April, does everyone on our team give their consent? A reminder that we signed the IP Agreement at the beginning of the course, and so I don't think we can object to this. However, the client asked if our team would be alright with Codebar forking our repo (if we're chosen out of the two groups), and so I want to make sure I have everyone's input before I agree or disagree. We should probably ask the instructor about this as well, since we signed for Pace, and I'm not sure if there's surrounding legalities of another organization using the project.

2/24-02. Since the client has mentioned the Ant Design notifications in place of the pop-ups, I'll replace the pop-ups on our application with notifications. I will do my best to have this done by Wednesday, but I can't garuantee that since I have my medical procedure on the 25th, and then I'll have to focus on the deliverables for the peer testing milestone. I have added two examples of the notifications to this PR.
