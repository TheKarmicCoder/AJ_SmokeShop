import React, { useState } from 'react';
import SMSForm from './SMSForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import NeonText from './NeonText';
import SmokeText from './SmokeText';

function Home() {
  const [showSMSForm, setShowSMSForm] = useState(false);
  const [playBackgroundVideo, setPlayBackgroundVideo] = useState(false);

  const handleBecomeMemberClick = () => {
    setShowSMSForm(true);

    // Start playing the background video for mobile
    setPlayBackgroundVideo(true);
  };

  return (
    <Container maxWidth="sm">
      <NeonText />
      <SmokeText />
      <Paper
        elevation={3}
        sx={{
          padding: '20px',
          marginTop: 'rem',
          border: '2px solid',
          borderRadius: '10px',
          background: 'transparent',
          borderImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1',
        }}
      >
        <Box sx={{ color: 'white', textAlign: 'center' }}>
          <h2>Become a Member for exclusive messaging</h2>
          {!showSMSForm && (
            <button onClick={handleBecomeMemberClick}>Become a Member</button>
          )}
        </Box>
        {showSMSForm && <SMSForm />}
      </Paper>
    </Container>
  );
}

export default Home;
