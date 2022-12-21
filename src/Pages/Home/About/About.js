import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={person}alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                        <img src={parts} alt=''className=" w-3/5  absolute right-5 top-1/2 border-l-8 border-t-8 rounded-lg shadow-2xl" />

                    </div>
                    <div className='w-1/2'>
                        <p className="text-2xl font-bold text-orange-600">About Us</p>
                        <h1 className="text-5xl font-bold my-5">We are qualified <br />
                            & of experience <br />
                            in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable..</p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="bg-orange-600 text-white font-semibold px-4 py-3 rounded">Get more info</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;