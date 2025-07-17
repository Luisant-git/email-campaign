import React from 'react'
import DashboardHome from '../components/dashboard/DashboardHome'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header'
// import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <DashboardHome />
        </div>
      </div>
    </div>
  )
}

export default Dashboard