import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { fetchTrendingMovies } from "../../services/movies-api";
import { MoviesList } from "../../components/MoviesList/MoviesList";

import { StyledContainer } from "../Home/Home.styled";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetchTrendingMovies()
            .then(movies => { setMovies(movies.results) })
            .finally(() => setLoading(false));
    }, []);

    return (
        <StyledContainer>
            <h1>Trending today</h1>
            <ColorRing
                visible={loading}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            <MoviesList movies={movies} />
        </StyledContainer>
    );
};

export default Home;