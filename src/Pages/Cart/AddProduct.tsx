import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../global/reduxState";
import "../../index.css";
import { CreateStore } from "../../api/Admin";
import { toast, Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const AddProductForm = () => {
  const [product, setProduct]: any = useState({
    productName: "",
    price: "",
    image: null,
    rating: 2.2,
    description: "",
    category: "",
  });

  const [formVisible, setFormVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e: any) => {
    const file = e.target?.files[0];
    setProduct((prevProduct: any) => ({
      ...prevProduct,
      image: file,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("rating", product.rating.toString());
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("price", product.price);

    if (product.image) {
      formData.append("singleImage", product.image);
    } else {
      console.error("No image file provided.");
    }

    try {
      const result = await CreateStore(formData);

      console.log(result?.data);

      if (result?.data) {
        dispatch(addProduct(result?.data));
        toast.success("Product created successfully!");
        setFormVisible(false);
      } else {
        toast.error("Failed to create product.");
      }
    } catch (error) {
      toast.error("Failed to create product.");
    } finally {
      setLoading(false);
    }
  };

  if (!formVisible) {
    return null;
  }

  return (
    <div>
      <div className="min-h-[420px]">
        <form onSubmit={handleSubmit} className="flex gap-7 flex-col">
          <input
            name="productName"
            placeholder="Product Name"
            value={product.productName}
            onChange={handleChange}
            required
            className="w-full h-[50px] border border-gray-400 text-[13px] pl-5 outline-none"
          />
          <div className="flex justify-center items-center gap-6 h-[40px]">
            <input
              type="file"
              name="singleImage"
              onChange={handleImageChange}
              required
              className="text-[13px] pl-3"
            />
          </div>
          <input
            name="price"
            placeholder="price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full h-[50px] border border-gray-400 text-[13px] pl-5 outline-none"
          />

          <input
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            required
            className="w-full h-[50px] border border-gray-400 text-[13px] pl-5 outline-none"
          />
          <input
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full h-[50px] border border-gray-400 text-[13px] pl-5 outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white h-[50px] w-full mt-4 flex justify-center items-center"
          >
            {loading ? (
              <FaSpinner className="animate-spin text-white text-sm" /> // Small spinner icon
            ) : (
              "Add Product"
            )}
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default AddProductForm;
