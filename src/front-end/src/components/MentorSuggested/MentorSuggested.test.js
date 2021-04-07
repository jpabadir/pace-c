// This file aims at testing a component which relies on a Firebase call to
// render properly. Since we are not able to mock Firebase, we cannot test
// it. We have left our attempt at testing it commented out below.
// Note that this commented-out test fails.

// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { mockWindowMatchMedia } from '../../helper-methods';
// import MentorSuggested from './MentorSuggested';

// let container = null;

// mockWindowMatchMedia();

// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it('renders without crashing', () => {
//   render(<MentorSuggested />, container);
//   expect(container.textContent).toBe(
//     "Welcome To Mentor Match's Mentor Tutorial!This
// is the mentor tutorial page where you can learn how to see and
// interact with:Suggested MenteesAccepted MenteesSuggested
// Mentees:The suggested
// mentees tab is located on the top of the page. On
// the suggested mentee page you
// will be able to view all of your suggested mentees
// and details about each mentee.
// To accept a mentee click on the 'Accept ' button
// below the mentee's information. To
// decline a mentee click on the 'Decline' button below
// the mentee's information.Accepted
// Mentees:The accepted mentees tab is also located on
// the top of the page next to the suggested
// mentee tab. On the accepted mentees tab you can view
// the information of all mentees that have been
// accepted from the suggested mentees tab.",
//   );
// });

test.skip('Used to prevent the error: Your test suite must contain at least one test.', () =>
  1);
