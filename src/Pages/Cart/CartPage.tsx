import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SlideDownComponent from "./SlideDownComponents";
import {
  decreaseCartQTY,
  increaseCartQTY,
  removeFromCart,
} from "../../global/reduxState";

const CartPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  // const [userAddress, setUserAddress] = useState("");
  // const [userPhone, setUserPhone] = useState("");
  const product = useSelector((state: any) =>
    state.cart.find((p: any) => p.id === id)
  );

  console.log(product);
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleRemove = () => {
    if (product && product.id) {
      dispatch(removeFromCart({ id: product.id }));
    } else {
      console.error("Item does not have an id:", product);
    }
  };

  const handleIncrease = () => dispatch(increaseCartQTY({ id }));
  const handleDecrease = () => dispatch(decreaseCartQTY({ id }));

  const totalPrice = (parseFloat(product.price) * product.QTY).toFixed(2);

  return (
    <div>
      <div className="flex justify-around items-center lg:flex-row flex-col mb-7 mt-5">
        <div className="lg:w-[60%] w-[80%] h-auto flex flex-col gap-7 ">
          <div className="w-full min-h-[230px] lg:h-[230px] flex gap-3 lg:flex-row flex-col">
            <div className="flex justify-center items-center h-full text-gray-400 w-[5%]">
              <MdClose
                className="cursor-pointer"
                onClick={() => {
                  console.log("product.id", product.id);
                  handleRemove();
                }}
              />
            </div>
            <div className="flex justify-around items-center lg:w-[25%] w-full gap-3 h-full">
              <div className="w-[40%]">
                <img src={product.image} alt="" />
              </div>
              <p>{product.productName}</p>
            </div>
            <div className="lg:w-[68%] mt-9 lg:mt-0 w-full flex justify-between lg:flex-row flex-col lg:gap-0 gap-7 items-center">
              <div className="ml-3 text-[13px] font-semibold">
                <p>₦ {totalPrice}</p>
              </div>
              <div className="lg:w-[40%] w-[70%] flex justify-around items-center border-gray-200 border h-[30%] text-[14px]">
                <p>Quantity</p>
                <div className="flex justify-between items-center gap-1 h-[40%] w-[40%]">
                  <FaAngleLeft
                    className="cursor-pointer z-50"
                    onClick={handleDecrease}
                  />
                  <p>{product.QTY}</p>
                  <FaAngleRight
                    className="cursor-pointer z-50"
                    onClick={handleIncrease}
                  />
                </div>
              </div>
              <div className="mr-2 text-[13px] font-medium">
                <p>₦ {totalPrice}</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[200px] flex gap-3 lg:mt-0 mt-6">
            <div className="cursor-pointer flex ml-4 ">
              <FaAngleLeft />
              <p className="text-[14px] pl-4 lg:pt-0  font-medium">
                Back to Shopping
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-[100%] flex-col justify-around items-center h-auto bg-gray-50 flex gap-4 p-3 lg:mb-0 mb-7">
          <div className="w-full pl-4">
            <p className="pt-5">Cart Total</p>
          </div>
          <div className="h-auto w-[80%] flex flex-col gap-5 justify-center items-center border-b border-gray-400">
            <div className="w-full h-[50px] flex justify-around items-center text-[14px]">
              <p>Shopping Total</p>
              <p>₦ {totalPrice}</p>
            </div>

            <div className="flex justify-center items-center min-h-[40px] w-full">
              <SlideDownComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
