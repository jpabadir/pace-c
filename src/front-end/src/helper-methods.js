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

export function marshallMentorInfo(mentorFormValues) {
  return {
    organization: mentorFormValues.organization,
    email: mentorFormValues.emailInput,
    name: mentorFormValues.nameInput,
    timeZone: mentorFormValues.timeZone,
    userType: 'mentor',
  };
}

export function marshallMenteeInfo(mentorFormValues) {
  return {
    email: mentorFormValues.emailInput,
    name: mentorFormValues.nameInput,
    timeZone: mentorFormValues.timeZone,
    userType: 'mentee',
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

export function fetchSuggestedMenteesIDs(loggedUserUid) {
  return new Promise((resolve) => {
    const userRef = firebase.database().ref('users/' + loggedUserUid);
    userRef.on('value', (snapshot) => {
      resolve(snapshot.val().suggestedMentees);
    });
  });
}
