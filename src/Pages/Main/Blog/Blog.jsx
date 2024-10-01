import { useEffect, useState } from "react";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Blog = () => {
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
    };
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="bg-gradient-to-b from-[#F2F6FD] via-[#F2F6FD] to-[#F2F6FD] lg:py-10 py-5 lg:px-10 px-5 rounded-t-lg grid grid-cols-12">
        <div className="col-span-10">
          <h1 className="text-4xl font-semibold mb-3">Blog</h1>
          <h3 className="text-xl ">Get the latest news, updates, and tips</h3>
        </div>
        <div className="col-span-2 flex justify-center items-end">
          <div className="flex justify-center items-center">
            <div>
              <Link to="/">
                <AiFillHome className="w-5 h-5 text-black"></AiFillHome>
              </Link>
            </div>
            <div>
              <AiOutlineRight className="w-5 h-5 text-black"></AiOutlineRight>
            </div>
            <div>
              <span className="font-bold text-lg text-black">Blog</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-5 lg:py-20 py-10">
        {eventsNews
          .sort((a, b) => new Date(b.reportDateTime) - new Date(a.reportDateTime))
          .slice(0, 3)
          .map((data, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <div>
                <img src={data.reportImage} className="w-full h-[400px]" alt="Report Image" />
                <div className="bg-gradient-to-t from-black to-transparent h-1/2 absolute bottom-0 left-0 w-full" />
              </div>

              <div className="p-3 absolute bottom-16">
                <Link to="">
                  <span className="py-2 text-white hover:text-[#3c65f5] text-lg font-semibold">{data.reportTitle}</span>
                </Link>
              </div>

              <div className="p-3 flex justify-between items-center absolute bottom-0 text-white">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex items-center">
                    <img src={data.reporterImage} className="w-12 h-12 rounded-full" alt="Reporter" />
                    <div className="font-semibold ml-2">{data.reporterName}</div>
                  </div>
                  <div className="flex items-center">
                    <div>{formatDateTime(data.reportDateTime)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-12 gap-5 lg:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 col-span-8">
          {eventsNews
            .sort((a, b) => new Date(b.reportDateTime) - new Date(a.reportDateTime))
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

        <div className="col-span-4 relative border">
          <div>
            <div className="flex justify-center">
              <div className="w-full flex">
                <input type="text" className="w-full p-2 border border-gray-300" placeholder="Search" />
                <button className="bg-red-500 text-white p-5">
                  <IoMdSearch className="w-5 h-5"></IoMdSearch>
                </button>
              </div>
            </div>

            <div className="lg:p-5 p-3">
              <h1 className="border-b pb-2 border-gray-500 text-2xl font-semibold">Trending Now</h1>

              <div className="py-5">
                {eventsNews
                  .sort((a, b) => new Date(b.reportDateTime) - new Date(a.reportDateTime))
                  .slice(0, 10)
                  .map((data, index) => (
                    <div key={index} className="rounded-lg overflow-hidden pb-5 flex">
                      <img src={data.reportImage} className="w-20 h-24 object-cover" alt="Reporter Image" />

                      <div className="px-4">
                        <div>
                          <Link to="">
                            <h1 className="text-[#05264e] hover:text-[#3c65f5] text-base font-semibold">
                              {data.reportTitle}
                            </h1>
                          </Link>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <img src={data.reporterImage} className="w-10 h-10 rounded-full" alt="Reporter" />
                            <div className="ms-2">
                              <div className="text-[#05264e] font-semibold">{data.reporterName}</div>
                              <div className="text-[#66789c]">{formatDateTime(data.reportDateTime)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="lg:p-5 p-3">
              <h1 className="border-b pb-2 border-gray-500 text-2xl font-semibold">Photo Gallery</h1>

              <div className="py-5 grid grid-cols-2 gap-5">
                {eventsNews
                  .sort((a, b) => new Date(b.reportDateTime) - new Date(a.reportDateTime))
                  .map((data, index) => (
                    <div key={index} className="rounded-lg overflow-hidden pb-5 flex">
                      <img src={data.reportImage} className="w-full h-40 object-cover" alt="Reporter Image" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
