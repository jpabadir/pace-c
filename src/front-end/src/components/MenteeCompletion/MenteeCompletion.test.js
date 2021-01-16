import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import MenteeCompletion from './MenteeCompletion';

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
  render(<MenteeCompletion />, container);
  expect(container.textContent).toBe(
    "Congratulations! You have successfully submitted your request for mentorship. We'll send you an email once we match you with a mentor!",
  );
});
