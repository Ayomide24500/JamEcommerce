import pic from "../../assets/hj.webp";
import pic1 from "../../assets/bg.jpg";
import pic2 from "../../assets/bh.jpg";
import pic3 from "../../assets/nh.jpg";
import pic4 from "../../assets/lp.jpeg";
import pic5 from "../../assets/vg.jpeg";
import ProductCard from "../../components/ProductCard";

const UnisexWear = () => {
  const handleQuickLook = () => {
    alert("Quick look clicked!");
  };
  return (
    <div className="w-full min-h-[100vh] p-4">
      <div className="grid w-full min-h-[100vh] gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3">
        <ProductCard
          text="Golden Watches"
          image={pic}
          rating={3}
          sold={true}
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic1}
          rating={3}
          sold={false}
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic2}
          rating={3}
          sold={false}
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic3}
          rating={3}
          sold={true}
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic4}
          rating={3}
          sold={false}
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic5}
          rating={3}
          sold={false}
          onQuickLook={handleQuickLook}
        />
      </div>
    </div>
  );
};

export default UnisexWear;
