/* eslint-disable */
import React, {Component} from 'react';
import fire from '../firebase-init';
import Login from './Login';
import MentorHome from './MentorHome';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            // console.log(user);
            if (user) {
                this.setState({ user });
                // localStorage.setItem('User', user.id);
            } else {
                this.setState({ user: null });
                // localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <div>
             {(this.state.user) ? (<MentorHome />) : (<Login />)}
            </div>
        );
    }
}

export default Auth;