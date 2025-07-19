import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined, MoreOutlined } from '@ant-design/icons';
import './GlobalBlockList.scss'; // We will add styles to the existing SCSS file

// This component is the content for the "Global Block List" tab
const GlobalBlockList = () => {
  // Menu for the dropdown part of the split button
  const menu = (
    <Menu>
      <Menu.Item key="1">Add Domain</Menu.Item>
      <Menu.Item key="2">Add Email</Menu.Item>
    </Menu>
  );

  return (
    <div className="global-block-list-content">
      {/* Header section with title and action buttons */}
      <div className="block-list-header">
        <h3>Global Block List</h3>
        <div className="header-actions">
          <Dropdown.Button
            type="primary"
            overlay={menu}
            buttonsRender={([left, right]) => [
              <Button type="primary" key="left">{left.props.children}</Button>,
              <Dropdown overlay={menu} key="right">
                {right}
              </Dropdown>,
            ]}
          >
            Add Block List
          </Dropdown.Button>
          <Button className="more-btn" icon={<MoreOutlined />} />
        </div>
      </div>

      {/* Custom table to match the design */}
      <div className="block-list-table">
        <div className="table-header-row">
          <span>Domain Name</span>
          <span>Source</span>
          <span>Type</span>
          <span>Created At</span>
          <span>Client</span>
          <span>Metadata</span>
        </div>
        <div className="table-body">
          <div className="empty-row">
            No domains or emails blocked yet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBlockList;