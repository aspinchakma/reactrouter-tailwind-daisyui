import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="flex flex-col min-h-[100vh] border-2 border-red ">
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={``}
      >
        Home
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={`/home/icecreams`}
      >
        Ice Creams
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={`/home/blogs`}
      >
        Blogs
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={`/home/aboutus`}
      >
        About Us
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={`shoppingcart`}
      >
        Shopping Cart
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={`/home/contact`}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default SideBar;
