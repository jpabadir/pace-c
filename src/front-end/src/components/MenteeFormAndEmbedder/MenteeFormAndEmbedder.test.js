import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';
import MentorFormAndEmbedder from './MenteeFormAndEmbedder';

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

it('has a resend email button', () => {
  render(<MentorFormAndEmbedder />, container);
  const button = document.getElementsByTagName('button')[0];
  expect(container.contains(button)).toBe(true);
  expect(button.textContent).toBe('Generate iFrame Tag');
});

test('renders the correct header1 text', () => {
  render(<MentorFormAndEmbedder />, container);
  const h1 = document.getElementsByTagName('h1');
  expect(h1[0].textContent).toBe(
    "Click on the 'Generate iFrame Tag' button to create an iFrame tag that can be embedded into your website!",
  );
});

test('renders the correct header2 text', () => {
  render(<MentorFormAndEmbedder />, container);
  const h2 = document.getElementsByTagName('h2');
  expect(h2[0].textContent).toBe(
    'The form below is an example of the mentee form:',
  );
});
