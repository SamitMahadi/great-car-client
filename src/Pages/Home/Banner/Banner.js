import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-hero" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md bg-white px-6 py-6">
                    <h1 className="mb-5 text-6xl font-bold text-black">Welcome To Car Doctor </h1>
                    <p className="mb-5 text-black" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable..</p>
                    <Link to='/login'>
                    <button className="bg-orange-600 text-white font-semibold px-4 py-3 rounded">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;