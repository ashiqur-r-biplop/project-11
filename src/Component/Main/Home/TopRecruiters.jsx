import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import SectionTitle from "./SectionTitle/SectionTitle";

const TopRecruiters = () => {
  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => {
    fetch("/recruiters.json")
      .then((res) => res.json())
      .then((data) => setRecruiters(data));
  }, []);

  // Function to render star icons based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const starArray = [];

    for (let i = 0; i < fullStars; i++) {
      starArray.push(<AiFillStar key={`fullStar-${i}`} className="text-yellow-500 w-5 h-5" />);
    }

    if (halfStar) {
      starArray.push(<BiSolidStarHalf key="halfStar" className="text-yellow-500 w-5 h-5" />);
    }

    const emptyStars = 5 - starArray.length;

    for (let i = 0; i < emptyStars; i++) {
      starArray.push(<AiOutlineStar key={`emptyStar-${i}`} className="text-yellow-500 w-5 h-5" />);
    }

    return starArray;
  };

  return (
    <div className="container mx-auto lg:py-10 py-5 mt-16">
      <SectionTitle
        title="Top Recruiters"
        subTitle="Discover your next career move, freelance gig, or internship"
      ></SectionTitle>
      <div></div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-3">
        {recruiters.map((recruiter, index) => (
          <div key={index}>
            <div className="border p-5 rounded-md">
              <div className="flex justify-start items-start">
                <img src={recruiter.logoURL} className="w-12 h-12 rounded" alt="logoURL" />
                <div className="ms-2">
                  <h3 className="text-[#3c65f5] text-lg font-bold">{recruiter.name}</h3>
                  <div className="flex justify-start items-start">
                    {renderStars(recruiter.rating)} <span className="text-sm ms-2">({recruiter.totalRating})</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center py-2 text-gray-500">
                <FaLocationDot className="w-4 h-4 me-2 text-red-500"></FaLocationDot> <span>{recruiter.location}</span>
              </div>
              <div className="flex justify-end items-center text-gray-500">{recruiter.openJobs} Open jobs</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRecruiters;
