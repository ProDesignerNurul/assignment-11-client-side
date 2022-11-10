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

    const handleDelete = id => {
        const proceed = window.confirm(`Are You Sure, You Want to Delete This Item`);
        if(proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
            .then( res => res.json())
            .then( data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    alert(`Deleted Successfully`);
                    const remaining = reviews.filter( review => review._id !== id);
                    setReviews(remaining);


                }
            })
        }
    }

    return (
        <div>
            <h2 className='text-5xl text-red-500 font-bold my-8'>My All <span className='text-green-400'>Review</span> Below</h2>
            <div className='lg:w-2/4 mx-auto gap-3'>
                {
                    reviews.map( review => <AllReviews
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                    ></AllReviews>)
                }
            </div>
        </div>
    );
};

export default MyReview;