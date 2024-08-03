import { MdBadge } from "react-icons/md";
import RecentOrder from "../../components/Dash/RecentOrder";
import TopProduct from "../../components/Dash/TopProduct";
import "../../index.css";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbMoodDollar } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCheckCircle, FaTrashAlt } from "react-icons/fa";
import {
  clearState,
  removeFromNotification,
  resetDailyData,
} from "../../global/reduxState";
import React from "react";
import History from "./History";
import NotifyMessage from "./NotifyMessage";

const AdminDash = () => {
  const notifications = useSelector((state: any) => state.notifications);
  // console.log("notifications", notifications);

  const totalSales = useSelector((state: any) => state.totalSales);
  const totalOrders = useSelector((state: any) => state.totalOrders);
  const totalCustomers = useSelector((state: any) => state.totalCustomers);
  const dailyConfirmations = useSelector(
    (state: any) => state.dailyConfirmations
  );
  const dispatch = useDispatch();

  const [latestNotification, setLatestNotification] = useState<any>(null);
  const [notificationHistory, setNotificationHistory] = useState<any[]>([]);

  useEffect(() => {
    if (notifications.length > 0) {
      const latest = notifications[notifications.length - 1];
      setLatestNotification(latest);
      setNotificationHistory((prevHistory) => {
        if (
          !prevHistory.some((notification) => notification.id === latest.id)
        ) {
          return [...prevHistory, latest];
        }
        return prevHistory;
      });
    }
  }, [notifications]);

  // useEffect(() => {
  //   dispatch(clearState());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(resetDailyData());
  }, [dispatch]);

  const handleRemoveNotification = (id: string) => {
    dispatch(removeFromNotification({ id }));
  };

  return (
    <div>
      <div className="grid lg:h-[120px] p-2 grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white h-[120px] ml-2 lg:ml-0 p-6 gap-5 rounded-lg shadow-lg flex justify-center items-center">
          <div className="hexagon bg-red-500">
            <MdBadge className="text-[27px] text-white" />
          </div>
          <div className="w-[90%] h-full">
            <h3 className="text-[16px] pt-3 font-semibold text-center">
              Total Sales
            </h3>
            <p className="text-xl font-bold text-center">
              ₦ {totalSales.toLocaleString()}
            </p>
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
            <p className="text-xl lg:pl-6 font-medium text-center">
              {totalOrders.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-white h-[120px] ml-2 lg:ml-0 p-6 gap-5 rounded-lg shadow-lg flex justify-center items-center">
          <div className="hexagons bg-green-500">
            <FaPeopleGroup className="text-[27px] text-white" />
          </div>
          <div className="w-[100%] h-full">
            <h3 className="text-[16px] font-semibold text-center pt-3">
              Active Customers
            </h3>
            <p className="text-xl lg:pl-6 font-medium text-center">
              {totalCustomers.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-white h-[120px] ml-2 lg:ml-0 p-6 gap-5 rounded-lg shadow-lg flex justify-center items-center">
          <div className="hexagons bg-blue-500">
            <FaRegCheckCircle className="text-[27px] text-white" />
          </div>
          <div className="w-[100%] h-full">
            <h3 className="text-[16px] font-semibold text-center pt-3">
              Daily Confirmations
            </h3>
            <p className="text-xl lg:pl-6 font-medium text-center">
              {dailyConfirmations.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-9 w-full flex flex-col lg:flex-row gap-6">
        <div className="flex-1 w-full lg:w-2/3 lg:bg-transparent">
          <TopProduct />
        </div>
      </div>

      <NotifyMessage />

      <div className="mt-6 p-4 bg-white rounded-lg shadow-lg overflow-y-auto ">
        <h3 className="text-[13px] font-semibold mb-4">
          Present Notification History
        </h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4 text-[12px]">User</th>
              <th className="py-2 px-4 text-[12px]">Address</th>
              <th className="py-2 px-4 text-[12px]">Phone No</th>
              <th className="py-2 px-4 text-[12px]">Order Details</th>
            </tr>
          </thead>
          <tbody className="text-[13px]">
            {notificationHistory.map((notification: any) => (
              <tr key={notification.id}>
                <td className="py-2 px-4">{notification.user?.data?.name}</td>
                <td className="py-2 px-4">
                  {notification.user?.data?.address}
                </td>
                <td className="py-2 px-4">{notification.user?.data?.phone}</td>
                <td className="py-2 px-4">
                  {notification.product
                    ? notification.product.map((item: any) => (
                        <div key={item.id}>
                          {item.productName} - Quantity: {item.QTY}
                        </div>
                      ))
                    : "No products found"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
        <History />
      </div>
    </div>
  );
};

export default AdminDash;
