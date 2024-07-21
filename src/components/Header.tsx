import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="h-[100px] w-full flex justify-center items-center">
      <div className="w-[90%] lg:h-[80px] h-[60px] flex justify-around items-center relative">
        <div className="h-[60px] w-[30%] lg:flex justify-around items-center hidden">
          <nav className="text-gray-500 cursor-pointer">Home</nav>
          <div className="relative">
            <nav
              className="text-gray-500 cursor-pointer flex items-center"
              onClick={toggleDropdown}
            >
              <span>Shop</span>
              <AiOutlineDown
                className={`ml-2  text-[13px] mt-1 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </nav>
            <div
              className={`absolute top-full left-0 mt-9 w-[500px] bg-white border-gray-300 shadow-lg transition-transform duration-300 ease-in-out ${
                isDropdownOpen
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-2 opacity-0"
              }`}
              style={{ transformOrigin: "top", zIndex: 10 }}
            >
              <ul className="py-4">
                <li className="px-4 py-3 cursor-pointer hover:bg-gray-100">
                  WristWatches
                </li>
                <li className="px-4 py-3 cursor-pointer hover:bg-gray-100">
                  Unisex Wears
                </li>
                <li className="px-4 py-3 cursor-pointer hover:bg-gray-100">
                  Shoes And Bags
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-[20%] flex justify-center items-center flex-col">
          <h1 className="lg:text-2xl text-[12px] font-bold text-gray-700">
            Jam <span className="text-[#8e6548]">Jam</span>
          </h1>
          <p className="text-center font-serif text-[12px]">collections</p>
        </div>
        <div className="h-[60px] w-[29%] lg:flex gap-6 justify-center items-center">
          <div className="lg:flex gap-2 hidden">
            <h1 className="text-[15px] cursor-pointer">CART</h1>
            <p className="text-gray-500">(₦0)</p>
          </div>
          <div className="gap-3 lg:flex justify-center items-center hidden">
            <IoPersonOutline className="text-gray-500 font-bold" />
            <p className="text-[15px] font-medium cursor-pointer">Login</p>
          </div>
          <div className="flex gap-6 justify-center items-center">
            <LiaSearchSolid className="text-[15px] font-bold cursor-pointer hidden lg:block" />
          </div>
        </div>
        <div className="lg:hidden block">
          <HiOutlineMenuAlt3 className="text-[16px] font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Header;
