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

test('Every text field has its input field except', () => {
  render(<MentorForm />, container);
  const input = document.getElementsByTagName('input');
  const tarea = document.getElementsByTagName('textArea');
  // organization
  expect(container.contains(input[0])).toBe(true);
  expect(input[0].labels[0].textContent).toBe('Organization');
  // name
  expect(container.contains(input[1])).toBe(true);
  // email
  expect(container.contains(input[2])).toBe(true);
  // time-zone
  expect(container.contains(input[3])).toBe(true);
  // password
  expect(container.contains(input[4])).toBe(true);
  // password confirm
  expect(container.contains(input[5])).toBe(true);
  // skills
  expect(container.contains(input[6])).toBe(true);
  // description
  expect(container.contains(tarea[0])).toBe(true);
});
