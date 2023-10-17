import "./About.css";
import img1 from "../../../assets/about_bg.png";
import img2 from "../../../assets/about_img1.png";
import { FaHome } from "react-icons/fa";
import HappyCustomer from "./HappyCustomer";
import Team from "./Team";

const About = () => {
  return (
    <div>
      <div className="bg-style relative">
        <img className="bg-style" src={img1} alt="" />
        {/* absolute left-0 top-0  */}

        <div className="absolute lg:left-52 left-24 lg:top-10 top:2 text-white flex">
          <div>
            <h1 className="text-3xl font-bold">About Us</h1>
            <h4 className="text-xl mt-2">
              Get the latest news, updates and tips
            </h4>
          </div>
          <div className="">
            <button className="btn  btn-sm">
              {" "}
              <FaHome></FaHome> Home
            </button>
          </div>
        </div>
      </div>

      {/* About Our Company Part */}
      <div className="flex justify-center">
        <div className="text-center mt-16 lg:w-1/2 p-4">
          <h2 className="text-xl font-bold text-neutral-400">OUR COMPANY</h2>
          <h1 className="text-4xl mt-2 font-bold">About Our Company</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante
            viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a
            blandit tempor, velit magna pellentesque risus, at congue tellus dui
            quis nisl.
          </p>
        </div>
      </div>
      {/* Image Section */}
      <section>
        <div className="hero min-h-screen">
          <div className="hero-content flex flex-col lg:flex-row">
            <img src={img2} className="max-w-lg rounded-lg shadow-2xl p-4" />
            <div className="lg:px-12">
              <h1 className="text-5xl font-bold pb-4">What we can do?</h1>
              <p className="py-2">
                Aenean sollicituin, lorem quis bibendum auctor nisi elit
                consequat ipsum sagittis sem nibh id elit. Duis sed odio sit
                amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctora ornare odio.
              </p>
              <p className="py-2">
                Aenean sollicituin, lorem quis bibendum auctor nisi elit
                consequat ipsum sagittis sem nibh id elit. Duis sed odio sit
                amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctora ornare odio.
              </p>
              <p className="py-2">
                Aenean sollicituin, lorem quis bibendum auctor nisi elit
                consequat ipsum sagittis sem nibh id elit. Duis sed odio sit
                amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctora ornare odio.
              </p>
              <p className="py-2">
                Aenean sollicituin, lorem quis bibendum auctor nisi elit
                consequat ipsum sagittis sem nibh id elit. Duis sed odio sit
                amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctora ornare odio.
              </p>
              <button className="btn bg-blue-900 text-white mt-4">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Team></Team>
      <HappyCustomer></HappyCustomer>
    </div>
  );
};

export default About;
