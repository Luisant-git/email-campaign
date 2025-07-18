import React from 'react';
import { Tabs, Tab, Button, Form, InputGroup, Dropdown } from 'react-bootstrap';
import { FiFilter, FiEdit2, FiMoreHorizontal, FiExternalLink } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsEnvelopeOpen, BsEnvelopeExclamation, BsEnvelopeX } from 'react-icons/bs';
import { RiMailSendLine } from 'react-icons/ri';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardHome.scss';

import DashboardFilters from './DashboradFilters';

const campaigns = [
  {
    name: 'Untitled Campaign',
    created: '17 Jul, 12:31 pm',
    sequences: 1,
    sent: 0,
    opened: 0,
    replied: 0,
    positive: 0,
    bounced: 0,
    senderBounced: 0,
  },
  {
    name: 'Untitled Campaign',
    created: '15 Jul, 02:01 am',
    sequences: 2,
    sent: 0,
    opened: 0,
    replied: 0,
    positive: 0,
    bounced: 0,
    senderBounced: 0,
  },
  {
    name: 'Untitled Campaign',
    created: '11 Jul, 10:24 pm',
    sequences: 1,
    sent: 0,
    opened: 0,
    replied: 0,
    positive: 0,
    bounced: 0,
    senderBounced: 0,
  },
];

// Custom Dropdown Toggle to trigger the filter popover
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="custom-dropdown-toggle"
  >
    {children}
  </div>
));

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      {/* Top Bar */}
      <div className="dashboard-topbar d-flex align-items-center mb-3">
        <Tabs defaultActiveKey="all" className="dashboard-tabs">
          <Tab eventKey="all" title={<span>All Campaigns <span className="tab-count">(3)</span></span>} />
          <Tab eventKey="folders" title={<span>Folders <span className="tab-count">(1)</span></span>} />
        </Tabs>
        <div className="dashboard-actions d-flex align-items-center ms-auto">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <InputGroup className="me-2 filter-group">
                <Form.Select className="filter-select">
                  <option>Email Sent, Opened...</option>
                </Form.Select>
                <Button variant="outline-light" className="filter-btn">
                  <FiFilter />
                </Button>
              </InputGroup>
            </Dropdown.Toggle>
            <Dropdown.Menu className="custom-dropdown-menu">
              <DashboardFilters />
            </Dropdown.Menu>
          </Dropdown>
         <Form.Control
  type="text"
  placeholder="Search Campaigns"
  className="search-input me-2"
  style={{ width: '200px' }}
/>

        </div>
         <Link to="/campaigns" className="create-btn">
          + Create Campaign
        </Link>

      </div>

      {/* Campaign Table */}
      <div className="campaign-table-container">
        <div className="campaign-table">
          <div className="campaign-table-header d-flex">
            <div className="campaign-col campaign-details">Campaign Details</div>
            <div className="campaign-col report-col">Report</div>
          </div>
          {campaigns.map((c, idx) => (
            <div className="campaign-table-row d-flex align-items-center" key={idx}>
              <div className="campaign-col campaign-details d-flex align-items-center">
                <div className="campaign-avatar">
                  <MdOutlineMailOutline size={28} />
                </div>
                <div className="campaign-info">
                  <div className="campaign-title">
                    <span className="campaign-link">{c.name}</span>
                    <a href="#" className="ms-1" target="_blank" rel="noopener noreferrer">
                      <FiExternalLink size={14} />
                    </a>
                  </div>
                  <div className="campaign-meta">
                    Drafted | Created At: {c.created} | {c.sequences} sequence{c.sequences > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
              <div className="campaign-col report-col d-flex align-items-center">
                <div className="report-item">
                  <span className="report-value">{c.sent}</span>
                  <span className="report-label sent">
                    <RiMailSendLine size={18} /> Sent
                  </span>
                </div>
                <div className="report-item">
                  <span className="report-value">{c.opened}</span>
                  <span className="report-label opened">
                    <BsEnvelopeOpen size={18} /> Opened
                  </span>
                </div>
                <div className="report-item">
                  <span className="report-value">{c.replied}</span>
                  <span className="report-label replied">
                    <HiOutlineCheckCircle size={18} /> Replied
                  </span>
                </div>
                <div className="report-item">
                  <a href="#" className="go-inbox-link">Go To Master Inbox</a>
                </div>
                <div className="report-item">
                  <span className="report-value">{c.positive}</span>
                  <span className="report-label positive">
                    <AiOutlineDollarCircle size={18} /> Positive Reply
                  </span>
                </div>
                <div className="report-item">
                  <span className="report-value">{c.bounced}</span>
                  <span className="report-label bounced">
                    <BsEnvelopeExclamation size={18} /> Bounced
                  </span>
                </div>
                <div className="report-item">
                  <span className="report-value">{c.senderBounced}</span>
                  <span className="report-label sender-bounced">
                    <BsEnvelopeX size={18} /> Sender Bounced
                  </span>
                </div>
              </div>
              <div className="campaign-col edit-col d-flex align-items-center">
                <Button variant="outline-light" className="edit-btn me-2">
                  <FiEdit2 size={20} />
                </Button>
                <Button variant="outline-light" className="more-btn">
                  <FiMoreHorizontal size={20} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;