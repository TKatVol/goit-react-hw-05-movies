
import { useLocation, useParams, Link, Outlet} from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import { fetchGetMovieDetails} from "../../services/movies-api";
import { StyledContainer, GoBackButton, AdditionalSection, Title} from "../MovieDetails/MovieDetails.styled";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

const MovieDetails = () => {
    const location = useLocation();
    const { movieId } = useParams();
    const [movieDetals, setMovieDetals] = useState(null);
    const [error, setError] = useState('');
    
    const href = useRef({
        pathname: location.state?.from.pathname ?? "",
        search: location.state?.from.search ?? "",
    });
   
    useEffect(() => {
        fetchGetMovieDetails(movieId)
            .then(data => { setMovieDetals(data) })
            .catch(error => { setError(error) });
    }, [movieId]);

    const { pathname, search } = href.current;

    const backLinkHref = `${pathname}${search}` === ""
        ? "/"
        : `${pathname}${search}`;
          
    return (
        <StyledContainer>
            
            <GoBackButton to={backLinkHref}>Go Back</GoBackButton>
            
            {movieDetals && (
                <>
                    <MovieInfo movie={movieDetals} />
                       
                    <AdditionalSection>
                        <Title>Additional information</Title>
                        <Link to={"cast"}>Cast</Link>
                        <Link to={"reviews"}>Reviews</Link>
                    </AdditionalSection>
                    <Outlet />   
                </>   
            )}
                             
            {error && <ErrorMessage message={error.message} />}
        </StyledContainer>
    )
};

export default MovieDetails;