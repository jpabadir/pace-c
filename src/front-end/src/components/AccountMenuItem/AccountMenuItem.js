/* eslint-disable */
import SubMenu from 'antd/lib/menu/SubMenu';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import fire from '../../firebase-init';
// import styles from  './account-menu-styles';

function AccountMenuItem() {
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUserEmail(user.email);
    } else {
      setCurrentUserEmail(null);
    }
  });

  const onLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        window.location.href = '/my-account';
      });
  };

  return (
    <NavLink to="/my-account/mentor-tutorial">
      {currentUserEmail ? (
        <Menu mode="horizontal" className="my-menu">
          <SubMenu
            mode="horizontal"
            key="SubMenu"
            title={currentUserEmail.substring(0, currentUserEmail.indexOf('@'))}
            icon={null}
          >
            <Menu.Item key="setting:1" onClick={onLogout}>
              Logout
            </Menu.Item>
          </SubMenu>
        </Menu>
      ) : (
        'Login'
      )}
    </NavLink>
  );
}
export default AccountMenuItem;
