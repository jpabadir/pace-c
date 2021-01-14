import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import ForgotPassword from './ForgotPassword';

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
  render(<ForgotPassword />, container);
  expect(container.textContent).toBe('Reset your passwordEmailConfirm');
});

it('has a text input', () => {
  render(<ForgotPassword />, container);
  const input = document.getElementsByTagName('input')[0];
  expect(container.contains(input)).toBe(true);
});
