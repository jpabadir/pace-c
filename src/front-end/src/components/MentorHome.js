import React, { Component } from 'react';
import { Tabs } from 'antd';
import {
  CarryOutOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
// import { Route } from 'react-router-dom';
import MentorSuggested from './MentorSuggested';
import MentorAccepted from './MentorAccepted';
import MentorTutorial from './MentorTutorial/MentorTutorial';

const { TabPane } = Tabs;

// eslint-disable-next-line react/prefer-stateless-function
class MentorHome extends Component {
  render() {
    return (
      <>
        <Tabs defaultActiveKey="1">
          <TabPane
            key="1"
            tab={
              <span>
                <SolutionOutlined />
                Mentor Tutorial
              </span>
            }
          >
            <MentorTutorial />
          </TabPane>
          <TabPane
            key="2"
            tab={
              <span>
                <UsergroupAddOutlined />
                Suggested Mentees
              </span>
            }
          >
            <MentorSuggested />
          </TabPane>
          <TabPane
            key="3"
            tab={
              <span>
                <CarryOutOutlined />
                Accepted Mentees
              </span>
            }
          >
            <MentorAccepted />
          </TabPane>
        </Tabs>
      </>
    );
  }
}
// exports:
export default MentorHome;
