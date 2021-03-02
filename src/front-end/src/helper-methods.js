import { notification } from 'antd';
import firebase from './firebase-init';

const auth = firebase.auth();

export function resendVerificationEmail(user) {
  user
    .sendEmailVerification()
    .then(() => {
      notification.success({
        message: 'A new verification email has successfully been sent!',
      });
    })
    .catch((error) => {
      console.log(error);
      switch (error.code) {
        case 'auth/too-many-requests':
          notification.error({
            message:
              'Too many requests. Please check the inbox and junk folder of your email before pressing the button again.',
          });
          break;
        default:
          break;
      }
    });
}

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
        resolve(error);
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
    rankedSkills: mentorFormValues.teachables,
    description: mentorFormValues.description,
    availability: mentorFormValues.calendarLink,
  };
}

export function marshallMenteeInfo(menteeFormValues) {
  return {
    email: menteeFormValues.emailInput,
    name: menteeFormValues.nameInput,
    timeZone: menteeFormValues.timeZone,
    userType: 'mentee',
    rankedSkills: menteeFormValues.skillset,
    description: menteeFormValues.description,
  };
}

export function resetPassword(emailAddress) {
  auth
    .sendPasswordResetEmail(emailAddress)
    .then(() => {
      notification.success({
        message: 'We sent you an email with a link to reset your password.',
      });
    })
    .catch((error) => {
      console.log(error);
      switch (error.code) {
        case 'auth/invalid-email':
          break;
        case 'auth/user-not-found':
          notification.error({
            message:
              'The email address that you have entered does not match with any accounts in our system.',
          });
          break;
        default:
          break;
      }
    });
}

export function fetchOrganizationName(loggedUserUid) {
  return new Promise((resolve) => {
    const userRef = firebase.database().ref('users/' + loggedUserUid);
    userRef.on('value', (snapshot) => {
      resolve(snapshot.val().organization);
    });
  });
}

// This method is probably not working as expected
export async function setOrganizationMentors(organizationName, context) {
  const snapshot = await firebase
    .database()
    .ref('organizations')
    .child(organizationName.toLowerCase())
    .once('value');
  const organizationInfo = snapshot.val();

  const mentorsDisplayedInfo = {
    pendingMentors:
      organizationInfo && organizationInfo.pendingMentors
        ? organizationInfo.pendingMentors
        : [],
    activeMentors: [],
  };

  if (organizationInfo && organizationInfo.activeMentors) {
    organizationInfo.activeMentors.forEach((uid) => {
      firebase
        .database()
        .ref('users/' + uid)
        .child('name')
        .on('value', (nameSnapshot) => {
          mentorsDisplayedInfo.activeMentors.push(nameSnapshot.val());
        });
    });
  }

  context.setState({
    organizationMentors: mentorsDisplayedInfo,
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

export function marshallAdminInfo(adminFormValues) {
  return {
    organization: adminFormValues.organizationInput,
    email: adminFormValues.emailInput,
    name: adminFormValues.nameInput,
    userType: 'admin',
  };
}
// This function was copied directly from: https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case.
export function getCamelCase(inputString) {
  return inputString
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

export function mockWindowMatchMedia() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
