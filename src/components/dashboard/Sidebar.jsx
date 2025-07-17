import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiMail, FiSettings, FiPieChart } from 'react-icons/fi'
// import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h3>Syfer250</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              <FiHome className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/campaigns" className={({ isActive }) => isActive ? 'active' : ''}>
              <FiMail className="icon" />
              <span>Campaigns</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox" className={({ isActive }) => isActive ? 'active' : ''}>
              <FiPieChart className="icon" />
              <span>Master Inbox</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
              <FiSettings className="icon" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar