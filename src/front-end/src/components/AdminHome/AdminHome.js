import React, { Component } from 'react';
import { Tabs } from 'antd';
import {
  CarryOutOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import ManageMentors from '../ManageMentors';
import MenteeFormAndEmbedder from '../MenteeFormAndEmbedder/MenteeFormAndEmbedder';
import MentorForm from '../MentorForm/MentorForm';

const { TabPane } = Tabs;

// eslint-disable-next-line react/prefer-stateless-function
class AdminHome extends Component {
  render() {
    return (
      <>
        <Tabs defaultActiveKey="1">
          <TabPane
            key="1"
            tab={
              <span>
                <SolutionOutlined />
                Manage Mentors
              </span>
            }
          >
            <ManageMentors />
          </TabPane>
          <TabPane
            key="2"
            tab={
              <span>
                <UsergroupAddOutlined />
                Manage Mentees
              </span>
            }
          >
            <MenteeFormAndEmbedder />
          </TabPane>
          <TabPane
            key="3"
            tab={
              <span>
                <CarryOutOutlined />
                View Mentor Form
              </span>
            }
          >
            <MentorForm />
          </TabPane>
        </Tabs>
      </>
    );
  }
}
// exports:
export default AdminHome;