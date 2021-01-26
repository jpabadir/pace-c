// path: /Users/ericwrc/Desktop/homework/paceC/pace-c/documentation/tech-directives/MenteeMatchingAlgorithm.js
let sampleData = {
  users: {
    mentee1: {
      email: "elsie.volkert@gmail.com",
      name: "Elsie Volkert",
      description: "Elsie Volkert is an awesome person!",
      rankedSkills: ["Creativity", "Critical Thinking"],
      "time-zone": "UTC+5",
      "user-type": "mentor",
      suggestedMentees: ["MLy_owDS4aZSNtIanUi6"],
      acceptedMentees: ["MLy_owDfdsfsZSNtIanUi6"],
    },
    mentee2: {
      email: "nicolas.selders@gmail.com",
      name: "Nicolas Selders",
      description: "Nicolas Selders is an awesome person!",
      rankedSkills: ["Problem Solving", "Public Speaking", "Customer Service"],
      "time-zone": "UTC+1",
      "user-type": "mentor",
      suggestedMentees: ["MLy_owaDSQSNtIanUi6"],
      acceptedMentees: [],
    },
    mentee3: {
      email: "shana.kroon@hotmail.de",
      name: "Shana Kroon",
      description: "Shana Kroon is an awesome person!",
      rankedSkills: [
        "Creativity",
        "Interpersonal Communication",
        "Critical Thinking",
      ],
      "time-zone": "UTC+5",
      userType: "mentee",
    },
    mentee4: {
      email: "leonora.reitz@gmail.com",
      name: "Leonora Reitz",
      description: "Leonora Reitz is an awesome person!",
      rankedSkills: [
        "Creativity",
        "Interpersonal Communication",
        "Critical Thinking",
      ],
      "time-zone": "UTC-2",
      userType: "mentee",
    },
    mentee5: {
      email: "mohammed.delany@yahoo.com",
      name: "Mohammed Delany",
      description: "Mohammed Delany is an awesome person!",
      rankedSkills: [
        "Creativity",
        "Interpersonal Communication",
        "Critical Thinking",
      ],
      "time-zone": "UTC+5",
      userType: "mentee",
    },
  },
};

// algorithm
let loggedmentor = {
  Mentor1: {
    email: "mohammed.delany@yahoo.com",
    name: "Mohammed Delany",
    description: "Mohammed Delany is an awesome person!",
    rankedSkills: [
      "Creativity",
      "Interpersonal Communication",
      "Critical Thinking",
    ],
    "time-zone": "UTC+5",
    userType: "mentor",
  },
};

// push mentor's skills to global variable
var Mentorskills = loggedmentor.Mentor1.rankedSkills;

// push mentor's timezone to global variable
var s1 = loggedmentor.Mentor1["time-zone"];
var mentorTZ = parseInt(s1.slice(3));
// store menteeIDs and numbers of each mentee's overlapping skills
// mentee1: [ 2, 10 ],
// menteeUID: [<matched skills>, <diffTZ> ]
let count = {};

for (i in sampleData.users) {
  // store number of matching skills
  let num = 0;

  // compare mentee's skills with mentor
  // loop each mentee's skills
  for (skill of sampleData["users"][i]["rankedSkills"]) {
    // loop each mentorskills
    for (h of Mentorskills) {
      if (h == skill) {
        // if match, num increment.
        num++;
      }
    }
  }
  // store timezone as a string
  var s2 = sampleData["users"][i]["time-zone"];
  // convert string to integer
  var menteeTZ = parseInt(s2.slice(3));
  var diffTZ = menteeTZ + mentorTZ;
  // add key of menteeID with value of number of overlapping skills, and bool of timezone
  var arr = [num, diffTZ];
  // store number of matching skills and timezone diff in count
  count[i] = arr;
}
// if we want to display the two best mentor

// display mentorUID and suggestedmentee.
/* 
For now, i set the algorithm to display Top 3 
suggestedMentees according to number of matched skills 
and closest timezone
*/
// sort the list of mentees
// sort by num of skills
var sortedByNum = Object.entries(count).sort((a, b) => {
  if (a[0] < b[0]) return 1;
  else {
    return -1;
  }
});
//print sorted mentees
console.log(sortedByNum);ß
// print suggested mentees
var suggestedmentee = { Mentor1: [] };
for (i = 0; i < 3; i++) {
  suggestedmentee.Mentor1.push(sortedByNum[i][0]);
}

console.log(suggestedmentee);
