import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import Modal from "../Pages/Auth/Modal";
import AuthForm from "../Pages/Auth/Register";
import { IoMdCart } from "react-icons/io";
import Card from "./Card";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cart = useSelector((state: any) => state.cart);
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleShowgo = () => {
    setShow(false);
  };

  const handleRegister = () => {
    setLogin(true);
  };

  const handleCloseRegister = () => {
    setLogin(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="h-[100px] w-full flex justify-center items-center relative">
        <div className="w-[90%] lg:h-[80px] h-[60px] flex justify-around items-center relative">
          <div className="h-[60px] w-[30%] lg:flex justify-around items-center hidden">
            <Link to="/">
              <nav className="text-gray-500 cursor-pointer">Home</nav>
            </Link>
            <div className="relative">
              <nav
                className="text-gray-500 cursor-pointer flex items-center"
                onClick={toggleDropdown}
              >
                <span>Shop</span>
                <AiOutlineDown
                  className={`ml-2 text-[13px] mt-1 transition-transform duration-300 ${
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
          <Link to="/">
            <div className="h-[60px] w-[20%] flex justify-center items-center flex-col">
              <h1 className="lg:text-2xl text-[12px] font-bold text-gray-400">
                Jam <span className="text-gray-700">Jam</span>
              </h1>
              <p className="text-center font-serif text-[12px]">collections</p>
            </div>
          </Link>
          <div className="lg:h-[60px] lg:w-[30%] w-[40%] flex justify-around items-center">
            <nav
              className="text-gray-500 cursor-pointer flex gap-3 justify-center items-center text-[12px]"
              onClick={handleRegister}
            >
              <IoPersonOutline className="text-[13px] lg:text-[13px]" />
              <p className="lg:block hidden">login</p>
            </nav>
            <div className="relative">
              <IoMdCart
                className="lg:text-[20px] text-[13px] cursor-pointer"
                onClick={handleShow}
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-3 w-3 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <div className="lg:hidden">
              <nav className="text-gray-500 cursor-pointer">
                <HiOutlineMenuAlt3 className="text-[20px]" />
              </nav>
            </div>
          </div>
        </div>
        {login && (
          <Modal show={login} onClose={handleCloseRegister}>
            <AuthForm />
          </Modal>
        )}
      </div>
      {show && <Card handleShowgo={handleShowgo} show={show} />}
    </div>
  );
};

export default Header;
