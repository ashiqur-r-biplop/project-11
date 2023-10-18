import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { HiOutlineMail } from "react-icons/hi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AppliedJobsCard from "./AppliedJobsCard";
const AppliedJobs = () => {
  const { user } = useContext(AuthContext);

  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("/public/Jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="">
      <div className="md:flex gap-[3vw] container my-10 px-3 md:px-0 mx-auto">
        <div className="md:w-[25%] bg-white p-3 rounded-xl">
          <div className="max-w-lg mx-auto mb-3 bg-white border rounded-lg  p-5">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={user?.photoURL}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">
              {user?.displayName}
            </h2>
            <p className="text-center text-gray-600 mt-1">Software Engineer</p>

            <div className="flex justify-center mt-5">
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
                GitHub
              </a>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Most recent jobs</p>
                <p>Oracle</p>
              </div>
              <div className="flex justify-between">
                <p>Last Qualification</p>
                <p>B.Tech</p>
              </div>
              <div className="flex justify-between">
                <p>Working Experience</p>
                <p>Fresher</p>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <HiOutlineMail /> {user.email}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="rounded-full bg-[#58B368] text-white px-5 py-3 hover:bg-sky-600 transition-all duration-200">
                Upload your latest Resume
              </button>
            </div>
          </div>

          <div className="border mb-3 rounded-lg bg-[bg-[#F6F8F7]] p-5">
            <h1>Applied Jobs ({datas.length})</h1>
          </div>
          <div className="border rounded-lg bg-[bg-[#F6F8F7]] p-5">
            <h1>Saved Jobs Jobs ({datas.length})</h1>
          </div>
        </div>

        <div className="md:w-[75%] bg-white rounded-xl border p-5 h-auto">
          <Tabs>
            <TabList>
              <Tab>Applied Jobs</Tab>
              <Tab>Saved Jobs</Tab>
            </TabList>

            <TabPanel>
              {datas.slice(0, 6).map((data, index) => {
                return <AppliedJobsCard key={index} data={data} />;
              })}
            </TabPanel>
            <TabPanel>
              {datas.slice(0, 3).map((data, index) => {
                return <AppliedJobsCard key={index} data={data} />;
              })}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
