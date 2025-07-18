import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiHome, FiMail, FiSettings, FiPieChart } from 'react-icons/fi';
import './Sidebar.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h3 style={{ color: '#7e8cfb', cursor: 'pointer' }} onClick={handleLogoClick}>LUISANT</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <div className="icon-wrapper">
                <FiHome />
              </div>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/campaigns" className={({ isActive }) => (isActive ? 'active' : '')}>
              <div className="icon-wrapper">
                <FiMail />
              </div>
              <span>Campaigns</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox" className={({ isActive }) => (isActive ? 'active' : '')}>
              <div className="icon-wrapper">
                <FiPieChart />
              </div>
              <span>Master Inbox</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
              <div className="icon-wrapper">
                <FiSettings />
              </div>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;