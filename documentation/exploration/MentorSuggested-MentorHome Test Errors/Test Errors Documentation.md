# Why this issue is more complex than originally thought:
The tests that were attempted in both the MentorHome.test.js and the MentorSuggested.test.js file will need more time than originally thought.
This is because in order to properly test these components, we will need to able to mock a firebase user logging in. 
Mocking a firebase user is a more complex task than we have originally thought.
Therefore, we have converted this task into an exploration issue to allow more time to work on the task.

# Screenshot of errors:
![](mentorsuggested-mentorhome-errors.png)

# Testing Code:
## Testing Code For MentorHome.test.js:
```
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockWindowMatchMedia } from '../../helper-methods';
import MentorHome from './MentorHome';

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
  render(
    <Router>
      <MentorHome />
    </Router>,
    container,
  );
  expect(container.textContent).toBe(
    'test test test', // should fail
  );
});
```

## Testing Code For MentorSuggested.test.js:
```
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { render, unmountComponentAtNode } from 'react-dom';

import { mockWindowMatchMedia } from '../../helper-methods';

import MentorSuggested from './MentorSuggested';

let container = null;

const mockFunction = jest.fn();

const props1 = {
  menteeUid: '',
  name: '',
  email: '',
  skills: '',
  description: '',
  request: false,
  acceptMentee: mockFunction,
  declineMentee: mockFunction,
};

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
  render(<MentorSuggested />, container);
  expect(container.textContent).toBe(
    'test test test', // should fail
  );
});

test('render the head of the card correctly', () => {
  render(<MentorSuggested {...props1} />, container);
  const head = document.getElementsByClassName('ant-card-head-title');
  expect(container.contains(head[0])).toBe(true);
});
```
