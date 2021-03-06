// Server initialization
const express = require('express');
const cors = require('cors');
const fire = require('firebase');
const email = require('./email-mentorform');

const port = 8020;
const app = express();
app.use(cors());
app.use(express.json());

// Firebase initialization
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

let allData = null;

function getTimeDiff(user1, user2) {
  return Math.abs(
    parseInt(user1.timeZone.substring(4, 7), 10) -
      parseInt(user2.timeZone.substring(4, 7), 10),
  );
}

function getIntersectionLength(array1, array2) {
  return array1.filter((elem) => array2.includes(elem)).length;
}

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

function matchWithMentees(uid) {
  const mentorInfo = allData[uid];
  const criteriaScores = [];
  Object.entries(allData)
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
  criteriaScores.sort(sortBySkillsThenTimezone);
  return criteriaScores.map(({ menteeUid }) => menteeUid);
}

app.get('/match-with-mentees', (req, res) => {
  // Read parameter passed from query
  const uid = req.query.uid;

  // Fetch all firebase data and match mentor with mentees
  fire
    .database()
    .ref('users')
    .once(
      'value',
      (snapshot) => {
        allData = snapshot.val();
        fire
          .database()
          .ref('users/' + uid + '/suggestedMentees')
          .set(matchWithMentees(uid).slice(0, 3))
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

app.get('/invite-mentor', (req, res) => {
  email.inviteMentor(req.query.emailAddress, req.query.organization);
  res.send('Invited mentor');
});

app.post('/accept-mentee', (req, res) => {
  email.acceptMentee(req.body.menteeEmail, req.body);
  res.send('Accepted mentee');
});

app.post('/welcome-mentee', (req, res) => {
  email.welcomeMentee(req.body.email, req.body.name);
  res.send('Welcomed mentee');
});

app.get('/remove-email', (req, res) => {
  const organizationRef = fire
    .database()
    .ref('organizations/' + req.query.organization);

  organizationRef.once('value', (snapshot) => {
    if (!snapshot.val()) return;
    const pendingMentors = snapshot.val().pendingMentors;
    pendingMentors.splice(pendingMentors.indexOf(req.query.emailAddress), 1);
    organizationRef.child('pendingMentors').set(pendingMentors);

    const activeMentors = snapshot.val().activeMentors
      ? snapshot.val().activeMentors
      : [];
    activeMentors.push(req.query.uid);
    organizationRef.child('activeMentors').set(activeMentors);
  });

  res.send('Removed email');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Notes and TODOs: could fetch only the mentees using code like this:
// var ref = db.ref("dinosaurs");
// ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
//   console.log(snapshot.key);
// });
