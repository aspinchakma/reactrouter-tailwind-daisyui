import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className=" lg:h-[100vh] home_container  flex items-center justify-center flex-col lg:flex-row h-auto p-5 lg:p-0">
      <div className="text-center lg:text-left">
        <h3 className="text-3xl  home_banner_common">Welcome to The</h3>
        <h2 className="text-6xl home_banner_common mt-6">
          Classic
          <span className="text-[#f83d8e]">
            Ice <br /> Cream
          </span>{" "}
          Parlor
        </h2>
        <p className="mt-3 mb-5">
          Savor the taste of traditional ice cream made with love and <br />
          quality ingredients.
        </p>
        <NavLink className="browse_all mb-10 lg:mb-0" to={`/home`}>
          Browse Our Classic Flavors{" "}
          <FaArrowRight className="inline-block ml-2" />
        </NavLink>
      </div>
      <div>
        <img
          className="mx-auto w-[400px]"
          src="https://i.ibb.co.com/WNrgWx8v/home-ice.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
