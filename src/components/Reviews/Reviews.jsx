import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { fetchGetMovieReviews } from "../../services/movies-api";

import { ReviewsSection } from "../Reviews/Reviews.styled";

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchGetMovieReviews(movieId)
            .then(({ results }) => { setReviews(results) })
            .catch(error => { setError(error) });
    }, [movieId]);

    return (
        <ReviewsSection>
            {reviews && reviews.length > 0 &&
                (<ul>
                    {
                        reviews.map(({ id, author, content }) => {
                    
                            return (
                                <li key={id}>
                                    <h3>{author}</h3>
                                    <p>{content}</p>
                                </li>
                                );
                            })
                    }
                </ul>)}

            {reviews && reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}  
                      
            {error && <ErrorMessage message={error.message}/>}
        </ReviewsSection>
    );
};

export default Reviews;