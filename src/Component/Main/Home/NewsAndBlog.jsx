import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuLoader } from "react-icons/lu";
import SectionTitle from "./SectionTitle/SectionTitle";

const NewsAndBlog = () => {
  const [eventsNews, setEventsNews] = useState([]);

  useEffect(() => {
    fetch("/eventsnews.json")
      .then((res) => res.json())
      .then((data) => setEventsNews(data));
  }, []);

  // Function to format the date and time
  const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const dateTime = new Date(dateTimeString);
    const formattedDateTime = dateTime.toLocaleDateString(undefined, options);
    return formattedDateTime;
  };

  return (
    <div className="container mx-auto lg:py-10 py-5">
      <SectionTitle title="News and Blog" subTitle="Get the latest news, updates and tips"></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {eventsNews
          .sort((a, b) => new Date(b.reportDateTime) - new Date(a.reportDateTime))
          .slice(0, 3)
          .map((data, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg flex flex-col pb-5">
              <img src={data.reportImage} className="w-full h-64 object-cover" alt="Reporter Image" />

              <div className="px-4 py-3 flex-grow">
                <span className="py-1 px-2 bg-gray-200 text-[#05264e] font-semibold rounded-md">{data.categoryName}</span>
                <Link to="">
                  <h1 className="py-2 text-[#05264e] hover:text-[#3c65f5] text-lg font-semibold">{data.reportTitle}</h1>
                </Link>
                <p className="text-gray-600">
                  {data.reportDescription.length > 250
                    ? data.reportDescription.slice(0, 250) + "..."
                    : data.reportDescription}
                </p>
              </div>

              <div className="px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={data.reporterImage} className="w-12 h-12 rounded-full" alt="Reporter" />
                  <div className="ms-2">
                    <div className="text-[#05264e] font-semibold">{data.reporterName}</div>
                    <div className="text-[#66789c]">{formatDateTime(data.reportDateTime)}</div>
                  </div>
                </div>
                <div className="text-[#66789c]">{data.readTime} to read</div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center items-center mt-5 lg:mt-10">
        <Link to="/blog">
          <button className="bg-[#05264e] hover:bg-[#3c65f5] px-5 py-3 rounded-md text-white flex justify-center items-center gap-2">
            <span>
              <LuLoader></LuLoader>
            </span>
            Load More Post
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsAndBlog;
