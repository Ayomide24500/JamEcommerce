import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  image: string;
  rating: number;
  description: string;
  onAddToCart: () => void;
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white lg:w-full w-[84%] max-w-md p-7 rounded-lg shadow-lg relative">
        <button
          className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={image}
          alt={text}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2">{text}</h2>
        <p className="text-yellow-500 mb-2">{"⭐".repeat(rating)}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Detail;
