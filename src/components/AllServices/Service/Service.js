import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/services`)
        .then( res => res.json())
        .then( data => {
            setServices(data);
        })
    } , [])

    return (
        <div>
            
            <h2 className='text-6xl mb-7 font-semibold text-red-500'>My <span className='text-blue-500'>Ride</span> Service</h2>
            <div className='grid grid-cols-3 gap-10 w-11/12 mx-auto'>
                {
                    services.map( service => <ServiceDetails
                    key={service._id}
                    service={service}
                    ></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Service;