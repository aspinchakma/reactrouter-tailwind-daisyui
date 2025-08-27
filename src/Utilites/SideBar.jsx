import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="flex flex-row lg:flex-col lg:min-h-[100vh] shadow-xl lg:self-start sticky top-0">
      <NavLink
        className="text-lg font-bold  w-full py-3 text-center"
        to={``}
        end
      >
        Home
      </NavLink>
      <NavLink
        className="text-lg font-bold  w-full py-3 text-center"
        to={`/home/icecreams`}
      >
        Ice Creams
      </NavLink>
      <NavLink
        className="text-lg font-bold  w-full py-3 text-center"
        to={`/home/blogs`}
      >
        Blogs
      </NavLink>
      <NavLink
        className="text-lg font-bold  w-full py-3 text-center"
        to={`/home/aboutus`}
      >
        About Us
      </NavLink>
      <NavLink
        className="text-lg font-bold  w-full py-3 text-center"
        to={`shoppingcart`}
      >
        Shopping Cart
      </NavLink>
      <NavLink
        className="text-lg font-bold  w-full py-3 text-center"
        to={`/home/contact`}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default SideBar;
