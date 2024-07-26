import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addCart } from "../../global/reduxState";
import { toast } from "react-hot-toast";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  category: string;
  image: string;
  id: string;
  price: string;
  rating: number;
  description: string;
}

const Detail: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  category,
  id,
  productName,
  image,
  price,
  rating,
  description,
}) => {
  const [quantity] = useState(1);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  // const handleIncrease = () => setQuantity(quantity + 1);
  // const handleDecrease = () => {
  //   if (quantity > 1) setQuantity(quantity - 1);
  // };

  const handleAddToCart = () => {
    try {
      const productData = {
        productName,
        category,
        id,
        image,
        price,
        rating,
        description,
        QTY: quantity,
      };
      dispatch(addCart(productData));
      console.log(productData);

      toast.success("Item added to cart!");
    } catch (error) {
      toast.error("Failed to add item to cart!");
    }
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
              alt={productName}
              className="w-full h-auto object-contain mb-4 rounded"
            />
          </div>
          <div className="flex flex-col gap-10 p-4">
            <h2 className="text-[14px] mb-2">{productName}</h2>
            <p className="text-yellow-500 mb-2">{"⭐".repeat(rating)}</p>
            <p className="text-gray-700 text-[13px] mb-4">{description}</p>
            <p className="text-gray-700 text-[13px] mb-4">{price}</p>
            <p className="text-gray-700 text-[13px] mb-4">{category}</p>
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
            alt={productName}
            className="w-full h-auto object-contain rounded"
          />
        </div>
        <div className="text-center">
          <h2 className="lg:text-2xl font-bold mb-2">{productName}</h2>
          <p className="text-yellow-500 mb-2">{"⭐".repeat(rating)}</p>
          <p className="text-yellow-500 mb-2">{price}</p>
          <p className="text-gray-700 text-[10px] mb-4">{description}</p>
          <p className="text-gray-700 text-[10px] mb-4">{category}</p>

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
