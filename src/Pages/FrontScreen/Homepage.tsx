import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "../../assets/ki.png";
import pic1 from "../../assets/wq.png";
import pic2 from "../../assets/bag3.webp";
import pic3 from "../../assets/shoe2.png";
import Watches from "../RoutingPage/Watches";
import UnisexWear from "../RoutingPage/UnisexWear";
import ShoesAndBags from "../RoutingPage/ShoesAndBags";
import All from "../RoutingPage/All";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../index.css";
import { FaChevronDown } from "react-icons/fa";
import WelcomePage from "./WelcomePage";
import Belt from "../RoutingPage/Belt";
import BaggyJeans from "../RoutingPage/BaggyJeans";

const slides = [
  { text: "Discover Timeless Elegance", image: pic },
  { text: "Crafted for the Modern Connoisseur", image: pic1 },
  { text: "Elevate Your Style with Precision", image: pic2 },
  { text: "Elevate Your Style with Shoes", image: pic3 },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  arrows: false,
};

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const renderComponent = () => {
    switch (selectedCategory) {
      case "Watches":
        return <Watches />;
      case "Unisex Wear":
        return <UnisexWear />;
      case "Shoes And Bags":
        return <ShoesAndBags />;
      case "Baggy Jeans":
        return <BaggyJeans />;
      case "Belt":
        return <Belt />;
      default:
        return <All />;
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center flex-col lg:gap-6 appear">
      {showWelcome && <WelcomePage onClose={handleCloseWelcome} />}
      <div className="w-[90%] min-h-full">
        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] h-[500px] lg:h-[610px] bg-[#f3f4f6]">
            <Slider
              {...settings}
              className="w-full lg:h-full h-[480px]"
              afterChange={(current) => setCurrentSlide(current)}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full lg:h-[600px] h-[430px] flex">
                  <div className="lg:h-[500px] h-[370px] w-[100%] flex justify-between items-center lg:flex-row flex-col">
                    <div
                      className={`lg:h-full h-[450px] lg:w-[47%] w-full flex items-end justify-start p-8 transition-transform duration-1000 ${
                        currentSlide === index ? "slide-in" : ""
                      }`}
                    >
                      <h2 className="lg:text-4xl text-[15px] text-center font-bold text-gray-700 lg:pl-0 pl-3">
                        <span className="text-gray-700">
                          {slide.text.substring(
                            0,
                            Math.floor(slide.text.length / 2)
                          )}
                        </span>
                        <span className="text-gray-500">
                          {slide.text.substring(
                            Math.floor(slide.text.length / 2)
                          )}
                        </span>
                      </h2>
                    </div>
                    <div className="lg:w-[50%] w-full lg:h-[500px] h-[400px] flex justify-center items-center">
                      <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="w-[80%] h-[90%] object-contain mt-11"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full max-h-full lg:mt-9">
          <div className="h-[90px] w-full flex justify-center items-center">
            <div
              className={`dropdown-container ${dropdownOpen ? "open" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="dropdown-button flex items-center justify-between bg-gray-100 py-2 px-4 rounded-lg shadow-md w-40 sm:w-48 cursor-pointer">
                <p className="text-sm sm:text-base">{selectedCategory}</p>
                <FaChevronDown
                  className={`dropdown-icon transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {dropdownOpen && (
                <div className="dropdown-content absolute mt-2 bg-white shadow-lg rounded-md w-40 sm:w-48 z-10">
                  <div
                    className="dropdown-item py-2 px-4 hover:bg-gray-200 cursor-pointer text-sm sm:text-base sm:text-[13px]"
                    onClick={() => handleCategorySelect("All")}
                  >
                    All
                  </div>
                  <div
                    className="dropdown-item py-2 px-4 hover:bg-gray-200 cursor-pointer text-sm sm:text-base sm:text-[13px]"
                    onClick={() => handleCategorySelect("Watches")}
                  >
                    Watches
                  </div>
                  <div
                    className="dropdown-item py-2 px-4 hover:bg-gray-200 cursor-pointer text-sm sm:text-base sm:text-[13px]"
                    onClick={() => handleCategorySelect("Unisex Wear")}
                  >
                    Unisex Wear
                  </div>
                  <div
                    className="dropdown-item py-2 px-4 hover:bg-gray-200 cursor-pointer text-sm sm:text-base sm:text-[13px]"
                    onClick={() => handleCategorySelect("Belt")}
                  >
                    Belt
                  </div>
                  <div
                    className="dropdown-item py-2 px-4 hover:bg-gray-200 cursor-pointer text-sm sm:text-base sm:text-[13px]"
                    onClick={() => handleCategorySelect("Baggy Jeans")}
                  >
                    Baggy Jeans
                  </div>
                  <div
                    className="dropdown-item py-2 px-4 hover:bg-gray-200 cursor-pointer text-sm sm:text-base sm:text-[13px]"
                    onClick={() => handleCategorySelect("Shoes And Bags")}
                  >
                    Shoes and Bags
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="p-4">
            <TransitionGroup>
              <CSSTransition
                key={selectedCategory}
                timeout={600}
                classNames="fade"
              >
                <div>{renderComponent()}</div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
