import axios from 'axios';
const API_KEY = '2458b78fc78c2faaef19c7dfe7e5ebeb';

const API_TRENDING = 'https://api.themoviedb.org/3/trending/movie/day';
// console.log(API_TRENDING);

export const getTrandingMovies = async page => {
  const { data } = await axios.get(API_TRENDING, {
    params: {
      api_key: API_KEY,
      page: page,
      per_page: 10,
    },
  });
  return data;
};
