import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
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
    'Sign up as a MentorOrganizationNameEmailTime-zoneSelect timezone..AvailabilityPasswordConfirm PasswordTop 3 skills\xa0DescriptionSubmit',
  );
});

test('Every text field has a corresponding input field', () => {
  render(<MentorForm />, container);
  const renderedLabels = document.getElementsByTagName('label');
  const correctLabels = [
    'Organization',
    'Name',
    'Email',
    'Time-zone',
    'Availability',
    'Password',
    'Confirm Password',
    'Top 3 skills',
    'Description',
  ];
  for (let i = 0; i < renderedLabels.length; i += 1) {
    expect(renderedLabels[i].textContent).toBe(correctLabels[i]);
  }
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

test('timezone select options are updating properly', async () => {
  render(<MentorForm />, container);
  expect(document.getElementById('timeZone_list')).toBe(null);
  const tzi = document.getElementById('timeZone');
  await act(async () => userEvent.click(tzi));
  const timeZoneList = document.getElementById('timeZone_list').children;
  expect(timeZoneList[0].textContent).toBe('(GMT-11:00)PagoPago');
  expect(timeZoneList[1].textContent).toBe('(GMT-10:00)HawaiiTime');
});
