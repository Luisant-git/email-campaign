import React, { useState } from 'react';

import { Button, Form } from 'react-bootstrap'; // For header input
import { Button as AntButton } from 'antd'; // For footer buttons, aliased to avoid name conflict
import { BsArrowLeft, BsMegaphoneFill } from 'react-icons/bs';
import CSVUpload from './CSVUpload';
import FieldMapper from './FieldMapper';
import EmailSequences from './EmailSequences';
import ScheduleSettings from './ScheduleSettings';
import CampaignSettings from './CampaignSettings';
import './NewCampaign.scss';
import { useNavigate } from 'react-router-dom';


// Dynamic Stepper Component
// It now takes the steps array and the current step index as props
const Stepper = ({ steps, current }) => (
  <div className="stepper">
    {steps.map((item, index) => (
      <div key={item.title} className={`stepper-item ${current === index ? 'active' : ''} ${index < current ? 'completed' : ''}`}>
        <div className="step-circle">{index < current ? '✓' : ''}</div>
        <span>{item.title}</span>
      </div>
    ))}
  </div>
);


const NewCampaign = ({ onNext }) => {
  const navigate = useNavigate();
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);
  const [current, setCurrent] = useState(0);
  const [importSettings, setImportSettings] = useState({
    globalBlockList: false,
    unsubscribeList: false,
    bouncedLeads: false,
    existingCampaign: false
  });

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
  ];

  

  return (
    <div className="new-campaign-page">
      {/* HEADER from the target design */}
      <header className="new-campaign-header">
        <div className="header-left">
          <Button variant="link" className="back-btn" accordion onClick={() => navigate(-1)}>
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
          {/* Use the new dynamic Stepper */}
          <Stepper steps={steps} current={current} />
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="new-campaign-content">
        {/* This renders the content of the current step */}
        {steps[current].content}
      </main>

      {/* FOOTER from the target design, now containing your action buttons */}
      <footer className="new-campaign-footer">
        <div className="footer-left">
          {/* Your 'Previous' button */}
          {current > 0 && (
            <AntButton onClick={prev}>
              Previous
            </AntButton>
          )}
        </div>
        <div className="footer-right">
          {/* Your 'Next' button */}
          {current < steps.length - 1 && (
             <AntButton type="primary" onClick={next}>
              Next
            </AntButton>
          )}
          {/* Your 'Create Campaign' button */}
          {current === steps.length - 1 && (
            <AntButton type="primary" onClick={() => alert('Campaign created!')}>
              Create Campaign
            </AntButton>
          )}
        </div>
      </footer>
    </div>
  );
};

export default NewCampaign;