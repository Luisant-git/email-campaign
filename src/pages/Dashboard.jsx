import React from 'react'
import DashboardHome from '../components/dashboard/DashboardHome'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Header /> {/* Full-width top header */}
      <div className="dashboard-body"> {/* Contains sidebar + main content */}
        <Sidebar />
        <div className="main-content">
          <DashboardHome />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
