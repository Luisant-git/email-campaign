import React, { useState } from 'react'
import { Steps, Button, Card } from 'antd'
import CSVUpload from './CSVUpload'
// import FieldMapper from './FieldMapper'
// import EmailSequences from './EmailSequences'
// import ScheduleSettings from './ScheduleSettings'
// import CampaignSettings from './CampaignSettings'
// import './NewCampaign.scss'

const { Step } = Steps

const NewCampaign = () => {
  const [current, setCurrent] = useState(0)
  const [importSettings, setImportSettings] = useState({
    globalBlockList: false,
    unsubscribeList: false,
    bouncedLeads: false,
    existingCampaign: false
  })

  const steps = [
    {
      title: 'Import Leads',
      content: <CSVUpload importSettings={importSettings} setImportSettings={setImportSettings} />
    },
    {
      title: 'Field Mapping',
      content: <FieldMapper />
    },
    {
      title: 'Email Sequences',
      content: <EmailSequences />
    },
    {
      title: 'Schedule',
      content: <ScheduleSettings />
    },
    {
      title: 'Settings',
      content: <CampaignSettings />
    }
  ]

  const next = () => setCurrent(current + 1)
  const prev = () => setCurrent(current - 1)

  return (
    <div className="new-campaign">
      <h2 className="mb-4">New Campaign</h2>
      
      <Steps current={current} className="mb-4">
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      
      <Card className="steps-content">
        {steps[current].content}
      </Card>
      
      <div className="steps-action mt-4">
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => alert('Campaign created!')}>
            Create Campaign
          </Button>
        )}
      </div>
    </div>
  )
}

export default NewCampaign