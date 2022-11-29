import PropTypes from "prop-types";
import { Link, Outlet, useLocation } from "react-router-dom";
import { StyledContainer } from "../MovieList/MovieList.styled";

export const MovieList = ({ movies }) => {
    const location = useLocation();
    
    return (
        <StyledContainer>
            {movies.map(({ id, title, name }) => {
                return (
                    <Link to={`/movies/${id}`} state={{ from: location }} key={id}> {title ?? name}</Link>
                );
            })}
            <Outlet />
        </StyledContainer>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array,
};