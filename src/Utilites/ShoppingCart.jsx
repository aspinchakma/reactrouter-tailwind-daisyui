import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { calCulateTotalMoney, loadDataLs } from "./DataLS";
import Footer from "./Footer";
import "./ShoppingCart.css";
import SingleShoppingCart from "./SingleShoppingCart";

const ShoppingCart = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
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
        const totalShippingCost = calCulateTotalMoney(finalData);

        setTotal(totalShippingCost);
      };

      loadDataServer();
    }
  }, []);
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean).join(" / ");

  const handleIncreaseQuantity = (id) => {
    const saveDataLS = [];
    const iceCreamData = data.map((item) => {
      if (item.id == id) {
        item.quantity = item.quantity + 1;
        saveDataLS.push({ id: item.id, quantity: item.quantity });
        return item;
      }
      saveDataLS.push({ id: item.id, quantity: item.quantity });
      return item;
    });
    setData(iceCreamData);
    // set Total price
    const totalShippingCost = calCulateTotalMoney(iceCreamData);
    setTotal(totalShippingCost);
    // store on local storage
    localStorage.setItem("cart", JSON.stringify(saveDataLS));
  };

  const handleDecreaseQuantity = (id) => {
    const saveDataLS = [];
    const updatedData = data.map((item) => {
      if (item.id == id) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
          saveDataLS.push({ id: item.id, quantity: item.quantity });
          return item;
        } else {
          // show warning

          toast.warn("Select Minimu 1 Quantity!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        saveDataLS.push({ id: item.id, quantity: item.quantity });
        return item;
      }
      saveDataLS.push({ id: item.id, quantity: item.quantity });
      return item;
    });

    // updating data on ui
    setData(updatedData);

    // updating total cost
    const totalShippingCost = calCulateTotalMoney(updatedData);
    setTotal(totalShippingCost);

    // set data on local storage
    localStorage.setItem("cart", JSON.stringify(saveDataLS));
  };
  // delete button
  const handleDeleteButton = (id) => {
    const setLSData = [];
    const finalData = data.filter((item) => {
      if (item.id != id) {
        setLSData.push({ id: item.id, quantity: item.quantity });
        return item;
      }
    });
    setData(finalData);
    // updating price
    const totalShippingCost = calCulateTotalMoney(finalData);
    setTotal(totalShippingCost);

    // showing message
    localStorage.setItem("cart", JSON.stringify(setLSData));
    toast.success("Successfully Deleted!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
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
      {data.length ? (
        <div className=" lg:py-[80px] py-[40] w-[90%] lg:w-[80%] mx-auto">
          <div className="text-xl font-bold flex justify-between items-center">
            <h3>Shopping Cart</h3>
            <h3>
              ({data.length > 10 ? data.length : `0${data.length}`} Items)
            </h3>
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
                {data.map((item, idx) => (
                  <SingleShoppingCart
                    item={item}
                    key={idx}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    handleDeleteButton={handleDeleteButton}
                  />
                ))}
              </div>
            </div>
            <div className="border-1 border-[#e3e4e5] py-5 px-4 rounded-lg self-start  border-t-[#683292] border-t-[4px]">
              <h3 className="text-[19px] font-bold">Order Summary</h3>
              <div className="divider my-1"></div>
              <p className="font-bold text-[18px]">Product Details</p>
              <div className="flex items-center justify-between mt-4 h-[1px]">
                <p>Subtotal:</p>
                <p className="font-bold">${total.toFixed(2)} </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Shipping:20 </p>
                <p className="font-bold">$20</p>
              </div>
              <div className="divider my-3 h-[1px]"></div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-[17px]">Grand Total</p>
                <p className="text-[#f83d8e] font-bold">
                  {(total + 20).toFixed(2)}
                </p>
              </div>
              <button className="px-3 py-2 bg-[#f83d8e] text-white font-bold rounded-full flex items-center gap-2 w-full mt-5 justify-center hover:bg-transparent hover:text-[#f83d8e] border-1 border-[#f83d8e] cursor-pointer duration-500">
                <span>proceed to checkout</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-6 lg:py-[80px]">
          <img
            className="max-w-[200px] max-h-[200px] mx-auto"
            src="https://i.ibb.co.com/fdb9tFDc/JEMA-GER-1722-09.jpg"
            alt=""
          />
          <div className="text-center">
            <h3 className="lg:text-2xl mt-4 text-xl font-bold text-[#f83d8e]">
              Your cart is empty. Please add a product first!
            </h3>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ShoppingCart;
