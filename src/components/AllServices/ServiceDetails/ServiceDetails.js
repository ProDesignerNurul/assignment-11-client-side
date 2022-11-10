import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    const {_id,image_url, title, details, price } = service;
    console.log(service);
    

    return (

        
        <div className='service-details'>
            <img src={image_url} alt="" />
            <h2 className='text-3xl my-5'>{title}</h2>
            <p>{details.slice(0, 100)} ..... <div className=""></div>`</p>
            <p className='flex justify-start mb-4 font-semibold'>Service Price : <span className='text-red-500 font-bold'>{price} </span> TK </p>
            <Link to={`/sixservices/${_id}`}> <button className="btn btn-outline btn-warning w-full">Click For See More Information</button> </Link>
            
            
        </div>
    );
};

export default ServiceDetails;