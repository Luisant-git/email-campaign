import React, { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import './CampaignSettings.scss';

const CampaignSettings = () => {
  const [tab, setTab] = useState('General');
  const [stopOption, setStopOption] = useState('reply');
  const [plainText, setPlainText] = useState(false);
  const [trackOpens, setTrackOpens] = useState(false);
  const [trackClicks, setTrackClicks] = useState(false);

  return (
    <div className="campaign-settings-modal">
      <h2>Campaign Settings</h2>
      <div className="tabs">
        {['General', 'Email Accounts', 'Webhooks'].map(t => (
          <button
            key={t}
            className={tab === t ? 'active' : ''}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'General' && (
        <div className="tab-content">
          <label className="input-label">Campaign Name</label>
          <input className="input" type="text" placeholder="" />

          <div className="section">
            <div className="section-title">Stop sending messages when your lead</div>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  checked={stopOption === 'reply'}
                  onChange={() => setStopOption('reply')}
                />
                Replies to a message
              </label>
              <label>
                <input
                  type="radio"
                  checked={stopOption === 'click'}
                  onChange={() => setStopOption('click')}
                />
                Clicks on a link
              </label>
              <label>
                <input
                  type="radio"
                  checked={stopOption === 'open'}
                  onChange={() => setStopOption('open')}
                />
                Opens an email
              </label>
            </div>
          </div>

          <div className="section">
            <div className="section-title">
              Optimise Email Delivery <FiInfo className="icon-info" />
            </div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={plainText}
                onChange={() => setPlainText(!plainText)}
              />
              Boost your deliverability by sending emails in plain text, without HTML
            </label>
          </div>

          <div className="section">
            <div className="section-title">
              What shouldn't we track <FiInfo className="icon-info" />
            </div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={trackOpens}
                onChange={() => setTrackOpens(!trackOpens)}
              />
              DON'T track email opens
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={trackClicks}
                onChange={() => setTrackClicks(!trackClicks)}
              />
              DON'T track link clicks
            </label>
          </div>

          <div className="section">
            <div className="section-title">
              Assign a SmartServer
            </div>
            <div className="section-desc">
              Assigning a SmartServer to a campaign provides a higher level of control over your infrastructure, improves email deliverability and reduces management overhead.
            </div>
            <select className="input" disabled>
              <option>Select SmartServer</option>
            </select>
            <div className="select-info">
              Max 4 selections <span>0 / 4</span>
            </div>
          </div>
        </div>
      )}

      {/* You can add content for other tabs here */}
    </div>
  );
};

export default CampaignSettings;