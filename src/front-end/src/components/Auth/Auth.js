import React, { Component } from 'react';
import fire from '../../firebase-init';
import Login from '../Login';
import MentorHome from '../MentorHome';
import AdminHome from '../AdminHome/AdminHome';

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
    this.handleUserType();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
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
    if (
      this.state.user &&
      this.state.user.emailVerified &&
      this.state.userType === 'mentor'
    ) {
      return <MentorHome />;
    }
    if (this.state.user) {
      return <h1>Please verify your email to access your account!</h1>;
    }
    if (
      this.state.user &&
      this.state.user.emailVerified &&
      this.state.userType === 'admin'
    ) {
      return <AdminHome />;
    }
    return <Login />;
  }
}

export default Auth;
