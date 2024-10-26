import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaGift, FaHeart } from "react-icons/fa";

const WelcomeAnimation = ({ onClose }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    showAnimation && (
      <motion.div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg relative w-[90%] max-w-md"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Welcome to Jam Collections!
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Discover amazing products crafted just for you.
          </p>
          <div className="flex justify-center space-x-6 text-gray-700 text-3xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <FaShoppingBag />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <FaGift />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <FaHeart />
            </motion.div>
          </div>
          <button
            onClick={() => {
              setShowAnimation(false);
              onClose();
            }}
            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    )
  );
};

export default WelcomeAnimation;
