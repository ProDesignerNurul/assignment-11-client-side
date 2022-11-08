import React, { useEffect, useState } from 'react';
import SixServicesDetails from '../SixServicesDetails/SixServicesDetails';
import './SixService.css';

const SixServices = () => {


    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/sixservices`)
        .then( res => res.json())
        .then( data => {
            setServices(data);
        })
    } , [])

    return (
        <div>
            <h2 className='text-5xl mb-5 font-bold'>Our All <span className='text-purple-500'>Ride Sharing</span> Services Below </h2>

            <div className='grid grid-cols-3 gap-10 w-11/12 mx-auto mb-20'>
                {
                    services.map( service => <SixServicesDetails
                    key={service._id}
                    service={service}
                    ></SixServicesDetails>)
                }
            </div>

        </div>
    );
};

export default SixServices;