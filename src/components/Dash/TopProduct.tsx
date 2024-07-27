import { Product } from "../interface";
import { getStore } from "../../api/Admin";
import { useEffect, useState } from "react";
import React from "react";
import { BounceLoader } from "react-spinners";

const TopProduct = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getStore();
        console.log("API Response:", response);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "Failed to fetch products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-full">
        <BounceLoader color="#36d7b7" size={30} />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full h-auto bg-white shadow-md p-4 overflow-auto">
      {data.length === 0 ? (
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
            </tr>
          </thead>
          <tbody>
            {data.map((product: any) => (
              <tr key={product.id} className="border-b last:border-b-0">
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopProduct;
