import pic from "../../assets/bag1.jpg";
import pic1 from "../../assets/bag2.jpg";
import pic2 from "../../assets/bag3.webp";
import pic3 from "../../assets/shoe1.jpeg";
import pic4 from "../../assets/shoe2.jpg";
import pic5 from "../../assets/shoe3.webp";
import ProductCard from "../../components/ProductCard";

const ShoesAndBags = () => {
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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic1}
          rating={3}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          sold={false}
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic2}
          rating={3}
          sold={false}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic3}
          rating={3}
          sold={true}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic4}
          rating={3}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          sold={false}
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Golden Watches"
          image={pic5}
          rating={3}
          sold={false}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
      </div>
    </div>
  );
};

export default ShoesAndBags;
