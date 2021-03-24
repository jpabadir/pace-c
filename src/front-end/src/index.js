import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenteeForm from './components/MenteeForm/MenteeForm';
import MentorForm from './components/MentorForm/MentorForm';

// This component is almost the same as the default index.js for a React app. It does contain a router, however.
// The reason there is a router is to be able to render the mentee and mentor forms independently from the rest of the
// website. This way, when we embed the mentee form or route mentor to the mentor form, these users see nothing but the
// form itself, without being able to navigate elsewhere in our website. 
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/mentee-form-embed" component={MenteeForm} />
      <Route exact path="/mentor-form" component={MentorForm} />
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
