import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import floodAlertLogo from '../assets/floodAlertlogo.png';
import './LoadingScreen.css';

function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboardingA');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <div className="loading-icon-placeholder">
        <img className="logoimage" src={floodAlertLogo} alt="FloodAlert icon" />
      </div>
      <div>
        <span className="loading-title">
          FLOOD<span className="loading-title-accent">ALERT</span>
        </span>
      </div>
    </div>
  );
}

export default LoadingScreen;