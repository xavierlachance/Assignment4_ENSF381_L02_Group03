import React from 'react';
import './HomeMainSection.css';
import reviews from '../data/reviews';

function HomeMainSection() {
    return (
        <div>
            <h1>
                Customer Reviews
            </h1>
            {reviews.map((review, index) => (
                <div key={index}>
                    <p>{review.productName}</p>
                    <p>{review.customerName}</p>
                    <p>{review.reviewContent}</p>
                    <p>Rating: {"⭐".repeat(review.stars)}</p>
                </div>
            ))}
        </div>
    );
}

export default HomeMainSection;