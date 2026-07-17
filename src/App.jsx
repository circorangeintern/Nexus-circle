import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './pages/LoadingScreen';
import OnboardingA from './pages/OnboardingA';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/onboardingA" element={<OnboardingA />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;