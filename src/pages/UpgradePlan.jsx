import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Progress } from 'antd'; // Added for the usage bars
import { FiCheckCircle } from 'react-icons/fi';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import './UpgradePlan.scss';

// Data for the pricing plans (top section)
const plans = {
  monthly: [
    { name: 'Basic Plan', price: '$39/month', buttonText: 'Choose Basic Plan', features: ['2000 Leads', '6000 Emails per month', 'Unlimited Email Warm Up'], isPreferred: false },
    { name: 'Pro Plan', price: '$94/month', buttonText: 'Choose Pro Plan', features: ['30K Leads', '150K Emails per month', 'Unlimited Email Warm Up', 'Webhooks', 'API Access', 'Global Block List', 'Agency View & White labelling'], isPreferred: true, bannerText: '78% users prefer this' },
    { name: 'Expert Plan', price: null, buttonText: null, features: ['Custom Active Lead Credits', 'Custom Email Credits (p/m)', 'Unlimited Email Warm Up', 'Unlimited Email Accounts', 'Dynamic IP Addresses', 'All features included'], isPreferred: false },
  ],
  yearly: [
    { name: 'Basic Plan', price: '$32/month', buttonText: 'Choose Basic Plan', features: ['2000 Leads', '6000 Emails per month', 'Unlimited Email Warm Up'], isPreferred: false },
    { name: 'Pro Plan', price: '$78/month', buttonText: 'Choose Pro Plan', features: ['30K Leads', '150K Emails per month', 'Unlimited Email Warm Up', 'Webhooks', 'API Access', 'Global Block List', 'Agency View & White labelling'], isPreferred: true, bannerText: '78% users prefer this' },
    { name: 'Expert Plan', price: null, buttonText: null, features: ['Custom Active Lead Credits', 'Custom Email Credits (p/m)', 'Unlimited Email Warm Up', 'Unlimited Email Accounts', 'Dynamic IP Addresses', 'All features included'], isPreferred: false },
  ],
};

// Data for the current plan benefits (bottom section)
const currentPlanBenefits = [
  '10K Leads',
  '40K Emails per month',
  'Unlimited Email Warm Up',
  'Global Block List'
];

const UpgradePlan = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const currentPlans = plans[billingCycle];

  return (
    <div className="upgrade-plan-page">
      {/* === TOP SECTION: UPGRADE PLAN === */}
      <div className="page-header">
        <h2>Want to Upgrade the plan?</h2>
        <p>Upgrade your plan at anytime</p>
      </div>

      <div className="billing-toggle-section">
        <div className="toggle-buttons">
          <Button className={billingCycle === 'monthly' ? 'active' : ''} onClick={() => setBillingCycle('monthly')}>Monthly</Button>
          <Button className={billingCycle === 'yearly' ? 'active' : ''} onClick={() => setBillingCycle('yearly')}>Yearly Deal (17% off)</Button>
        </div>
        <div className="save-graphic">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 20C10.6667 1.33333 34.2 -4.2 55.5 15.5" stroke="#4ECB71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
          </svg>
          <span>Save 17%</span>
        </div>
      </div>

      <div className="pricing-cards-container">
        {currentPlans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.isPreferred ? 'preferred' : ''}`}>
            {plan.bannerText && <div className="preferred-banner">{plan.bannerText}</div>}
            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              {plan.price && <div className="plan-price">{plan.price}</div>}
              {index === 2 && (
                <div className="expert-plan-dropdown">
                  <label>Scale Your Business</label>
                  <Form.Select><option>Select an option</option></Form.Select>
                </div>
              )}
            </div>
            {plan.buttonText && <Button className="choose-plan-btn">{plan.buttonText}</Button>}
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (<li key={idx}><FiCheckCircle className="feature-icon" /><span>{feature}</span></li>))}
            </ul>
            <a href="#" className="full-details-link">Full Details</a>
          </div>
        ))}
      </div>
      
      <hr className="section-divider" />

      {/* === BOTTOM SECTION: GENERAL PLAN / USAGE STATUS === */}
      <div className="general-plan-section">
        <div className="current-plan-header">
          <div className="plan-details">
            <div>
              <label>Current Plan</label>
              <h3>Popular Plan</h3>
            </div>
            <div>
              <label>Your plan is set to cancel on</label>
              <span>12-Jan-2024</span>
            </div>
          </div>
          <Button className="manage-billing-btn">Manage Billing</Button>
        </div>

        <div className="usage-card">
          <div className="usage-status">
            <h5>Usage Status</h5>
            <div className="usage-grid">
              <div className="usage-item">
                <h6>Total Leads</h6>
                <Progress percent={0.11} showInfo={false} strokeColor="#6c4eea" />
                <p>11/10,000</p>
              </div>
              <div className="usage-item">
                <h6>Total Emails</h6>
                <Progress percent={0} showInfo={false} strokeColor="#6c4eea" />
                <p>0/40,000 per month</p>
              </div>
            </div>
          </div>
          <hr className="card-divider" />
          <div className="plan-benefits">
            <h5>Plan Benefits:</h5>
            <ul className="benefits-list">
              {currentPlanBenefits.map((benefit, index) => (
                <li key={index}>
                  <FiCheckCircle className="benefit-icon" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom-bar">
          <BiChevronLeft />
          <div className="bar-indicator"></div>
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default UpgradePlan;