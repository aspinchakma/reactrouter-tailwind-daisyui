import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const [isDisplay, setDisplay] = useState(false);
  const handleDisplayShowing = () => {
    console.log("hello bro");
  };
  return (
    <div className="flex flex-row lg:flex-col lg:min-h-[100vh] shadow-xl lg:self-start sticky top-0 backdrop-blur-xl justify-center lg:justify-start gap-6 lg:gap-0">
      <div
        onClick={handleDisplayShowing}
        className="lg:hidden text-[35px] px-2 lg:px-0 font-bold flex items-center"
      >
        <IoMdMenu />
      </div>

      <NavLink
        className="text-lg font-bold w-fit px-2 lg:px-0  lg:w-full py-3 text-center"
        to={``}
        end
      >
        Home
      </NavLink>

      <NavLink
        className="text-lg font-bold w-fit px-2 lg:px-0  lg:w-full py-3 text-center"
        to={`/home/icecreams`}
      >
        Ice Creams
      </NavLink>
      <NavLink
        className="text-lg font-bold w-fit px-2 lg:px-0  lg:w-full py-3 text-center"
        to={`/home/blogs`}
      >
        Blogs
      </NavLink>
      <div className="lg:flex lg:flex-col lg:static absolute flex flex-col bg-white left-0">
        <NavLink
          className="text-lg font-bold w-fit px-2 lg:px-0  lg:w-full py-3 text-center"
          to={`/home/aboutus`}
        >
          About Us
        </NavLink>
        <NavLink
          className="text-lg font-bold w-fit px-2 lg:px-0  lg:w-full py-3 text-center"
          to={`shoppingcart`}
        >
          Shopping Cart
        </NavLink>
        <NavLink
          className="text-lg font-bold w-fit px-2 lg:px-0  lg:w-full py-3 text-center"
          to={`/home/contact`}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
