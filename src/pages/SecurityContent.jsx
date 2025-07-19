import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import './SecurityContent.scss';

const SecurityContent = () => {
  return (
    <div className="settings-card security-content">
      {/* Section 1: Change Password */}
      <div className="security-section">
        <h3>Security</h3>
        <p>Change your authentication password for better security</p>
        <div className="floating-label-input">
          <Input.Password id="currentPassword" placeholder=" " size="large" />
          <label htmlFor="currentPassword">Current password</label>
        </div>
        <div className="floating-label-input">
          <Input.Password id="newPassword" placeholder=" " size="large" />
          <label htmlFor="newPassword">New Password</label>
        </div>
        <Button type="primary" className="update-btn">Update</Button>
      </div>

      <hr className="section-divider" />

      {/* Section 2: Two-Factor Authentication */}
      <div className="security-section">
        <h5>Two-Factor Authentication (2FA)</h5>
        <p>Enable two-factor authentication for enhanced security. This will apply to you and your team members, but not to clients.</p>
        <Checkbox>Enable 2FA</Checkbox>
        <Button type="primary" className="update-btn">Update</Button>
      </div>
      
      <hr className="section-divider" />

      {/* Section 3: Force Logout */}
      <div className="security-section">
        <h5>Force Logout All Users</h5>
        <p>This will force logout all active sessions across devices. Users will need to login again.</p>
        <Button danger className="logout-btn">Force Logout</Button>
      </div>
    </div>
  );
};

export default SecurityContent;