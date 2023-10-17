import React from 'react';
import img1 from '../../../assets/About/team1.png'
import { FaLinkedin, FaStar } from 'react-icons/fa6';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Team = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className='text-center lg:w-1/2 p-4'>
                    <h2 className='text-xl font-bold text-neutral-400'>OUR COMPANY</h2>
                    <h1 className='text-4xl mt-2 font-bold'>Meet Our Team
                    </h1>
                    <p className='mt-4 text-xl text-neutral-500'>When it comes to choosing the right web hosting provider, we know how easy it
                        is to get overwhelmed with the number.</p>
                    <p>

                    </p>
                </div>
            </div>
            {/* Card Section */}
            <div className="container md:mx-auto px-4 md:flex justify-center mt-16">
                <div className="card w-full border-2 border-gray-200 md:w-96 bg-base-100 shadow-xl m-4 hover:border-gray-300 transition ease-in-out delay-150  hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-100/50 duration-300 pt-8">
                    <div className="avatar mx-auto">
                        <div className="w-24 rounded-full">
                            <img src={img1} />
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Arlene McCoy</h2>
                        <p>Frontend Developer</p>
                        <p className="flex justify-center items-center">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            (65)
                        </p>
                        <span className="card-location">New York, US</span>
                        <p className='flex justify-center items-center'>
                            <FaFacebook className='cursor-pointer m-1 text-xl'></FaFacebook>
                            <FaTwitterSquare className='cursor-pointer m-1 text-xl'></FaTwitterSquare>
                            <FaLinkedin className='cursor-pointer m-1 text-xl'></FaLinkedin>
                            <FaInstagramSquare className='cursor-pointer m-1 text-xl'></FaInstagramSquare>
                        </p>
                    </div>
                </div>
                <div className="card w-full border-2 border-gray-200 md:w-96 bg-base-100 shadow-xl m-4 hover:border-gray-300 transition ease-in-out delay-150  hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-100/50 duration-300 pt-8">
                    <div className="avatar mx-auto">
                        <div className="w-24 rounded-full">
                            <img src={img1} />
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Arlene McCoy</h2>
                        <p>Frontend Developer</p>
                        <p className="flex justify-center items-center">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            (65)
                        </p>
                        <span className="card-location">New York, US</span>
                        <p className='flex justify-center items-center'>
                            <FaFacebook className='cursor-pointer m-1 text-xl'></FaFacebook>
                            <FaTwitterSquare className='cursor-pointer m-1 text-xl'></FaTwitterSquare>
                            <FaLinkedin className='cursor-pointer m-1 text-xl'></FaLinkedin>
                            <FaInstagramSquare className='cursor-pointer m-1 text-xl'></FaInstagramSquare>
                        </p>
                    </div>
                </div>
                <div className="card w-full border-2 border-gray-200 md:w-96 bg-base-100 shadow-xl m-4 hover:border-gray-300 transition ease-in-out delay-150  hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-100/50 duration-300 pt-8">
                    <div className="avatar mx-auto">
                        <div className="w-24 rounded-full">
                            <img src={img1} />
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Arlene McCoy</h2>
                        <p>Frontend Developer</p>
                        <p className="flex justify-center items-center">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            (65)
                        </p>
                        <span className="card-location">New York, US</span>
                        <p className='flex justify-center items-center'>
                            <FaFacebook className='cursor-pointer m-1 text-xl'></FaFacebook>
                            <FaTwitterSquare className='cursor-pointer m-1 text-xl'></FaTwitterSquare>
                            <FaLinkedin className='cursor-pointer m-1 text-xl'></FaLinkedin>
                            <FaInstagramSquare className='cursor-pointer m-1 text-xl'></FaInstagramSquare>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;