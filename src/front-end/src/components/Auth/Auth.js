import React, { Component } from 'react';
import fire from '../../firebase-init';
import Login from '../Login';
import MentorHome from '../MentorHome';
import AdminHome from '../AdminHome/AdminHome';
import EmailVerify from '../EmailVerify';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userType: '',
    };
  }

  componentDidMount() {
    this.authListener();
  }

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

  render() {
    if (this.state.user) {
      if (!this.state.user.emailVerified) {
        return <EmailVerify />;
      }
      if (this.state.userType === 'mentor') {
        return <MentorHome />;
      }
      return <AdminHome />;
    }
    return <Login />;
  }
}

export default Auth;
