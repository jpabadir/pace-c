import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import MentorAccepted from './MentorAccepted';

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
  render(<MentorAccepted />, container);
  expect(container.textContent).toBe(
    'Accepted Mentees:Below you can view details about each accepted mentee',
  );
});

test('MentorDisplay page is connected to this page', () => {
  render(<MentorAccepted />, container);
  const dis = document.createElement('MentorDisplay');
  expect(container.contains(dis)).toBe(true);
});
// check which account I'm using to push