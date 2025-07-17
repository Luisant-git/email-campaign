import React from 'react'
import { Card, Button, Select, DatePicker, Space } from 'antd'
import { FilterOutlined, CloseOutlined } from '@ant-design/icons'
import './CampaignFilters.scss'

const { Option } = Select
const { RangePicker } = DatePicker

const CampaignFilters = ({ 
  onFilter, 
  onReset, 
  statusOptions, 
  currentStatus, 
  onStatusChange 
}) => {
  const [filters, setFilters] = useState({
    status: currentStatus || '',
    dateRange: null
  })

  const handleApplyFilters = () => {
    const appliedFilters = {}
    
    if (filters.status) {
      appliedFilters.status = filters.status
    }
    
    if (filters.dateRange) {
      appliedFilters.startDate = filters.dateRange[0].format('YYYY-MM-DD')
      appliedFilters.endDate = filters.dateRange[1].format('YYYY-MM-DD')
    }
    
    onFilter(appliedFilters)
  }

  const handleReset = () => {
    setFilters({
      status: '',
      dateRange: null
    })
    onReset()
  }

  return (
    <Card className="campaign-filters">
      <div className="filter-header">
        <h4>
          <FilterOutlined /> Filters
        </h4>
        <Button 
          type="text" 
          icon={<CloseOutlined />} 
          onClick={handleReset}
        />
      </div>
      
      <div className="filter-content">
        <Space size="large">
          <div className="filter-group">
            <label>Status</label>
            <Select
              value={filters.status}
              onChange={(value) => setFilters({ ...filters, status: value })}
              style={{ width: 150 }}
              placeholder="Select status"
            >
              {statusOptions.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.text}
                </Option>
              ))}
            </Select>
          </div>
          
          <div className="filter-group">
            <label>Date Range</label>
            <RangePicker
              value={filters.dateRange}
              onChange={(dates) => setFilters({ ...filters, dateRange: dates })}
              style={{ width: 250 }}
            />
          </div>
        </Space>
      </div>
      
      <div className="filter-actions">
        <Button type="primary" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
        <Button onClick={handleReset}>
          Reset
        </Button>
      </div>
    </Card>
  )
}

export default CampaignFilters