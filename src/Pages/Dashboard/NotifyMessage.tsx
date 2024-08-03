import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromNotification } from "../../global/reduxState";
import { FaTrashAlt } from "react-icons/fa";

const NotifyMessage = () => {
  const dispatch = useDispatch();
  const isNotificationVisible = useSelector(
    (state: any) => state.isNotificationVisible
  );
  const notifications = useSelector((state: any) => state.notifications);
  console.log("notifications", notifications);

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

  const handleRemoveNotification = (id: string) => {
    dispatch(removeFromNotification({ id }));
  };

  return (
    <div>
      {notifications?.length > 0 && (
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

export default NotifyMessage;
