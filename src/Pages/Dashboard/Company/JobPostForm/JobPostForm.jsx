/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillHome, AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Provider/AuthProvider";

function JobPostForm() {
  const user = useContext(AuthContext)
  const [selectedRequiredQualifications, setSelectedRequiredQualifications] =
    useState([]);
  const [selectedPreferredQualifications, setSelectedPreferredQualifications] =
    useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const qualifications = {
      requiredQualifications: selectedRequiredQualifications,
      preferredQualifications: selectedPreferredQualifications,
    };
    console.log(data);

    // This mergedData is full form data
    const mergedData = { ...data, qualifications };

    // Set here fetch data route

    fetch("https://job-portal-server-ebon.vercel.app/job-post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mergedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Job Post Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          // reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to post job!",
          });
        }
      })
      .finally(() => { });
  };

  const handleSelectedRequiredQualifications = (e) => {
    const value = e.target.value;
    setSelectedRequiredQualifications((prevQualifications) => [
      ...prevQualifications,
      value,
    ]);
  };

  const handleRemoveRequiredQualification = (itemToRemove) => {
    setSelectedRequiredQualifications((prevQualifications) =>
      prevQualifications.filter((item) => item !== itemToRemove)
    );
  };

  const handleSelectedPreferredQualifications = (e) => {
    const value = e.target.value;
    setSelectedPreferredQualifications((prevQualifications) => [
      ...prevQualifications,
      value,
    ]);
  };

  const handleRemovePreferredQualification = (itemToRemove) => {
    setSelectedPreferredQualifications((prevQualifications) =>
      prevQualifications.filter((item) => item !== itemToRemove)
    );
  };

  const salaryRangeOptions = [
    "Under $30,000",
    "$30,000 - $50,000",
    "$50,000 - $70,000",
    "$70,000 - $90,000",
    "$90,000 - $110,000",
    "Over $110,000",
    "Negotiable",
  ];

  const qualificationOptions = [
    "Certifications",
    "Bachelor's Degree",
    "Master's Degree",
    "Relevant Work Experience",
    "Specific Skillset",
    // Add more options as needed
  ];

  const educationLevelOptions = [
    "High School",
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate Degree",
    "Other",
    // Add more options as needed
  ];

  const experienceLevelOptions = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    // Add more options as needed
  ];

  const jobCategoryOptions = [
    "Technology",
    "Marketing",
    "Finance",
    // Add more options as needed
  ];

  const remoteOrOnsiteOptions = ["Remote", "Onsite"];

  return (
    <div className="container mx-auto p-5">
      <div className="bg-gradient-to-b from-[#F2F6FD] via-[#F2F6FD] to-[#F2F6FD] lg:py-10 py-5 lg:px-10 px-2 rounded-t-lg grid grid-cols-12">
        <div className="lg:col-span-9 col-span-12">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold mb-3 uppercase">
            Post a job
          </h1>
          <h3 className="lg:text-xl text-lg">
            Get the latest news, updates, and tips
          </h3>
        </div>
        <div className="lg:col-span-3 col-span-12 flex justify-end items-end mt-5 lg:mt-0">
          <div className="flex justify-center items-center">
            <div>
              <Link to="/">
                <AiFillHome className="lg:w-5 w-3 lg:h-5 h-3 text-black"></AiFillHome>
              </Link>
            </div>
            <div>
              <AiOutlineRight className="lg:w-5 w-3 lg:h-5 h-3 text-black"></AiOutlineRight>
            </div>
            <div>
              <Link to="">
                <span className="font-bold lg:text-lg text-base text-black">
                  Dashboard
                </span>
              </Link>
            </div>
            <div>
              <AiOutlineRight className="lg:w-5 w-3 lg:h-5 h-3 text-black"></AiOutlineRight>
            </div>
            <div>
              <span className="font-bold lg:text-lg text-base text-black">
                Job Post
              </span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 lg:gap-4 lg:px-44 py-5">
          {/* Job Title */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Job Title
            </label>

            <input
              type="text"
              name="jobTitle"
              placeholder="Write your job title"
              {...register("jobTitle", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.jobTitle && (
              <p className="text-red-500">Job Title is required</p>
            )}
          </div>

          {/* Company Name */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Write your company name"
              {...register("companyName", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.companyName && (
              <p className="text-red-500">Company Name is required</p>
            )}
          </div>

          {/* Company Logo (Image Upload) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Company Logo
            </label>
            <input
              type="file"
              name="companyLogo"
              {...register("companyLogo", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.companyLogo && (
              <p className="text-red-500">Company Logo is required</p>
            )}
          </div>

          {/* Job Location */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Job Location
            </label>
            <input
              type="text"
              name="jobLocation"
              placeholder="Enter job location"
              {...register("jobLocation", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.jobLocation && (
              <p className="text-red-500">Job Location is required</p>
            )}
          </div>

          {/* Job Type (Dropdown/Select) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Job Type
            </label>
            <select
              name="jobType"
              {...register("jobType", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              {/* ... Add more options as needed */}
            </select>
            {errors.jobType && (
              <p className="text-red-500">Job Type is required</p>
            )}
          </div>

          {/* Job Category (Dropdown/Select) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Job Category
            </label>
            <select
              name="jobCategory"
              {...register("jobCategory", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Job Category</option>
              {jobCategoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.jobCategory && (
              <p className="text-red-500">Job Category is required</p>
            )}
          </div>

          {/* Remote or Onsite (Dropdown/Select) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Remote or Onsite
            </label>
            <select
              name="remoteOrOnsite"
              {...register("remoteOrOnsite", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Remote/Onsite</option>
              {remoteOrOnsiteOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.remoteOrOnsite && (
              <p className="text-red-500">Remote/Onsite is required</p>
            )}
          </div>

          {/* Salary Range (Dropdown/Select) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Salary Range
            </label>
            <select
              name="salaryRange"
              {...register("salaryRange", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Salary Range</option>
              {salaryRangeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.salaryRange && (
              <p className="text-red-500">Salary Range is required</p>
            )}
          </div>

          {/* Application Deadline */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              {...register("applicationDeadline", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.applicationDeadline && (
              <p className="text-red-500">Application Deadline is required</p>
            )}
          </div>

          {/* Contact Email */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              placeholder="Enter contact email"
              {...register("contactEmail", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              defaultValue={user?.user?.email} disabled={true}
            />
            {errors.contactEmail && (
              <p className="text-red-500">Contact Email is required</p>
            )}
          </div>

          {/* Contact Phone Number */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Contact Phone Number
            </label>
            <input
              type="tel"
              name="contactPhone"
              placeholder="Enter contact phone number"
              {...register("contactPhone", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.contactPhone && (
              <p className="text-red-500">Contact Phone Number is required</p>
            )}
          </div>

          {/* Company Website */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Company Website
            </label>
            <input
              type="url"
              name="companyWebsite"
              placeholder="Enter company website"
              {...register("companyWebsite", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.companyWebsite && (
              <p className="text-red-500">Company Website is required</p>
            )}
          </div>

          {/* Application Link or Form URL */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Application Link or Form URL
            </label>
            <input
              type="url"
              name="applicationLink"
              placeholder="Enter application link or form URL"
              {...register("applicationLink", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.applicationLink && (
              <p className="text-red-500">
                Application Link or Form URL is required
              </p>
            )}
          </div>

          {/* Application Tracking ID (for internal use) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Application Tracking ID
            </label>
            <input
              type="text"
              name="trackingId"
              placeholder="Enter tracking ID"
              {...register("trackingId", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.trackingId && (
              <p className="text-red-500">
                Application Tracking ID is required
              </p>
            )}
          </div>

          {/* Education Level (Dropdown/Select) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Education Level
            </label>
            <select
              name="educationLevel"
              {...register("educationLevel", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Education Level</option>
              {educationLevelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.educationLevel && (
              <p className="text-red-500">Education Level is required</p>
            )}
          </div>

          {/* Experience Level (Dropdown/Select) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              {...register("experienceLevel", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Experience Level</option>
              {experienceLevelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.experienceLevel && (
              <p className="text-red-500">Experience Level is required</p>
            )}
          </div>

          {/* Required Qualifications (Multi-select) */}
          <div className="col-span-12 lg:col-span-6">
            <div>
              <div className="w-full grid grid-cols-2 gap-2">
                {selectedRequiredQualifications.map((a, i) => {
                  return (
                    <div key={i}>
                      <div className="flex items-center">
                        <span
                          onClick={() => handleRemoveRequiredQualification(a)}
                        >
                          <AiOutlineClose className="text-red-500 w-3 h-3 cursor-pointer"></AiOutlineClose>
                        </span>
                        <span className="bg-gray-400 px-2 text-sm rounded-lg">
                          {a}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-[#05264e] font-semibold">
                Required Qualifications
              </label>
              <select
                name="requiredQualifications"
                {...register("requiredQualifications")}
                className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                onChange={handleSelectedRequiredQualifications}
              >
                <option value="">Select Required Qualifications</option>
                {qualificationOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{
                      color: selectedRequiredQualifications.includes(option)
                        ? "red"
                        : "initial",
                    }}
                  >
                    {option}
                  </option>
                ))}
              </select>
              {errors.requiredQualifications && (
                <p className="text-red-500">
                  Required Qualifications are required
                </p>
              )}
            </div>
          </div>

          {/* Preferred Qualifications (Multi-select) */}
          <div className="col-span-12 lg:col-span-6">
            <div>
              <div className="w-full grid grid-cols-2 gap-2">
                {selectedPreferredQualifications.map((a, i) => {
                  return (
                    <div key={i}>
                      <div className="flex items-center">
                        <span
                          onClick={() => handleRemovePreferredQualification(a)}
                        >
                          <AiOutlineClose className="text-red-500 w-3 h-3 cursor-pointer"></AiOutlineClose>
                        </span>
                        <span className="bg-gray-400 px-2 text-sm rounded-lg">
                          {a}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-[#05264e] font-semibold">
                Preferred Qualifications
              </label>
              <select
                name="preferredQualifications"
                {...register("preferredQualifications", { required: true })}
                className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                onChange={handleSelectedPreferredQualifications}
              >
                <option value="">Select Preferred Qualifications</option>
                {qualificationOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    style={{
                      color: selectedPreferredQualifications.includes(option)
                        ? "red"
                        : "initial",
                    }}
                  >
                    {option}
                  </option>
                ))}
              </select>
              {errors.preferredQualifications && (
                <p className="text-red-500">
                  Preferred Qualifications are required
                </p>
              )}
            </div>
          </div>

          {/* Job Description (Textarea) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Job Description
            </label>
            <textarea
              name="jobDescription"
              placeholder="Enter job description"
              {...register("jobDescription", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.jobDescription && (
              <p className="text-red-500">Job Description is required</p>
            )}
          </div>

          {/* How to Apply (Textarea) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              How to Apply
            </label>
            <textarea
              name="howToApply"
              placeholder="Enter how to apply"
              {...register("howToApply", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.howToApply && (
              <p className="text-red-500">How to Apply is required</p>
            )}
          </div>

          {/* Application Instructions (Textarea) */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Application Instructions
            </label>
            <textarea
              name="applicationInstructions"
              placeholder="Enter application instructions"
              {...register("applicationInstructions", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.applicationInstructions && (
              <p className="text-red-500">
                Application Instructions is required
              </p>
            )}
          </div>

          {/* Equal Opportunity Employer Statement */}
          <div className="col-span-12 lg:col-span-6">
            <label className="block text-[#05264e] font-semibold">
              Equal Opportunity Employer Statement
            </label>
            <textarea
              name="equalOpportunityStatement"
              placeholder="Enter equal opportunity employer statement"
              {...register("equalOpportunityStatement", { required: true })}
              className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.equalOpportunityStatement && (
              <p className="text-red-500">
                Equal Opportunity Employer Statement is required
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-12">
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default JobPostForm;
