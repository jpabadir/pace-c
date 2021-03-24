/*

This file aims at testing a component which relies on a Firebase call to
render properly. Since we are not able to mock Firebase, we cannot test
it. We have left our attempt at testing it commented out below.
Note that this commented-out test fails.

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import AdminHome from './AdminHome';

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
  render(<AdminHome />, container);
  expect(container.textContent).toBe('');
});

*/
