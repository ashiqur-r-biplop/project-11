import React from 'react';
import './About.css';
import img1 from '../../../assets/about_bg.png';
import { FaHome } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <div className="bg-style relative">
        <img className='bg-style' src={img1} alt="" />
        {/* absolute left-0 top-0  */}


        <div className="absolute lg:left-52 left-24 lg:top-10 top:2 text-white flex">
          <div>
            <h1 className='text-3xl font-bold'>About Us</h1>
            <h4 className='text-xl mt-2'>Get the latest news, updates and tips</h4>
          </div>
          <div className=''>
            <button className="btn  btn-sm"> <FaHome></FaHome> Home</button>
          </div>
        </div>

        {/* About Our Company Part */}
      </div>
    </div>
  );
};

export default About;