import { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import DetailsHeader from "./DetailsHeader";
import SingleProductBanner from "./SingleProductBanner";

const IceCreamDetails = () => {
  const navigate = useNavigate();
  const handleGoToBackPage = () => {
    navigate(-1);
  };
  const data = useLoaderData();

  // state for updating quantity
  const [quantity, setQuantity] = useState(1);
  const {
    name,
    image,
    price,
    rating,
    shortIntroduction,
    additionalInformation,
  } = data;

  // showing total Price
  const [totalPrice, setTotalPrice] = useState(Number(price));
  // increse quantity
  const handleIncreaseQuantity = () => {
    const finalQuantity = quantity + 1;
    setQuantity(finalQuantity);
    setTotalPrice(price * finalQuantity);
  };
  const handleDecreaseQuantity = () => {
    const finalQuantity = quantity - 1;
    if (quantity > 1) {
      setQuantity(finalQuantity);
      setTotalPrice(price * finalQuantity);
    } else {
      toast.error("You Have To select minimum 1", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div>
      <SingleProductBanner />
      <div className="w-[70%] mx-auto mt-10">
        <div className="grid grid-cols-2 gap-6">
          <img
            className="w-full object-cover lg:h-[500px] rounded-lg"
            src={image}
            alt=""
          />
          <div>
            <div className="flex items-center gap-1 text-xl font-bold">
              <FaStar className="text-[#fbab2a]" /> {rating}
              <span>/5</span>
            </div>
            <div className="flex gap-2 items-center">
              <h2 className="text-3xl font-bold mt-2 mb-3">{name}</h2>
              <p className="text-[#636363] font-bold">
                ( {additionalInformation.flavorType})
              </p>
            </div>
            <p className="text-3xl font-bold text-[#683292]">${price}</p>
            {/* divider */}
            <div className="divider my-0"></div>

            <p className="text-[#646464]">{shortIntroduction}</p>
            <h4 className="text-xl font-bold mt-3 mb-2">Color: </h4>
            <div className="flex items-center gap-1">
              <div className="p-2 border-2 border-[#e3e4e5] rounded-full w-fit">
                <p className="w-[18px] h-[18px] rounded-full bg-[#be2a36]"></p>
              </div>
              <div className="p-2 border-2 border-[#e3e4e5] rounded-full w-fit">
                <p className="w-[18px] h-[18px] rounded-full bg-[#e4ccaf]"></p>
              </div>
              <div className="p-2 border-2 border-[#e3e4e5] rounded-full w-fit">
                <p className="w-[18px] h-[18px] rounded-full bg-[#bcec9f]"></p>
              </div>
              <div className="p-2 border-2 border-[#e3e4e5] rounded-full w-fit">
                <p className="w-[18px] h-[18px] rounded-full bg-[#9a5f2e]"></p>
              </div>
            </div>
            <h4 className="text-xl font-bold mt-3 mb-2">Size: </h4>
            <div className="flex items-center gap-1">
              <div className="p-2 border-2 border-[#e3e4e5] rounded-full w-fit">
                <p className="text-[18px] w-[18px] h-[18px] flex justify-center items-center cursor-pointer">
                  L
                </p>
              </div>
              <div className="p-2 border-2 border-[#e3e4e5] rounded-full w-fit">
                <p className="text-[18px] w-[18px] h-[18px] flex justify-center items-center cursor-pointer">
                  M
                </p>
              </div>
              <div className="p-2 border-2 border-[#e3e4e5] rounded-full w-fit">
                <p className="text-[18px] w-[18px] h-[18px] flex justify-center items-center cursor-pointer">
                  S
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={handleDecreaseQuantity}
                  className="border-2 border-gray-300 px-4 py-1 text-2xl font-bold cursor-pointer border-r-0 rounded-l-full"
                >
                  -
                </button>
                <p className="border-2 border-gray-300 px-4 py-1 text-2xl font-bold ">
                  {quantity}
                </p>
                <button
                  onClick={handleIncreaseQuantity}
                  className="border-2 border-gray-300 px-4 py-1 text-2xl font-bold cursor-pointer border-l-0 rounded-r-full"
                >
                  +
                </button>
              </div>
              <button className="bg-[#f83d8e] py-2 px-4 rounded-lg text-white border-2 border-[#f83d8e] duration-550 cursor-pointer text-[18px] hover:bg-transparent hover:text-[#f83d8e] font-bold">
                Add To Cart <FaArrowRight className="inline-block" />
              </button>
            </div>
            <div className="divider mb-0"></div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Total Price</h3>
              <p className="text-2xl font-bold text-[#683292]">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          className="bg-[#f83d8e] py-2 px-4 rounded-lg border-2 border-[#f83d8e] duration-550 cursor-pointer text-[18px] hover:bg-transparent hover:text-[#f83d8e] font-bold inline-block text-white"
          onClick={handleGoToBackPage}
        >
          Back
        </button>
      </div>
      <div className="w-[90%] mx-auto">
        <DetailsHeader />
        <Outlet context={data} />
      </div>
    </div>
  );
};

export default IceCreamDetails;
