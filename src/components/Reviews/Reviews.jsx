import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { fetchGetMovieReviews } from "../../services/movies-api";

import { ReviewsSection } from "../Reviews/Reviews.styled";

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        fetchGetMovieReviews(movieId)
            .then(({ results }) => { setReviews(results) })
            .catch(error => { setError(error) })
            .finally(() => setLoading(false));
    }, [movieId]);

    return (
        <ReviewsSection>
            <ColorRing
                visible={loading}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />

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