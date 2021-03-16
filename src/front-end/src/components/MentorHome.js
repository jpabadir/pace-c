import React, { Component } from 'react';
import { Tabs } from 'antd';
import {
  CarryOutOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import MentorSuggested from './MentorSuggested';
import MentorAccepted from './MentorAccepted';
import MentorTutorial from './MentorTutorial/MentorTutorial';

// These are the tabs displayed to a logged in user of type 'mentor'
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
export default MentorHome;
