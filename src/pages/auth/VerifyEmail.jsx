import { useNavigate } from 'react-router-dom';
import mailIcon from '../../assets/mark.png';
import sendIcon from '../../assets/send.png';
import infoIcon from '../../assets/i.png';
import leftArrowIcon from '../../assets/leftarrow.png';
import tinyDropletIcon from '../../assets/tinydroplet.png';
import verifyEmailImage from '../../assets/verify_email_image.png';
import './VerifyEmail.css';

function VerifyEmail() {
  const navigate = useNavigate();

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-logo-box">
          <span className="auth-logo">
            <img src={tinyDropletIcon} alt="" className="logo-droplet-icon" />
            Flood<span className="auth-logo-accent">Alert</span>
          </span>
        </div>

        <div className="auth-form-box">
          <div className="verify-icon-circle">
            <img src={mailIcon} alt="Mail" className="verify-mail-icon" />
          </div>

          <h1 className="verify-title">Verify your email</h1>
          <p className="verify-subtitle">
            We've sent a password reset link to <strong>example@gmail.com</strong>.
          </p>

          <div className="verify-info-box">
            <img src={infoIcon} alt="Info" className="verify-info-icon" />
            <p className="verify-info-text">
              Didn't receive the email? Check your spam folder or request a new link.
            </p>
          </div>

          <div className="verify-resend-box">
            <div className="verify-resend-left">
              <img src={sendIcon} alt="Send" className="verify-send-icon" />
              <div>
                <p className="verify-resend-title">Resend email</p>
                <p className="verify-resend-timer">You can resend the link in 00:45</p>
              </div>
            </div>
            <button className="verify-resend-btn">Resend</button>
          </div>

          <p className="auth-back-link" onClick={() => navigate('/login')}>
            <img src={leftArrowIcon} alt="Back" className="back-arrow-icon" />
            Back to login
          </p>
        </div>
      </div>

      <div className="auth-brand-side">
        <img src={verifyEmailImage} alt="FloodAlert" className="auth-brand-image" />
      </div>
    </div>
  );
}

export default VerifyEmail;