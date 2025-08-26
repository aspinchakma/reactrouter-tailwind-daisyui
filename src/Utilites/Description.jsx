import { useOutletContext } from "react-router-dom";

const Description = () => {
  const data = useOutletContext();
  const { description } = data;
  return (
    <div className="mt-2 text-[#787878] text-[18px]">
      <p>{description}</p>
    </div>
  );
};

export default Description;
