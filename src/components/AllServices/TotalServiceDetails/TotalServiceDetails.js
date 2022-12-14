import React from 'react';
import { Link } from 'react-router-dom';
import './TotalServiceDetails.css';

const TotalServiceDetails = ({service}) => {

    const {_id, title, image_url, details, price} = service;

    console.log(service)

    return (
        <div className='total-section '>
            
            <img src={image_url} alt="" />
            <h2 className='text-2xl'>{title}</h2>
            <p>{details.slice(0, 100)} .....</p>
            <p className='flex justify-start my-4 font-semibold'>Service Price : <span className='text-red-500 font-bold'>{price} </span> TK </p>
            <Link to={`/sixservices/${_id}`}> <button className="btn btn-outline btn-warning w-full">Click For See More Information</button> </Link>
        </div>
    );
};

export default TotalServiceDetails;