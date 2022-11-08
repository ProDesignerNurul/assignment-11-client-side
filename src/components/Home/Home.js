import React from 'react';
import one from '../../images/cerousel-img/one.jpg';
import tow from '../../images/cerousel-img/tow.jpg';
import tree from '../../images/cerousel-img/tree.jpg';
import four from '../../images/cerousel-img/four.jpg';
import './Home.css';
import Service from '../AllServices/Service/Service';

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
        </div>
    );
};

export default Home;