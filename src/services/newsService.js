import axios from 'axios';

// Replace with your actual API key

const fetchNews = async (keyword, page) => {

  const API_KEY = '7ada10b497f14909ae8fff18ab391f65';
  const url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=publishedAt&q=${keyword}&pageSize=28&page=${page}&language=en`;


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
