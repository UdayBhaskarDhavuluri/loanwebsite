import React from 'react';
import './login.css'; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 style={{color:'#fff'}}>Sign In</h2>
        <form>
          <div className="input-container">
            <input type="email or number" placeholder="Email or phone number" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
          <div className="options">
            <div className="forgot-password">
              <a href="/forgot password">Forgot password?</a>
            </div>
          </div>
          <div className="remember-me">
              <label>
                <input type="checkbox"  class="rememberMeCB"/> Remember me
              </label>
            </div>
          <div className="sign-up">
            <p>New to JustTap? <a href="/loanapppage">Sign up now</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
