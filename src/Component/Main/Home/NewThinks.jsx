import { BsFillSendCheckFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const NewThinks = () => {
  return (
    <div className="container mx-auto lg:py-10 py-5 bg-[#3C65F5] relative">
      <h1 className="text-center px-24 py-5 lg:px-80 lg:py-10 text-xl md:text-3xl lg:text-5xl font-semibold text-white">
        New Things Will Always Update Regularly
      </h1>

      <div className="flex justify-center items-center py-5 lg:py-10">
        <div className="form-control">
          <label className="input-group input-group-sm md:input-group-md lg:input-group-lg">
            <span className="input-icon bg-white border-none">
              <FaEnvelope className="lg:w-12 lg:h-8 md:w-10 md:h-8 w-8 h-6" />
            </span>
            <input type="email" placeholder="Enter your email here" className="input input-sm md:input-md lg:input-lg" />
            <span className="bg-red-600 text-white text-lg font-bold">
              <button className="flex justify-center items-center">
                <BsFillSendCheckFill className="bg-red-600 text-white me-2" />
                Subscribe
              </button>
            </span>
          </label>
        </div>
      </div>

      <div>
        <img
          src="https://img.freepik.com/free-vector/shining-bright-light-bulb-with-cogs_3446-347.jpg?w=740&t=st=1697457310~exp=1697457910~hmac=72559a2c077c3d131cfcaa51c159aed4e8e65914f50955078be78f66620bf377"
          className="lg:w-28 w-20 lg:h-32 h-24 rounded-md absolute lg:top-10 top-3 lg:left-10 left-3"
          alt="New Thinks will always update regularly"
        />
        <img
          src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?w=826&t=st=1697455867~exp=1697456467~hmac=d4f89a94c83ea66f93c6a87cae7bd067586e7d5ad02204d9af74186cccde1f74"
          className="lg:w-28 w-20 lg:h-32 h-24 rounded-md absolute lg:top-10 top-3 lg:right-10 right-3"
          alt="New Thinks will always update regularly"
        />
        <img
          src="https://img.freepik.com/free-photo/brainstorming-young-team-meeting_329181-9638.jpg?size=626&ext=jpg&uid=R93922666&ga=GA1.2.1519749542.1697281043&semt=ais"
          className="lg:w-28 lg:h-32 rounded-md absolute lg:bottom-10 lg:left-24 hidden lg:block"
          alt="New Thinks will always update regularly"
        />
        <img
          src="https://img.freepik.com/free-photo/think-out-box_1379-527.jpg?size=626&ext=jpg&uid=R93922666&ga=GA1.2.1519749542.1697281043&semt=ais"
          className="lg:w-28 lg:h-32 rounded-md absolute lg:bottom-10 lg:right-24  hidden lg:block"
          alt="New Thinks will always update regularly"
        />
      </div>
    </div>
  );
};

export default NewThinks;
