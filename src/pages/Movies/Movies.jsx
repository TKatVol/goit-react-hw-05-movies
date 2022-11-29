import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSearchMovies } from "../../services/movies-api";
import { MovieList } from "../../components/MovieList/MovieList";

import { StyledContainer, SearchForm, SearchFormButton, SearchFormInput } from "../Movies/Movies.styled";

const Movies = () => {
    const [movies, setMovies] = useState(null);
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

        fetchSearchMovies(queryParams).then(({ results }) => {
            if (results.length === 0) {
                clearMoviesList();
                alert('Oops.. Not found!');
                return;
            };

            setMovies(results);
        });
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
                       
            {queryParams && movies && < MovieList movies={movies} />}
            
        </StyledContainer>
    )
};

export default Movies;