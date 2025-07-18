import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './DashboardFilters.scss';

// The list of columns to be customized
const filterOptions = [
  'Leads',
  'Email Sent',
  'Opened',
  'Clicked',
  'Replied',
  'Positive Reply',
  'Bounced',
  'Sender Bounced'
];

const DashboardFilters = () => {
  // State to manage which items are checked, pre-filled based on your image
  const [checkedItems, setCheckedItems] = useState({
    'Leads': false,
    'Email Sent': true,
    'Opened': true,
    'Clicked': false,
    'Replied': true,
    'Positive Reply': true,
    'Bounced': true,
    'Sender Bounced':true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="column-customization-popover">
      <h6 className="popover-title">Column Customization</h6>
      <div className="filter-list">
        {filterOptions.map(option => (
          <div className="filter-item" key={option}>
            <Form.Check
              type="checkbox"
              id={`checkbox-${option}`}
              name={option}
              label={option}
              checked={checkedItems[option]}
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardFilters;