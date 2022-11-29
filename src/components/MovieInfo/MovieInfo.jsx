import PropTypes from "prop-types";
import { StyledCard, StyledPoster, Wrapper, StyledText } from "../MovieInfo/MovieInfo.styled";
import defaultImage from "../../images/defaultImage.jpg";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieInfo = ({ movie }) => {
    const { poster_path, original_title, release_date, vote_average, overview, genres } = movie;

    const imgSrc = poster_path === null ? defaultImage : IMG_URL + poster_path;
    const date = release_date === "" ? null : `(${release_date.slice(0, -6)})`;
    const userScore = Math.round(vote_average);
    const genresType = genres.map(({ name }) => { return name }).splice(0.3).join(' ');
       
    return (
        <StyledCard>
            <StyledPoster src={imgSrc} alt={original_title} width="240" height="340" />
            <Wrapper>
                <h1>{original_title}  {date}</h1>
                <StyledText>User Score: {userScore}</StyledText>
                <h2>Overview:</h2>
                <StyledText>{overview}</StyledText>
                <h2>Genres:</h2>
                <StyledText>{genresType}</StyledText>
            </Wrapper>
        </StyledCard>
    );
};

export default MovieInfo;

MovieInfo.propTypes = {
    movies: PropTypes.object,
};