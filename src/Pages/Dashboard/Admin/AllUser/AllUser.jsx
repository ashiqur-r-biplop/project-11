import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const { axiosSecure } = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("https://job-portal-server-ebon.vercel.app/users")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [axiosSecure]);

  return (
    <div>
      <>
        <div className="overflow-x-auto mt-4">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-blue-200" : "bg-green-300"}
                >
                  <td>{index + 1}</td>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user._id}</td>

                  <td>
                    <div>
                      <Link to={`/user/${user.userId}`}>
                        <button className="btn btn-xs">See details</button>
                      </Link>
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

export default AllUser;
