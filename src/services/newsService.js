import axios from 'axios';

// Replace with your actual API key

const fetchNews = async (keyword, page) => {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_API_URL;

  // Construct the URL dynamically
  const url = `${BASE_URL}?apiKey=${API_KEY}&sortBy=publishedAt&q=${keyword}&pageSize=28&page=${page}&language=en`;


  try {
    const response = await axios.get(url);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return { articles: [] }; // Return an empty array if there's an error
  }
};

export default fetchNews;
