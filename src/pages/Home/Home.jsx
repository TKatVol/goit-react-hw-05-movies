import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/movies-api";
import { MovieList } from "../../components/MovieList/MovieList";

import { StyledContainer } from "../Home/Home.styled";

const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(movies => { setMovies(movies.results) })
    }, []);

    return (
        <StyledContainer>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </StyledContainer>
    );
};

export default Home;