import React from 'react';

import { render, unmountComponentAtNode } from 'react-dom';

import { mockWindowMatchMedia } from '../../helper-methods';

import MentorHome from './MentorHome';

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

test('render without crashing', () => {
  render(<MentorHome />, container);
  expect(container.textContent).toBe(
    'test test test', // should fail
  );
});
