import { Outlet } from "react-router-dom";
import Footer from "../Utilites/Footer";
import SideBar from "../Utilites/SideBar";

const MainHome = () => {
  return (
    <div className="w-[95%] mx-auto border-2 border-red-400">
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainHome;
