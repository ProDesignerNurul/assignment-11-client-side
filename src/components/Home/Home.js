import React from 'react';
import one from '../../images/cerousel-img/one.jpg';
import tow from '../../images/cerousel-img/tow.jpg';
import tree from '../../images/cerousel-img/tree.jpg';
import four from '../../images/cerousel-img/four.jpg';
import './Home.css';
import Service from '../AllServices/Service/Service';
import img1 from '../../images/secondSection/1.jpg';
import img2 from '../../images/secondSection/2.jpg';

const Home = () => {
    return (
        <div>

            <div>
                <div className="carousel w-11/12 mx-auto lg:h-screen h-">
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

            <div className='my-20'>
                <Service></Service>
            </div>


            {/* second section  below */}
            <div className='grid lg:grid-cols-2 lg:w-11/12 mx-auto mb-10 second-section border border-gray-500 p-8 rounded-lg'>
                <div>
                    <img className='w-4/5 rounded-lg border border-red-500' src={img1} alt="" />
                </div>

                <div className='flex justify-center items-center'>
                    <div>
                        <h2 className='text-4xl mb-5'>Lorem ipsum dolor sit amet.</h2>
                        <p className='text-gray-400 text-lg lg:w-4/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quae quo nulla esse ab, officia veniam modi, eos obcaecati assumenda totam adipisci dolorem sed. Neque, temporibus non? Nobis illum perferendis eius dignissimos quam quae consectetur, necessitatibus veritatis cumque consequatur corporis eligendi? Dolorem quae eligendi vitae magni ab tenetur tempora sequi!</p>
                        
                        <button className="btn btn-outline btn-warning mt-5">See More Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;