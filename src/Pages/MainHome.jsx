import { Outlet } from "react-router-dom";
import SideBar from "../Utilites/SideBar";

const MainHome = () => {
  return (
    <div className=" mx-auto border-2 border-red-400 grid grid-cols-6">
      <SideBar />
      <div className="col-span-5 flex flex-col  border-2 border-green-700">
        <Outlet />
      </div>
    </div>
  );
};

export default MainHome;
