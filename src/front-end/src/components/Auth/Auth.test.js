import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
import { mockWindowMatchMedia } from '../../helper-methods';

import Auth from './Auth';

let container = null;

mockWindowMatchMedia();

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  render(
    <Router>
      <Auth />
    </Router>,
    container,
  );
  expect(container.textContent).toBe(
    'A verification email has been sent to your email address!Please verify your email address in order to access:Your Mentor AccountThe Mentor TutorialYour Suggested MenteesYour Accepted MenteesIf you did not recieve a verification email or if the verification email has already expired, click the button below to resend a verification email.Resend Verification Email',
  );
});

// it('has logout button', () => {
//   render(
//     <Router>
//       <Auth />
//     </Router>,
//     container,
//   );
//   const logoutButton = document.getElementsByTagName('button')[0];
//   expect(logoutButton.textContent).toBe('Logout');
// });

// it('has 3 properly-labelled links', () => {
//   render(
//     <Router>
//       <Auth />
//     </Router>,
//     container,
//   );
//   const links = document.getElementsByTagName('a');
//   expect(links[0].textContent).toBe('Mentor Tutorial');
//   expect(links[1].textContent).toBe('Suggested Mentees');
//   expect(links[2].textContent).toBe('Accepted Mentees');
// });

// it('has 3 links and one button', () => {
//   render(
//     <Router>
//       <Auth />
//     </Router>,
//     container,
//   );
//   const links = document.getElementsByTagName('a');
//   expect(links.length).toBe(3);

//   const buttons = document.getElementsByTagName('button');
//   expect(buttons.length).toBe(1);
// });

// it('logs out properly', async () => {
//   render(
//     <Router>
//       <Auth />
//     </Router>,
//     container,
//   );
//   const logoutButton = document.getElementsByTagName('button')[0];
//   await act(async () => userEvent.click(logoutButton));

//   expect(container.textContent).toBe(
//     "Login to access the Mentorship PortalEmailPasswordLoginForgot
//  your password?
//  Don't have a mentor account yet?Create Account",
//   );
// });

// it('after logout - has 2 links and one button', async () => {
//   render(
//     <Router>
//       <Auth />
//     </Router>,
//     container,
//   );
//   const logoutButton = document.getElementsByTagName('button')[0];
//   await act(async () => userEvent.click(logoutButton));

//   const links = document.getElementsByTagName('a');
//   expect(links.length).toBe(2);

//   const buttons = document.getElementsByTagName('button');
//   expect(buttons.length).toBe(1);
// });

// it('after logout - has an email and password inputs', async () => {
//   render(
//     <Router>
//       <Auth />
//     </Router>,
//     container,
//   );
//   const logoutButton = document.getElementsByTagName('button')[0];
//   await act(async () => userEvent.click(logoutButton));

//   const inputs = document.getElementsByTagName('input');
//   const labels = document.getElementsByTagName('label');

//   expect(labels[0].textContent.toLowerCase()).toBe(inputs[0].type);
//   expect(labels[1].textContent.toLowerCase()).toBe(inputs[1].type);
// });

// it('after logout - has a link to ForgotPassword', async () => {
//   render(
//     <Router>
//       <Auth />
//     </Router>,
//     container,
//   );
//   const logoutButton = document.getElementsByTagName('button')[0];
//   await act(async () => userEvent.click(logoutButton));

//   const link = document.getElementsByTagName('a')[0];
//   expect(link.textContent).toBe('Forgot your password?\xa0');
// });

// it('after logout - has a header with the right content', async () => {
//   render(
//     <Router>
//       <Auth />
//     </Router>,
//     container,
//   );
//   const logoutButton = document.getElementsByTagName('button')[0];
//   await act(async () => userEvent.click(logoutButton));

//   const header = document.getElementsByTagName('h1')[0];
//   expect(header.textContent).toBe('Login to access the Mentorship Portal');
// });
