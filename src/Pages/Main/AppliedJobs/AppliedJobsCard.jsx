import { Link } from "react-router-dom";

const AppliedJobsCard = ({ data }) => {
  const { Job_title, job_type, category, description } = data;
  return (
    <div className="border mb-5 p-5 rounded-lg bg-[#F6F8F7]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">{Job_title}</h1>
        <p>12 days ago</p>
      </div>
      <div className="flex gap-2 items-center">
        <p className="font-bold text-black">{category}</p>
        <p className="">{job_type}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="truncate w-[500px] h-[20px]">{description}</p>
        <Link ><button className="px-5 py-3 rounded-full bg-[#58B368] hover:bg-sky-600 transition-all duration-200">Read More</button></Link>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
