import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle/SectionTitle";
import human from "../../../../public/image/Jobs/human.svg";
import finance from "../../../../public/image/Jobs/finance.svg";
import management from "../../../../public/image/Jobs/management.svg";
import marketing from "../../../../public/image/Jobs/marketing.svg";
import retail from "../../../../public/image/Jobs/retail.svg";
import content from "../../../../public/image/Jobs/content.svg";

const JobsOfTheDay = () => {
  const [active, setActive] = useState("Management");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/public/Jobs.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data?.filter((d) => d.category == active);
        setData(filterData);
      });
  }, [active]);
  return (
    <div>
      <SectionTitle
        subTitle="Search and connect with the right candidates faster."
        title="Jobs of the day"
      ></SectionTitle>
      <div className="container mx-auto mt-10">
        <div className="gap-5 mx-auto flex justify-center items-center flex-wrap">
          <button
            onClick={() => setActive("Management")}
            className={`${
              active === "Management"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold px-3 py-2 rounded-lg border flex items-center gap-3`}
          >
            <img className="w-4" src={management} alt="" />
            Management
          </button>
          <button
            onClick={() => setActive("Marketing_&_Sale")}
            className={`${
              active === "Marketing_&_Sale"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold px-3 py-2 rounded-lg border flex items-center gap-3`}
          >
            <img className="w-4" src={marketing} alt="" />
            Marketing & Sale
          </button>
          <button
            onClick={() => setActive("finance")}
            className={`${
              active === "finance"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold px-3 py-2 rounded-lg border flex items-center gap-3`}
          >
            <img className="w-4" src={finance} alt="" />
            Finance
          </button>
          <button
            onClick={() => setActive("human_resource")}
            className={`${
              active === "human_resource"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold px-3 py-2 rounded-lg border flex items-center gap-3`}
          >
            <img className="w-4" src={human} alt="" />
            Human Resource
          </button>
          <button
            onClick={() => setActive("Retail_&_Products")}
            className={`${
              active === "Retail_&_Products"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold px-3 py-2 rounded-lg border flex items-center gap-3`}
          >
            <img className="w-4" src={retail} alt="" />
            Retail & Products
          </button>
          <button
            onClick={() => setActive("Content_Writer")}
            className={`${
              active === "Content_Writer"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold px-3 py-2 rounded-lg border flex items-center gap-3`}
          >
            <img className="w-4" src={content} alt="" />
            Content Writer
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
          {data?.map((d) => {
            return (
              <div
                key={d?.id}
                className="border bg-[#F8FAFF] hover:bg-transparent transition-all py-10 px-4 rounded ease-in-out delay-150  hover:-translate-y-2"
              >
                <div className="flex items-start justify-between pb-5">
                  <div className="flex items-center gap-5">
                    <div>
                      <img src={d?.company_photo} alt="" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{d?.job_portal}</h2>
                      <p>location</p>
                    </div>
                  </div>
                  <span>flash icon</span>
                </div>
                <div>
                  <h1 className="font-bold text-xl">{d?.Job_title}</h1>
                  <div className="flex items-center gap-10 text-gray-500 py-3">
                    <p>{d?.job_type}</p>
                    <p>{d?.time} minutes ago</p>
                  </div>
                  <p className="py-3">{d?.description.slice(0, 100)}...</p>
                </div>
                <div className="flex items-center gap-5 my-5">
                  {d.requerment.map((r, i) => {
                    return (
                      <div key={i}>
                        <button className="bg-gray-400 px-2 rounded-lg w-f">
                          {r}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center py-3">
                  <h1>
                    <span className="text-[#3C65F6] text-3xl font-semibold">
                      ${d?.selary}
                    </span>{" "}
                    <span>/Hour</span>
                  </h1>
                  <button className="bg-[#E0E6F7] px-4 py-3 rounded-lg text-[#2b67ff]">
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobsOfTheDay;
