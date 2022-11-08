import React from 'react';
import { Link } from 'react-router-dom';

const SixServicesDetails = ({service}) => {

    const {name, img, details} = service;

    return (
        <div className='service-details'>
            <img src={img} alt="" />
            <h2 className='text-3xl my-5'>{name}</h2>
            <p>`{details.slice(0, 100)} <div className=""></div>`</p>
            <Link to=""> <button className="btn btn-outline btn-warning w-full">Click For See All Details</button> </Link>
            
            
        </div>
    );
};

export default SixServicesDetails;