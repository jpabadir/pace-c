import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import MenteeDisplay from './MenteeDisplay';

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

test('render the body of the card correctly', () => {
  render(<MenteeDisplay />, container);
  const p = document.getElementsByTagName('p');
  let i = 0;
  while (i < p.length) {
    expect(container.contains(p[i])).toBe(true);
    i += 1;
  }
  expect(p[0].textContent).toBe(' Email: ');
  expect(p[1].textContent).toBe(' Skills Seeking Mentorship: ');
  expect(p[2].textContent).toBe('  Description:  ');
});
