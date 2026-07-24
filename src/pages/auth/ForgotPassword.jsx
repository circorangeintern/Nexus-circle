import { useNavigate } from 'react-router-dom';
import forgotPasswordImage from '../../assets/forgot_password.png';
import './ForgotPassword.css';


function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-logo-box">
          <span className="auth-logo">
            {/* droplet icon */} Flood<span className="auth-logo-accent">Alert</span>
          </span>
        </div>

        <div className="auth-form-box">
          <h1 className="auth-title">Forgot password?</h1>
          <p className="auth-subtitle">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>

          <form className="auth-form">
            <label className="auth-label">E-mail address</label>
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">{/* envelope icon */}</span>
              <input type="email" placeholder="Enter your e-mail address" className="auth-input" />
            </div>

            <button type="submit" className="auth-submit-btn">
              Send reset link {/* paper plane icon */}
            </button>
          </form>

          <p className="auth-back-link" onClick={() => navigate('/login')}>
            {/* arrow left icon */} Back to login
          </p>
        </div>
      </div>

      <div className="auth-brand-side">
  <img src={forgotPasswordImage} alt="FloodAlert" className="auth-brand-image" />
</div>
    </div>
  );
}

export default ForgotPassword;