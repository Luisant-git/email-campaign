import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsCheckCircleFill, BsArrowRightCircleFill, BsMegaphoneFill, BsEnvelope } from "react-icons/bs";
import { SiGoogle } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import { HiOutlineUpload } from "react-icons/hi";
import "./EmailConnectionModal.scss";

const EmailConnectionModal = ({ show, onHide }) => {
  const [selectedConfig, setSelectedConfig] = useState("smartlead");
  const [selectedProvider, setSelectedProvider] = useState(null);

  const providers = [
    { id: "google", name: "Google OAuth", icon: <SiGoogle color="#EA4335" size={40} /> },
    { id: "outlook", name: "Outlook", icon: <BsEnvelope color="#0078D4" size={40} /> },
    { id: "smtp", name: "SMTP", icon: <FiSend color="#6c4eea" size={40} /> },
  ];

  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="email-connection-modal">
      <Modal.Header closeButton>
        <Modal.Title>Add Email Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="header-section text-center">
          <h5>Connect Your Email Account</h5>
          <p className="description">
            Connect your email in 3 steps: Choose configuration, pick provider, and finish setup.
          </p>
          <div className="steps-indicator">
            <div className="step active">
              <span className="circle">1</span> Choose Configuration type
              <BsArrowRightCircleFill className="arrow-icon" />
            </div>
            <div className="step">
              <span className="circle">2</span> Select Provider & Connect
            </div>
          </div>
        </div>

        <div className="configuration-card">
          <label className="config-option">
            <input
              type="radio"
              name="config"
              checked={selectedConfig === "smartlead"}
              onChange={() => setSelectedConfig("smartlead")}
            />
            <div className="config-content">
              <div className="config-header">
                <div className="config-icon">
                  <BsMegaphoneFill size={20} color="#6c4eea" />
                </div>
                <strong>Smartlead's Infrastructure</strong>
              </div>
              <p className="subtitle">Connect using Smartlead's default credentials</p>
              <div className="features-grid">
                <div className="feature">
                  <BsCheckCircleFill color="#28a745" />
                  <span>Quick Setup</span>
                </div>
                <div className="feature">
                  <BsCheckCircleFill color="#28a745" />
                  <span>Managed infrastructure</span>
                </div>
                <div className="feature">
                  <BsCheckCircleFill color="#28a745" />
                  <span>Default Permissions</span>
                </div>
                <div className="feature">
                  <BsCheckCircleFill color="#28a745" />
                  <span>Pre-configured settings</span>
                </div>
              </div>

              <div className="provider-selection">
                <p className="provider-label">Choose your provider:</p>
                <div className="provider-grid">
                  {providers.map((provider) => (
                    <div
                      key={provider.id}
                      className={`provider-card ${selectedProvider === provider.id ? "selected" : ""}`}
                      onClick={() => setSelectedProvider(provider.id)}
                    >
                      <div className="provider-icon">{provider.icon}</div>
                      <span>{provider.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className="bulk-upload-section">
          <h6>Bulk Email Addition</h6>
          <div className="bulk-upload-box">
            <HiOutlineUpload size={24} className="upload-icon" />
            <div className="upload-text">
              <p><strong>Drag & Drop CSV file here</strong></p>
              <p className="small-text">
                Upload from your system, <span className="choose-file">choose file</span>
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" disabled={!selectedProvider}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmailConnectionModal;