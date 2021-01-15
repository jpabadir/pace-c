import firebase from './firebase-init';

const auth = firebase.auth();

function mySendEmailVerification(user) {
  user
    .sendEmailVerification()
    .then(() => {
      console.log("Email verification sent to user's email");
    })
    .catch((error) => {
      console.log(error);
    });
}

export function createUserInFirebase(email, password) {
  return new Promise((resolve) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        mySendEmailVerification(userCredential.user);
        resolve(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

export function setInDB(reference, child, objectToSave) {
  firebase.database().ref(reference).child(child).set(objectToSave);
}

export function pushToDB(reference, objectToSave) {
  firebase.database().ref(reference).push(objectToSave);
}

/* TODO: reduce redundancy between two below methods 
with a third method for the attributes in common */
export function marshallMentorInfo(mentorFormValues) {
  return {
    organization: mentorFormValues.organization,
    email: mentorFormValues.emailInput,
    name: mentorFormValues.nameInput,
    timeZone: mentorFormValues.timeZone,
    userType: 'mentor',
    rankedSkills: [
      mentorFormValues.skill1,
      mentorFormValues.skill2,
      mentorFormValues.skill3,
    ],
    description: mentorFormValues.description,
    suggestedMentees: ['MLy_owDfdsfsZSNtIanUi6', 'MLy_owDS4aZSNtIanUi6'],
  };
}

export function marshallMenteeInfo(menteeFormValues) {
  return {
    email: menteeFormValues.emailInput,
    name: menteeFormValues.nameInput,
    timeZone: menteeFormValues.timeZone,
    userType: 'mentee',
    rankedSkills: [
      menteeFormValues.skill1,
      menteeFormValues.skill2,
      menteeFormValues.skill3,
    ],
    description: menteeFormValues.description,
  };
}

export function resetPassword(emailAddress) {
  auth
    .sendPasswordResetEmail(emailAddress)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.log(error);
    });
}

export function fetchMenteesIDs(loggedUserUid, typeOfMentee) {
  return new Promise((resolve) => {
    const userRef = firebase.database().ref('users/' + loggedUserUid);
    userRef.on('value', (snapshot) => {
      if (snapshot.val() != null) {
        const result =
          typeOfMentee === 'suggested'
            ? snapshot.val().suggestedMentees
            : snapshot.val().acceptedMentees;
        resolve(result);
      } else {
        resolve([]);
      }
    });
  });
}

export function fetchMenteesFullInfo(menteesIDs, context) {
  if (menteesIDs) {
    menteesIDs.forEach((menteeId) => {
      const menteeRef = firebase.database().ref('users/' + menteeId);
      menteeRef.on('value', (snapshot) => {
        const menteeWithID = snapshot.val();
        menteeWithID.id = menteeId;
        context.setState((prevState) => ({
          mentees: prevState.mentees.concat(menteeWithID),
        }));
      });
    });
  }
}

// This function was copied directly from: https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case.
export function getCamelCase(inputString) {
  return inputString
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}
