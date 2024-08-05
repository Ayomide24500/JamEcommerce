import React, { useEffect, useState } from "react";
import Detail from "../Pages/RoutingPage/Detaile";

interface ProductCardProps {
  productName: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  id: string;
  category: string;
  sold?: boolean;
  onQuickLook?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  image,
  id,
  category,
  description,
  price,
  sold = false,
  onQuickLook = () => {},
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState<number>(0);

  // console.log("productid", id);

  const handleQuickLook = () => {
    setIsModalOpen(true);
    onQuickLook();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const randomRating = Math.floor(Math.random() * 5) + 1;
    setRating(randomRating);
  }, []);

  return (
    <div className="lg:h-[380px] h-[300px] lg:w-[70%] w-full flex flex-col justify-center items-center lg:mt-0 md:mt-2 mt-12">
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
        <p>{productName}</p>
        <p className="text-yellow-500 mb-1">
          {"⭐".repeat(rating)}{" "}
          {rating > 0 && <span className="text-gray-400">({rating})</span>}
        </p>
        <p>{price} ₦</p>
      </div>
      <Detail
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={image}
        rating={rating}
        id={id}
        productName={productName}
        category={category}
        description={description}
        price={price}
      />
    </div>
  );
};

export default ProductCard;
