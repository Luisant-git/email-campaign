import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './DashboardHome.scss'

const DashboardHome = () => {
  const metrics = [
    { title: 'Email Sent', value: '1,245', change: '+12%' },
    { title: 'Opened', value: '856', change: '+8%' },
    { title: 'Clicked', value: '324', change: '+5%' },
    { title: 'Replied', value: '98', change: '+3%' },
    { title: 'Positive Reply', value: '45', change: '+2%' },
    { title: 'Bounced', value: '32', change: '-1%' },
    { title: 'Sender Bounced', value: '5', change: '-0.5%' }
  ]

  return (
    <div className="dashboard-home">
      <h2 className="mb-4">Dashboard</h2>
      
      <div className="filters mb-4">
        {/* Filter component would go here */}
      </div>
      
      <Row className="metrics-row">
        {metrics.map((metric, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <Card className="metric-card">
              <Card.Body>
                <h6 className="metric-title">{metric.title}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="metric-value">{metric.value}</h3>
                  <span className={`metric-change ${metric.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {metric.change}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div className="column-customization mt-4">
        {/* Column customization would go here */}
      </div>
    </div>
  )
}

export default DashboardHome