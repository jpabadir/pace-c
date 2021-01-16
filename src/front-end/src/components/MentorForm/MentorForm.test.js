import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import MentorForm from './MentorForm';

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
  render(<MentorForm />, container);
  expect(container.textContent).toBe(
    'Sign up as a MentorOrganizationNameEmailTime-zoneSelect timezone..PasswordConfirm PasswordTop 3 skills\xa0DescriptionSubmit',
  );
});

test('Every text field has a corresponding input field', () => {
  render(<MentorForm />, container);
  const input = document.getElementsByTagName('input');
  const tarea = document.getElementsByTagName('textArea');
  // organization
  expect(container.contains(input[0])).toBe(true);
  expect(input[0].labels[0].textContent).toBe('Organization');
  // name
  expect(container.contains(input[1])).toBe(true);
  expect(input[1].labels[0].textContent).toBe('Name');
  // email
  expect(container.contains(input[2])).toBe(true);
  expect(input[2].labels[0].textContent).toBe('Email');
  // time-zone
  expect(container.contains(input[3])).toBe(true);
  expect(input[3].labels[0].textContent).toBe('Time-zone');
  // password
  expect(container.contains(input[4])).toBe(true);
  expect(input[4].labels[0].textContent).toBe('Password');
  // password confirm
  expect(container.contains(input[5])).toBe(true);
  expect(input[5].labels[0].textContent).toBe('Confirm Password');
  // skills
  expect(container.contains(input[6])).toBe(true);
  expect(input[6].labels[0].textContent).toBe('Top 3 skills');
  // description
  expect(container.contains(tarea[0])).toBe(true);
  expect(tarea[0].labels[0].textContent).toBe('Description');
});

test('render button correctly', () => {
  render(<MentorForm />, container);
  const button = document.getElementsByTagName('Button');
  expect(container.contains(button[0])).toBe(true);
  expect(button[0].textContent).toBe('Submit');
});

test('render header correctly', () => {
  render(<MentorForm />, container);
  const header = document.getElementsByTagName('h1');
  const h1 = document.createElement('h1');
  h1.textContent = 'Sign up as a Mentor';
  expect(header[0].isEqualNode(h1)).toBe(true);
});

test('render time-zone with correct options', () => {
  render(<MentorForm />, container);
  const options = document.getElementsByTagName('Option');
  expect(options.length).toBe(9);
  expect(options[0].nodeValue).toBe('Time management')
});