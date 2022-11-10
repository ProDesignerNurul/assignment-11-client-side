import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import TotalServiceDetails from '../TotalServiceDetails/TotalServiceDetails';
import './SixServicesDetails.css';

const SixServicesDetails = () => {

    useTitle('All Services')

    const [sixServices, setSixServices] = useState([]);

    useEffect( () => {
        fetch(`https://assignment-11-server-prodesignernurul.vercel.app/all-services`)
        .then( res => res.json())
        .then( data => {
            console.log(data)
            setSixServices(data)
        })
    } , [])



    return (
        <div>
            <h2 className='text-5xl mb-5 font-bold'>My All <span className='text-purple-500'>Ride Sharing</span> Services Below </h2>
            <div className='total-service-details grid grid-cols-3 gap-10 w-11/12 mx-auto mb-20'>
                {
                    sixServices.map( service => <TotalServiceDetails
                    key={service._id}
                    service={service}
                    ></TotalServiceDetails>)
                }
            </div>
        </div>
    );
};

export default SixServicesDetails;