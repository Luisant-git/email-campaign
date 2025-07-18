import React, { useState, useEffect } from "react";
import { FiFile, FiSettings, FiX } from "react-icons/fi";
import { FaRegFileExcel } from "react-icons/fa";
import { TbCsv } from "react-icons/tb";
import "./FieldMapper.scss";

const FieldMapper = ({
  csvHeaders = ["Email", "First Name", "Last Name", "Mobile", "City"],
  campaignFields = ["Email", "First Name", "Last Name", "Mobile", "City"],
}) => {
  const [mappings, setMappings] = useState({});
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    const initialMappings = {};
    campaignFields.forEach((field) => {
      initialMappings[field] = "";
    });
    setMappings(initialMappings);
  }, []);

  const handleMappingChange = (campaignField, csvHeader) => {
    setMappings((prev) => ({
      ...prev,
      [campaignField]: csvHeader,
    }));
  };

  const handleRemoveMapping = (campaignField) => {
    setMappings((prev) => ({
      ...prev,
      [campaignField]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="field-mapper-ui">
      <div className="stepper">
        <div className="step active">
          <span>1</span>
        </div>
        <div className="step-line" />
        <div className="step active">
          <span>2</span>
        </div>
        <div className="step-line" />
        <div className="step active">
          <span>3</span>
        </div>
      </div>

      <div className="main-content">
        {/* Step 1: CSV File */}
        <div className="section">
          <div className="section-header">
            <span className="section-title">CSV File</span>
            <div className="section-actions">
              <a href="#" className="section-link">Change Import Type</a>
              <a href="#" className="section-link">Settings</a>
            </div>
          </div>
          <div className="csv-card">
            <div className="csv-icon"><FaRegFileExcel /></div>
            <div>
              <div className="csv-filename">upload.csv</div>
              <div className="csv-size">25 B</div>
            </div>
            <div className="csv-actions">
              <a href="#" className="csv-action">Preview</a>
              <a href="#" className="csv-action">Reupload</a>
              <a href="#" className="csv-action">Delete</a>
            </div>
          </div>
        </div>

        {/* Step 2: Client ID */}
        <div className="section">
          <div className="section-title">Client ID (Optional)</div>
          <div className="section-desc">
            When you include a clientID, the leads will be checked against the global block list for that specific client ID before being added.
          </div>
          <div className="client-id-input-wrap">
            <input
              type="text"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder=""
              className="client-id-input"
            />
            <span className="dropdown-arrow">&#9662;</span>
          </div>
        </div>

        {/* Step 3: Map Fields */}
        <form onSubmit={handleSubmit} className="section">
          <div className="section-title">Map Fields</div>
          <div className="section-desc">
            Map CSV columns to the variables you want to add it on the campaign
          </div>
          <div className="mapping-card">
            {campaignFields.map((campaignField, idx) => (
              <div className="mapping-row" key={idx}>
                <div className="mapping-icon"><FaRegFileExcel /></div>
                <div className="mapping-label">{campaignField}</div>
                <div className="mapping-icon mapping-arrow"><TbCsv /></div>
                <select
                  className="mapping-select"
                  value={mappings[campaignField] || ""}
                  onChange={e => handleMappingChange(campaignField, e.target.value)}
                >
                  <option value="">Select</option>
                  {csvHeaders.map((header, i) => (
                    <option key={i} value={header}>{header}</option>
                  ))}
                </select>
                {mappings[campaignField] && (
                  <button
                    type="button"
                    className="mapping-remove"
                    onClick={() => handleRemoveMapping(campaignField)}
                  >
                    <FiX />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button type="submit" className="submit-btn">Save & Next</button>
        </form>
      </div>
    </div>
  );
};

export default FieldMapper;