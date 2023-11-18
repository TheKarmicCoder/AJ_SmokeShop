
import SMSForm from './SMSForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import NeonText from "./NeonText";
import SmokeText from "./SmokeText"

function Home() {
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
          borderRadius: '10px', // Add border-radius for a smoother look
          background: 'transparent',
          borderImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1',
        }}
      >
       
        <SMSForm />
      </Paper>
    </Container>
  );
}

export default Home;
