import banner1 from "../../../assets/header1.png";
import banner2 from "../../../assets/header2.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header-bg md:h-[80vh] bg-[#F2F6FD]">
      <div className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full h-full p-5">
            <div className="content md:w-[50%] mx-auto text-center md:text-start mt-5 md:mt-0">
              <h1 className="text-5xl font-bold md:w-[60%]">
                The Easiest Way to Get Your New Job
              </h1>
              <p className="md:w-[50%] py-5 text-xl">
                Each month, more than 3 million job seekers turn to website in
                their search for work, making over 140,000 applications every
                single day
              </p>
            </div>
            <div className="md:w-[50%] mx-auto relative ">
              <div>
                <img src={banner1} alt="" />
              </div>
              <div className="md:absolute -bottom-20 right-40 ">
                <img src={banner2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
