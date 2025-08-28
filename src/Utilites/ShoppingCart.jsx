import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadDataLs } from "./DataLS";
import Footer from "./Footer";
import "./ShoppingCart.css";
import SingleShoppingCart from "./SingleShoppingCart";

const ShoppingCart = () => {
  const [data, setData] = useState([]);
  //load data from ls
  useEffect(() => {
    const dataLS = loadDataLs();
    if (!dataLS.length) {
      setData([]);
      return;
    }

    // load data from server and match the result with local storage data and add quantity in matching result then retrun the matching object to the array
    if (dataLS.length) {
      const loadDataServer = async () => {
        const url = `https://aspinchakma.github.io/api-for-practice/icecreams.json`;
        const response = await fetch(url);
        const result = await response.json();
        const finalData = dataLS.map((item) => {
          const matchingObject = result.find(
            (serverItem) => serverItem.id == item.id
          );
          matchingObject.quantity = item.quantity;
          return matchingObject;
        });
        setData(finalData);
      };

      loadDataServer();
    }
  }, []);

  console.log(data);
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean).join(" / ");
  return (
    <div>
      <div className="header py-10">
        <h3
          className="text-4xl text-center lg:text-6xl"
          style={{ fontFamily: "Berkshire Swash" }}
        >
          This is Shopping Cart
        </h3>
        <p className="w-fit py-2 px-6 text-2xl mx-auto bg-white rounded-full mt-5">
          {path}
        </p>
      </div>
      <div className=" lg:py-[80px] py-[40] w-[90%] lg:w-[80%] mx-auto">
        <div className="text-xl font-bold flex justify-between items-center">
          <h3>Shopping Cart</h3>
          <h3>({data.length > 10 ? data.length : `0${data.length}`} Items)</h3>
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-3">
            <div className="text-[#787878] grid lg:grid-cols-6 mb-5 gap-4">
              <p className="lg:col-span-2">Product Details</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p></p>
            </div>
            <div>
              {data.map((item) => (
                <SingleShoppingCart item={item} key={item.id} />
              ))}
            </div>
          </div>
          <div className="border-1 border-[#e3e4e5] py-3 px-4 rounded-lg self-start  border-t-[#683292] border-t-[4px]">
            <h3 className="text-[19px] font-bold">Order Summary</h3>
            <div className="divider"></div>
            <p className="font-bold text-[18px]">Product Details</p>
            <p>Subtotal: </p>
            <p>Shipping: </p>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-[17px]">Grand Total</p>
              <p className="text-[#f83d8e] font-bold">2000</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
