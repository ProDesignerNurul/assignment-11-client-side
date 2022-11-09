import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SixServicesDetails from '../SixServicesDetails/SixServicesDetails';
import './SixService.css';

const SixServices = () => {
    const {title, image_url, details, rating, total_view} = useLoaderData();


    // const [services, setServices] = useState([]);

    // useEffect( () => {
    //     fetch(`http://localhost:5000/six-services-details`)
    //     .then( res => res.json())
    //     .then( data => {
    //         setServices(data);
    //     })
    // } , [])

    return (
        <div>
            <h2 className='text-5xl mb-5 font-bold'>Our All <span className='text-purple-500'>Ride Sharing</span> Services Below </h2>

            <div className='border border-purple-500 p-8 mx-96 rounded-lg mb-20'>
            <img className='mx-auto rounded-lg' src={image_url} alt="" />
            <h2 className='text-4xl m-3'>{title}</h2>
            <h2 className='text-xl text-justify'>{details}</h2>
            <div className='flex justify-between'>
                <p className='text-red-400 mt-4'>Ratings : {rating?.number}</p>
                <p className='text-red-400 mt-4'>Total Service : {total_view}</p>
                <p className='text-red-400 mt-4'>Feedback : {rating?.badge}</p>
            </div>
            </div>

            {/* <div className='grid grid-cols-3 gap-10 w-11/12 mx-auto mb-20'> */}
                {/* {
                    services.map( service => <SixServicesDetails
                    key={service._id}
                    service={service}
                    ></SixServicesDetails>)
                } */}
            {/* </div> */}

        </div>
    );
};

export default SixServices;