import React from 'react';
import { Grid, Button, LinearProgress } from '@mui/material';
import NewsItem from '../NewsItem/NewsItem';

const DisplayResults = ({ news, isLoading, loadMore, addToFavourites }) => {
  return (
    <div>
      {isLoading && <LinearProgress />}
      <Grid container spacing={2}>
        {news.map((article, index) => (
          <Grid item xs={4} key={index}>
            <NewsItem article={article} addToFavourites={addToFavourites} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={loadMore}>
        Load More
      </Button>
    </div>
  );
};

export default DisplayResults;
