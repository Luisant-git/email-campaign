import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Checkbox, Card, Upload } from 'antd';
import { BsArrowLeft, BsMegaphoneFill } from 'react-icons/bs';
import { FiFileText, FiUpload } from 'react-icons/fi';
import './CSVUpload.scss';

// Stepper component for the header, same as the target design
// const Stepper = () => (
//   <div className="stepper">
//     <div className="stepper-item active">
//       <div className="step-circle"></div>
//       <span>Import Leads</span>
//     </div>
//     <div className="stepper-item">
//       <div className="step-circle"></div>
//       <span>Sequences</span>
//     </div>
//     <div className="stepper-item">
//       <div className="step-circle"></div>
//       <span>Setup</span>
//     </div>
//     <div className="stepper-item">
//       <div className="step-circle"></div>
//       <span>Final Review</span>
//     </div>
//   </div>
// );

// Your original functionality wrapped in the new design
const CSVUpload = ({ importSettings, setImportSettings }) => {
  
  const handleCheckboxChange = (key) => {
    setImportSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="csv-upload-page">
      {/* HEADER: Taken directly from the target design */}
      {/* <header className="csv-upload-header">
        <div className="header-left">
          <Button variant="link" className="back-btn">
            <BsArrowLeft />
          </Button>
          <div className="campaign-name-input">
            <div className="icon-wrapper">
              <BsMegaphoneFill />
            </div>
            <Form.Control type="text" placeholder="Untitled Campaign" />
          </div>
        </div>
        <div className="header-right">
          <Stepper />
        </div>
      </header> */}

      {/* MAIN CONTENT: Contains your original content */}
      <main className="csv-upload-content">
        <div className="content-wrapper">
            {/* This is your original content, styled to fit the new layout */}
            <div className="content-header">
                <h2>Easily add or update Leads / Contacts</h2>
                <p>How would you like to get contacts into your list?</p>
            </div>
            
            <div className="upload-card">
                <h4>Upload CSV File</h4>
                <div className="upload-icon-container">
                    <FiFileText className="file-icon" />
                    <div className="upload-arrow-circle">
                        <FiUpload />
                    </div>
                </div>
                <p className="upload-instructions">
                    Select a CSV file to import
                    <span>or</span>
                    Drag & Drop CSV file here
                </p>
                <div className="import-section">
  <Upload.Dragger
    name="file"
    multiple={false}
    accept=".csv"
    className="upload-button"
  >
    Upload your CSV files to import leads.
  </Upload.Dragger>

  {/* Other components below */}
</div>

            </div>

            {/* <Card title="Import Settings" className="import-settings-card">
                <h5>General Preference</h5>
                <div className="import-settings-list">
                    <Checkbox 
                        checked={importSettings?.globalBlockList}
                        onChange={() => handleCheckboxChange('globalBlockList')}
                    >
                        Import Leads Even If They Are In The Global Block List
                    </Checkbox>
                    
                    <Checkbox 
                        checked={importSettings?.unsubscribeList}
                        onChange={() => handleCheckboxChange('unsubscribeList')}
                    >
                        Import Leads Even If They Are In The Unsubscribe List
                    </Checkbox>
                    
                    <Checkbox 
                        checked={importSettings?.bouncedLeads}
                        onChange={() => handleCheckboxChange('bouncedLeads')}
                    >
                        Import Leads Even If They Bounced Across Our Entire Userbase
                    </Checkbox>
                    
                    <Checkbox 
                        checked={importSettings?.existingCampaign}
                        onChange={() => handleCheckboxChange('existingCampaign')}
                    >
                        Ignore The Leads That Exist In Another Campaign
                    </Checkbox>
                </div>
            </Card> */}
        </div>
      </main>

      {/* FOOTER: Taken directly from the target design */}
      {/* <footer className="csv-upload-footer">
        <Button variant="secondary" disabled>Continue</Button>
        <Button className="footer-action-btn">
          <BsMegaphoneFill />
        </Button>
      </footer> */}
    </div>
  );
};

export default CSVUpload;