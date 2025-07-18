import React, { useState } from "react";
import { FiClock, FiCalendar, FiInfo } from "react-icons/fi"; // react-icons for icons
import "./ScheduleSettings.scss";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ScheduleSettings = () => {
  const [selectedDays, setSelectedDays] = useState([1, 3, 4, 5]); // Mon, Wed, Thu, Fri checked as in screenshot
  const [timeZone, setTimeZone] = useState("Pacific/Honolulu(UTC-10:00)");
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("18:00");
  const [interval, setInterval] = useState(20);
  const [startDate, setStartDate] = useState("");
  const [maxLeads, setMaxLeads] = useState(100);

  const handleDayToggle = (idx) => {
    setSelectedDays((prev) =>
      prev.includes(idx) ? prev.filter((day) => day !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="schedule-settings-modal">
      <div className="modal-header">
        <span className="title">Schedule Settings</span>
        <button className="close-btn" aria-label="Close">
          &times;
        </button>
      </div>

      <label className="section-title" htmlFor="timezone">
        Choose Time Zone
      </label>
      <select
        id="timezone"
        className="select-timezone"
        value={timeZone}
        onChange={(e) => setTimeZone(e.target.value)}
      >
        <option>Pacific/Honolulu(UTC-10:00)</option>
        <option>America/Los_Angeles(UTC-8:00)</option>
        <option>America/New_York(UTC-5:00)</option>
        {/* Add more as needed */}
      </select>

      <div className="section-title" style={{ marginBottom: 8 }}>
        Send these days
      </div>
      <div className="days-checkboxes">
        {daysOfWeek.map((day, idx) => (
          <label
            key={day}
            className={`day${selectedDays.includes(idx) ? " checked" : ""}`}
          >
            <input
              type="checkbox"
              checked={selectedDays.includes(idx)}
              onChange={() => handleDayToggle(idx)}
            />
            {day}
          </label>
        ))}
      </div>

      <div className="section-title" style={{ marginBottom: 8 }}>
        Time Period Between Sequences
      </div>
      <div className="time-period-section">
        <div className="time-row">
          <div className="time-group">
            <label>From</label>
            <div className="time-input-wrap">
              <input
                type="time"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
              />
              <FiClock className="icon-clock" />
            </div>
          </div>
          <span className="dash">–</span>
          <div className="time-group">
            <label>To</label>
            <div className="time-input-wrap">
              <input
                type="time"
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
              />
              <FiClock className="icon-clock" />
            </div>
          </div>
          <div className="interval-group" style={{ marginLeft: 32 }}>
            <label>An email will be sent every:</label>
            <div className="interval-input-wrap">
              <input
                type="number"
                min={1}
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
              />
              <span className="interval-label">minutes</span>
            </div>
            <div className="triggers-info">
              27 triggers will be sent / day / sender account
            </div>
          </div>
        </div>
      </div>

      <div className="ai-info">
        <FiInfo className="icon-info" />
        <span>
          Our AI introduces a 30 to 60-second variance trigger, adding a human
          touch to enhance deliverability.
        </span>
      </div>

      <div className="date-section">
        <label>
          Set Campaign Start Date <FiInfo className="info" />
        </label>
        <div className="date-input-wrap">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <FiCalendar className="icon-calendar" />
        </div>
      </div>

      <div className="max-leads-section">
        <label>Max Number Of New Leads Reached Per Day Per Campaign</label>
        <input
          type="number"
          min={1}
          value={maxLeads}
          onChange={(e) => setMaxLeads(e.target.value)}
        />
      </div>

      <button className="save-btn">Save</button>
    </div>
  );
};

export default ScheduleSettings;
