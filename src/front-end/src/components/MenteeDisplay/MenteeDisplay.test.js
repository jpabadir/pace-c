/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import MenteeDisplay from './MenteeDisplay';

let container = null;

const mockFunction = jest.fn();
const props = {
  menteeUid: '',
  name: '',
  email: '',
  skills: '',
  description: '',
  request: false,
  acceptMentee: mockFunction,
  declineMentee: mockFunction,
};

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

test('render the head of the card correctly', () => {
  render(<MenteeDisplay {...props} />, container);
  const head = document.getElementsByClassName('ant-card-head-title');
  expect(container.contains(head[0])).toBe(true);
});

test('render the body of the card correctly', () => {
  render(<MenteeDisplay {...props} />, container);
  const p = document.getElementsByTagName('p');
  for (let i = 0; i < p.length; i += 1) {
    expect(container.contains(p[i])).toBe(true);
  }
  expect(p[0].textContent).toBe('');
  expect(p[1].textContent).toBe(' Skills Seeking Mentorship: ');
  expect(p[2].textContent).toBe('  Description:  ');
});

test('render the actions of the card correctly', () => {
  render(<MenteeDisplay {...props} />, container);
  const actions = document.getElementsByClassName('ant-card-actions');
  expect(container.contains(actions[0])).toBe(true);
});

test('render the card actions without the accept & decline buttons if not a request', () => {
  render(<MenteeDisplay {...props} />, container);
  const actionsContainer = document.querySelector('.ant-card-actions');
  const spanTag = actionsContainer.getElementsByTagName('span');
  expect(spanTag.textContent).toBe(undefined);
});
