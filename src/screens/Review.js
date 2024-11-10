// src/components/Review.js

import React, { useState } from 'react';
import Rating from 'react-rating';
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/actions/productActions';

const Review = ({ product }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    function sendReview() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            alert('You need to log in to submit a review.');
            return;
        }

        const reviews = product.reviews || [];
        const alreadyReviewed = reviews.some(review => review.userid === currentUser._id);

        if (alreadyReviewed) {
            alert('You have already reviewed this product.');
        } else {
            const review = {
                rating: rating,
                comment: comment,
                userid: currentUser._id
            };
            dispatch(addReview(review, product._id));
        }
    }

    return (
        <div>
            <h1>Give Your Review</h1>
            <Rating
                style={{ color: 'orange' }}
                initialRating={rating}
                emptySymbol={<i className="far fa-star" />}
                fullSymbol={<i className="fas fa-star" />}
                onChange={(value) => setRating(value)}
            />
            <input
                type="text"
                className="form-control mt-2"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button className="btn mt-3" onClick={sendReview}>
                SUBMIT REVIEW
            </button>
            <hr />

            <div>
                <h1>Latest Reviews</h1>
                {product.reviews && product.reviews.length > 0 ? (
                    product.reviews
                        .slice(-2)  // Get the last two reviews
                        .map((review, index) => (
                            <div key={index}>
                                <Rating
                                    style={{ color: 'orange' }}
                                    initialRating={review.rating}
                                    emptySymbol={<i className="far fa-star" />}
                                    fullSymbol={<i className="fas fa-star" />}
                                    readonly
                                />
                                <p>{review.comment} <br />
                                   By: {review.name}</p>
                            </div>
                        ))
                ) : (
                   
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default Review;
