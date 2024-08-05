import React, { useEffect, useState } from "react";
import { getStore } from "../../api/Admin";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../components/interface";
import { BounceLoader } from "react-spinners";
import { useSelector } from "react-redux";

const UnisexWear: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const products = useSelector((state: any) => state.products);

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

  const handleQuickLook = (product: Product) => {
    console.log("Quick look:", product);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-full">
        <BounceLoader color="#36d7b7" size={30} />
      </div>
    );
  if (error) return <div>{error}</div>;

  const filteredProducts = data.filter(
    (product) => product.category === "Unisex Wear"
  );

  return (
    <div className="w-full min-h-[100vh] p-4">
      <div className="grid w-full h-[100%] lg:gap-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: any) => (
            <ProductCard
              key={product._id}
              productName={product.productName || "Unknown Name"}
              category={product.category || "Unknown Category"}
              image={product.image || ""}
              rating={product.rating || "⭐".repeat(3)}
              price={product.price || "no price yet"}
              sold={product.sold || false}
              onQuickLook={() => handleQuickLook(product)}
              description={product.description || "No description available"}
              id={product._id}
            />
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default UnisexWear;
