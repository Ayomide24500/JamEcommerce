import pic from "../../assets/10.jpg";
import pic1 from "../../assets/shoe1.jpeg";
import pic2 from "../../assets/mn.jpg";
import pic3 from "../../assets/bh.jpg";
import pic4 from "../../assets/ui.png";
import pic5 from "../../assets/fg.jpg";
import ProductCard from "../../components/ProductCard";

const All = () => {
  const handleQuickLook = () => {};

  return (
    <div className="w-full min-h-[120vh] p-4">
      <div className="grid w-full min-h-[116vh] gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3">
        <ProductCard
          text="Golden Watches"
          image={pic}
          rating={3}
          sold={true}
          onQuickLook={handleQuickLook}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
        />
        <ProductCard
          text="Elegant Unisex Wear"
          image={pic1}
          rating={4}
          sold={false}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Stylish Shoes and Bags"
          image={pic2}
          rating={5}
          sold={false}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Stylish Shoes and Bags"
          image={pic4}
          rating={5}
          sold={false}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Stylish Shoes and Bags"
          image={pic5}
          rating={5}
          sold={false}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
        <ProductCard
          text="Stylish Shoes and Bags"
          image={pic3}
          rating={5}
          sold={false}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis."
          onQuickLook={handleQuickLook}
        />
      </div>
    </div>
  );
};

export default All;
