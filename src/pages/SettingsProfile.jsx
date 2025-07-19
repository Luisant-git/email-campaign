import React, { useState } from 'react';
import { Button, Avatar, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftOutlined, UserOutlined, LockOutlined, ApiOutlined, GlobalOutlined, TagOutlined, AppstoreAddOutlined, MailOutlined, CreditCardOutlined
} from '@ant-design/icons';
import { BsMegaphoneFill } from 'react-icons/bs';
import Header from '../components/dashboard/Header';
import SecurityContent from './SecurityContent';
import GlobalBlockList from './GlobalBlockList';
import UpgradePlan from './UpgradePlan'; // <-- IMPORT THE NEW COMPONENT
import './SettingsProfile.scss';


const ProfileContent = () => (
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
      <div><label>Full name</label><span>Anesh</span></div>
      <div><label>Email address</label><span>anesh@browsecontacts.com</span></div>
      <div><label>Designation</label><span>NA</span></div>
    </div>
  </div>
);

// --- Sidebar Component (Now controlled by parent) ---
const SettingsSidebar = ({ activeTab, onSelectTab }) => {
  const mainNavItems = [
    { key: 'profile', icon: <UserOutlined />, text: 'Your profile' },
    { key: 'security', icon: <LockOutlined />, text: 'Security' },
    { key: 'webhook', icon: <ApiOutlined />, text: 'Webhook' },
    { key: 'global-block-list', icon: <GlobalOutlined />, text: 'Global Block List' },
    { key: 'tag-manager', icon: <TagOutlined />, text: 'Tag Manager' },
    { key: 'lead-categories', icon: <AppstoreAddOutlined />, text: 'Lead Categories' },
    { key: 'warning-notifications', icon: <MailOutlined />, text: 'Warning Notifications' },
  ];

  const billingNavItems = [
    { key: 'subscription', icon: <CreditCardOutlined />, text: 'Subscription' },
  ];

  return (
    <aside className="settings-sidebar">
      <nav>
        <ul>
          {mainNavItems.map(item => (
            <li key={item.key}>
              <a href="#" className={activeTab === item.key ? 'active' : ''} onClick={() => onSelectTab(item.key)}>
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
            {billingNavItems.map(item => (
              <li key={item.key}>
                <a href="#" className={activeTab === item.key ? 'active' : ''} onClick={() => onSelectTab(item.key)}>
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

// --- Main Settings Page Component ---
const SettingsProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="campaigns-page">
      <Header />
      <div className="settings-page">
        <header className="settings-header">
          <Button type="text" icon={<ArrowLeftOutlined />} onClick={() => navigate('/')} />
          <h1>Settings & Profile</h1>
        </header>
        <div className="settings-layout">
          <SettingsSidebar activeTab={activeTab} onSelectTab={setActiveTab} />
          <main className="settings-content">
            {activeTab === 'profile' && <ProfileContent />}
            {activeTab === 'security' && <SecurityContent />}
            {activeTab === 'global-block-list' && <GlobalBlockList />}
            {activeTab === 'subscription' && <UpgradePlan />} {/* <-- ADDED CONDITIONAL RENDER */}
          </main>
        </div>
        <Button className="settings-fab" icon={<BsMegaphoneFill size={20} />} />
      </div>
    </div>
  );
};

export default SettingsProfile;