import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="border-2 border-black h-screen flex items-center justify-center">
      <div>
        <h3 className="lg:text-[200px] text-[120px] leading-[120px] lg:leading-[190px] text-center font-bold">
          404
        </h3>
        <p className="text-2xl lg:text-4xl text-center">
          Sorry! The Page Not Found ;(
        </p>
        <p className="max-w-[464px] mx-auto text-[#646464] text-center text-[19px] my-5">
          Lorem ipsum dolor sit amet, consec tse tur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="text-center">
          <Link to={`/`}>
            <button className="text-white bg-[#f83d8e] px-8 py-3 text-[18px] rounded-lg hover:bg-transparent hover:text-[#f83d8e] duration-500 cursor-pointer border-2 border-[#f83d8e] flex items-center mx-auto ">
              <IoArrowBack /> <span className="ml-2">Back To Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
