import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import MentorForm from './components/MentorForm';
import Auth from './components/Auth';
import MenteeForm from './components/MenteeForm';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="2">
              <NavLink to="/Auth">Login</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/MentorForm">MentorForm</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/MenteeForm">MenteeForm</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/Auth" component={Auth} />
            <Route exact path="/MentorForm" component={MentorForm} />
            <Route exact path="/MenteeForm" component={MenteeForm} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          MentorMatch ©2020 Created by UBCO students
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
