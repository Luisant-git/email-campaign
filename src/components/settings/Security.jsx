import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd'
import './Security.scss'

const Security = () => {
  const [form] = Form.useForm()
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  const onFinish = (values) => {
    console.log('Success:', values)
    // Handle password change logic here
  }

  const handleForceLogout = () => {
    // Handle force logout logic here
    alert('All users have been logged out')
  }

  return (
    <div className="security-settings">
      <Card title="Change Password" className="mb-4">
        <Form
          form={form}
          name="change-password"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Current Password"
            name="currentPassword"
            rules={[{ required: true, message: 'Please input your current password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[{ required: true, message: 'Please input your new password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm New Password"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please confirm your new password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('The two passwords do not match!'))
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Password
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="Two-Factor Authentication (2FA)" className="mb-4">
        <Checkbox 
          checked={twoFactorEnabled}
          onChange={(e) => setTwoFactorEnabled(e.target.checked)}
        >
          Enable two-factor authentication for enhanced security. This will apply to you and your team members, but not to clients.
        </Checkbox>
        
        {twoFactorEnabled && (
          <div className="mt-3">
            <p>2FA – Use only Email id and OTP</p>
          </div>
        )}
      </Card>

      <Card title="Force Logout All Users" className="mb-4">
        <p>This will force logout all active sessions across devices. Users will need to login again.</p>
        <Button type="danger" onClick={handleForceLogout}>
          Force Logout
        </Button>
      </Card>

      <Card title="Global Block List">
        <table className="block-list-table">
          <thead>
            <tr>
              <th>Domain Name</th>
              <th>Source</th>
              <th>Type</th>
              <th>Created At</th>
              <th>Client</th>
              <th>Metadata</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6">No domain or email blocked yet</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default Security