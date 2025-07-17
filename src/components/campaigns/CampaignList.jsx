import React, { useState, useEffect } from 'react'
import { Table, Tag, Button, Space, Input, Dropdown, Menu, Badge, Modal, message } from 'antd'
import {
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  FileExcelOutlined,
  FileTextOutlined
} from '@ant-design/icons'
import CampaignFilters from './CampaignFilters'
import './CampaignList.scss'

const { Search } = Input

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [filters, setFilters] = useState({})
  const [showFilters, setShowFilters] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  useEffect(() => {
    fetchCampaigns()
  }, [pagination.current, filters])

  const fetchCampaigns = () => {
    setLoading(true)

    // 💡 Mocked campaign data (replace with actual data if needed)
    const dummyData = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Campaign ${i + 1}`,
      status: ['active', 'paused', 'completed', 'draft'][i % 4],
      leadsCount: Math.floor(Math.random() * 100),
      sentCount: Math.floor(Math.random() * 100),
      openedCount: Math.floor(Math.random() * 50),
      repliedCount: Math.floor(Math.random() * 20),
      createdAt: new Date().toISOString()
    }))

    setTimeout(() => {
      setCampaigns(dummyData)
      setPagination(prev => ({
        ...prev,
        total: dummyData.length
      }))
      setLoading(false)
    }, 500)
  }

  const handleTableChange = (pagination) => {
    setPagination(pagination)
  }

  const handleSearch = (value) => {
    setFilters({
      ...filters,
      search: value
    })
    setPagination({
      ...pagination,
      current: 1
    })
  }

  const handleStatusFilter = (status) => {
    setFilters({
      ...filters,
      status
    })
    setPagination({
      ...pagination,
      current: 1
    })
  }

  const handleResetFilters = () => {
    setFilters({})
    setPagination({
      ...pagination,
      current: 1
    })
  }

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Delete Campaign',
      content: 'Are you sure you want to delete this campaign?',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => {
        setCampaigns(prev => prev.filter(item => item.id !== id))
        message.success('Campaign deleted successfully')
      }
    })
  }

  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'paused' : 'active'
    setCampaigns(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    )
    message.success(`Campaign ${newStatus === 'active' ? 'activated' : 'paused'} successfully`)
  }

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const actionMenu = (record) => (
    <Menu>
      <Menu.Item
        key="edit"
        icon={<EditOutlined />}
        onClick={() => console.log('Edit', record.id)}
      >
        Edit
      </Menu.Item>
      <Menu.Item
        key="status"
        icon={record.status === 'active' ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        onClick={() => handleToggleStatus(record.id, record.status)}
      >
        {record.status === 'active' ? 'Pause' : 'Activate'}
      </Menu.Item>
      <Menu.Item
        key="delete"
        icon={<DeleteOutlined />}
        onClick={() => handleDelete(record.id)}
        danger
      >
        Delete
      </Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a onClick={() => console.log('View details', record.id)}>{text}</a>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = ''
        let text = ''

        switch (status) {
          case 'active':
            color = 'green'
            text = 'Active'
            break
          case 'paused':
            color = 'orange'
            text = 'Paused'
            break
          case 'completed':
            color = 'blue'
            text = 'Completed'
            break
          case 'draft':
            color = 'gray'
            text = 'Draft'
            break
          default:
            color = 'default'
            text = status
        }

        return <Tag color={color}>{text}</Tag>
      }
    },
    {
      title: 'Leads',
      dataIndex: 'leadsCount',
      key: 'leadsCount',
      render: (count) => `${count} leads`
    },
    {
      title: 'Sent',
      dataIndex: 'sentCount',
      key: 'sentCount',
      render: (count) => `${count} sent`
    },
    {
      title: 'Opened',
      dataIndex: 'openedCount',
      key: 'openedCount',
      render: (count) => `${count} (${Math.round((count / (pagination.pageSize || 1)) * 100)}%)`
    },
    {
      title: 'Replied',
      dataIndex: 'repliedCount',
      key: 'repliedCount',
      render: (count) => `${count} (${Math.round((count / (pagination.pageSize || 1)) * 100)}%)`
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toLocaleDateString()
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'right',
      render: (_, record) => (
        <Dropdown overlay={actionMenu(record)} trigger={['click']}>
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      )
    }
  ]

  const statusOptions = [
    { text: 'All', value: '' },
    { text: 'Active', value: 'active' },
    { text: 'Paused', value: 'paused' },
    { text: 'Completed', value: 'completed' },
    { text: 'Draft', value: 'draft' }
  ]

  return (
    <div className="campaign-list">
      <div className="campaign-list-header">
        <div className="header-left">
          <h3>Campaigns</h3>
          <Search
            placeholder="Search campaigns..."
            allowClear
            enterButton={<SearchOutlined />}
            size="middle"
            onSearch={handleSearch}
            className="search-input"
          />
        </div>

        <div className="header-right">
          <Space>
            <Button
              icon={<FilterOutlined />}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </Button>
            <Button type="primary" onClick={() => console.log('New campaign')}>
              New Campaign
            </Button>
          </Space>
        </div>
      </div>

      {showFilters && (
        <CampaignFilters
          onFilter={setFilters}
          onReset={handleResetFilters}
          statusOptions={statusOptions}
          currentStatus={filters.status}
          onStatusChange={handleStatusFilter}
        />
      )}

      <div className="campaign-list-actions">
        <Space>
          <Button
            icon={<FileExcelOutlined />}
            disabled={selectedRowKeys.length === 0}
          >
            Export
          </Button>
          <Button
            icon={<FileTextOutlined />}
            disabled={selectedRowKeys.length === 0}
          >
            Reports
          </Button>
        </Space>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={campaigns}
        loading={loading}
        pagination={pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection}
        className="campaign-table"
      />
    </div>
  )
}

export default CampaignList
