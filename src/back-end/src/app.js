// Server initialization
const express = require('express');
const port = 8020;
const cors = require('cors');
const app = express();
app.use(cors());
const fire = require('firebase');

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

var allData = null;

app.get('/match-with-mentees', (req, res) => {
  // Read parameter passed from query
  const uid = req.query.uid;

  // Fetch all firebase data and match mentor with mentees
  fire
    .database()
    .ref('users')
    .once(
      'value',
      function (snapshot) {
        allData = snapshot.val();
        res.send(matchWithMentees(uid).slice(0, 3));
      },
      function (errorObject) {
        console.log('Firebase read failed with error code: ' + errorObject.code);
      }
    );
});

function matchWithMentees(uid) {
  const mentorInfo = allData[uid];
  criteriaScores = [];
  Object.entries(allData)
    .filter((user) => user[1].userType == 'mentee')
    .forEach((user) => {
      criteriaScores.push({
        menteeUid: user[0],
        numSkillsInCommon: getIntersectionLength(user[1].rankedSkills, mentorInfo.rankedSkills),
        timeDiff: getTimeDiff(mentorInfo, user[1]),
      });
    });
  criteriaScores.sort(sortBySkillsThenTimezone);
  return criteriaScores;
}

function getIntersectionLength(array1, array2) {
  return array1.filter((elem) => array2.includes(elem)).length;
}

function getTimeDiff(user1, user2) {
  return Math.abs(parseInt(user1.timeZone.substring(4, 7)) - parseInt(user2.timeZone.substring(4, 7)));
}

function sortBySkillsThenTimezone(array1, array2) {
  // If first item is enough to sort, return
  if (array1.numSkillsInCommon > array2.numSkillsInCommon) {
    return -1;
  } else if (array1.numSkillsInCommon < array2.numSkillsInCommon) {
    return 1;
  }

  // Else, use second item
  if (array1.timeDiff < array2.timeDiff) {
    return -1;
  } else if (array1.timeDiff > array2.timeDiff) {
    return 1;
  } else {
    return 0;
  }
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Notes and TODOs: could fetch only the mentees using code like this:
// var ref = db.ref("dinosaurs");
// ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
//   console.log(snapshot.key);
// });
// Also, do we need to match based on ranked skills? Or just skills?
// Also, we're gonna need to add a way to make sure mentors are only matched with mentees who signed up for this specific organization (organization segregation when matching)
// It seems like updating the firebase data from the console crashes the server when it's running. Let's fix that.
