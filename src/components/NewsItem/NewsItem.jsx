import React from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography, Button, Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const NewsItem = ({ article, addToFavourites }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        },
        '&:hover .hover-content': {
          display: 'block',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={article.urlToImage || 'default-image.jpg'} // Use a fallback image if none is provided
        alt={article.title}
        sx={{
          width: '100%',
          height: 140,
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Avatar sx={{ bgcolor: '#f44336', marginRight: 1 }}>
            {article.source.name.charAt(0)}
          </Avatar>
          <Typography sx={{ fontSize: '0.9rem', color: '#999' }}>
            {article.source.name}
          </Typography>
        </div>
        <Typography sx={{ fontSize: '0.8rem', color: '#999', marginBottom: '10px' }}>
          {new Date(article.publishedAt).toLocaleDateString()}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#333',
            marginBottom: '10px',
            minHeight: '48px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}
        >
          {article.title}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: 'none',
            textTransform: 'none',
            width: '100%',
            marginBottom: '10px',
          }}
          className="hover-content"
          component={Link}
          to={article.url}
          target="_blank"
        >
          Read Article
        </Button>
      </CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          sx={{
            color: '#f44336',
          }}
          onClick={() => addToFavourites(article)}
        >
          <FavoriteIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default NewsItem;
