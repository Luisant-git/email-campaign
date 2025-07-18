import React, { useState } from 'react';
import './EmailSequences.scss';

const EmailSequences = () => {
  const [emailContent, setEmailContent] = useState(
`Hi {{first_name}}

How are you

{{company_name}}

{{location}}`
  );

  return (
    <div className="email-sequences-ui">

      {/* Stage 1 Email */}
      <div className="stage-section">
        {/* <div className="stage-title">Stage 1: Email</div> */}
        <div className="email-editor">
          <div className="subject-row">
            <span className="subject-label">Subject:</span>
            <input
              className="subject-input"
              value={`Hi {{first_name}}`}
              readOnly
            />
            <span className="variables-link">{`{ } Variables`}</span>
          </div>
          {/* Toolbar */}
          <div className="toolbar">
            {/* Replace with your icons */}
            <button title="Edit"><i className="icon-pencil" /></button>
            <button title="Variables"><i className="icon-variable" /></button>
            <button title="Bold"><i className="icon-bold" /></button>
            <button title="Italic"><i className="icon-italic" /></button>
            <button title="Image"><i className="icon-image" /></button>
            <button title="Link"><i className="icon-link" /></button>
            <button title="List"><i className="icon-list" /></button>
            <button title="Align"><i className="icon-align" /></button>
            <button title="Undo"><i className="icon-undo" /></button>
            <button title="More"><i className="icon-more" /></button>
          </div>
          {/* Email Content */}
          <textarea
            className="email-content"
            value={emailContent}
            onChange={e => setEmailContent(e.target.value)}
            rows={8}
          />
          {/* Compose with AI */}
          <button className="btn-compose-ai">
            Compose with AI
          </button>
          {/* Signature Note */}
          <div className="signature-note">
            Type <span className="mono">%signature%</span> to insert your email account's signature where you want it added or it will be added at the end of the email by default
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSequences;