import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";

import {
  addHistory,
  incrementDailyConfirmations,
  notifyAdmin,
  removeFromCart,
  setTotalCustomers,
  setTotalOrders,
  setTotalSales,
} from "../../global/reduxState";

interface CheckoutConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CheckoutModal: React.FC<CheckoutConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const dispatch = useDispatch();

  const checkoutDetails = { date: new Date().toISOString() };

  const user = useSelector((state: any) => state.user);
  const cartItems = useSelector((state: any) => state.cart);
  const currentTotalOrders = useSelector((state: any) => state.totalOrders);
  const updatedTotalOrders = currentTotalOrders + 1;
  const updatedTotalSales = cartItems.reduce(
    (total: any, item: any) => total + item.price * item.QTY,
    0
  );
  const currentTotalCustomers = useSelector(
    (state: any) => state.totalCustomers
  );
  const updatedTotalCustomers = currentTotalCustomers + 1;

  const handleConfirm = () => {
    dispatch(notifyAdmin({ user, product: cartItems, checkoutDetails }));
    dispatch(addHistory({ user, product: cartItems }));
    dispatch(incrementDailyConfirmations());
    dispatch(setTotalOrders(updatedTotalOrders));
    dispatch(setTotalSales(updatedTotalSales));
    dispatch(setTotalCustomers(updatedTotalCustomers));
    dispatch(removeFromCart(cartItems));
    toast.success("Order confirmed successfully");
    setIsVisible(false);
    setTimeout(() => {
      onConfirm();
    }, 500);
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-5 rounded-lg shadow-lg min-h-[40%] md:w-[50%] w-[90%] lg:w-[40%]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Confirm Your Order</h2>
          <button
            onClick={handleClose}
            className="text-gray-700 hover:text-gray-900 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col h-[200px] overflow-y-auto w-[90%] items-center justify-around gap-10">
          {cartItems.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center w-[90%] justify-around gap-10"
            >
              <img
                src={item.image}
                alt={item.productName}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="gap-3 flex flex-col">
                <h3 className="font-semibold">{item.productName}</h3>
                <p className="text-gray-600">
                  <span className="font-medium">Price</span>: ₦ {item.price}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Quantity</span>: {item.QTY}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={handleConfirm}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Confirm
          </button>
        </div>
      </motion.div>
      <Toaster />
    </motion.div>
  );
};

export default CheckoutModal;
