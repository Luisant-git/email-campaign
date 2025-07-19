import React, { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { BsInbox, BsMegaphoneFill, BsPlus } from "react-icons/bs";
import {
  FiMail,
  FiSend,
  FiStar,
  FiClock,
  FiBell,
  FiArchive,
  FiSearch,
  FiRefreshCw,
  FiChevronDown,
} from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import { RiCalendarTodoLine } from "react-icons/ri";
import "./Inbox.scss";
import EmailConnectionModal from "./EmailConnectionModal ";

// Data for the sidebar navigation items
const navItems = [
  { icon: <BsInbox />, text: "Inbox", page: "Inbox" },
  { icon: <FiMail />, text: "Unread Replies", page: "Unread Replies" },
  { icon: <FiSend />, text: "Sent", page: "Sent" },
  { icon: <FiStar />, text: "Important", page: "Important" },
  { icon: <FiClock />, text: "Snoozed", page: "Snoozed" },
  { icon: <FiBell />, text: "Reminders", page: "Reminders" },
  { icon: <RiCalendarTodoLine />, text: "Scheduled", page: "Scheduled" },
  { icon: <FiArchive />, text: "Archived", page: "Archived" },
  { icon: <BsPlus />, text: "Connect", page: "Connect" },
];

const emptyMessages = {
  Inbox: {
    title: "Inbox",
    message:
      "Oops! It seems we couldn’t find any leads that match your current filters. Feel free to adjust your filters or explore other sections to discover new opportunities.",
  },
  "Unread Replies": {
    title: "Unread Replies",
    message: "No unread replies found. Check back later or try another filter.",
  },
  Sent: {
    title: "Sent",
    message:
      "No sent messages yet. Start a conversation to see sent items here.",
  },
  Important: {
    title: "Important",
    message:
      "No important messages found. Mark messages as important to see them here.",
  },
  Snoozed: {
    title: "Snoozed",
    message: "No snoozed messages. Snooze messages to view them here.",
  },
  Reminders: {
    title: "Reminders",
    message: "No reminders set. Set reminders to manage your follow-ups.",
  },
  Scheduled: {
    title: "Scheduled",
    message: "No scheduled messages. Schedule messages to see them here.",
  },
  Archived: {
    title: "Archived",
    message: "No archived messages. Archive messages to keep your inbox clean.",
  },
  Connnect: {
    title: "Connect",
    message:
      "No connected email found. Connect email to manage your relationships.",
  },
};

const MasterInbox = () => {
  const [selectedPage, setSelectedPage] = useState("Inbox");
  const [showConnectionModal, setShowConnectionModal] = useState(false);

  return (
    <div className="campaigns-page">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <div className="main-content">
          <div className="master-inbox-page">
            {/* 1. Left Sidebar Navigation */}
            <aside className="inbox-sidebar">
              <div className="sidebar-section">
                <h6 className="sidebar-section-title">
                  <FiChevronDown /> FOR ME
                </h6>
                <ul>
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={selectedPage === item.page ? "active" : ""}
                        onClick={() => setSelectedPage(item.page)}
                      >
                        {item.icon}
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-section">
                <h6 className="sidebar-section-title">
                  <FiChevronDown /> VIEWS
                  <div className="title-actions">
                    <FiSearch />
                    <BsPlus />
                  </div>
                </h6>
                <p className="sidebar-description">
                  Apply and save filters as views to efficiently organise and
                  manage your inbox.
                </p>
              </div>
            </aside>

            {/* 2. Middle Column (List of leads/messages) */}
            <div className="inbox-list-view">
              <div className="list-view-header">
                <InputGroup className="search-bar">
                  <FiSearch className="search-icon" />
                  <Form.Control placeholder="Search lead" />
                  <BiFilterAlt className="filter-icon" />
                </InputGroup>
              </div>
              <div className="list-view-content">
                <div className="list-view-subheader">
                  <h2>{emptyMessages[selectedPage].title}</h2>
                  <Button variant="link" className="refresh-btn">
                    <FiRefreshCw />
                  </Button>
                </div>
                <div className="list-view-empty">
                  <p>{emptyMessages[selectedPage].message}</p>
                </div>
              </div>
            </div>

            {/* 3. Right Column (Main Content) */}
            <main className="inbox-content-view">
              <div className="empty-state-container">
                <div className="empty-state-graphic">
                  <div className="graphic-header">
                    <span>Subject</span>
                    <div className="graphic-line"></div>
                  </div>
                  <div className="graphic-body">
                    <div className="graphic-line"></div>
                    <div className="graphic-line highlight"></div>
                    <div className="graphic-line"></div>
                    <div className="graphic-line short"></div>
                  </div>
                  <div className="graphic-chart-line">
                    <svg
                      width="60"
                      height="20"
                      viewBox="0 0 60 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 10L10 5L20 8L35 4L45 10L59 7"
                        stroke="#4ECB71"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="1"
                        cy="10"
                        r="1.5"
                        fill="#4ECB71"
                        stroke="#F8F9FE"
                        strokeWidth="1"
                      />
                      <circle
                        cx="10"
                        cy="5"
                        r="1.5"
                        fill="#4ECB71"
                        stroke="#F8F9FE"
                        strokeWidth="1"
                      />
                      <circle
                        cx="20"
                        cy="8"
                        r="1.5"
                        fill="#4ECB71"
                        stroke="#F8F9FE"
                        strokeWidth="1"
                      />
                      <circle
                        cx="35"
                        cy="4"
                        r="1.5"
                        fill="#4ECB71"
                        stroke="#F8F9FE"
                        strokeWidth="1"
                      />
                      <circle
                        cx="45"
                        cy="10"
                        r="1.5"
                        fill="#4ECB71"
                        stroke="#F8F9FE"
                        strokeWidth="1"
                      />
                      <circle
                        cx="59"
                        cy="7"
                        r="1.5"
                        fill="#4ECB71"
                        stroke="#F8F9FE"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                  <div className="graphic-envelope">
                    <svg
                      width="40"
                      height="30"
                      viewBox="0 0 40 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H40V30H0V0Z" fill="#FFD15A" />
                      <path d="M0 0L20 15L40 0" stroke="#000" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="empty-state-text">
                  <h3>Your master inbox</h3>
                  <p>Uh Oh!! Leads not found.</p>
                </div>
              </div>
            </main>

            {/* Floating Action Button */}
            <button
              className="inbox-fab"
              onClick={() => setShowConnectionModal(true)}
            >
              <BsMegaphoneFill />
            </button>
          </div>
        </div>
      </div>
      <EmailConnectionModal
        show={showConnectionModal}
        onHide={() => setShowConnectionModal(false)}
      />
    </div>
  );
};

export default MasterInbox;
