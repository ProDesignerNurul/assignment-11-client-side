import React, { useEffect, useState } from 'react';

const AllReviews = ({review}) => {
    const {message, service} = review;

    

    console.log(review)

    return (
        <div>
            
            <h2> My reviews : {message}</h2>
        </div>
    );
};

export default AllReviews;