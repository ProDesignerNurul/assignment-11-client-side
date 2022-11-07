import React from 'react';
import hero2 from '../../images/cerousel-img/hero2.jpg';
import hero3 from '../../images/cerousel-img/hero3.jpg';
import hero1 from '../../images/cerousel-img/hero1.jpg';
import hero4 from '../../images/cerousel-img/hero4.jpg';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="carousel w-11/12 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousel-img'>
                    <img alt="" src={hero1} className="w-full" />
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/4">
                        <h2 className='text-6xl text-white'> This is Books <br /> Number One <br /> its books</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 w-1/3 right-5 top-1/2">
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor eius laborum atque necessitatibus. Tempore sunt iusto illo maxime harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse at quos odit suscipit repellat eveniet ex autem eius, ipsum tempora aliquid illum repudiandae iste unde numquam. Sit, eos autem.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 w-1/3 right-5 top-2/3">
                    <button className="btn btn-outline btn-warning">Click To More Information</button>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt="" src={hero2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt="" src={hero3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt="" src={hero4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;