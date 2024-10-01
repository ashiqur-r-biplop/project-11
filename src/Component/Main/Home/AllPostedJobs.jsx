import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPostedJobs = () => {
  const [appliedJobs, setAllappliedJobs] = useState([]);

  useEffect(() => {
    fetch("/url")
      .then((res) => res.json())
      .then((data) => setAllappliedJobs(data));
  }, []);

    const handleEditAppliedJob = () => {
        
    }

  return (
    <div>
      <>
        <div className="overflow-x-auto mt-4">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th>#</th>
                <th>Company Logo</th>
                <th>Company Name</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appliedJobs.map((job, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-blue-200" : "bg-green-300"}
                >
                  <td>{index + 1}</td>

                  <td>
                    <div className="avatar">
                      <div className="mask  w-12 h-12">
                        <img src={job.companyLogo} />
                      </div>
                    </div>
                  </td>
                  <td>{job.companyName}</td>
                  <td>{job.jobTitle}</td>
                  <td>{job.companyLocation}</td>

                  <td>
                    <div className="flex gap-x-1">
                      <div>
                        <button
                          className="btn btn-xs"
                          onClick={handleEditAppliedJob}
                        >
                          Edit Post
                        </button>
                      </div>
                      <div>
                        <Link to="/applied-persons">see applicants</Link>
                      </div>
                      <div></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default AllPostedJobs;
