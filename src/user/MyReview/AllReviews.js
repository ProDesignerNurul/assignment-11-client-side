import React, { useEffect, useState } from 'react';

const AllReviews = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, message, service, status } = review;

    // const [reviews, setReviews] = useState([]);

    // const handleDelete = id => {
    //     const proceed = window.confirm(`Are You Sure, You Want to Delete This Item`);
    //     if(proceed) {
    //         fetch(`http://localhost:5000/review/${id}`, {
    //             method: 'DELETE'
    //         })
    //         .then( res => res.json())
    //         .then( data => {
    //             console.log(data);
    //             if(data.deletedCount > 0) {
    //                 alert(`Deleted Successfully`);
    //                 const remaining = reviews.filter( review => review._id !== id);
    //                 setReviews(remaining);


    //             }
    //         })
    //     }
    // }


    console.log(review)

    return (
        <div className='border border-red-400 rounded-md p-5 my-5'>

            <h2> My reviews : {message}</h2>
            <div className='flex justify-center items-center gap-4 mt-3'>

                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <button onClick={ () => handleStatusUpdate(_id)} className="btn btn-outline btn-success">{status ? status : 'Updated'}</button>

            </div>
        </div>
    );
};

export default AllReviews;