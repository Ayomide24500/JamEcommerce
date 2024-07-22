import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  image: string;
  rating: number;
  description: string;
  onAddToCart: (quantity: number) => void;
}

const Detail: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  text,
  image,
  rating,
  description,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50 w-full">
      <div className="bg-white lg:w-[60%] w-[90%] p-7 rounded-lg shadow-lg hidden lg:flex items-center justify-center relative">
        <button
          className="absolute top-1 right-5 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-full grid gap-4 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt={text}
              className="w-full h-auto object-contain mb-4 rounded"
            />
          </div>
          <div className="flex flex-col gap-10 p-4">
            <h2 className="text-[14px] mb-2">{text}</h2>
            <p className="text-yellow-500 mb-2">{"⭐".repeat(rating)}</p>
            <p className="text-gray-700 text-[13px] mb-4">{description}</p>
            <div className="flex items-center mb-4">
              <button className="px-3 py-1 rounded-l" onClick={handleDecrease}>
                <FaArrowLeft className="text-[13px]" />
              </button>
              <span className="px-2 py-1 bg-gray-100">{quantity}</span>
              <button className="px-3 py-1 rounded-r" onClick={handleIncrease}>
                <FaArrowRight className="text-[13px]" />
              </button>
            </div>
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white h-auto lg:w-[60%] w-[90%] p-7 rounded-lg shadow-lg lg:hidden relative flex flex-col items-center">
        <button
          className="absolute top-1 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-full mb-4">
          <img
            src={image}
            alt={text}
            className="w-full h-auto object-contain rounded"
          />
        </div>
        <div className="text-center">
          <h2 className="lg:text-2xl font-bold mb-2">{text}</h2>
          <p className="text-yellow-500 mb-2">{"⭐".repeat(rating)}</p>
          <p className="text-gray-700 text-[10px] mb-4">{description}</p>
          <div className="flex items-center justify-center mb-4">
            <button
              className="px-3 py-1 bg-gray-200 rounded-l"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="px-4 py-1 bg-gray-100">{quantity}</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded-r"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
