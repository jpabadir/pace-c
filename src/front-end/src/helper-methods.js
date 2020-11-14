import firebase from './firebase-init';

const createUser = (email, password) => {
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
};

export default createUser;
