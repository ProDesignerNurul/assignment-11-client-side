import React from 'react';
import one from '../../images/cerousel-img/one.jpg';
import tow from '../../images/cerousel-img/tow.jpg';
import tree from '../../images/cerousel-img/tree.jpg';
import four from '../../images/cerousel-img/four.jpg';
import './Home.css';
import Service from '../AllServices/Service/Service';
import img1 from '../../images/secondSection/1.jpg';
import img2 from '../../images/secondSection/2.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            <div>
                <div className="carousel w-11/12 mx-auto  h-">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img alt="" src={one} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img alt="" src={tow} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img alt="" src={tree} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img alt="" src={four} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div> 
            <hr className='mt-28' />

            <div className='my-20'>
                <Service></Service>
                <button className="btn btn-outline btn-warning mt-10 text-2xl px-14"><Link to="/six-service-details"> See More Services</Link> </button>
            </div>
                    <hr />

            {/* second section  below */}
                <h2 className="text-6xl mb-6 mt-12 font-bold"> Service Finding <span className='text-red-500'>Information</span> </h2>
            <div className='grid lg:grid-cols-2 lg:w-11/12 mx-auto mb-10 second-section border border-gray-500 p-8 rounded-lg'>
                <div>
                    <img className='w-4/5 rounded-lg border border-red-500' src={img1} alt="" />
                </div>

                <div className='flex justify-center items-center'>
                    <div className='second-sec-info border border-red-600 p-40 rounded-xl'>
                        <h2 className='text-4xl mb-5'>How To Find My Service</h2>
                        <p className='text-gray-400 text-lg lg:w-4/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quae quo nulla esse ab, officia veniam modi, eos obcaecati assumenda totam adipisci dolorem sed. Neque, temporibus non? Nobis illum perferendis eius dignissimos quam quae consectetur, necessitatibus veritatis cumque consequatur corporis eligendi? Dolorem quae eligendi vitae magni ab tenetur tempora sequi!</p>
                        
                        <button className="btn btn-outline btn-warning mt-5">See More Information</button>
                    </div>
                </div>
            </div>


                    <hr className='my-28' />


            <div className='w-11/12 mx-auto'> 
                <h2 className="text-6xl font-bold pb-5 rounded-lg p-4 long-time-purchase"> <span className='text-red-400'>Long Time</span> Purchase Details</h2>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 my-10'>
                    <div className='long-time-purchase border border-red-400 p-4 rounded-lg'>
                        <h2 className="text-2xl"> 1 Day Booking</h2>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> Price : <span className='text-red-500'> 200 </span> TAKA </p>
                    </div>

                    <div className='long-time-purchase border border-red-400 p-4 rounded-lg'>
                        <h2 className="text-2xl"> 1 Day Booking</h2>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> Price : <span className='text-red-500'> 200 </span> TAKA </p>
                    </div>

                    <div className='long-time-purchase border border-red-400 p-4 rounded-lg'>
                        <h2 className="text-2xl"> 1 Day Booking</h2>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> Price : <span className='text-red-500'> 200 </span> TAKA </p>
                    </div>

                    <div className='long-time-purchase border border-red-400 p-4 rounded-lg'>
                        <h2 className="text-2xl"> 1 Day Booking</h2>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> Price : <span className='text-red-500'> 200 </span> TAKA </p>
                    </div>

                    <div className='long-time-purchase border border-red-400 p-4 rounded-lg'>
                        <h2 className="text-2xl"> 1 Day Booking</h2>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> Price : <span className='text-red-500'> 200 </span> TAKA </p>
                    </div>

                    <div className='long-time-purchase border border-red-400 p-4 rounded-lg'>
                        <h2 className="text-2xl"> 1 Day Booking</h2>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> Price : <span className='text-red-500'> 200 </span> TAKA </p>
                    </div>

                    <div className='long-time-purchase border border-red-400 p-4 rounded-lg'>
                        <h2 className="text-2xl"> 1 Day Booking</h2>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> Price : <span className='text-red-500'> 200 </span> TAKA </p>
                    </div>

                    <div className='long-time-purchase border border-red-400 p-4 rounded-lg'>
                        <h2 className="text-2xl"> 1 Day Booking</h2>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> feature One </p>
                        <p> Price : <span className='text-red-500'> 200 </span> TAKA </p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Home;