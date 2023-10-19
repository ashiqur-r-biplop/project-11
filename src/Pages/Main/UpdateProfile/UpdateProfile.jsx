import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [skills, setSkills] = useState([]);
  const { axiosSecure } = useAxiosSecure();
  const handleUpdateSkill = (e) => {
    const value = e.target.value;
    console.log(value);
    setSkills((previous) => [...previous, value]);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const field = form.field.value;
    const age = form.age.value;
    const email = form.age.email;
    const experience = form.experience.value;
    const selery = form.selery.value;
    const location = form.location.value;
    const country = form.country.value;
    const phone = form.phone.value;
    const logo = form.logo.value;
    const education = form.education.value;
    const accomplishments = form.accomplishments.value;
    const certificate = form.certificate.value;
    const description = form.description.value;

    const updateProfile = {
      name,
      email,
      field,
      age,
      experience,
      location,
      country,
      phone,
      skills: skills,
      logo,
      education,
      accomplishments,
      certificate,
      description,
      selery,
    };
    console.log(updateProfile);
    axiosSecure
      .patch(`/user-update/${user?.email}`, updateProfile)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-blue-50 m-6 rounded">
      <img
        className="w-full  md:h-[500px]"
        src="https://t3.ftcdn.net/jpg/06/39/62/90/240_F_639629017_YjfnLtEGhYsnXr9GlyXf6dXwLVmVdaRW.jpg"
        alt=""
      />
      <h1 className="text-4xl text-center  font-bold text-blue-500 md:text-white md:-mt-72 m-4 rounded">
        Profile Update
      </h1>
      <div className="md:flex gap-6 p-6">
        <div className="bg-zinc-50 rounded md:w-[30%] p-3 ">
          <section className="  flex flex-col justify-center items-center ">
            <img className="rounded-full mt-10" src={user?.photoURL} alt="" />
            <h1 className="text-2xl font-bold mt-2 text-blue-500">
              {user?.displayName}
            </h1>
            <h1>UI/UX Designer</h1>
            <h1 className="w-[80%] mt-12 text-sm">
              Sarah, a skilled software engineer with 4 years of experience,
              holds a Bachelors degree in Computer Science. Seeking remote
              opportunities in web development. Proficient in JavaScript, React,
              and responsive design. Committed to delivering efficient and
              user-friendly solutions.
            </h1>
          </section>
          <section>
            <h1 className="text-lg font-bold mt-2">Skills</h1>
            {/* if show skills by updated information use (map()) */}
            <div className="text-center">
              <button className="btn btn-xs disabled m-1">
                User Interfact Design
              </button>
              <button className="btn btn-xs disabled m-1 ">UX</button>
              <button className="btn btn-xs disabled m-1 ">UI</button>
              <button className="btn btn-xs disabled m-1 ">Adobe XD</button>
              <button className="btn btn-xs disabled m-1 ">Mobile Apps</button>
              <button className="btn btn-xs disabled m-1 ">
                User Reaserch
              </button>
              <button className="btn btn-xs disabled m-1 ">Wireframing</button>
              <button className="btn btn-xs disabled m-1 ">
                Information Architecture
              </button>
            </div>
          </section>
          <section>
            <h1 className="text-lg font-bold mt-6 mb-2">Add Note</h1>
            <textarea
              className="input border-gray-400 w-[99%] h-20"
              name=""
              id=""
              cols=""
              rows=""
              placeholder="Add notes for future reference"
            ></textarea>
            <button className="btn btn-block bg-blue-500 hover:bg-blue-700 text-white mt-2">
              Add Note
            </button>
          </section>
        </div>

        <div className="md:w-[70%] bg-zinc-50 rounded p-4">
          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1  md:grid-cols-2  mx-auto md:gap-x-12">
              <div>
                <div>
                  <p className="text-lg">Name:</p>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className="input input-bordered border-sky-500 input-info w-full mb-2"
                  />
                </div>
                <div>
                  <p className="text-lg">Email:</p>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    defaultValue={user?.email}
                    disabled={true}
                    className="input input-bordered border-sky-500 input-info w-full mb-2"
                  />
                </div>
                <div className="form-control">
                  <p className="text-lg">Field:</p>
                  <div className="input-group">
                    <select
                      name="field"
                      className="select select-bordered border-sky-500 input-info w-full mb-2"
                    >
                      <option disabled selected>
                        Pick category
                      </option>
                      <option>Graphic design</option>
                      <option>Web development</option>
                      <option>Content creation</option>
                      <option>Virtual assestance</option>
                      <option>Digital marketing</option>
                      <option>App development</option>
                      <option>Software development</option>
                      <option>Web design and development</option>
                      <option>User experience (UX) design</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-lg">Age:</p>
                  <input
                    type="number"
                    placeholder="age"
                    name="age"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
                <div>
                  <p className="text-lg">Experience:</p>
                  <input
                    type="text"
                    placeholder="Experience"
                    name="experience"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
                <div className="form-control">
                  <p className="text-lg">Selery Range:</p>
                  <div className="input-group">
                    <select
                      name="selery"
                      className="select select-bordered border-sky-500 input-info w-full mb-2"
                    >
                      <option disabled selected>
                        Pick category
                      </option>
                      <option>20k-30k</option>
                      <option>30k-40k</option>
                      <option>40k-50k</option>
                      <option>50k-60k</option>
                      <option>60k-70k</option>
                      <option>70k-80k</option>
                      <option>80k-90k</option>
                      <option>90k-100k</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-lg">Location:</p>
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
                <div>
                  <p className="text-lg">Country:</p>
                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
              </div>
              <div>
                <div>
                  <p className="text-lg">Phone:</p>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
                <div className="form-control">
                  <p className="text-lg">Skills:</p>
                  <div className="input-group">
                    <select
                      name="skills"
                      onChange={handleUpdateSkill}
                      className="select select-bordered border-sky-500 input-info w-full mb-2"
                    >
                      <option disabled selected>
                        Pick category
                      </option>
                      {[
                        "User Interfact Design",
                        "UI",
                        "UX",
                        "Adobe XD",
                        "Mobile Apps",
                        "User Reaserch",
                        "React js",
                        "Backend",
                      ].map((skill, i) => {
                        return (
                          <option value={skill} key={i}>
                            {skill}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-lg">Company Logo:</p>
                  <input
                    type="url"
                    placeholder="Company Logo"
                    name="logo"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
                <div>
                  <p className="text-lg">Education:</p>
                  <input
                    type="text"
                    placeholder="Education"
                    name="education"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
                <div>
                  <p className="text-lg">Accomplishments:</p>
                  <input
                    type="text"
                    placeholder="Accomplishments"
                    name="accomplishments"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
                <div>
                  <p className="text-lg">Certification:</p>
                  <input
                    type="text"
                    placeholder="Certificate"
                    name="certificate"
                    className="input input-bordered border-sky-500 input-info w-full  mb-2"
                  />
                </div>
                <div>
                  <p className="text-lg mt-2">Description:</p>
                  <textarea
                    className="border border-sky-500 w-full rounded"
                    placeholder="Write Description"
                    name="description"
                    id=""
                    cols=""
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-block  bg-blue-500 hover:bg-blue-700 text-white"
                type="submit"
                value="Update"
                name=""
                id=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
