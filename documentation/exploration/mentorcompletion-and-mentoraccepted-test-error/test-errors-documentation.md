# Error screenshot
![](test-errors-screenshot.png)
# Why the error occurred
Rendering mentorAccept page need to be authorized by FB as logged-in status, but this cannot be implemented within tests, which probably caused the current error. MentorAccepted.js is relatively complex than we expected.
# Testing code
In MentorAccepted.test.js
```javascript
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';

import MentorAccepted from './MentorAccepted';

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
  render(<MentorAccepted />, container);
  expect(container.textContent).toBe(
    'Accepted Mentees:Below you can view details about each accepted mentee',
  );
});

test('MentorDisplay page is connected to this page', () => {
  render(<MentorAccepted />, container);
  const dis = document.createElement('MentorDisplay');
  expect(container.contains(dis)).toBe(true);
});
```
