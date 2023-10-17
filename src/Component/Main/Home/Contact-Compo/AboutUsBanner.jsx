import React from "react";

const AboutUsBanner = () => {
  return (
    <>
      <div className="w-full h-[181px] bg-hero-banner relative">
        <div className="w-full h-full flex justify-center items-center absolute bg-black opacity-75">
          <div className="w-[80%] h-full flex  items-center  absolute ">
            <div>
              <p className="text-white md:text-2xl sm:text-lg">About Us</p>
              <p className=" text-white md:text-sm sm:text-xs">
                Get the latest news,update and tips
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsBanner;
