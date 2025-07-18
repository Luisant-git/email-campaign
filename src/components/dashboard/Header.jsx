import React from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORT LINK
import { Avatar, Dropdown, Button, Progress } from 'antd';
import {
  MenuFoldOutlined,
  GiftOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { BsMegaphoneFill } from 'react-icons/bs';
import './Header.scss';

// Custom component for the profile dropdown menu
const ProfileMenu = () => (
  <div className="profile-menu-card">
    <div className="profile-info">
      <Avatar size={48} className="profile-menu-avatar" />
      <div className="profile-text">
        <span className="profile-name">Anesh</span>
        <span className="profile-email">anesh@browsecontacts.com</span>
      </div>
    </div>
    <div className="credit-usage">
      <h6>Your credit usage detail</h6>
      <div className="credit-item">
        <span>Active Leads: 11/10,000</span>
        <Progress percent={0.11} showInfo={false} strokeColor="#6c4eea" />
      </div>
      <div className="credit-item">
        <span>Email Credits: 0/40,000</span>
        <Progress percent={0} showInfo={false} strokeColor="#6c4eea" />
      </div>
    </div>
    <div className="profile-actions">

      <Link to="/settings" className="action-item">
        <div className="action-icon">
          <SettingOutlined />
        </div>
        <span>Settings</span>
      </Link>
    <Link to="/login" className="action-item">
        <div className="action-icon">
          < LogoutOutlined />
        </div>
        <span>Logout</span>
      </Link>
    </div>
  </div>
);

// The Header component itself remains mostly the same
const Header = ({ onToggleSidebar }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <Button
          type="text"
          icon={<MenuFoldOutlined />}
          className="sidebar-toggle"
          onClick={onToggleSidebar}
        />
        <div className="logo-section">
          <div className="logo-icon">
            <BsMegaphoneFill />
          </div>
          <span className="logo-text">Syfer250</span>
        </div>
      </div>
      <div className="header-right">
        <Button type="text" icon={<GiftOutlined />} className="header-action-item" />
        <Button type="text" icon={<QuestionCircleOutlined />} className="header-action-item">
          Help
        </Button>
        <Dropdown 
          overlay={<ProfileMenu />} 
          placement="bottomRight" 
          arrow 
          trigger={['click']}
          overlayClassName="profile-dropdown-container"
        >
          <div className="profile-dropdown">
            <Avatar className="profile-avatar" />
            <DownOutlined className="profile-arrow" />
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;