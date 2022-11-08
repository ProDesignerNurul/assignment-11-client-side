import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleServiceDetails = () => {
    const singleServiceDetails = useLoaderData();
    console.log(singleServiceDetails)
    return (
        <div>
            <h2>Single Service Details</h2>
        </div>
    );
};

export default SingleServiceDetails;