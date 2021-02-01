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
      return <h1>Please verify your email to access your account!</h1>;
    }
    return <Login />;
  }
}

export default Auth;
