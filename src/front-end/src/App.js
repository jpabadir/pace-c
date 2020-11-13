import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import MentorForm from './components/MentorForm';
import Login from './components/Login';
import MenteeForm from './components/MenteeForm';
import MentorHome from './components/MentorHome';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <NavLink to="/MentorHome">MentorHome</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/login">Login</NavLink>
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
            <Route exact path="/MentorHome" component={MentorHome} />
            <Route exact path="/login" component={Login} />
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
