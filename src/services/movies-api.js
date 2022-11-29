const API_KEY = 'a054d8c11346494a17ab5d0edb325506';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async() => {
    const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
   
    return await response.json();
};

export const fetchSearchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
        throw new Error('Oops.. Something went wrong. Please try again later...');
    };
  
    return await response.json();
};

export const fetchGetMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Oops.. Something went wrong. Please try again later...');
    };

    return await response.json();
};

export const fetchGetMovieCast = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Oops.. Something went wrong. Please try again later...');
    };

    return await response.json();
};

export const fetchGetMovieReviews = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Oops.. Something went wrong. Please try again later...');
    };

    return await response.json();
};
