// import React from 'react';

import { FaStar } from "react-icons/fa";
import { FaArrowRight, FaStarHalfStroke } from "react-icons/fa6";

const CompanyProfile = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="md:flex md:gap-x-12 bg-blue-50 p-6">
        {/* first */}
        <div className="md:w-[40%] bg-white shadow-lg p-4 rounded">
          <img className="h-44 rounded" src="https://static8.depositphotos.com/1468291/934/i/450/depositphotos_9346925-stock-photo-portrait-of-office-worker-at.jpg" alt="" />
          <h1 className="text-2xl font-semibold text-blue-500">Stiven Marque</h1>
          <p className="font-semibold">CEO of Alibaba.com</p>
          <hr className="my-6" />
          <p className="font-semibold text-slate-400 mb-3">COMPAATIBILITY</p>
          <p><span className="text-2xl font-bold">8.9</span> <span className="font-semibold text-gray-500">out of 10</span></p>
          <div className="flex text-2xl items-center">
            <p className="text-yellow-400"><FaStar /></p>
            <p className="text-yellow-400"><FaStar /></p>
            <p className="text-yellow-400"><FaStar /></p>
            <p className="text-yellow-400"><FaStar /></p>
            <p className="text-yellow-400"><FaStarHalfStroke /></p>
          </div>
          <br /><br />
          <p className="font-semibold text-slate-400 mb-1">DESCRIPTION</p>
          <p>XYZ Tech Solutions is a leading technology company focused on creating innovative software solutions. We specialize in developing customized software, cloud services, and data analytics tools to meet the unique needs of our clients. </p><br />
          <p>At XYZ Tech Solutions, we pride ourselves on our customer-centric approach, working closely with our clients to understand their objectives and deliver tailor-made solutions that drive </p>
        </div>

        {/* second */}
        <div className="md:w-[60%] mt-6 md:mt-0">
          <div className="flex justify-between bg-white shadow-lg p-6 rounded">
          <div>
            <h1 className="font-semibold text-slate-400 mb-1">COMPANY TYPE</h1>
            <p className="font-bold">Manufacturer</p>
            <br />
            <h1 className="font-semibold text-slate-400 mb-1">ADDITIONAL ACTIVITIES</h1>
            <p className="font-bold">Service Company</p>
            <br />
            <h1 className="font-semibold text-slate-400 mb-1">HEADQUARTERS</h1>
            <p className="font-bold">Waco, Texas</p>
          </div>
          <div>
            <h1 className="font-semibold text-slate-400 mb-1">ANNUAL REVENUE</h1>
            <p className="font-bold">$10-$49.9 million</p>
            <br />
            <h1 className="font-semibold text-slate-400 mb-1">EMPLOYEES</h1>
            <p className="font-bold">50-100</p>
            <br />
            <h1 className="font-semibold text-slate-400 mb-1">FOUNDED</h1>
            <p className="font-bold">1992</p>
          </div>
          
          </div>

          {/* second  */}
          <div className="grid md:grid-cols-2 mt-6 gap-6">
            <div className=" bg-white shadow-lg p-6 rounded">
            <h1 className="font-semibold text-slate-400 mb-6">NEWS</h1>
            <p className="font-bold text-xl">XYZ Tech Solutions announces a strategic partnership with a global tech giant to expand its market reach and enhance its product offerings.</p>
            <p className="text-sm mt-4"><span className="text-gray-400 font-semibold">POSTED:</span> <span className="text-black font-bold">JUNE 15</span></p>
            <button className="flex items-center gap-4 text-indigo-700 font-bold text-sm mt-8 mb-0">CONTINUE READING<FaArrowRight></FaArrowRight></button>
            </div>
            <div className=" bg-white shadow-lg p-6 rounded">
            <h1 className="font-semibold text-slate-400 mb-6">INTEL</h1>
            <p className="font-bold text-xl">Category Overview: Website design and coding, North America </p>
            <p className="text-sm mt-4"><span className="text-gray-400 font-semibold">POSTED:</span> <span className="text-black font-bold">JUNE 15</span></p>
            <button className="flex items-center gap-4 text-indigo-700 font-bold text-sm mt-8 ">CONTINUE READING<FaArrowRight></FaArrowRight></button>
            </div>

          </div>

          {/* third */}
          <div className="bg-white mt-6 px-4 py-1 rounded flex items-center shadow-lg">
          <h1 className="text-lg font-semibold ">Email:</h1>
          <p className="ms-3 font-semibold text-blue-500">stivenmarque@gmail.com</p>
        </div>
        <div className="bg-white mt-6 px-4 py-1 rounded flex items-center shadow-lg">
          <h1 className="text-lg font-semibold">Contact:</h1>
          <p className="ms-3 font-semibold text-blue-500">01879534348</p>
        </div>
        <div className="bg-white mt-6 px-4 py-1 rounded flex items-center shadow-lg">
          <h1 className="text-lg font-semibold">Site:</h1>
          <p className="ms-3 font-semibold text-blue-500">http://www.alibababd.com</p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyProfile;

