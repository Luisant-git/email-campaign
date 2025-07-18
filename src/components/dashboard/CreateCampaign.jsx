import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsArrowLeft, BsMegaphoneFill } from 'react-icons/bs';
import { FiFileText, FiUpload } from 'react-icons/fi';
import './CreateCampaign.scss';

const Stepper = () => (
  <div className="stepper">
    <div className="stepper-item active">
      <div className="step-circle"></div>
      <span>Import Leads</span>
    </div>
    <div className="stepper-item">
      <div className="step-circle"></div>
      <span>Sequences</span>
    </div>
    <div className="stepper-item">
      <div className="step-circle"></div>
      <span>Setup</span>
    </div>
    <div className="stepper-item">
      <div className="step-circle"></div>
      <span>Final Review</span>
    </div>
  </div>
);

const CreateCampaign = () => {
  return (
    <div className="create-campaign-page">
      <header className="create-campaign-header">
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
      </header>

      <main className="create-campaign-content">
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
          <Button className="upload-button">
            Upload your CSV files to import leads.
          </Button>
        </div>
      </main>

      <footer className="create-campaign-footer">
        <Button variant="secondary" disabled>Continue</Button>
        <Button className="footer-action-btn">
          <BsMegaphoneFill />
        </Button>
      </footer>
    </div>
  );
};

export default CreateCampaign;