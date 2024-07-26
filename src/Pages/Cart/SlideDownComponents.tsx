import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { createUser } from "../../api/userApi";
import CheckoutModal from "./CheckoutModal";
import { useDispatch } from "react-redux";
import { addUser } from "../../global/reduxState";

const SlideDownComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleProceedToCheckout = () => {
    setIsModalOpen(true);
  };

  const handleSubmiteNow = async (e: any) => {
    e.preventDefault();

    try {
      const res = await createUser({
        name,
        phone,
        address,
      });

      console.log(res);

      if (res && res?.data) {
        dispatch(addUser(res.data));
        toast.success("Registration successful");
      } else {
        setErrorMessage("Failed to register. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const isFormValid = name && address && phone;

  return (
    <div className="w-full p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-semibold flex justify-center lg:gap-8 gap-4 items-center">
          Input <FaPhoneAlt /> & <FaLocationDot />
        </span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
          {isOpen ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <form
          className="p-4 bg-white rounded-md shadow-inner mt-2"
          onSubmit={handleSubmiteNow}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="shadow text-[13px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              className="shadow text-[13px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              className="shadow text-[13px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            className={`h-[40px] lg:w-[80%] w-full text-[12px] mt-6 mb-4 lg:text-[13px] rounded-md text-white font-bold ${
              isFormValid ? "bg-black" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleProceedToCheckout}
            disabled={!isFormValid}
          >
            Proceed to checkout
          </button>
        </form>
        {errorMessage && (
          <div className="mb-4 text-red-600">{errorMessage}</div>
        )}
        <Toaster />
      </motion.div>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={function (): void {}}
      />
    </div>
  );
};

export default SlideDownComponent;
