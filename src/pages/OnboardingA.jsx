// import onboardingIllustration from '../assets/Onboarding_1.svg';
// import './OnboardingA.css';

// function OnboardingA() {
//   return (
//     <div className="onboarding-screen">
//       <div className="onboarding-skip">Skip</div>

//       <h1 className="onboarding-title">
//         Safer <span className="onboarding-title-accent">journeys</span><br />
//         start with you.
//       </h1>

//       <p className="onboarding-subtitle">
//         FloodAlert helps commuters see flooded roads and report hazards in real time, so everyone can travel safer.
//       </p>

//       <div className="onboarding-illustration">
//         {/* <img src={yourIllustration} alt="Onboarding illustration" /> */}
//       </div>

//       <div className="onboarding-features">
//         <div className="feature-card feature-card-blue">
//           <div className="feature-icon">{/* icon */}</div>
//           <p className="feature-title">See real-time flood reports</p>
//           <p className="feature-text">Check active hazards around you.</p>
//         </div>

//         <div className="feature-card feature-card-red">
//           <div className="feature-icon">{/* icon */}</div>
//           <p className="feature-title">Report in one tap</p>
//           <p className="feature-text">Share flooded roads in seconds.</p>
//         </div>

//         <div className="feature-card feature-card-green">
//           <div className="feature-icon">{/* icon */}</div>
//           <p className="feature-title">Community confirmed</p>
//           <p className="feature-text">Drivers confirm reports so you can trust them.</p>
//         </div>
//       </div>

//       <div className="onboarding-dots">
//         <span className="dot dot-active"></span>
//         <span className="dot"></span>
//         <span className="dot"></span>
//       </div>

//       <button className="onboarding-next-btn">Next →</button>
//     </div>
//   );
// }

// export default OnboardingA;

import onboardingIllustration from '../assets/Onboarding_1.svg';
import './OnboardingA.css';

function OnboardingA() {
  return (
    <div className="onboarding-screen">
      <div className="onboarding-skip">Skip</div>

      <h1 className="onboarding-title">
        Safer <span className="onboarding-title-accent">journeys</span><br />
        start with you.
      </h1>

      <p className="onboarding-subtitle">
        FloodAlert helps commuters see flooded roads and report hazards in real time, so everyone can travel safer.
      </p>

      <div className="onboarding-illustration">
        <img  className="boarding1" src={onboardingIllustration} alt="Onboarding illustration" />
      </div>

      <div className="onboarding-features">
        <div className="feature-card feature-card-blue">
          <div className="feature-icon">{/* icon */}</div>
          <p className="feature-title">See real-time flood reports</p>
          <p className="feature-text">Check active hazards around you.</p>
        </div>

        <div className="feature-card feature-card-red">
          <div className="feature-icon">{/* icon */}</div>
          <p className="feature-title">Report in one tap</p>
          <p className="feature-text">Share flooded roads in seconds.</p>
        </div>

        <div className="feature-card feature-card-green">
          <div className="feature-icon">{/* icon */}</div>
          <p className="feature-title">Community confirmed</p>
          <p className="feature-text">Drivers confirm reports so you can trust them.</p>
        </div>
      </div>

      <div className="onboarding-dots">
        <span className="dot dot-active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <button className="onboarding-next-btn">Next →</button>
    </div>
  );
}

export default OnboardingA;