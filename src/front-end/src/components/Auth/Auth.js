import React, { Component } from 'react';
import fire from '../../firebase-init';
import Login from '../Login/Login';
import MentorHome from '../MentorHome';
import AdminHome from '../AdminHome/AdminHome';
import EmailVerify from '../EmailVerify/EmailVerify';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userType: '',
    };
  }

  componentDidMount() {
    this.authListener();
  }

  /* Once a user logins in with valid credentials, we want to update 
  the application's state, and obtain the user's type
  */
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.handleUserType();
      } else {
        this.setState({ user: null });
      }
    });
  }

  handleUserType() {
    fire
      .database()
      .ref('users/' + this.state.user.uid)
      .on('value', (snapshot) => {
        this.setState({ userType: snapshot.val().userType });
      });
  }

  /* After login (which triggers a state change), route the user according to 
  the correct display depending on whether they've verified their email,
  or if they're an admin or mentor.
  */
  render() {
    if (this.state.user) {
      if (!this.state.user.emailVerified) {
        return <EmailVerify />;
      }
      if (this.state.userType === 'admin') {
        return <AdminHome />;
      }
      if (this.state.userType === 'mentor') {
        return <MentorHome />;
      }
    }
    return <Login />;
  }
}

export default Auth;
