import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockWindowMatchMedia } from '../../helper-methods';
import AccountMenuItem from './AccountMenuItem';

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

test('render the correct number of menuItems', () => {
  render(
    <Router>
      <AccountMenuItem />
    </Router>,
    container,
  );
  const menuItem = document.getElementsByTagName('a');
  expect(menuItem.length).toBe(1);
});

test('renders without crashing', () => {
  render(
    <Router>
      <AccountMenuItem />
    </Router>,
    container,
  );
  expect(container.textContent).toBe('Login');
});
