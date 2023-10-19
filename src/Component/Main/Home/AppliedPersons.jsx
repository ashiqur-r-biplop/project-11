import React, { useEffect, useState } from "react";

const AppliedPersons = () => {
  const [appliedPersons, setAllappliedPersons] = useState([]);

  useEffect(() => {
    fetch("/url")
      .then((res) => res.json())
      .then((data) => setAllappliedPersons(data));
  }, []);

  return (
    <div>
      <>
        <div className="overflow-x-auto mt-4">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th>#</th>
                <th>Applicant Name</th>
                <th>Applicant Email</th>
                <th>Applicant Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appliedPersons.map((applicant, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-blue-200" : "bg-green-300"}
                >
                  <td>{index + 1}</td>


                  <td>{applicant.name}</td>
                  <td>{applicant.email}</td>
                  <td>{applicant.id}</td>

                  <td>
                    <div>
                      <Link to={`/user/${applicant.userId}`}>See details</Link>
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

export default AppliedPersons;
