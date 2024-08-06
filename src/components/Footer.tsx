import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-gray-100 flex justify-center items-center py-8">
      <div className="container w-[90%] flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="lg:text-xl text-[13px] font-bold">
            Jam Jam Collections
          </h1>
          <p className="lg:text-[14px] mt-2 text-[12px]">
            © 2024 Jam Jam Collections. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0 text-[10px]">
          <a href="#" className="hover:text-gray-500 text-[10px]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-500 text-[10px]">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-500 text-[10px]">
            Contact
          </a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-[10px]">Follow us:</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <Link
              to="https://www.fb.com/l/6lp1kJRRR"
              className="hover:text-gray-500 text-sm"
            >
              <FaFacebookF />
            </Link>
            <a href="#" className="hover:text-gray-500 text-sm">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-500 text-sm">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
