import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
    "Login to access the Mentorship PortalEmailPasswordLoginForgot your password?  Don't have an account yet?Create Account",
  );
});
