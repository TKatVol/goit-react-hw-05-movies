import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { fetchSearchMovies } from "../../services/movies-api";
import { MoviesList } from "../../components/MoviesList/MoviesList";

import { StyledContainer, SearchForm, SearchFormButton, SearchFormInput } from "../Movies/Movies.styled";

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = searchParams.get("query");
        
    const handleSubmit = event => {
        event.preventDefault();
        const value = event.target.elements.query.value.toLowerCase().trim();
        if (value === '') {
            clearMoviesList();
            return alert("What are you looking for? Type something :)");
        };
        setSearchParams(value !== '' ? { query: value } : {});
        event.target.reset();
    };

    useEffect(() => {
        if (!queryParams) {
            return;
        };

        setLoading(true);

        fetchSearchMovies(queryParams)
            .then(({ results }) => {
                if (results.length === 0) {
                    clearMoviesList();
                    alert('Oops.. Not found!');
                    return;
                };

                setMovies(results);
            })
            .finally(() => setLoading(false));
    }, [queryParams]);

    const clearMoviesList = () => {
        setMovies([]);
    };
       
    return (
        <StyledContainer>
            <SearchForm onSubmit={handleSubmit} >
                <SearchFormInput
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
                <SearchFormButton type="submit">Search</SearchFormButton>
            </SearchForm>

            <ColorRing
                visible={loading}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />

            {queryParams && movies && < MoviesList movies={movies} />}
            
        </StyledContainer>
    )
};

export default Movies;