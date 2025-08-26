import { useOutletContext } from "react-router-dom";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const data = useOutletContext();
  return (
    <div>
      {data.reviews.map((re) => (
        <SingleReview re={re} key={re.user} />
      ))}
    </div>
  );
};

export default Reviews;
