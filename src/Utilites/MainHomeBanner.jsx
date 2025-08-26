import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./MainHomeBanner.css";

const MainHomeBanner = () => {
  return (
    <div className="home_banner_container text-white flex items-center  lg:h-[100vh]">
      <div className="lg:w-[90%] mx-auto grid grid-cols-2 items-center lg:gap-10 gap-6">
        <div>
          <h2 className="banner_title text-6xl">
            Vegan Ice <br />
            Cream Delights
          </h2>
          <p className="mt-4 mb-6">
            Discover a world of tasty vegan ice cream flavors and desserts that
            everyone can enjoy.
          </p>
          <NavLink
            className="mainhomebannerbutton  text-[18px]"
            to={`/home/icecreams`}
          >
            Explore Our Menu <FaArrowRight className="inline-block ml-3" />
          </NavLink>
        </div>
        <img src="https://i.ibb.co.com/qY1mMPRG/main-home-banner.png" alt="" />
      </div>
    </div>
  );
};

export default MainHomeBanner;
