import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { fetchGetMovieCast } from "../../services/movies-api";
import defaultImage from "../../images/defaultImage.jpg";

import { CastSection, StyledCard, StyledPhoto, StyledName } from "../Cast/Cast.styled";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
    const { movieId } = useParams();
    const [castDetals, setCastDetals] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchGetMovieCast(movieId)
            .then(data => { setCastDetals(data.cast) })
            .catch(error => { setError(error) });
    }, [movieId]);

    return (
        <CastSection>
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