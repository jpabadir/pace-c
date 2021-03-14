import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import Login from './Login';

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
  render(<Login />, container);
  expect(container.textContent).toBe(
    "Login to access the Mentorship PortalEmailPasswordLoginForgot your password?\xa0\xa0Don't have an account yet?Create Account",
  );
});

test('renders login title correctly', () => {
  render(<Login />, container);
  const title = document.getElementsByTagName('h1')[0];
  expect(title.textContent).toBe('Login to access the Mentorship Portal');
});

test('renders the login button correctly', () => {
  render(<Login />, container);
  const button = document.getElementsByTagName('Button')[0];
  expect(container.contains(button)).toBe(true);
  expect(button.textContent).toBe('Login');
});

test('renders the create Account button correctly', () => {
  render(<Login />, container);
  const button = document.getElementsByTagName('p')[2].nextElementSibling;
  expect(container.contains(button)).toBe(true);
  expect(button.textContent).toBe('Create Account');
  expect(button.href).toBe('http://localhost/signup');
});

test('renders forgotPassword link correctly', () => {
  render(<Login />, container);
  const link = document.getElementsByTagName('a')[0];
  expect(link.href).toBe('http://localhost:3000/forgot-password');
});
