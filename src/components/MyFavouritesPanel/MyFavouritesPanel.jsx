import React from 'react';
import { Grid, Button } from '@mui/material';

const MyFavouritesPanel = ({ myFavourites, clearMyFavourites }) => {
  return (
    <Grid container direction="column" style={{ overflowY: 'scroll' }}>
      <Grid item>
        <h2>My Favourites: {myFavourites.length}</h2>
        <Button variant="contained" onClick={clearMyFavourites}>
          Clear
        </Button>
      </Grid>
      {myFavourites.map((article, index) => (
        <Grid item key={index}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyFavouritesPanel;
