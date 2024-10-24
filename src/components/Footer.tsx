import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-xl font-bold">Jam Jam Collections</h1>
          <p className="text-sm mt-2">© 2024 Jam Jam Collections. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="flex items-center space-x-2 text-sm">
            <FaPhoneAlt />
            <span>+234 901 558 7623</span>
          </div>
          <div className="flex items-center space-x-2 text-sm mt-2">
            <FaEnvelope />
            <span>info@jamjamcollections.com</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="hover:text-gray-400 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 text-sm">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400 text-sm">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="text-center md:text-right">
          <p className="text-sm mb-2">Follow us:</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link
              to="https://www.fb.com/l/6lp1kJRRR"
              className="hover:text-gray-400 text-lg"
            >
              <FaFacebookF />
            </Link>
            <a href="#" className="hover:text-gray-400 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400 text-lg">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
