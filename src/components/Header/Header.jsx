import React, { useState } from 'react';
import { Grid, TextField, Chip } from '@mui/material';
import OrangeButton from '../custom-components/OrangeButton';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../images/background.jpg'; // Import the image

const Header = ({ handleSetKeyword, userName, setIsLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    handleSetKeyword(searchTerm);
  };

  const handleLogout = () => {
    // Clear login state from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');

    // Update App state
    setIsLoggedIn(false);

    // Redirect to login page
    navigate('/');
  };

  return (
    <div style={{ ...styles.headerContainer, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>find.My.News :)</h1>
      </div>
      <div style={styles.searchContainer}>
        <TextField
          label="What do you want to search? (Ex: Bitcoin)"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <OrangeButton onClick={handleSearch} style={styles.searchButton}>
          Search for News
        </OrangeButton>
      </div>
      <div style={styles.userContainer}>
        <Chip label={userName} style={styles.userChip} />
        <OrangeButton onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </OrangeButton>
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: 'cover', // Ensures the image covers the entire header
    backgroundPosition: 'center', // Center the background image
    color: 'white', // Ensure text is visible over the image
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white', // Text color to contrast with the background image
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: '20px',
    marginRight: '20px',
    maxWidth: '600px', // Adjust the width to match the image
  },
  searchInput: {
    marginRight: '10px',
    backgroundColor: 'white',
    borderRadius: '4px',
  },
  searchButton: {
    backgroundColor: '#FF6600',
    color: 'white',
    height: '56px',
    minWidth: '150px',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  userChip: {
    marginRight: '10px',
    backgroundColor: '#FF6600',
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF6600',
    color: 'white',
  },
};

export default Header;
