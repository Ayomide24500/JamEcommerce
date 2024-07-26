import { MdBadge } from "react-icons/md";
import RecentOrder from "../../components/Dash/RecentOrder";
import TopProduct from "../../components/Dash/TopProduct";
import "../../index.css";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbMoodDollar } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import {
  removeFromNotification,
  toggleNotificationVisibility,
} from "../../global/reduxState";
import React from "react";

const AdminDash = () => {
  const notifications = useSelector((state: any) => state.notifications);

  const dispatch = useDispatch();
  const isNotificationVisible = useSelector(
    (state: any) => state.isNotificationVisible
  );

  console.log(notifications);

  const [latestNotification, setLatestNotification] = useState<any>(null);

  const handleToggleNotifications = () => {
    dispatch(toggleNotificationVisibility());
  };

  useEffect(() => {
    if (notifications.length > 0) {
      setLatestNotification(notifications[notifications.length - 1]);
    }
  }, [notifications]);

  const handleRemoveNotification = (id: string) => {
    dispatch(removeFromNotification({ id }));
  };

  return (
    <div>
      <div className="grid lg:h-[120px] p-2 grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white h-[120px] ml-2 lg:ml-0 p-6 gap-5 rounded-lg shadow-lg flex justify-center items-center">
          <div className="hexagon bg-red-500">
            <MdBadge className="text-[27px] text-white" />
          </div>
          <div className="w-[90%] h-full">
            <h3 className="text-[16px] pt-3 font-semibold text-center">
              Total Sales
            </h3>
            <p className="text-xl font-bold text-center">$125,000</p>
          </div>
        </div>

        <div className="bg-white h-[120px] ml-2 lg:ml-0 p-6 gap-5 rounded-lg shadow-lg flex justify-center items-center">
          <div className="hexagons bg-green-500">
            <TbMoodDollar className="text-[27px] text-white" />
          </div>
          <div className="w-[90%] h-full">
            <h3 className="text-[16px] pt-3 font-semibold text-center">
              Total Orders
            </h3>
            <p className="text-xl lg:pl-6 font-medium text-center">1,230</p>
          </div>
        </div>

        <div className="bg-white h-[120px] ml-2 lg:ml-0 p-6 gap-5 rounded-lg shadow-lg flex justify-center items-center">
          <div className="hexagons bg-green-500">
            <FaPeopleGroup className="text-[27px] text-white" />
          </div>
          <div className="w-[100%] h-full">
            <h3 className="text-[16px] font-semibold text-center pt-3">
              Active Customer
            </h3>
            <p className="text-xl lg:pl-6 font-medium text-center">230</p>
          </div>
        </div>
      </div>
      <div className="mt-9 w-full flex flex-col lg:flex-row gap-6">
        <div className="flex-none w-full lg:w-1/3 lg:bg-transparent">
          <RecentOrder />
        </div>
        <div className="flex-1 w-full lg:w-2/3 lg:bg-transparent">
          <TopProduct />
        </div>
      </div>

      {notifications.length > 0 && (
        <div
          id="notification-section"
          className={`fixed bottom-4 right-4 bg-white p-4 text-[12px] rounded-lg shadow-lg transition-transform transform ${
            isNotificationVisible ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ transition: "transform 0.3s ease-out" }}
        >
          {latestNotification && (
            <div>
              <h4 className="font-bold mb-2">New Order Confirmation</h4>
              <p className="mb-1">
                User:{" "}
                <span className="font-medium">
                  {" "}
                  {latestNotification.user?.data?.name}{" "}
                </span>
              </p>
              <p className="mb-1">
                Address: {latestNotification.user?.data.address}
              </p>
              <p className="mb-1">
                Phone No: {latestNotification.user?.data.phone}
              </p>
              <p className="mb-1">Order Details:</p>
              <ul>
                {latestNotification.product &&
                latestNotification.product.length > 0 ? (
                  latestNotification.product.map((item: any) => (
                    <li key={item.id}>
                      {item.productName} - Quantity: {item.QTY}
                    </li>
                  ))
                ) : (
                  <li>No products found</li>
                )}
              </ul>
              <button
                onClick={() => handleRemoveNotification(latestNotification.id)}
                className="text-red-600 mt-2 flex gap-3"
              >
                <FaTrashAlt />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDash;
