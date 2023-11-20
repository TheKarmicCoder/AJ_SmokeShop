import { useRef } from 'react';
import './scss/playbutton.css';

function PlayButton() {
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    // Set muted to false to allow audio playback
    videoRef.current.muted = false;
    // Unmute and play the video
    videoRef.current.play();
    // Hide the form if it's currently visible
  };

  return (
    <div className="video-button">
      {/* Replace the button with an image */}
      <button className="play" onClick={handlePlayButtonClick}>
        <img
          src="/blunt.png" // Replace with the path to your image
          alt="Play Button"
          style={{ width: '100%', height: '100%' }}
          
        />
        TAKE A HIT
      </button>

      <video
        ref={videoRef}
        id="background-video"
        loop
        muted
        playsInline
        style={{ display: 'block' }}
      >
        <source
          src="https://res.cloudinary.com/diwe7m0es/video/upload/v1699135918/Thin_Smoke_65___45s___4k_res_shb3va.mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default PlayButton;
