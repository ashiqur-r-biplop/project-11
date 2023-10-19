import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    fetch("../../../../public/Jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [jobs]);

  // Handle Apply Job:
  const handleApplyJob = job => {
    console.log(job);
  }
  return (
    <section className="">
      <div className="hero bg-[#f2f6fd] my-2 md:h-[50vh]">
        <div className="hero-content">
          <div className="flex flex-col justify-between">
            <div>
              {" "}
              <h1 className=" text-4xl md:text-5xl font-bold text-center">
                2023 Jobs Available Now
              </h1>
              <p className="py-6 text-center">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                repellendus magni, atque delectus molestias quis?
              </p>
              {/*  */}
              <div className="flex justify-evenly rounded-2xl h-12   ">
                <div className="input-group">
                  <select className="select select-bordered w-full ">
                    <option selected>Pick category</option>
                    <option>Management</option>
                    <option>Front-end</option>
                    <option>MERN</option>
                    <option>React</option>
                  </select>
                  <button className="btn btn-accent">Search</button>
                </div>
              </div>
            </div>
            <div className="flex mt-5 justify-between items-center">
              <img
                className="hidden md:block"
                src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/bg-left-hiring.cc0e2e85.svg"
                alt=""
              />

              <img
                src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/bg-right-hiring.0dfda9a2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* dewar system */}
      <div className="container mx-auto">
        <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* card */}
              {jobs?.map((d) => {
                return (
                  <div
                    key={d?.id}
                    className="border bg-[#F8FAFF] hover:bg-transparent transition-all py-10 px-4 rounded "
                  >
                    <div className="flex items-start justify-between pb-5">
                      <div className="flex items-center gap-5">
                        <div>
                          <img src={d?.company_photo} alt="" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">
                            {d?.job_portal}
                          </h2>
                          <p>location</p>
                        </div>
                      </div>
                      <span><FaHeart /></span>
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
                      <button onClick={() => handleApplyJob(d)} className="bg-[#E0E6F7] px-4 py-3 rounded-lg text-[#2b67ff]">
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <label
              htmlFor="my-drawer-2"
              className="btn  btn-accent drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side mt-12 md:mt-0">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <div
              className="menu p-4 w-80 min-h-full bg-base-200 inputs" >
              {/* Sidebar content here */}

              <h2 className="text-center text-xl my-2 font-bold">Job type</h2>
              <div className="ms-20 mt-2">
                <label htmlFor="full">

                  <input type="checkbox" name="full" value="full" id="full" /> <span className="ms-4">Full</span>
                </label>

                <br />
                <label htmlFor="part">

                  <input type="checkbox" name="part" value="part" id="part" /> <span className="ms-4">Part</span>
                </label>

                <br />
                <label htmlFor="remote">

                  <input type="checkbox" name="remote" value="remote" id="remote" /> <span className="ms-4">Remote</span>
                </label>

              </div>


              <h3 className="text-center text-xl my-2 font-bold">Position </h3>
              <div className="ms-20 mt-2">
                <label htmlFor="senior">

                  <input type="checkbox" name="name" value="senior" id="senior" /> <span className="ms-4">Senior</span>
                </label>


                <br />
                <label>

                  <input type="checkbox" name="name" value='junior' /> <span className="ms-4">Junior</span>
                </label>


                <br />
                <label>

                  <input type="checkbox" name="name" value='fresher' /> <span className="ms-4">Fresher</span>
                </label>

              </div>

              <h3 className="text-center text-xl my-2 font-bold">On-Site / Remote </h3>

              <div className="ms-20 mt-2"  >
                <label>

                  <input type="checkbox" value='on-site' /> <span className="ms-4">On-Site</span>   <br />
                </label>
                <label>

                  <input type="checkbox" value='remote' /> <span className="ms-4">Remote</span>   <br />
                </label>
                <label>
                  <input type="checkbox" value='hybrid' /> <span className="ms-4"> Hybrid</span>
                </label>


              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AllJobs;

/*

{/* <form className="menu p-4 w-80 min-h-full bg-base-200 form-control">
              
              <h2 className="text-center text-xl font-bold">Job type</h2>
              <div className="from-check">
                <input type="checkbox" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  {" "}
                  Full
                </label>{" "}
                <br />
                <input type="checkbox" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  Part
                </label>{" "}
                <br />
                <input type="checkbox" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  {" "}
                  Remote
                </label>
              </div>

              <hr className="font-bold my-5" />
              <h3 className="text-center text-xl font-bold">Position </h3>
              <div className="from-check">
                <input type="checkbox" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  {" "}
                  Senior
                </label>{" "}
                <br />
                <input type="checkbox" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  Junior
                </label>{" "}
                <br />
                <input type="checkbox" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  {" "}
                  Fresher
                </label>
              </div>
              <hr className="font-bold my-5" />
              <h3 className="text-center text-xl font-bold">
                On-Site / Remote{" "}
              </h3>
              <div className="from-check">
                <input type="checkbox" className="text-xl" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  {" "}
                  Onsite
                </label>{" "}
                <br />
                <input type="checkbox" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  Remote
                </label>{" "}
                <br />
                <input type="checkbox" name="name" id="" />
                <label htmlFor="name" className="text-lg ms-4">
                  {" "}
                  Hybrid
                </label>
              </div>
</form> 

*/