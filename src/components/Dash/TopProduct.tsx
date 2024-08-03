import { Product } from "../interface";
import { getStore } from "../../api/Admin";
import { useEffect, useState } from "react";
import React from "react";
import { BounceLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { removeFromProduct } from "../../global/reduxState";
import { FaTrash } from "react-icons/fa"; // Importing FontAwesome Trash icon

const TopProduct = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await getStore();
  //       console.log("API Response:", response);
  //       setData(response.data);
  //       setLoading(false);
  //     } catch (error: any) {
  //       setError(error.message || "Failed to fetch products.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const handleRemove = (item: any) => {
    if (item && item._id) {
      console.log(item._id);

      dispatch(removeFromProduct({ id: item._id }));
    } else {
      console.error("Item does not have an id:", item);
    }
  };

  // if (loading)
  //   return (
  //     <div className="flex justify-center items-center h-full">
  //       <BounceLoader color="#36d7b7" size={30} />
  //     </div>
  //   );
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full h-auto bg-white shadow-md p-4 overflow-auto">
      {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2 text-[15px] w-1/2">Name</th>
              <th className="p-2 text-[15px] hidden sm:table-cell">
                Product ID
              </th>
              <th className="p-2 text-[15px] hidden sm:table-cell">Price</th>
              <th className="p-2 text-[15px]">Rating</th>
              <th className="p-2 text-[15px] hidden sm:table-cell">Category</th>
              <th className="p-2 text-[15px]">Actions</th>{" "}
              {/* New column for Actions */}
            </tr>
          </thead>
          <tbody>
            {products.map((product: any) => (
              <tr key={product._id} className="border-b last:border-b-0">
                <td className="p-2 w-1/2 text-[13px]">{product.productName}</td>
                <td className="p-2 hidden sm:table-cell text-[14px]">
                  {product._id.substring(0, 6)}
                </td>
                <td className="p-2 hidden sm:table-cell text-[14px]">
                  {product.price}
                </td>
                <td className="p-2 text-[13px]">
                  {product.rating || "⭐".repeat(3)}
                </td>
                <td className="p-2 hidden sm:table-cell text-[13px]">
                  {product.category}
                </td>
                <td className="p-2 text-[13px]">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemove(product)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopProduct;
