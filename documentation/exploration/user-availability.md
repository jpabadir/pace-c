Over the span of November 6-8, a wholistic approach to investigating availability matching, as well as implementation for the static form's UI was conducted.

### Solutions considered:

1. Have input fields for each day of the week. For each day of the week, allow the user to choose from multiple hard coded time frames. [October 26 – November 2nd’s solution]
   a. Con: Doesn’t allow much freedom for the user.
2. Have input fields for each day of the week. Use a TimePicker to allow each user to choose a range of times which work for them.
   a. Con: Client is partial towards a calendar UI
3. Use a third party calendar tool (e.g. [Calendly](https://calendly.com/pages/integrations/calendars), [Youcanbookme](https://support.youcanbook.me/article/33-embed-your-booking-page-on-your-website?fbclid=IwAR08IKXsgnTY1CS0sglzEK49arOFEqd7fnVzfeO4tvxt3s9ZFb1uEuWoy9k#iframe), [Ajax Availability Calendar](https://www.ajaxavailabilitycalendar.com/), etc.)
   a. Con: Costly. Only one user is free, pay for additional users.
4. Use [FullCalendar](https://fullcalendar.io/).
   a. Pros: Works well with React. Well-documented. Data model plays well with backend DB models.
   b. Cons: To install using npm, we’d have to downgrade to an older version of React (We’re using React version 17.0.1, which came out only a couple of weeks ago)
5. Hone down on some crucial aspects for functionality, using a simpler interface than FullCalendar, such as [react-week-scheduler](https://www.npmjs.com/package/react-weekly-scheduler).
   a. Con: Same issue with installation due to our version of React.
6. Steer clear of installed npm libraries for now; investigate Google Calendars
   a. Pros: The client mentioned it, so it might offer some of the functionality that we’re hoping for. An iFrame Google Calendar can be embedded in the website.
   b. Cons: Obtaining user availability is an issue (can’t add times directly from calendar). [Something very close to what we’d need is offered](https://support.google.com/calendar/answer/190998?co=GENIE.Platform%3DDesktop&hl=en&fbclid=IwAR2WMemqn-_LK7PfZU9jgWTPfLsz-aLF-ak9XVJA5fLeMYDLS89_GIRIlFw) but only work or school Google accounts can use it. A work account would cost money (could possibly email UBCO IT to see if this can be set up?), and it limits users ([would cost \$7.80CAD per user](https://workspace.google.ca/intl/en_ca/pricing.html)).
7. Integrate with appointment scheduling application

- [Picktime](https://www.picktime.com/)
  a) Pros: free, supports bookings, has API
  b) Cons: new, not well documented. Integration involves the creation of a button, which links to an external source, so the flow isn’t ideal. Selecting available time-frames isn’t very user-friendly.
- [Sagenda](https://www.sagenda.com/demo/calendar/) [Solution worked on as of November 7th]
  a) Pros: The calendar iFrame can be embedded within our form, and allows a friendlier UI for users to select a time which works for them.
  b) Cons: we’ll have to workaround their API. See thoughts below.

### Top Considerations:

**Main concern:** When it comes to matching mentors and mentees, chosen availability adds complexity. The client mentioned that skills should be weighted the most, then time-zones, and then common availability. If we follow this structure, once common skills have been filtered along with common time-zone, a mentee might be left without a mentor - despite that mentor being able to provide necessary skills. Specifically:

- Scheduling problems are notoriously hard: https://stackoverflow.com/a/2163501
- Optimizing N arbitrary criteria => often NP-complete (ie. [knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem#Computational_complexity))
- For our use case, it is especially tricky to match arbitrary schedules (e.g. P1 @ 11:05 to 11:55; P2 @ 11:50 to 12:30; only 5 mins overlap) + skills criteria
- Specifically, unless we **guarantee availability** (priority #1), our matching algorithm could always potentially result in (mentor, mentee) pairs without matching calendars (let alone: suboptimal 5-10mins overlaps)
- For simplicity, we should design our application so that matches **at least** guarantee that **some** (mentor, mentee) availability is possible. (Strictly speaking, the counterargument to this is if mentees signed up and could match with a mentor later, but - in that scenario - we should probably still assign them to some slot (e.g. Thurs 4-5pm) that mentors claim later)
- **Suggestion:** 1 “availabilities” calendar per organization (ie. slots represent all mentors together) → mentees select multiple slots on this calendar; since we know that some (mentor, mentee) will match, we choose the best one (skills, etc.)
  Open questions:
- Freeing unused slots initially claimed by mentee
  a. Do we book slot(s) chosen from the form’s calendar & delete it later if not used by (mentee, mentor) pair?
  b. Do we display all slots to mentees or only non-booked ones?
- How do organizations / mentors setup these availability calendars?
  a. Worst case: the organization manages in admin interfaces (e.g. Sagenda)
  b. Best case: mentors register, our system aggregates via API

## Specific example: using Sagenda

- Best case scenario: single Sagenda account
  a. our API token manages 1 “bookable item” per organization, with 1 “event” for Organization’s overall availability and 1 “event” per mentor’s availability
- Worst case scenario: 1 Sagenda account per Organization
  a. Organization supplies Sagenda API credentials to us on signup
  b. Sagenda (via Org or API) creates 1 single Bookable Item for overall availability. Each “bookable item” has “event patterns” to display available time slots available via Calendar display
  c. Mentors specific availability (subset of overall calendar) are **either** (not decided yet) 1 bookable item per mentor OR 1 event pattern per mentor on the “overall calendar”. (event patterns are needed either way for slots)

In either scenario, when a Mentee signs up on the embedded iframe for a particular organization, they can **only select times** for which some mentor actually has an availability at that organization. This guarantees that some (mentor, mentee) pair will exist for us when they book.

- Nuance: if we want to let mentees register with NO mentor available yet, we should setup a “No mentor available yet” event pattern (possibly its own bookable item) so that we know that mentees fall in this category.
- Payment nuances:
  Regarding Firebase Functions: [Only paid versions of Firebase can call external (in our case, Sagenda) APIs](https://stackoverflow.com/questions/50002469/http-request-to-an-external-api-in-firebase-cloud-functions-spark-tier-refused/50007666#50007666)
  Simple solution: Use ‘Blaze’ plan [free up to 5GB/month, then $0.12/GB]. A pre-paid Visa (or quota?) could eliminate risk of over-limit charges.

### Approaching the Client

- The client will be informed of the complexity that availability matching entails, and it will be asked whether it is a **must**.
  - If not, common skills and time-zones will be considered when creating matches.
  - If so, a solution close to #2 will be integrated, but with a calendar date & time picker.
