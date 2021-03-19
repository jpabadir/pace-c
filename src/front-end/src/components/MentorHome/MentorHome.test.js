import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
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

test('renders without crashing', () => {
  render(<MentorHome />, container);
  expect(container.textContent).toBe(
    "Mentor TutorialSuggested MenteesAccepted MenteesWelcome To Mentor Match's Mentor Tutorial!This is the mentor tutorial page where you can learn how to see and interact with:Suggested MenteesAccepted MenteesSuggested Mentees:The suggested mentees tab is located on the top of the page. On the suggested mentee page you will be able to view all of your suggested mentees and details about each mentee. To accept a mentee click on the 'Accept ' button below the mentee's information. To decline a mentee click on the 'Decline' button below the mentee's information.Accepted Mentees:The accepted mentees tab is also located on the top of the page next to the suggested mentee tab. On the accepted mentees tab you can view the information of all mentees that have been accepted from the suggested mentees tab.",
  );
});

test('render the correct number of TabPane', () => {
  render(<MentorHome />, container);
  const tabs = document.getElementsByClassName('ant-tabs-tab');
  expect(tabs.length).toBe(3);
});

test('render the tab and tabpanes correctly', () => {
  render(<MentorHome />, container);
  // tab
  const tab = document.getElementsByClassName('ant-tabs-nav-list')[0];
  expect(tab.textContent).toBe(
    'Mentor TutorialSuggested MenteesAccepted Mentees',
  );
  // tabpane
  const tabpane = document.getElementsByClassName('ant-tabs-tab');
  expect(tabpane[0].textContent).toBe('Mentor Tutorial');
  expect(tabpane[1].textContent).toBe('Suggested Mentees');
  expect(tabpane[2].textContent).toBe('Accepted Mentees');
});

test('renders ant design icons correctly', () => {
  render(<MentorHome />, container);
  const svgs = document.getElementsByTagName('svg');
  expect(svgs[0].getAttribute('data-icon')).toBe('solution');
  expect(svgs[1].getAttribute('data-icon')).toBe('usergroup-add');
  expect(svgs[2].getAttribute('data-icon')).toBe('carry-out');
});
