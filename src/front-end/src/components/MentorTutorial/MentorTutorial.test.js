import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { mockWindowMatchMedia } from '../../helper-methods';
import MentorTutorial from './MentorTutorial';

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
  render(<MentorTutorial />, container);
  expect(container.textContent).toBe(
    "Welcome To Mentor Match's Mentor Tutorial!This is the mentor tutorial page where you can learn how to see and interact with:Suggested MenteesAccepted MenteesSuggested Mentees:The suggested mentees tab is located on the top of the page. On the suggested mentee page you will be able to view all of your suggested mentees and details about each mentee. To accept a mentee click on the 'Accept ' button below the mentee's information. To decline a mentee click on the 'Decline' button below the mentee's information.Accepted Mentees:The accepted mentees tab is also located on the top of the page next to the suggested mentee tab. On the accepted mentees tab you can view the information of all mentees that have been accepted from the suggested mentees tab.",
  );
});

test('renders the correct header text for h1[0]', () => {
  render(<MentorTutorial />, container);
  const h1 = document.getElementsByTagName('h1');
  expect(h1[0].textContent).toBe("Welcome To Mentor Match's Mentor Tutorial!");
});

test('renders the correct header text for h3[0]', () => {
  render(<MentorTutorial />, container);
  const h30 = document.getElementsByTagName('h3');
  expect(h30[0].textContent).toBe(
    'This is the mentor tutorial page where you can learn how to see and interact with:Suggested MenteesAccepted Mentees',
  );
});

test('renders the correct header text for h3[1]', () => {
  render(<MentorTutorial />, container);
  const h31 = document.getElementsByTagName('h3');
  expect(h31[1].textContent).toBe('Suggested Mentees:');
});

test('renders the correct paragraph text for p[0]', () => {
  render(<MentorTutorial />, container);
  const p0 = document.getElementsByTagName('p');
  expect(p0[0].textContent).toBe(
    "The suggested mentees tab is located on the top of the page. On the suggested mentee page you will be able to view all of your suggested mentees and details about each mentee. To accept a mentee click on the 'Accept ' button below the mentee's information. To decline a mentee click on the 'Decline' button below the mentee's information.",
  );
});

test('renders the correct header text for h3[1]', () => {
  render(<MentorTutorial />, container);
  const h31 = document.getElementsByTagName('h3');
  expect(h31[1].textContent).toBe('Suggested Mentees:');
});

test('renders the correct paragraph text for p[1]', () => {
  render(<MentorTutorial />, container);
  const p1 = document.getElementsByTagName('p');
  expect(p1[1].textContent).toBe('');
});

test('renders the correct paragraph text for p[2]', () => {
  render(<MentorTutorial />, container);
  const p2 = document.getElementsByTagName('p');
  expect(p2[2].textContent).toBe(
    'The accepted mentees tab is also located on the top of the page next to the suggested mentee tab. On the accepted mentees tab you can view the information of all mentees that have been accepted from the suggested mentees tab.',
  );
});
