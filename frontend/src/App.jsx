
import React, {useEffect} from "react";
import './App.css';
import AppRoutes from './components/AppRoutes';
function App() {
  const videoRef = React.createRef();

  useEffect(() => {
    // Play the video when it's ready
    videoRef.current.play();
  }, [videoRef]);

  return (
    <div className="App">
      <video ref={videoRef} autoPlay muted loop id="background-video">
        <source src="https://res.cloudinary.com/diwe7m0es/video/upload/v1699135918/Thin_Smoke_65___45s___4k_res_shb3va.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <div className="overlay"></div>
      <AppRoutes />
    </div>
  );
}

export default App;