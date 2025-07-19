import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { BsArrowLeft, BsMegaphoneFill } from "react-icons/bs";
import { FiFileText, FiUpload } from "react-icons/fi";
import "./CreateCampaign.scss";

const Stepper = ({ currentStep = 0 }) => (
  <div className="stepper">
    <div
      className={`stepper-item ${currentStep >= 0 ? "active" : ""} ${
        currentStep > 0 ? "completed" : ""
      }`}
    >
      <div className="step-circle">{currentStep > 0 ? "✓" : ""}</div>
      <span>Import Leads</span>
    </div>
    <div
      className={`stepper-item ${currentStep >= 1 ? "active" : ""} ${
        currentStep > 1 ? "completed" : ""
      }`}
    >
      <div className="step-circle">{currentStep > 1 ? "✓" : ""}</div>
      <span>Sequences</span>
    </div>
    <div
      className={`stepper-item ${currentStep >= 2 ? "active" : ""} ${
        currentStep > 2 ? "completed" : ""
      }`}
    >
      <div className="step-circle">{currentStep > 2 ? "✓" : ""}</div>
      <span>Setup</span>
    </div>
    <div className={`stepper-item ${currentStep >= 3 ? "active" : ""}`}>
      <div className="step-circle">{currentStep > 3 ? "✓" : ""}</div>
      <span>Final Review</span>
    </div>
  </div>
);

const CreateCampaign = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleContinue = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

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
          <Stepper currentStep={currentStep} />
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
        <Button variant="secondary" onClick={handleContinue}>
          Continue
        </Button>
        <Button className="footer-action-btn">
          <BsMegaphoneFill />
        </Button>
      </footer>
    </div>
  );
};

export default CreateCampaign;
