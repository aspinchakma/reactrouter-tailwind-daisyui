import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const IceCream = ({ ice }) => {
  const {
    image,
    price,
    name,
    rating,
    shortIntroduction,
    additionalInformation,
  } = ice;
  return (
    <div className="shadow-lg px-5 py-6 rounded-lg flex flex-col">
      <img
        className="h-[300px] w-full object-cover rounded-lg"
        src={image}
        alt=""
      />
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>

        <div className="flex items-center gap-1 text-xl font-bold">
          <FaStar className="text-[#fbab2a]" /> {rating}
          <span>/5</span>
        </div>
      </div>
      <p className="text-[#636363] font-bold mb-1">
        {additionalInformation.flavorType}
      </p>
      <div className="divider my-0"></div>

      <p className="text-[#646464] flex-1 mb-2 mt-2">{shortIntroduction}</p>

      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold text-[#f83d8e]">
          $<span>{price}</span>{" "}
        </p>

        <NavLink
          className="bg-[#f83d8e] py-2 px-4 rounded-lg text-white border-2 border-[#f83d8e] duration-550 cursor-pointer text-[18px] hover:bg-transparent hover:text-[#f83d8e]"
          to={`/home/icecreams/${ice.id}`}
        >
          See Details
        </NavLink>
      </div>
    </div>
  );
};

export default IceCream;
