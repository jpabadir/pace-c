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

it('has a Generate iFrame Tag button', () => {
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

function isInIframe() {
  return window.top !== window.self;
}

// Referenced from: https://theunlikelydeveloper.com/jest-mock-window-test-iframes/
describe('isInIframe', () => {
  it('should return true if in iframe', () => {
    // Extract the real properties so we can put them back after this test
    const { top, self } = window;

    // Delete the real properties from window so we can mock them
    delete window.top;
    delete window.self;

    // Mock window.top and window.self as different objects (we don't
    // need anything else from the original objects here, so {} is fine)
    window.top = {};
    window.self = {};

    // Test the code
    const result = isInIframe();
    expect(result).toBe(true);

    // Restore the original values so other tests will function normally
    window.top = top;
    window.self = self;
  });
});
