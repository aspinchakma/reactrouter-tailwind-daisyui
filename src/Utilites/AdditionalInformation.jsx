import { useOutletContext } from "react-router-dom";

const AdditionalInformation = () => {
  const data = useOutletContext();
  const { availability, flavorType, nutrition } = data.additionalInformation;
  return (
    <div>
      <h3 className="text-xl font-bold mt-3 mb-2">Type:{flavorType}</h3>
      <p className="text-lg">{availability}</p>
    </div>
  );
};

export default AdditionalInformation;
