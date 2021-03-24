// Initialize server
const express = require('express');
const cors = require('cors');
const fire = require('firebase');
const email = require('./email-mentorform');

const port = 8020;
const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAdutyXDo_0GvanZ58V1l702Co_zQu4a3M',
  authDomain: 'mentormatch-afa46.firebaseapp.com',
  databaseURL: 'https://mentormatch-afa46.firebaseio.com',
  projectId: 'mentormatch-afa46',
  storageBucket: 'mentormatch-afa46.appspot.com',
  messagingSenderId: '515592331593',
  appId: '1:515592331593:web:c38e0d3defadf9886cfa98',
};
fire.initializeApp(firebaseConfig);

let allUsersData = null;

/** Returns the number of hours between two users' timezones */
function getTimeDiff(user1, user2) {
  return Math.abs(
    parseInt(user1.timeZone.substring(4, 7), 10) -
      parseInt(user2.timeZone.substring(4, 7), 10),
  );
}

/** Returns the number of elements in common between two given arrays */
function getIntersectionLength(array1, array2) {
  return array1.filter((elem) => array2.includes(elem)).length;
}

/** Helper method to sort mentees based on their similarity with mentors */
function sortBySkillsThenTimezone(array1, array2) {
  // If first item is enough to sort, return
  if (array1.numSkillsInCommon > array2.numSkillsInCommon) {
    return -1;
  }
  if (array1.numSkillsInCommon < array2.numSkillsInCommon) {
    return 1;
  }

  // Else, use second item
  if (array1.timeDiff < array2.timeDiff) {
    return -1;
  }
  if (array1.timeDiff > array2.timeDiff) {
    return 1;
  }
  return 0;
}

/** Returns true if a given user is a mentee, in the same organization as
 * the given mentor, and is neither accepted not declined by the given mentor.
 * Returns false otherwise.
 */
function isPotentialMatch(mentorInfo, user) {
  const isMentee = user[1].userType === 'mentee';

  const isInSameOrganization =
    user[1].organization.toLowerCase() ===
    mentorInfo.organization.toLowerCase();

  // If mentor is signing up (as opposed to signing in)
  if (!mentorInfo) return isMentee && isInSameOrganization;

  const isNotYetAccepted =
    mentorInfo.acceptedMentees == null ||
    !mentorInfo.acceptedMentees.includes(user[0]);
  const isNotDeclined =
    mentorInfo.declinedMentees == null ||
    !mentorInfo.declinedMentees.includes(user[0]);

  return isMentee && isInSameOrganization && isNotYetAccepted && isNotDeclined;
}

/** Returns the mentees matching with a given mentor's uid */
function getMatchingMentees(uid) {
  const mentorInfo = allUsersData[uid];
  const criteriaScores = [];

  // For each mentee who is a potential match, push to criteriaScore an object
  // containing the mentee's uid, the number of skills in common with
  // the mentor, and the timezone difference.
  Object.entries(allUsersData)
    .filter((user) => isPotentialMatch(mentorInfo, user))
    .forEach((user) => {
      criteriaScores.push({
        menteeUid: user[0],
        numSkillsInCommon: getIntersectionLength(
          user[1].rankedSkills,
          mentorInfo.rankedSkills,
        ),
        timeDiff: getTimeDiff(mentorInfo, user[1]),
      });
    });

  // Sort the criteria scores array
  criteriaScores.sort(sortBySkillsThenTimezone);

  // Return the uids from the criteriaScores array
  return criteriaScores.map(({ menteeUid }) => menteeUid);
}

// A backend route called to get the mentees who match with a mentor
app.get('/match-with-mentees', (req, res) => {
  // Read parameter passed from query
  const uid = req.query.uid;

  // Fetch all firebase users' data and match mentor with mentees
  fire
    .database()
    .ref('users')
    .once(
      'value',
      (snapshot) => {
        allUsersData = snapshot.val();
        fire
          .database()
          .ref('users/' + uid + '/suggestedMentees')
          .set(getMatchingMentees(uid).slice(0, 3))
          .then(() => {
            res.send('Successfully updated mentees');
          });
      },
      (errorObject) => {
        console.log(
          'Firebase read failed with error code: ' + errorObject.code,
        );
      },
    );
});

// A backend route called to invite a new mentor to sign up
app.get('/invite-mentor', (req, res) => {
  email.inviteMentor(req.query.emailAddress, req.query.organization);
  res.send('Invited mentor');
});

// A backend route called when a mentor accepts a mentee
app.post('/accept-mentee', (req, res) => {
  email.acceptMentee(req.body.menteeEmail, req.body);
  res.send('Accepted mentee');
});

// A backend route called when a mentee signs up
app.post('/welcome-mentee', (req, res) => {
  email.welcomeMentee(req.body.email, req.body.name);
  res.send('Welcomed mentee');
});

// A backend route called when a mentor signs up
app.get('/remove-email', (req, res) => {
  // Read the organization passed to us from the frontend and get a reference
  // to that organization's data in the DB
  const organizationRef = fire
    .database()
    .ref('organizations/' + req.query.organization);

  organizationRef.once('value', (snapshot) => {
    // Make sure organization exists.
    if (!snapshot.val()) return;

    // Remove the email passed to us by the frontend from
    // the organization's pending mentors. This is the email of the
    // mentor who just signed up.
    const pendingMentors = snapshot.val().pendingMentors;
    pendingMentors.splice(pendingMentors.indexOf(req.query.emailAddress), 1);
    organizationRef.child('pendingMentors').set(pendingMentors);

    // Add the uid passed to us by the frontend to the
    // organization's active mentors. This is the newly-created uid of
    // the mentor who just signed up.
    const activeMentors = snapshot.val().activeMentors
      ? snapshot.val().activeMentors
      : [];
    activeMentors.push(req.query.uid);
    organizationRef.child('activeMentors').set(activeMentors);
  });

  // Send the frontend a confirmation that we were successful
  res.send('Removed email');
});

// A function used to listen for connections on a specific port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// A possible improvement to this code:
// In certain places, we could fetch only the mentees using code like this:
// var ref = db.ref("dinosaurs");
// ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
//   console.log(snapshot.key);
// });
// instead of fetching all users.
