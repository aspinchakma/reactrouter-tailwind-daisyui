import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-10">
      <NavLink to={``}>Home</NavLink>
      <NavLink to={``}>Ice Creams</NavLink>
      <NavLink to={``}>Blogs</NavLink>
      <NavLink to={``}>About Us</NavLink>
      <NavLink to={``}>Shopping Cart</NavLink>
      <NavLink to={``}>Contact</NavLink>
    </div>
  );
};

export default SideBar;
