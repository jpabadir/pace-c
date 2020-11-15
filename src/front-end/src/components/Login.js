/* eslint-disable */
import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import fire from '../firebase-init';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:""
    }
    this.Login = this.Login.bind(this);
    this.Change = this.Change.bind(this);
  }

  Login(values) {
    values.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error)=>{
      console.log(error);
    });
  }

  Change(values) {
    this.setState({[values.target.name]: values.target.value});
  }


  render() {
    return (
      <Form>
        <p>Welcome to MentorMatch!</p>
        <p>Login to access the mentorship portal</p>
        <Form.Item
          type="email"
          label="Email"
          name="email"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input type ="email" placeholder="please enter your email" value={this.state.email} onChange={this.Change}/>
        </Form.Item>
        <Form.Item
          type="password"
          label="Password"
          name="password"
          // must have an input:
          rules={[{ required: true, message: 'Please input something' }]}
        >
          <Input type="password" placeholder="please enter your password" value={this.state.password} onChange={this.Change}/>
        </Form.Item>
        <p>{/* used to space buttons */}</p>
        {/* button below should send the information from the page: */}
        {/* login to the database. To verify the account password/email */}
        <Button type="primary" htmlType="submit" onClick={this.Login}>
          Login
        </Button>
        {/* link below should allow the user to reset password: */}
        <p>Forgot your password? Click here!</p>
        {/* below is used as a space between the two links */}
        &nbsp;
        <p>Don&apos;t have an account yet?</p>
        {/* button below should link to the createaccount page: */}
        <Button type="primary" htmlType="button">
          Create Account
        </Button>
      </Form>
    );
  }
}
// exports:
export default Login;
