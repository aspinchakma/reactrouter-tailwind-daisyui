import { useEffect, useState } from "react";
import { loadDataLs } from "./DataLS";
import Footer from "./Footer";

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

  return (
    <div>
      <h3>This is Shopping Cart</h3>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
