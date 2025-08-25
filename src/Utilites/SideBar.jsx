import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col min-h-[100vh] border-2 border-red">
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={``}
      >
        Home
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={``}
      >
        Ice Creams
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={``}
      >
        Blogs
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={``}
      >
        About Us
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={``}
      >
        Shopping Cart
      </NavLink>
      <NavLink
        className="text-lg font-bold border-2 border-black w-full py-3 text-center"
        to={``}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default SideBar;
