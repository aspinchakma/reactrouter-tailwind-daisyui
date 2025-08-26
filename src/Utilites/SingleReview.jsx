import { FaStar } from "react-icons/fa";

const SingleReview = ({ re }) => {
  const { comment, user, rating } = re;
  return (
    <div className="border-2 px-3 py-2 border-gray-300 my-3 rounded-[4px]">
      <p className="text-lg text-[#787878]">{comment}</p>
      <h3 className="text-xl font-bold">{user}</h3>
      <div className="flex items-center gap-1 text-xl font-bold">
        <FaStar className="text-[#fbab2a]" /> {rating}
        <span>/5</span>
      </div>
    </div>
  );
};

export default SingleReview;
