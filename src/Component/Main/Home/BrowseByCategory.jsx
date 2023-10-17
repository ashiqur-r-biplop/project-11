import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle/SectionTitle";

const BrowseByCategory = () => {
  const category = [
    {
      name: "Customer Help",
      jobAvailable: 150,
      icon: "https://i.ibb.co/4SKJCcG/reshot-icon-headphone-Customer-Help.png",
    },
    {
      name: "Finance",
      jobAvailable: 120,
      icon: "https://i.ibb.co/XXH07FG/reshot-icon-finance-LURNF5-H3-MX.png",
    },
    {
      name: "Software",
      jobAvailable: 200,
      icon: "https://i.ibb.co/Vj7nvCk/reshot-icon-software-engineer-VA8-RSG936-Z.png",
    },
    {
      name: "Human Resource",
      jobAvailable: 180,
      icon: "https://i.ibb.co/yqyHBP9/reshot-icon-leadership-human-ZA6-RYFMUEQ.png",
    },
    {
      name: "Management",
      jobAvailable: 130,
      icon: "https://i.ibb.co/PhFP8Hd/reshot-icon-management-6-ZTGNBYXMS.png",
    },
    {
      name: "Retail & Products",
      jobAvailable: 90,
      icon: "https://i.ibb.co/J3n0fMh/reshot-icon-wallet-LR8-F6-DGHAC.png",
    },
    {
      name: "Security Analyst",
      jobAvailable: 75,
      icon: "https://i.ibb.co/gznTpBr/reshot-icon-security-TK7-ZJGVMDB.png",
    },
    {
      name: "Content Writer",
      jobAvailable: 110,
      icon: "https://i.ibb.co/sVmxcRc/reshot-icon-content-writing-QUABK7-WS6-E.png",
    },
    {
      name: "Market Research",
      jobAvailable: 160,
      icon: "https://i.ibb.co/fq8P7MD/reshot-icon-research-ZBLPWSRT8-X.png",
    },
  ];

  return (
    <div className="py-10">
      <SectionTitle
        title="Browse by category"
        subTitle="Find the job that’s perfect for you. about 800+ new jobs everyday"
      ></SectionTitle>

      <section className="py-10 px-3 container mx-auto">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-5">
          {category.slice(0, 5).map((item, index) => {
            return (
              <Link 
                key={index}
                className="border-2 hover:border-[#0d6efd] transition ease-in-out delay-150  hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-100/50 duration-300 flex items-center justify-center gap-5 rounded-xl p-3"
              >
                <div className="">
                  <img className="h-10 w-10" src={item.icon} alt="" />
                </div>
                <div>
                  <h3 className="font-bold md:text-[20px]">{item.name}</h3>
                  <p>{item.jobAvailable} Jobs Available</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-3 md:px-0">
        <div className="border rounded-lg p-5 md:p-0 md:w-[60%]  flex gap-[5vw] justify-center items-center mx-auto">
          <div>
            <img
              src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/bg-left-hiring.cc0e2e85.svg"
              alt=""
              className="hidden md:block"
            />
          </div>

          <div className="block text-center md:text-start  md:flex space-y-4 justify-center items-center">
            <div className="">
              <span className="text-[20px] text-[#66789c] font-bold leading-5">
                WE ARE
              </span>
              <h1 className="text-[#05264e] text-[49px]  leading-[51px] font-extrabold">
                HIRING
              </h1>
            </div>

            <div className="md:flex text-center  justify-center items-center space-y-4 gap-3">
              <p className="text-[#66789c] font-medium md:py-7 leading-5 md:px-5 text-[18px]">
                Let’s <span className="text-[#05264e]">Work</span> together
                <br />
                <span>& Explore Opportunities</span>
              </p>
              <button className="bg-[#3c65f5] px-[20px] py-[12px] text-[14px] text-white rounded transition ease-in-out duration-300 hover:bg-[#212529]">
                Apply Now
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/bg-right-hiring.0dfda9a2.svg"
              alt=""
              className="hidden md:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseByCategory;
