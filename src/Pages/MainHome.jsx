import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import SideBar from "../Utilites/SideBar";

const MainHome = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className=" mx-auto border-2 border-red-400 grid grid-cols-6">
        <SideBar />
        <div className="col-span-5 flex flex-col  border-2 border-green-700">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainHome;
