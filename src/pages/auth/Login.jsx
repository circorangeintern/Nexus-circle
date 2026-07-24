import { useNavigate } from 'react-router-dom';
import sideLogoLogin from '../../assets/side_logo_login.png';
import googleIcon from '../../assets/google_logo.png';
import facebookIcon from '../../assets/facebook_logo.png';

import './Login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-logo-box">
          <span className="auth-logo">
            Flood<span className="auth-logo-accent">Alert</span>
          </span>
        </div>

        <div className="auth-form-box">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">
            Log in to your account to continue
          </p>

          <form className="auth-form">
            <label className="auth-label">E-mail address</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">{/* envelope icon */}</span>
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="auth-input"
              />
            </div>

            <label className="auth-label">Password</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">{/* lock icon */}</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="auth-input"
              />
              <span className="auth-input-icon-right">
                {/* eye icon */}
              </span>
            </div>

            <div className="auth-row">
              <label className="auth-checkbox-label">
                <input type="checkbox" /> Remember me
              </label>

              <button
                type="button"
                className="auth-link auth-link-button"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="auth-submit-btn">
              Log in
            </button>
          </form>

          <div className="auth-divider">OR</div>

          <button className="auth-social-btn">
            <img
              src={googleIcon}
              alt="Google"
              className="auth-social-icon"
            />
            Continue with Google
          </button>

          <button className="auth-social-btn">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="auth-social-icon"
            />
            Continue with Facebook
          </button>

          <p className="auth-footer-text">
            Don't have an account?{" "}
            <button
              type="button"
              className="auth-link auth-link-button"
              onClick={() => navigate("/signup")}
            >
              Create one
            </button>
          </p>
        </div>
      </div>

      <div className="auth-brand-side">
        <img
          src={sideLogoLogin}
          alt="FloodAlert"
          className="auth-brand-image"
        />
      </div>
    </div>
  );
}

export default Login;