import { useLoaderData } from "react-router-dom";
import IceCream from "./IceCream";
import "./IceCreams.css";
const IceCreams = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-6xl ice_creams_title mb-4">
        Our Popular <span className="text-[#f83d8e]">Vegan</span> Treats
      </h2>
      <p className="text-center text-xl text-[#646464] mb-6">
        Check out our favorite vegan ice cream flavors.
      </p>
      <div className="grid grid-cols-3 gap-6 w-[95%] mx-auto">
        {data.map((ice) => (
          <IceCream ice={ice} key={ice.id} />
        ))}
      </div>
    </div>
  );
};

export default IceCreams;
