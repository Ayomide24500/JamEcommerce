import React, { useState } from "react";
import Detail from "../Pages/RoutingPage/Detaile";

interface ProductCardProps {
  text: string;
  image: string;
  rating: number;
  sold?: boolean;
  onQuickLook?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  text,
  image,
  rating,
  sold = false,
  onQuickLook = () => {},
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickLook = () => {
    setIsModalOpen(true);
    onQuickLook();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div className="min-h-[430px] lg:w-[80%] w-full flex flex-col justify-center items-center">
      <div className="w-full h-full bg-[#f0f0f0] flex flex-col">
        <div className="text-end text-[12px] pr-3 pt-2">
          {sold ? "SOLD" : ""}
        </div>
        <div className="flex justify-center items-center p-2">
          <img src={image} alt="" className="h-full w-auto bg-contain" />
        </div>
        <div className="h-10 flex justify-center items-end pb-2">
          <div
            className="h-5 w-[30%] bg-black cursor-pointer"
            onClick={handleQuickLook}
          >
            <p className="text-white text-[12px] text-center font-serif pt-[1px]">
              Quick look
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center items-center flex-col">
        <p>{text}</p>
        <p>{"⭐".repeat(rating)}</p>
        <p className="text-gray-400 cursor-pointer">Read More</p>
      </div>
      <Detail
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        text={text}
        image={image}
        rating={rating}
        description="This is a detailed description of the product."
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductCard;
