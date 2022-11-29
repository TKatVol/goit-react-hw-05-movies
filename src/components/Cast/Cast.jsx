import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { fetchGetMovieCast } from "../../services/movies-api";
import defaultImage from "../../images/defaultImage.jpg";

import { CastSection, StyledCard, StyledPhoto, StyledName } from "../Cast/Cast.styled";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
    const { movieId } = useParams();
    const [castDetals, setCastDetals] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        fetchGetMovieCast(movieId)
            .then(data => { setCastDetals(data.cast) })
            .catch(error => { setError(error) })
            .finally(() => setLoading(false));
    }, [movieId]);

    return (
        
        <CastSection>
            <ColorRing
                visible={loading}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            
            {castDetals &&
                <ul>
                    {castDetals.map(({ id, original_name, profile_path, character }) => {
                        const imgSrc = profile_path === null ? defaultImage : IMG_URL + profile_path;
                        
                        return (
                            <li key={id}>
                                <StyledCard>
                                    <StyledPhoto src={imgSrc} alt={original_name} width="100" />
                                    <StyledName>{original_name}</StyledName>
                                    <p>Character: {character}</p>
                                </StyledCard>
                            </li>
                        );
                    })}
                </ul>
            }
           
            {error && <ErrorMessage message={error.message} />}
        </CastSection >
    );
};

export default Cast;