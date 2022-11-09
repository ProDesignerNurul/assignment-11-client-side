import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/UserContext';
import AllReviews from './AllReviews';

const MyReview = () => {

    const {user} = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then( res => res.json())
        .then( data => setReviews(data))
    } , [user?.email])

    return (
        <div>
            <h2 className='text-4xl'>My Review : {reviews.length}</h2>
            <div>
                {
                    reviews.map( review => <AllReviews
                    key={review._id}
                    review={review}
                    ></AllReviews>)
                }
            </div>
        </div>
    );
};

export default MyReview;