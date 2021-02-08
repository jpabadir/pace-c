import React, { Component } from 'react';
import { Button } from 'antd';
import { Route } from 'react-router-dom';
import PlaceHolder from './PlaceHolder';

// eslint-disable-next-line react/prefer-stateless-function
class AdminHome extends Component {
  render() {
    return (
      <>
        <Button
          type="primary"
          htmlType="button"
          id="mentorForm"
          href="/placeHolder"
        >
          Mentor Form
        </Button>
        <Button
          type="primary"
          htmlType="button"
          id="manageMentors"
          href="/placeHolder"
        >
          Manage Mentors
        </Button>
        <Button
          type="primary"
          htmlType="button"
          id="menteeForm"
          href="/placeHolder"
        >
          Mentee Form
        </Button>
        <Route path="/placeHolder" component={PlaceHolder} />
      </>
    );
  }
}
// exports:
export default AdminHome;
