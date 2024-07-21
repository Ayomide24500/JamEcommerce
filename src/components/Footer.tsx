const Footer = () => {
  return (
    <div className="w-full h-[400px] bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-lg font-bold">Jam Jam collections</h1>
          <p className="text-sm mt-2">
            © 2024 jam jam collections. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
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
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
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
