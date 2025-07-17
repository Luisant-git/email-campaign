import React from 'react'
import { Checkbox, Card, Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
// import './CSVUpload.scss'

const CSVUpload = ({ importSettings, setImportSettings }) => {
  const handleCheckboxChange = (key) => {
    setImportSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="csv-upload">
      <Card className="mb-4">
        <h4>Easily add or update Leads / Contacts</h4>
        <p className="text-muted">How would you like to get contacts into your list?</p>
      </Card>
      
      <Card title="Upload CSV File" className="mb-4">
        <Upload.Dragger name="file" multiple={false} accept=".csv" className="upload-area">
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">Click or drag CSV file to this area to upload</p>
          <p className="ant-upload-hint">Upload your CSV Files to import batch.</p>
        </Upload.Dragger>
      </Card>
      
      <Card title="Import Settings">
        <h5>General Preference</h5>
        <div className="import-settings">
          <Checkbox 
            checked={importSettings.globalBlockList}
            onChange={() => handleCheckboxChange('globalBlockList')}
          >
            Import Leads Even If They Are In The Global Block List
          </Checkbox>
          
          <Checkbox 
            checked={importSettings.unsubscribeList}
            onChange={() => handleCheckboxChange('unsubscribeList')}
          >
            Import Leads Even If They Are In The Unsubscribe List
          </Checkbox>
          
          <Checkbox 
            checked={importSettings.bouncedLeads}
            onChange={() => handleCheckboxChange('bouncedLeads')}
          >
            Import Leads Even If They Bounced Across Our Entire Userbase
          </Checkbox>
          
          <Checkbox 
            checked={importSettings.existingCampaign}
            onChange={() => handleCheckboxChange('existingCampaign')}
          >
            Ignore The Leads That Exist In Another Campaign
          </Checkbox>
        </div>
      </Card>
    </div>
  )
}

export default CSVUpload