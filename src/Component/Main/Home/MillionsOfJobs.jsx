import { Link } from "react-router-dom";

const MillionsOfJobs = () => {

  return (
    <section className="py-5 container  mx-auto px-3 md:px-20">
      <div className="md:flex justify-center p-10 gap-10">
        <div className="relative text-center">
          <img
            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/img-chart.png"
            className="absolute -top-[70px] hidden md:block -left-[180px]"
            alt=""
          />
          <img
            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/controlcard.png"
            className="absolute hidden md:block -bottom-[75px] -right-[150px]"
            alt=""
          />
          <div className="block">
            <img
              src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/img1.png"
              className=" rounded-[32px]"
              alt=""
            />
          </div>
        </div>



        <div className="md:p-10 p-5 space-y-2 md:pl-24">
          <div className="space-y-2">
            <h3 className="text-[32px] leading-[40px] font-extrabold text-[#a0abb8]">
              Millions Of Jobs
            </h3>
            <h1 className="md:w-[500px] md:h-[131px] text-[45px] md:text-[52px] leading-[66px] font font-extrabold text-[#05264e]">
              Find The One That’s <span className="text-[#3c65f5]">Right</span>{" "}
              For You
            </h1>
            <p className="md:py-10 py-7">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide. The right job is out there.
            </p>
            <div className="flex gap-5 items-center">
              <button className="px-[25px] py-[10px] text-white rounded transition ease-in-out duration-300 hover:bg-[#212529] bg-[#3c65f5]  ">
                Search More
              </button>
              <Link
                to="#"
                className="underline text-[14px] text-[#05264e] hover:text-[#3c65f5]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MillionsOfJobs;
