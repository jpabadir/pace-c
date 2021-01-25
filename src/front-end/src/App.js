import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import MentorForm from './components/MentorForm/MentorForm';
import Auth from './components/Auth/Auth';
import MenteeForm from './components/MenteeForm/MenteeForm';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home/Home';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="2">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/mentor-form">
                MentorForm (this link left for development)
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/mentee-form">
                MenteeForm (this link left for development)
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5" style={{ float: 'right' }}>
              <NavLink to="/login">Log in</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            padding: '0 50px',
            minWidth: '575px',
            minHeight: '864px',
            overflow: 'auto',
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Auth} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/mentor-form" component={MentorForm} />
            <Route exact path="/mentee-form" component={MenteeForm} />
          </Switch>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            overflow: 'flex',
            backgroundColor: '#001529',
            color: '#A6ADB4',
          }}
        >
          MentorMatch ©2020 Created by UBCO Students - Pace C
        </Footer>
      </Layout>
    </div>
  );
}
export default App;
