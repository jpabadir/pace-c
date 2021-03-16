import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockWindowMatchMedia } from '../../helper-methods';
import AdminSignup from './AdminSignup';

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
      <AdminSignup />
    </Router>,
    container,
  );
  expect(container.textContent).toBe(
    'Register your Organization on Mentor MatchOrganizationNameEmailPasswordConfirm PasswordSubmit',
  );
});

it('has a submit button', () => {
  render(<AdminSignup />, container);
  const button = document.getElementsByTagName('button')[0];
  expect(container.contains(button)).toBe(true);
  expect(button.textContent).toBe('Submit');
});

test('renders the correct header text', () => {
  render(<AdminSignup />, container);
  const h1 = document.getElementsByTagName('h1');
  expect(h1[0].textContent).toBe('Register your Organization on Mentor Match');
});

test('renders the correct input labels', () => {
  render(<AdminSignup />, container);
  const renderedLabels = document.getElementsByTagName('label');
  const correctLabels = [
    'Organization',
    'Name',
    'Email',
    'Password',
    'Confirm Password',
  ];
  for (let i = 0; i < renderedLabels.length; i += 1) {
    expect(renderedLabels[i].textContent).toBe(correctLabels[i]);
  }
});

test('renders the correct number of input fields for each label ', () => {
  render(<AdminSignup />, container);
  const numberOfLabels = document.getElementsByTagName('label').length;
  const numberOfInputFields = document.getElementsByClassName(
    'ant-form-item-control-input',
  ).length;
  expect(numberOfLabels).toBe(numberOfInputFields);
});

test('renders the submit button correctly', () => {
  render(<AdminSignup />, container);
  const submitButton = document.getElementsByClassName(
    'ant-btn ant-btn-primary ant-btn-lg formSubmitButton',
  );
  expect(submitButton[0].textContent).toBe('Submit');
});
