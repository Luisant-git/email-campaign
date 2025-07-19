import React from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { BsMegaphoneFill } from "react-icons/bs";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="logo">
          <BsMegaphoneFill size={24} />
          <span>Syfer250</span>
        </div>
        <div className="signup-link">
          New to Syfer250? <a href="/signup">Sign up</a>
        </div>
      </header>

      <main className="login-container">
        <div className="login-form">
          <h2>Sign in to Syfer250</h2>
          <p>
            Always land in your lead’s inbox with unlimited sender accounts, so
            you can focus on closing deals.
          </p>

          <div className="form-item">
            <Input size="large" placeholder="Email Address" />
          </div>

          <div className="form-item">
            <div className="password-header">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <Input size="large" placeholder="Enter Password" />
          </div>

          <Button
            type="primary"
            size="large"
            block
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Login;
