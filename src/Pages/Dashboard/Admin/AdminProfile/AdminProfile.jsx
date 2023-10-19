import { useContext } from "react";
import AdminProfileCompo from "../../../../Component/DashBoard/Admin/Profile/AdminProfileCompo";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaStar } from "react-icons/fa";
import { FaMessage, FaStarHalfStroke } from "react-icons/fa6";
import ProfileUpdateModal from "../../../../Component/DashBoard/Admin/Profile/ProfileUpdateModal";
// import { Link } from "react-router-dom";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="max-w-6xl bg-blue-50 mx-auto">
      <div >
        <img className="w-full  md:h-[420px]"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrSLwMgcvhp5srEug2kptIMPqk-SIyB_Lng&usqp=CAU" alt="" />
      </div>
        <div className="-mt-[120px] md:-mt-[200px]">
          <div className="md:flex md:gap-x-12 p-6">
          <div className="md:w-[30%] drop-shadow-xl rounded p-4 bg-zinc-50">
            <div className="flex flex-col items-center">

              <img className="rounded-full  w-[200px] h-[200px]" src={user?.photoURL} alt="" />
            </div>
            <br />
            <label htmlFor="my_modal_7" className="btn btn-block bg-blue-500 hover:bg-blue-700 text-white">Update</label>

            <hr className="mt-6" />
            <h1 className="mt-6 font-semibold">Description:</h1>
            <h1 className="w-[80%] r text-sm">Sarah, a skilled software engineer with 4 years of experience, holds a Bachelors degree in Computer Science. Seeking remote opportunities in web development. Proficient in JavaScript, React, and responsive design. Committed to delivering efficient and user-friendly solutions.</h1>

            <hr className="font-bold text-black mt-6" />

          </div>

          <div className="p-4 md:w-[70%] drop-shadow-xl rounded bg-zinc-50 ">
            <h1 className="text-2xl font-semibold text-blue-500">{user?.displayName}</h1>
            <p className="text-sky-500 font-semibold">Admin</p>
            <br />
            <div className="flex text-2xl items-center">
              <p className="text-yellow-400"><FaStar /></p>
              <p className="text-yellow-400"><FaStar /></p>
              <p className="text-yellow-400"><FaStar /></p>
              <p className="text-yellow-400"><FaStar /></p>
              <p className="text-yellow-400"><FaStarHalfStroke /></p>
              <p className="ms-4 font-semibold text-gray-500">4.6</p>
            </div>
            <button className="flex items-center gap-2 mt-3 btn lowercase">
              <p className="mt-1"><FaMessage></FaMessage></p>
              <p>Send message</p>
            </button>
            <br />
            <hr />
            <h1 className="text-2xl font-bold mb-5">About</h1>
            <p className="font-semibold">Phone Number:</p>
            <h1 className="text-lg text-sky-500">01898765432</h1>
            <br />
            <p className="font-semibold">Contact Email:</p>
            <h1 className="text-lg text-sky-500">{user?.email}</h1>
            <br />
            <p className="font-semibold">Else_</p>
            <div>
              <button className="btn btn-link">github</button>
              <button className="btn btn-link">Linkedin</button>
              <button className="btn btn-link">Twitter</button>
            </div>
            <div>
              <p className="font-semibold">Site:</p>
              <h1 className="text-lg text-sky-500"> https://www.jobportalbd.com</h1>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Adderss:</p>
              <p>387 Holt Court, Thamascille, Alaske, P02867</p>
            </div>
            <br />
            <hr />
            <div>
              <p className="font-semibold">Birthday:</p>
              <p> June 5, 1994</p>
              <br />
              <p className="font-semibold">Gender: </p>
              <p>Male</p>
            </div>
            <p></p>
          </div>
        </div>
        </div>

        <AdminProfileCompo></AdminProfileCompo>
      </div>
      <ProfileUpdateModal></ProfileUpdateModal>
    </>
  );
};

export default AdminProfile;


