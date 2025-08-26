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
      <div className=" mx-auto grid grid-cols-7 min-h-screen">
        {/* <div className="sticky self-start  top-0">
          <SideBar />
        </div> */}
        <SideBar />
        <div className="col-span-6 flex flex-col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainHome;
