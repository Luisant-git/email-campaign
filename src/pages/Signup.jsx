import React from "react";
import { Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="left-section">
          <div className="image-fit-container">
            <img
              src="https://i.imgur.com/Fqm9rWL.jpg"
              alt="Signup Visual"
              className="signup-side-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>

        <div className="right-section">
          <div className="signup-form">
            <h2>Full name</h2>

            <div className="form-item">
              <Input
                size="large"
                placeholder="Email Address"
                defaultValue="aneah@browsercontact.com"
              />
            </div>

            <div className="form-item">
              <Input size="large" placeholder="Create Password" />
            </div>

            <div className="form-item">
              <Input size="large" placeholder="Company URL" />
            </div>

            <div className="form-item">
              <Input
                size="large"
                placeholder="Where did you find us?"
                defaultValue="Google Search"
              />
            </div>

            <div className="form-item">
              <Input size="large" placeholder="What did you search for?" />
            </div>

            <Button
              type="primary"
              size="large"
              block
              className="signup-btn"
              onClick={handleSignup}
            >
              Create Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
