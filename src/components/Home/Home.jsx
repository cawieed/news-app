import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import MyFavouritesPanel from '../MyFavouritesPanel/MyFavouritesPanel';
import DisplayResults from '../display-results/DisplayResults';
import fetchNews from '../../services/newsService';

const Home = ({ setIsLoggedIn }) => {
  const [keyword, setKeyword] = useState('');
  const [news, setNews] = useState([]);
  const [myFavourites, setMyFavourites] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName'); // Assume the user is logged in

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      const searchKeyword = keyword || 'latest'; // Use a default keyword like 'latest' if keyword is empty
      const data = await fetchNews(searchKeyword, page);
      setNews((prevNews) => [...prevNews, ...data.articles]);
      setIsLoading(false);
    };

    loadNews();
  }, [keyword, page]);

  const handleSetKeyword = (newKeyword) => {
    setKeyword(newKeyword);
    setPage(1); // Reset page to 1 for new searches
    setNews([]); // Clear previous results
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const addToFavourites = (article) => {
    setMyFavourites((prevFavourites) => [...prevFavourites, article]);
  };

  const clearMyFavourites = () => {
    setMyFavourites([]);
  };

  return (
    <Grid container direction="column">
      <Grid item lg={1}>
        <Header
          handleSetKeyword={handleSetKeyword}
          userName={userName}
          setIsLoggedIn={setIsLoggedIn} // Pass the setIsLoggedIn function here
        />
      </Grid>
      <Grid item lg={11}>
        <Grid container direction="row" style={{ height: '100%' }}>
          <Grid item lg={2.5}>
            <MyFavouritesPanel
              myFavourites={myFavourites}
              clearMyFavourites={clearMyFavourites}
            />
          </Grid>
          <Grid item lg={9.5}>
            <DisplayResults
              news={news}
              isLoading={isLoading}
              loadMore={loadMore}
              addToFavourites={addToFavourites}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
