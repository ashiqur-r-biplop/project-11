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


// import CompanyTestomonial from "../../../../Component/DashBoard/Company/CompanyTestomonial/CompanyTestomonial";
// import CompanyProfileCompo from "../../../../Component/DashBoard/Company/Profile/CompanyProfileCompo";

// const CompanyProfile = () => {
//   const info = [
//     {
//       companyName: "XYZ Innovations",
//       startJourney: "18 Nov 2022",
//       departmentList: [
//         "Product Development",
//         "Marketing",
//         "Sales",
//         "Quality Assurance",
//       ],
//       description:
//         "XYZ Innovations is a dynamic company dedicated to creating cutting-edge products and services to transform industries and improve people's lives.",
//       image: "https://example.com/xyz_innovations_logo.png",
//     },
//     {
//       companyName: "GreenTech Solutions",
//       startJourney: "18 Nov 2022",
//       departmentList: [
//         "Sustainability Research",
//         "Engineering",
//         "Marketing",
//         "Finance",
//       ],
//       description:
//         "GreenTech Solutions is a leader in sustainable technology, committed to addressing environmental challenges through innovation and eco-friendly solutions.",
//       image: "https://example.com/greentech_solutions_logo.png",
//     },
//     {
//       companyName: "HealthMasters Inc.",
//       startJourney: "18 Nov 2022",
//       departmentList: [
//         "Medical Research",
//         "Healthcare Services",
//         "Administration",
//         "Pharmacy",
//       ],
//       description:
//         "HealthMasters Inc. is dedicated to improving the health and well-being of people worldwide through cutting-edge medical research and healthcare services.",
//       image: "https://example.com/healthmasters_logo.png",
//     },
//     {
//       companyName: "E-Commerce Express",
//       startJourney: "18 Nov 2022",
//       departmentList: [
//         "Technology",
//         "Sales and Marketing",
//         "Customer Support",
//         "Logistics",
//       ],
//       description:
//         "E-Commerce Express is a global e-commerce platform offering a wide range of products and services, ensuring a seamless online shopping experience.",
//       image: "https://example.com/ecommerce_express_logo.png",
//     },
//     {
//       companyName: "Artistic Creations Ltd.",
//       startJourney: "18 Nov 2022",
//       departmentList: [
//         "Creative Design",
//         "Production",
//         "Sales and Distribution",
//         "Customer Relations",
//       ],
//       description:
//         "Artistic Creations Ltd. is a renowned company in the world of art and design, specializing in creating unique and captivating artworks.",
//       image: "https://example.com/artistic_creations_logo.png",
//     },
//     {
//       companyName: "Foodie Delights Inc.",
//       startJourney: "18 Nov 2022",
//       departmentList: [
//         "Culinary Research",
//         "Restaurant Management",
//         "Marketing",
//         "Quality Assurance",
//       ],
//       description:
//         "Foodie Delights Inc. is passionate about culinary excellence and brings delectable, gourmet experiences to food lovers around the world.",
//       image: "https://example.com/foodie_delights_logo.png",
//     },
//   ];

//   return (
//     <div className="container mx-auto md:px-10 px-3 lg:px-0">
//       <div className="uppercase py-10 text-center font-extrabold text-3xl md:text-4xl">
//         all the company that <br /> have collaborated with us
//       </div>
//       <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//         {info.map((data, index) => (
//            <CompanyProfileCompo key={index} data={data}></CompanyProfileCompo>
//         ))}
//       </div>
//      <div className="mt-10 flex justify-center items-center">
//       <h1 className="text-4xl font-bold">Top Review Of Companies</h1>
//      </div>
//       <CompanyTestomonial />
//     </div>
//   );
// };

// export default CompanyProfile;
