import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const AllJobsAdmin = () => {
  const [reload, setReload] = useState(false);
 const [jobs, setAllJobs] = useState([]);
 const { axiosSecure } = useAxiosSecure();

   useEffect(() => {
     axiosSecure
       .get("/all-jobs")
       .then((res) => {
         console.log(res.data);
         setAllJobs(res.data);
       })
       .catch((e) => {
         console.log(e.message);
       });
   }, [reload]);

  const handleJobDelete = (id) => {
    // console.log(id)
    axiosSecure
      .delete(`/delete-job/${id}`)
      .then((res) => {
        // console.log(res.data.deletedCount);
        if (res.data.deletedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Wow!",
              text: "Deleted Successfully",
            });
          setReload(!reload)
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <div>
      <>
        <div className="overflow-x-auto mt-4">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr className="bg-gray-400">
                <th>#</th>
                <th>Company Logo</th>
                <th>Job Title</th>
                <th>Job Category</th>
                <th>Deadline</th>
                <th>Contact Email</th>
                <th>Job Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-purple-200" : "bg-purple-300"}
                >
                  <td>{index + 1}</td>
                  <td className="avater">
                <img src={job.companylogo} className="w-12 rounded-full"/>
                   </td>
                  <td>{job.jobTitle}</td>
                  <td>{job.jobCategory}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>{job.contactEmail}</td>
                  <td>{job._id}</td>

                  <td>
                    <div>
                        <button onClick={()=>{handleJobDelete(`${job._id}`)}}  className="btn btn-xs btn-error text-white">Delete Jobs</button>

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

export default AllJobsAdmin;
