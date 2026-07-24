import { useNavigate } from 'react-router-dom';
import sideLogoLogin from '../../assets/side_logo_login.png';
import googleIcon from '../../assets/google_logo.png';
import facebookIcon from '../../assets/facebook_logo.png';
import './CreateAccount.css';

function CreateAccount() {
  const navigate = useNavigate();

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-logo-box">
          <span className="auth-logo">Flood<span className="auth-logo-accent">Alert</span></span>
        </div>

        <div className="auth-form-box">
          <h1 className="auth-title">Create your account</h1>
          <p className="auth-subtitle">
            Already have an account?{' '}
            <span className="auth-link" onClick={() => navigate('/login')}>Log in</span>
          </p>

          <form className="auth-form">
            <label className="auth-label">E-mail address</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">{/* envelope icon */}</span>
              <input type="email" placeholder="Enter your e-mail address" className="auth-input" />
            </div>

            <label className="auth-label">Password</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">{/* lock icon */}</span>
              <input type="password" placeholder="Create password" className="auth-input" />
              <span className="auth-input-icon-right">{/* eye icon */}</span>
            </div>
            <p className="auth-hint">Minimum 8 characters</p>

            <label className="auth-label">Password</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">{/* lock icon */}</span>
              <input type="password" placeholder="Confirm password" className="auth-input" />
              <span className="auth-input-icon-right">{/* eye icon */}</span>
            </div>
            <p className="auth-hint">Minimum 8 characters</p>

            <div className="auth-checkbox-row">
              <label className="auth-checkbox-label">
                <input type="checkbox" />
                <span>
                  I agree to the <a href="/terms" className="auth-link">Terms of Use</a> and{' '}
                  <a href="/privacy" className="auth-link">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="submit" className="auth-submit-btn">Create account</button>
          </form>

          <div className="auth-divider">OR</div>

          <button className="auth-social-btn">
            <img src={googleIcon} alt="Google" className="auth-social-icon" />
            Continue with Google
          </button>
          <button className="auth-social-btn">
            <img src={facebookIcon} alt="Facebook" className="auth-social-icon" />
            Continue with Facebook
          </button>

          <p className="auth-footer-text">
            By creating an account, you agree to our <a href="/terms" className="auth-link">Terms of Use</a> and acknowledge the{' '}
            <a href="/privacy" className="auth-link">Privacy Policy</a>
          </p>
        </div>
      </div>

      <div className="auth-brand-side">
        <img src={sideLogoLogin} alt="FloodAlert" className="auth-brand-image" />
      </div>
    </div>
  );
}

export default CreateAccount;