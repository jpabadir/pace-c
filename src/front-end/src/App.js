import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LandingPage from './components/LandingPage/LandingPage';
import AdminSignup from './components/AdminSignup/AdminSignup';
import AccountMenuItem from './components/AccountMenuItem/AccountMenuItem';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="2">
              <NavLink to="/">MentorMatch</NavLink>
            </Menu.Item>
            <Menu.Item key="5" style={{ float: 'right' }}>
              <AccountMenuItem />
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
            <Route exact path="/" component={LandingPage} />
            <Route path="/my-account" component={Auth} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/signup" component={AdminSignup} />
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
          MentorMatch ©2021 Created by UBCO Students - Pace C
        </Footer>
      </Layout>
    </div>
  );
}
export default App;
