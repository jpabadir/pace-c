import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import MentorCompletion from './MentorCompletion';

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

test('renders without crashing', () => {
  render(<MentorCompletion />, container);
  expect(container.textContent).toBe(
    'Congradulations! You have successfully created your account. Please activate your account through the email we just sent and click\xa0here\xa0to access your account!',
  );
});

test('routes to correct address when click on here', () => {
  render(<MentorCompletion />, container);
  const a = document.getElementsByTagName('a')[0];
  expect(a.href).toBe('http://localhost:3000/Auth');
});
