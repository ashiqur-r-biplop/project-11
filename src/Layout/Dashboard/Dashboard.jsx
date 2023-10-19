import { useState } from "react";
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import useUserRole from "../../Hook/UseGetUserRole";

const Dashboard = () => {
  const [drawer, setDrawer] = useState(true);
  const { role } = useUserRole();
  return (
    <div className="grid grid-cols-12 relative">
      {/* sidebar */}
      <div
        className={`col-span-2 ${
          drawer
            ? "bg-black transition-all md:translate-x-[0px]"
            : "transition-all bg-black lg:-translate-x-[250px] md:-translate-x-[50px]"
        } ease-in-out delay-0  h-screen sticky top-0
         `}
      >
        <div className="h-screen ">
          <div className="relative md:block hidden">
            <button
              onClick={() => setDrawer(!drawer)}
              className="text-3xl border absolute text-black bg-white top-4
               -right-4"
            >
              {drawer ? (
                <RiArrowGoBackLine className=""></RiArrowGoBackLine>
              ) : (
                <RiArrowGoForwardLine className=""></RiArrowGoForwardLine>
              )}
            </button>
          </div>
          <div className="flex flex-col text-white justify-between items-center gap-5 border">
            {role == "hiringManager" ? (
              <>
                {" "}
                <Link to="/dashboard/post-job">Job Post</Link>
                <Link to="/dashboard/my-jobs">my jobs</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/all-user">all user</Link>
                <Link to="/dashboard/all-Jobs">All Jobs</Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          drawer
            ? "translate-x-[0px]  transition-all"
            : "lg:-translate-x-[250px] md:-translate-x-[50px]  transition-all"
        } col-span-10 overflow-hidden ease-in-out delay-0`}
      >
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
