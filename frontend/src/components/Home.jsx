import { useState } from 'react';
import SMSForm from './SMSForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import "../scss/home.css";
import SmokeText from './SmokeText';
import PlayButton from "../PlayButton";
function Home() {
  
  const [showForm, setShowForm] = useState(false);

 

  const handleRevealFormClick = () => {
    // Pause the video and show the form
  
    setShowForm(true);
  };

  return (
    <Container maxWidth="sm">
      
      <SmokeText />
      
      <Paper
        elevation={3}
        sx={{
          padding: '20px',
          marginTop: '20rem',
          marginBottom: '7rem',
          border: '2px solid',
          borderRadius: '10px',
          background: 'transparent',
          borderImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1',
           // Adjust the styles based on different screen sizes
      
          '@media screen and (min-width: 321px) and (max-width: 424px)': {
            width: '65%',
            marginLeft: '2.5rem'
          },
          '@media screen and (min-width: 425px) and (max-width: 767px)': {
            width: '50%',
            marginLeft: '4.4rem'
          },
          '@media screen and (min-width: 768px) and (max-width: 1023px)': {
            width: '50%',
            marginLeft: '7rem'
          },
          '@media screen and (min-width: 1024px)': {
            marginLeft: '7.2rem',
            width: '50%',
          },
        }}
      >
        <Box sx={{ color: 'white', textAlign: 'center', 

           
      }}>
          <h2>Sign Up To Recieve Member Only Text</h2>
          <div className="buttonContainer">
          <button onClick={handleRevealFormClick} style={{ display: showForm ? 'none' : 'block' }}>
            Take A Hit First
          </button>
          </div>
        </Box>
        
       
        {showForm && <SMSForm />}
      </Paper>
      <PlayButton />
    </Container>
  );
}

export default Home;
