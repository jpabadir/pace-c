import React, { Component } from 'react';
import fire from '../../firebase-init';
import Login from '../Login';
import MentorHome from '../MentorHome';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
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

  render() {
    if (this.state.user && this.state.user.emailVerified) {
      return <MentorHome />;
    }
    if (this.state.user) {
      // changed to a window alert to show what happens
      // when you switch between the mentor tabs after login
      window.alert('Please verify email');
    }
    return <Login />;
  }
}

export default Auth;
