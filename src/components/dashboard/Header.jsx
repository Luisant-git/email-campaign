import React from 'react'
import { Avatar, Badge, Dropdown, Menu, Input, Button } from 'antd'
import { 
  BellOutlined, 
  SearchOutlined, 
  UserOutlined, 
  SettingOutlined, 
  LogoutOutlined 
} from '@ant-design/icons'
import './Header.scss'

const { Search } = Input

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <header className="app-header">
      <div className="header-left">
        <Search
          placeholder="Search..."
          allowClear
          enterButton={<Button type="text" icon={<SearchOutlined />} />}
          size="middle"
          className="header-search"
        />
      </div>
      
      <div className="header-right">
        <div className="header-notification">
          <Badge count={5} dot>
            <BellOutlined className="notification-icon" />
          </Badge>
        </div>
        
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <div className="header-profile">
            <Avatar 
              size="default" 
              icon={<UserOutlined />} 
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="profile-avatar"
            />
            <span className="profile-name">Anesh</span>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header