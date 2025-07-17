import React, { useState } from 'react'
import { Tabs } from 'antd'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header'
import NewCampaign from '../components/campaigns/NewCampaign'
import CampaignList from '../components/campaigns/CampaignList'
// import './Campaigns.scss'

const { TabPane } = Tabs

const Campaigns = () => {
  const [activeTab, setActiveTab] = useState('new')

  return (
    <div className="campaigns-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <Tabs activeKey={activeTab} onChange={setActiveTab} className="campaign-tabs">
            <TabPane tab="New Campaign" key="new">
              <NewCampaign />
            </TabPane>
            <TabPane tab="Campaign List" key="list">
              <CampaignList />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Campaigns