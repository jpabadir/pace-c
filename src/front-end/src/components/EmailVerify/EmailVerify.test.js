import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockWindowMatchMedia } from '../../helper-methods';
import EmailVerify from './EmailVerify';

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
  render(
    <Router>
      <EmailVerify />
    </Router>,
    container,
  );
  expect(container.textContent).toBe(
    'A verification email has been sent to your email address!Please verify your email address in order to access your account.If you did not recieve a verification email or if the verification email has already expired, click the button below to resend a verification email.Resend Verification Email',
  );
});

it('has a resend email button', () => {
  render(<EmailVerify />, container);
  const button = document.getElementsByTagName('button')[0];
  expect(container.contains(button)).toBe(true);
  expect(button.textContent).toBe('Resend Verification Email');
});

test('renders the correct header1 text', () => {
  render(<EmailVerify />, container);
  const h1 = document.getElementsByTagName('h1');
  expect(h1[0].textContent).toBe(
    'A verification email has been sent to your email address!',
  );
});

test('renders the correct header2 text', () => {
  render(<EmailVerify />, container);
  const h2 = document.getElementsByTagName('h2');
  expect(h2[0].textContent).toBe(
    'Please verify your email address in order to access your account.',
  );
});

test('renders the submit button correctly', () => {
  render(<EmailVerify />, container);
  const submitButton = document.getElementsByClassName(
    'ant-btn ant-btn-primary ant-btn-lg formSubmitButton',
  );
  expect(submitButton[0].textContent).toBe('Resend Verification Email');
});
