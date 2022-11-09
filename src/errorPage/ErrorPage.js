import React from 'react';
import errorImg from '../images/404img/404img.jpg';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;