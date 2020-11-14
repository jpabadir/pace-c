import firebase from './firebase-init';

export function createUserInFirebase(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user
        .sendEmailVerification()
        .then(() => {
          console.log("Email verification sent to user's email");
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function saveToDB(reference, objectToSave) {
  firebase.database().ref(reference).push().set(objectToSave);
}
