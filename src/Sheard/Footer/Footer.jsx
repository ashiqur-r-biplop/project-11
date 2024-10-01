import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrFacebook } from "react-icons/gr";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      {/* Footer for Large Screens */}
      <footer className="text-black lg:my-10">
        <div className="grid grid-cols-12">
          {/* Legal Section */}
          <div className="col-span-6 lg:col-span-2 p-6">
            <div className="py-1 flex items-center justify-start">
              <img src={logo} className="w-8 h-8" alt="" />
              <h1 className="text-3xl font-bold">JobBox</h1>
            </div>

            <div className="mt-2">
              <p className="py-1 text-sm">
                JobBox is the heart of the design community and the best resource to discover and connect with designers and
                jobs worldwide.
              </p>

              <div className="py-4 flex gap-5">
                <GrFacebook className="w-7 h-7 text-blue-500 bg-white rounded"></GrFacebook>
                <FaSquareXTwitter className="w-7 h-7 text-blue-500 bg-white rounded"></FaSquareXTwitter>
                <BsLinkedin className="w-7 h-7 text-blue-500 bg-white rounded"></BsLinkedin>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="col-span-6 lg:col-span-2 p-6">
            <span className="footer-title text-xl block mb-4">Resources</span>
            <div className="mt-2">
              <a className="link link-hover block text-base py-1">About us</a>
              <a className="link link-hover block text-base py-1">Our Team</a>
              <a className="link link-hover block text-base py-1">Products</a>
              <a className="link link-hover block text-base py-1">Contact</a>
            </div>
          </div>

          {/* Community Section */}
          <div className="col-span-6 lg:col-span-2 p-6">
            <span className="footer-title text-xl block mb-4">Community</span>
            <div className="mt-2">
              <a className="link link-hover block text-base py-1">Feature</a>
              <a className="link link-hover block text-base py-1">Pricing</a>
              <a className="link link-hover block text-base py-1">Credit</a>
              <a className="link link-hover block text-base py-1">FAQ</a>
            </div>
          </div>

          {/* Quick links Section */}
          <div className="col-span-6 lg:col-span-2 p-6">
            <span className="footer-title text-xl block mb-4">Quick links</span>
            <div className="mt-2">
              <a className="link link-hover block text-base py-1">iOS</a>
              <a className="link link-hover block text-base py-1">Android</a>
              <a className="link link-hover block text-base py-1">Microsoft</a>
              <a className="link link-hover block text-base py-1">Desktop</a>
            </div>
          </div>

          {/* More Section */}
          <div className="col-span-6 lg:col-span-2 p-6">
            <span className="footer-title text-xl block mb-4">More</span>
            <div className="mt-2">
              <a className="link link-hover block text-base py-1">Privacy</a>
              <a className="link link-hover block text-base py-1">Help</a>
              <a className="link link-hover block text-base py-1">Terms</a>
              <a className="link link-hover block text-base py-1">FAQ</a>
            </div>
          </div>

          {/* Download App Section */}
          <div className="col-span-6 lg:col-span-2 p-6">
            <span className="footer-title text-xl block mb-4">Download App</span>
            <div className="mt-2">
              <p className="py-1 text-sm">Download our Apps and get extra 15% Discount on your first Order…!</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <footer className="border-t border-gray-500 text-neutral-content py-4 text-center">
        <p className="text-sm text-gray-500">Copyright © 2023 - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
