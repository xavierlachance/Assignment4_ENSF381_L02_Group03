import React, { useState, useEffect } from 'react';
import './HomeMainSection.css';
import reviews from '../data/reviews';
import { Link } from 'react-router-dom';

/*
Use Effect version which I first implemented.
Then after taking a look at some alternatives,
I decided to go with the second version.
*/

// function HomeMainSection() {
//     const [selectedReviews, setSelectedReviews] = useState([]);

//     useEffect(() => {
//         const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
//         const selected = shuffledReviews.slice(0, 2);
//         setSelectedReviews(selected);
//     }, []);

//     return (
//         <div>
//             <h1>
//                 Customer Reviews
//             </h1>
//             {selectedReviews.map((review, index) => (
//                 <div key={index}>
//                     <p>{review.productName}</p>
//                     <p>{review.customerName}</p>
//                     <p>{review.reviewContent}</p>
//                     <p>Rating: {"⭐".repeat(review.stars)}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

function HomeMainSection() {
    // This is a more concise version of the previous implementation.
    const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
    let selectedReviews = shuffledReviews.slice(0, 2);

    return (
        <div>
            <div className='HomeMainSection-about'>
                <h1>
                    About Us
                </h1>
                <p>
                    Welcome to our online store!
                    We are passionate about providing high-quality products and exceptional customer service.
                    Learn more about our story and commitment to your satisfaction.
                </p>
                <button>
                    <Link to="/products" className="button-link">Shop Now</Link>
                </button>
            </div>
            <div className='HomeMainSection-reviews'>
                <h1>
                    Customer Reviews
                </h1>
                {selectedReviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.productName}</p>
                        <p>{review.customerName}</p>
                        <p>{review.reviewContent}</p>
                        <p>Rating: {"⭐".repeat(review.stars)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeMainSection;