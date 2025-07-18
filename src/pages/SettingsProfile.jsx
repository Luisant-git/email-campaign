import React from 'react';
import { Button, Avatar, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  UserOutlined,
  LockOutlined,
  ApiOutlined,
  GlobalOutlined,
  TagOutlined,
  AppstoreAddOutlined,
  MailOutlined,
  CreditCardOutlined,
  SafetyCertificateOutlined,
  ThunderboltFilled,
  RobotOutlined
} from '@ant-design/icons';

// Import BsMegaphoneFill from react-icons
import { BsMegaphoneFill } from 'react-icons/bs';
import Header from '../components/dashboard/Header'

import './SettingsProfile.scss';



const SettingsSidebar = () => {
  const navItems = [
    { icon: <UserOutlined />, text: 'Your profile', active: true },
    { icon: <LockOutlined />, text: 'Security' },
    { icon: <ApiOutlined />, text: 'Webhook' },
    { icon: <GlobalOutlined />, text: 'Global Block List' },
    { icon: <TagOutlined />, text: 'Tag Manager' },
    { icon: <AppstoreAddOutlined />, text: 'Lead Categories' },
    { icon: <MailOutlined />, text: 'Warning Notifications' },
  ];


  

  return (
    
    <aside className="settings-sidebar">
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.text}>
              <a href="#" className={item.active ? 'active' : ''}>
                {item.icon}
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-section-divider">
        <h6>Plans & Billing</h6>
        <nav>
          <ul>
            <li>
              <a href="#">
                <CreditCardOutlined />
                <span>Subscription</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
   
  );
};



const SettingsProfile = () => {
    const navigate = useNavigate();
  return (
    <div className="campaigns-page">
      <Header />
    <div className="settings-page">
      <header className="settings-header">
     <Button type="text" icon={<ArrowLeftOutlined />} onClick={() => navigate('/')} />

        <h1>Settings & Profile</h1>
      </header>
      <div className="settings-layout">
        <SettingsSidebar />
        <main className="settings-content">
          <div className="settings-card">
            <div className="card-header">
              <h3>Profile</h3>
              <p>Change your name, profile picture, role etc.</p>
              <Button className="edit-profile-btn">Edit profile</Button>
            </div>
            <div className="profile-details">
              <Avatar size={64} className="profile-avatar-large" />
              <div className="profile-text-details">
                <span className="name">Anesh</span>
                <span className="email">anesh@browsecontacts.com</span>
              </div>
            </div>
            <div className="profile-grid">
              <div>
                <label>Full name</label>
                <span>Anesh</span>
              </div>
              <div>
                <label>Email address</label>
                <span>anesh@browsecontacts.com</span>
              </div>
              <div>
                <label>Designation</label>
                <span>NA</span>
              </div>
            </div>
          </div>

          {/* <div className="settings-card">
            <div className="card-icon-header">
              <div className="icon-wrapper"><SafetyCertificateOutlined /></div>
              <h3>OAuth Configuration</h3>
            </div>
            <p>
              Connect your own Google or Microsoft OAuth credentials for better deliverability, 
              security, and compliance. <a href="#">Learn More</a>
            </p>
            <div className="warning-box">
              <ThunderboltFilled />
              <p>
                You're currently using Smartlead's default OAuth configuration. To integrate your 
                own OAuth setup for better deliverability and customization, please contact our 
                Customer Success team.
              </p>
              <Button className="contact-support-btn">Contact support</Button>
            </div>
          </div> */}

          {/* <div className="settings-card">
            <div className="card-icon-header">
              <div className="icon-wrapper gpt-icon"><RobotOutlined /></div>
              <h3>Connect your GPT4</h3>
            </div>
            <p>
              Unlock the potential of GPT-4 by seamlessly integrating it using your API key. 
              <a href="#">How to copy API Key?</a>
            </p>
            <label className="input-label">New API Key</label>
            <Input placeholder="Enter your API Key" />
          </div> */}
        </main>
      </div>

      {/* Floating button with BsMegaphoneFill icon */}
      <Button className="settings-fab" icon={<BsMegaphoneFill size={20} />} />
    </div>
     </div>
  );
};

export default SettingsProfile;
