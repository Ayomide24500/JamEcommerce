const Footer = () => {
  return (
    <div className="w-full h-[400px] bg-gray-100 flex justify-center items-center">
      <div className="container w-[85%] flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="lg:text-xl text-[14px] font-bold">
            Jam Jam collections
          </h1>
          <p className="lg:text-[15px] mt-2 text-[13px]">
            © 2024 jam jam collections. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0 text-[14px] text-[]">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">Follow us:</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2 text-[12px]">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
