import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { mockWindowMatchMedia } from '../../helper-methods';

import MenteeForm from './MenteeForm';

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
  render(<MenteeForm />, container);
  expect(container.textContent).toBe(
    'Sign up as a MenteeNameEmailTime-zoneSelect timezone..Top 3 skills\xa0DescriptionSubmit',
  );
});

test('renders the correct header text', () => {
  render(<MenteeForm />, container);
  const h1 = document.getElementsByTagName('h1');
  expect(h1[0].textContent).toBe('Sign up as a Mentee');
});

test('renders the correct input labels', () => {
  render(<MenteeForm />, container);
  const renderedLabels = document.getElementsByTagName('label');
  const correctLabels = [
    'Name',
    'Email',
    'Time-zone',
    'Top 3 skills',
    'Description',
  ];
  for (let i = 0; i < renderedLabels.length; i += 1) {
    expect(renderedLabels[i].textContent).toBe(correctLabels[i]);
  }
});

test('renders the correct number of input fields for each label ', () => {
  render(<MenteeForm />, container);
  const numberOfLabels = document.getElementsByTagName('label').length;
  const numberOfInputFields = document.getElementsByClassName(
    'ant-form-item-control-input',
  ).length;
  expect(numberOfLabels).toBe(numberOfInputFields);
});

test('renders the submit button correctly', () => {
  render(<MenteeForm />, container);
  const submitButton = document.getElementsByClassName(
    'ant-btn ant-btn-primary ant-btn-lg formSubmitButton',
  );
  expect(submitButton[0].textContent).toBe('Submit');
});

test('timezone select options are updating properly', async () => {
  render(<MenteeForm />, container);
  expect(document.getElementById('timeZone_list')).toBe(null);
  const tzi = document.getElementById('timeZone');
  await act(async () => userEvent.click(tzi));
  const timeZoneList = document.getElementById('timeZone_list').children;
  expect(timeZoneList[0].textContent).toBe('(GMT-11:00)PagoPago');
  expect(timeZoneList[1].textContent).toBe('(GMT-10:00)HawaiiTime');
});
