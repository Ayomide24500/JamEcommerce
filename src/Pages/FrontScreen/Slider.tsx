import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../../index.css";
import pic from "../../assets/9.jpg";

const slides = [
  {
    image: pic,
    text: "Slide 1 Text",
  },
  {
    image: "/images/slide2.jpg",
    text: "Slide 2 Text",
  },
  {
    image: "/images/slide3.jpg",
    text: "Slide 3 Text",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "ease-in-out",
  arrows: false,
};

const ImageSlider = () => {
  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-full h-full bg-green-50"
          >
            <div className="w-[40%] text-center p-4">
              <h2 className="text-4xl font-bold text-white">{slide.text}</h2>
            </div>
            <div className="w-[40%]">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
