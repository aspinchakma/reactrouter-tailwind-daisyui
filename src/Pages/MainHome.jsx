import { Outlet } from "react-router-dom";
import Footer from "../Utilites/Footer";
import SideBar from "../Utilites/SideBar";

const MainHome = () => {
  return (
    <div className="w-[95%] mx-auto border-2 border-red-400 grid grid-cols-6">
      <SideBar />
      <div className="col-span-5 flex flex-col  border-2 border-green-700">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainHome;
