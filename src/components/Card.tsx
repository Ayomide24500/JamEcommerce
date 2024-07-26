import { useSelector, useDispatch } from "react-redux";
import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

import { removeFromCart } from "../global/reduxState";

interface iShow {
  show: boolean;
  handleShowgo: () => void;
}

const Card: FC<iShow> = ({ show, handleShowgo }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  const handleRemove = (item: any) => {
    if (item && item.id) {
      dispatch(removeFromCart({ id: item.id }));
    } else {
      console.error("Item does not have an id:", item);
    }
  };

  return (
    <div>
      <div
        className={`min-h-[200px] lg:w-[20%] w-[80%] bg-white shadow-lg absolute top-20 z-50 transition-transform duration-300 lg:right-6 right-2 ${
          show ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-gray-800 font-bold text-lg">Cart</h2>
          <button
            onClick={handleShowgo}
            className=" text-gray-300 font-bold px-1 text-[13px] py-1 rounded hover:bg-red-600 hover:text-white transition duration-300"
          >
            <MdClose />
          </button>
        </div>
        <ul className="p-4 overflow-y-auto max-h-[220px] cursor-pointer">
          {cart.map((item: any) => {
            console.log("Cart item:", item);
            return (
              <li
                key={item.id}
                className="flex items-center p-2 border-b last:border-b-0 relative group"
              >
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-12 h-12 mr-4 object-cover rounded"
                />
                <div className="flex-1 relative">
                  <Link to={`/product/${item.id}`}>
                    <p className="text-gray-800 font-semibold text-[12px]">
                      {item.productName}
                    </p>
                    <p className="text-gray-600 text-[12px]">₦ {item.price}</p>
                    <p className="text-yellow-500">
                      {"⭐".repeat(item.rating)}
                    </p>
                  </Link>
                  <div className="absolute -top-5 -left-9 transform -translate-y-full translate-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded py-1 px-2 z-10">
                    View Details
                  </div>
                </div>
                <div
                  onClick={() => handleRemove(item)}
                  className="text-red-500 cursor-pointer ml-2"
                >
                  <FaTrash size={16} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
