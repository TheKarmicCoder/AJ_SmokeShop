import  { useEffect } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';

function App() {
  useEffect(() => {
    const video = document.getElementById('background-video');

    const handleInteraction = () => {
      if (video) {
        video.play().catch(error => {
          // Handle play error if needed
          console.error('Error playing video:', error);
        });
        video.removeEventListener('touchstart', handleInteraction);
        video.removeEventListener('click', handleInteraction);
      }
    };

    if (video) {
      video.addEventListener('touchstart', handleInteraction);
      video.addEventListener('click', handleInteraction);
    }

    return () => {
      if (video) {
        video.removeEventListener('touchstart', handleInteraction);
        video.removeEventListener('click', handleInteraction);
      }
    };
  }, []);

  return (
    <div className="App">
      <video autoPlay muted loop id="background-video" >
        <source src="https://res.cloudinary.com/diwe7m0es/video/upload/v1699135918/Thin_Smoke_65___45s___4k_res_shb3va.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <div className="overlay"></div>
      <AppRoutes />
    </div>
  );
}

export default App;
