import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import IceCream from "./IceCream";
import "./IceCreams.css";
const IceCreams = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="py-10 lg:py-5">
        <h2 className="text-center text-4xl lg:text-6xl ice_creams_title mb-4">
          Our Popular <span className="text-[#f83d8e]">Vegan</span> Treats
        </h2>
        <p className="text-center text-xl text-[#646464] mb-6">
          Check out our favorite vegan ice cream flavors.
        </p>
        <div className="grid lg:grid-cols-3 gap-6 w-[95%] mx-auto grid-cols-1">
          {data.map((ice) => (
            <IceCream ice={ice} key={ice.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IceCreams;
