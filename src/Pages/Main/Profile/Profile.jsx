import { useContext } from "react";
import UserProfile from "../../../Component/Main/Profile/UserProfile";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="max-w-screen-xl mx-auto bg-blue-50 m-6 rounded">
      <div className="md:flex gap-6 p-6">
      <div className="bg-white mb-5 rounded md:w-[30%] p-3">
        <section className="  flex flex-col justify-center items-center ">
        <img className="rounded-full mt-10" src={user?.photoURL} alt="" />
        <h1 className="text-2xl font-bold mt-2 text-blue-500">{user.displayName}</h1>
        <h1>UI/UX Designer</h1>
        <Link to={`/update-profile`}><button className="btn btn-primary mt-5">Update Profile</button></Link>
        <h1 className="w-[80%] mt-12 text-sm">Sarah, a skilled software engineer with 4 years of experience, holds a Bachelors degree in Computer Science. Seeking remote opportunities in web development. Proficient in JavaScript, React, and responsive design. Committed to delivering efficient and user-friendly solutions.</h1>
        </section>
        <section>
        <h1 className="text-lg font-bold mt-2">Skills</h1>
        {/* if show skills by updated information use (map()) */}
        <div className="text-center">
        <button className="btn btn-xs disabled m-1">User Interfact Design</button>
        <button className="btn btn-xs disabled m-1 ">UX</button>
        <button className="btn btn-xs disabled m-1 ">UI</button>
        <button className="btn btn-xs disabled m-1 ">Adobe XD</button>
        <button className="btn btn-xs disabled m-1 ">Mobile Apps</button>
        <button className="btn btn-xs disabled m-1 ">User Reaserch</button>
        <button className="btn btn-xs disabled m-1 ">Wireframing</button>
        <button className="btn btn-xs disabled m-1 ">Information Architecture</button>
        </div>
        </section>
        <section>
          <h1 className="text-lg font-bold mt-6 mb-2">Add Note</h1>
          <textarea className="input border-gray-400 w-[99%] h-20" name="" id="" cols="" rows="" placeholder="Add notes for future reference"></textarea>
          <button className="btn btn-block bg-blue-500 hover:bg-blue-700 text-white mt-2">Add Note</button>
        </section>
      </div>

      {/* second section 1st*/}
      <div className="md:w-[70%]">
        <div className="bg-white h-fit rounded">
        <h1 className="text-xl font-bold p-4">Basic Information</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
        <section className="p-4">
        <p className="font-semibold text-sm text-slate-500">AGE</p>
          <p>28 Years</p>
          <p className="font-semibold text-sm mt-3 text-slate-500">Selery</p>
          <p>30k</p>
        </section>
        <section className="p-4">
        <p className="font-semibold text-sm text-slate-500">YEARS OF EXPERIENCE</p>
          <p>6 Years</p>
          <p className="font-semibold text-sm mt-3 text-slate-500">LOCATION</p>
          <p>Ahmedabad, Gujrat</p>
        </section>
        <section className="p-4">
        <p className="font-semibold text-sm text-slate-500">PHONE</p>
          <p>+91 98123 55679</p>
          <p className="font-semibold text-sm mt-3 text-slate-500">EMAIL</p>
          <p>{user?.email}</p>
        </section>
        </div>
        </div>

      {/* second section 2nd */}
        
        <div className="bg-white mt-6 p-4 rounded">
        <h1 className="text-xl font-bold mb-10">Experience</h1>
          <section className="flex gap-6 md:gap-16 mb-3">
            <img className="rounded-full h-20"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gbuAdC1XjNyht9ygDYU5jdmgj6xfvIgeLRL-Zl0&s" alt="" />
            <span>
              <p className="text-blue-500 font-semibold">Infosys</p>
              <p className="text-sm">Product & UI/UX Designer</p>
              <p className="text-sm">Apr 2021 - Present</p>
            </span>
          </section>
          <hr />
          <section className="flex gap-6 md:gap-16 mt-3 mb-3">
            <img className="rounded-full h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gbuAdC1XjNyht9ygDYU5jdmgj6xfvIgeLRL-Zl0&s" alt="" />
            <span>
              <p className="text-blue-500 font-semibold">Pixel Studio</p>
              <p className="text-sm">UI/UX Designer</p>
              <p className="text-sm">Apr 2021 - Present</p>
            </span>
          </section>
          <hr />
          <section className="flex gap-6 md:gap-16 mt-3">
          <img className="rounded-full h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gbuAdC1XjNyht9ygDYU5jdmgj6xfvIgeLRL-Zl0&s" alt="" />
            <span>
              <p className="text-blue-500 font-semibold">Ramotion Studio</p>
              <p className="text-sm">Web Designer</p>
              <p className="text-sm">Apr 2021 - Present</p>
            </span>
          </section>
        </div>

        
        <div className="bg-white mt-6 px-4 py-1 rounded">
          <h1 className="text-lg font-semibold ">Education:</h1>
          <p className="text-sm">MSC Degree</p>
        </div>
        <div className="bg-white mt-6 px-4 py-1 rounded">
          <h1 className="text-lg font-semibold">Accomplishments:</h1>
          <p className="text-sm">MSC Degree</p>
        </div>
        <div className="bg-white mt-6 px-4 py-1 mb-6 rounded">
          <h1 className="text-lg font-semibold">Certification:</h1>
          <p className="text-sm">Programming Hero</p>
        </div>


      </div>

      </div>
      <UserProfile></UserProfile>
    </div>
  );
};

export default Profile;
