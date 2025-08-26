import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./MainHomeBanner.css";

const MainHomeBanner = () => {
  return (
    <div className="home_banner_container">
      <div className=" mx-auto grid grid-cols-2 gap-10">
        <img src="https://i.ibb.co.com/SwnX1MxH/person.png" alt="" />
        <div className="flex flex-col justify-center">
          <h1 className="banner_title text-6xl">
            Relive the Sweet Memories of Classic
            <span className="text-[#f83d8e]">Ice Creams</span>
          </h1>
          <p className="my-[26px] text-[#646464]">
            From rich chocolate fudge to creamy vanilla sundaes, discover our
            menu of classic ice cream creations.
          </p>
          <NavLink
            className="navLink_banner flex items-center border-2 rounded-full bg-[#f83d8e] text-white text-[16px] w-fit px-6 py-4"
            to={`/home/icecreams`}
          >
            Explore Our Menu <FaArrowRight className=" ml-3" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainHomeBanner;
