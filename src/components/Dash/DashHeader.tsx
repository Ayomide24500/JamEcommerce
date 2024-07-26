import { useState } from "react";
import { MdNotifications, MdAdd } from "react-icons/md";
import Modal from "../../Pages/Auth/Modal";
import AddProductForm from "../../Pages/Cart/AddProduct";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotificationVisibility } from "../../global/reduxState"; // Update this import to match your action

const DashHeader = () => {
  const [store, setStore] = useState(false);
  const notifications = useSelector((state: any) => state.notifications);
  const dispatch = useDispatch();

  const handleCloseStore = () => {
    setStore(false);
  };

  const handleStore = () => {
    setStore(true);
  };

  const handleNotificationClick = () => {
    console.log("togglie");

    dispatch(toggleNotificationVisibility());
  };

  return (
    <div>
      <header className="flex items-center h-[50px] justify-between p-6 bg-white shadow-md">
        <Link to="/">
          <FaHome className="mr-2" />
        </Link>
        <div className="flex items-center lg:w-[50%] w-[40%]">
          <input
            type="text"
            className="border p-2 rounded outline-none border-none text-[12px]"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center justify-center h-[40px] lg:w-[30%] w-[60%]">
          <div className="lg:w-[50%] h-[20%] lg:h-[80%] flex justify-center items-center">
            <p
              className="font-semibold flex items-center lg:text-[14px] text-[10px] lg:pl-0 pt-3 cursor-pointer"
              onClick={handleStore}
            >
              <MdAdd className="lg:mr-2 mr-1" />
              Add To Store
            </p>
          </div>
          <div className="relative ml-5 mt-3">
            <button
              className="focus:outline-none"
              onClick={handleNotificationClick}
            >
              <MdNotifications />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 inline-block w-3 h-3 text-white text-center text-xs bg-red-600 rounded-full">
                  {notifications.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      <Modal show={store} onClose={handleCloseStore}>
        <AddProductForm />
      </Modal>
    </div>
  );
};

export default DashHeader;
