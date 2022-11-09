import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/UserContext';
import SixServicesDetails from '../SixServicesDetails/SixServicesDetails';
import './SixService.css';

const SixServices = () => {
    const { _id, title, image_url, details, rating, total_view} = useLoaderData();
    const {user} = useContext(AuthContext);


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            email,
            message
        }

        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data.acknowledged) {
                alert('Review Success');
                form.reset();
            }
        })
        .catch(err => console.error(err))

    }

    return (
        <div>
            <h2 className='text-5xl mb-5 font-bold'>My <span className='text-purple-500'>Ride Sharing</span> Services Details Below </h2>

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

            <div className='w-3/5 mx-auto my-20'>

            <form onSubmit={handleReview}>
            <h2 className='flex justify-start mb-3 text-2xl'> <span className='text-red-400'>Review on :-- </span>  {title}</h2>
            <input type="email" name="email" placeholder="Type here" defaultValue={user?.email} readOnly className="input input-bordered input-primary w-full hidden" />
            <textarea name="message" className="textarea textarea-primary w-2/4 flex justify-start h-28" placeholder="Enter Your Feedback On This Service" required ></textarea>
            <button className='flex justify-start btn btn-outline btn-warning my-3' type="submit">Submit Your Review</button>
            </form>

            </div>

        </div>
    );
};

export default SixServices;