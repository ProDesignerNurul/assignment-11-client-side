import React, { useEffect, useState } from 'react';

const AllReviews = ({review}) => {
    const {message, service} = review;

    

    console.log(review)

    return (
        <div className='border border-red-400 rounded-md p-5 my-5'>
            
            <h2> My reviews : {message}</h2>
        </div>
    );
};

export default AllReviews;