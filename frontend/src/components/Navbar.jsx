// src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import MailIcon from '@mui/icons-material/Mail';
import '../scss/navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <AppBar position="static" sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      "@media screen and (max-width: 600px)": {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      },
      "@media screen and (min-width: 601px)": {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
      }
    }}>
      <Toolbar className="toolbar">
        <div className="brand">
          <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '10px', display: 'none' }}>
            AJ's SmokeShop
          </Link>
        </div>
        <div className="links">
          <IconButton className="iconButton" sx={{ margin: '-8px' }}>
            <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>
              <HomeIcon />
            </Link>
          </IconButton>
          <IconButton className="iconButton" sx={{ margin: '-8px' }}>
            <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
              <StoreIcon />
            </Link>
          </IconButton>
          <IconButton className="iconButton" sx={{ margin: '-8px' }}>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
              <MailIcon />
            </Link>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
