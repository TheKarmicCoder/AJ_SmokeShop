import React, { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';

function App() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Adjust the width as needed

    // If it's a mobile device, show the landing page
    if (isMobile) {
      setShowVideo(false);
    } else {
      setShowVideo(true);
    }
  }, []);

  const handleEnter = () => {
    setShowVideo(true);
  };

  return (
    <div className="App">
      {showVideo ? (
        <div className="video-container">
          <video autoPlay muted loop id="background-video">
            <source src="https://res.cloudinary.com/diwe7m0es/video/upload/v1699135918/Thin_Smoke_65___45s___4k_res_shb3va.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
          <AppRoutes />
        </div>
      ) : (
        <div className="landing-page">
          <h1>Welcome to the Smoke Shop</h1>
          <button className="enter-button" onClick={handleEnter}>
            Enter
          </button>
          <p>Click the button to experience the full atmosphere</p>
        </div>
      )}
    </div>
  );
}

export default App;
