
import { useLocation, useParams, Link, Outlet} from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { ColorRing } from "react-loader-spinner";
import { fetchGetMovieDetails} from "../../services/movies-api";
import { StyledContainer, GoBackButton, AdditionalSection, Title} from "../MovieDetails/MovieDetails.styled";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

const MovieDetails = () => {
    const location = useLocation();
    const { movieId } = useParams();
    const [movieDetals, setMovieDetals] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const href = useRef({
        pathname: location.state?.from.pathname ?? "",
        search: location.state?.from.search ?? "",
    });
   
    useEffect(() => {
        setLoading(true);
        fetchGetMovieDetails(movieId)
            .then(data => { setMovieDetals(data) })
            .catch(error => { setError(error) })
            .finally(() => setLoading(false));
    }, [movieId]);

    const { pathname, search } = href.current;

    const backLinkHref = `${pathname}${search}` === ""
        ? "/"
        : `${pathname}${search}`;
          
    return (
        <StyledContainer>
            <GoBackButton to={backLinkHref}>Go Back</GoBackButton>
            
            <ColorRing
                visible={loading}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
                       
                {movieDetals && (
                <>
                    <MovieInfo movie={movieDetals} />
                                           
                    <AdditionalSection>
                        <Title>Additional information</Title>
                        <Link to={"cast"}>Cast</Link>
                        <Link to={"reviews"}>Reviews</Link>
                    </AdditionalSection>
                    <Suspense fallback={null}>
                        <Outlet />  
                    </Suspense>    
                </>   
            )}
                             
            {error && <ErrorMessage message={error.message} />}
        </StyledContainer>
    )
};

export default MovieDetails;