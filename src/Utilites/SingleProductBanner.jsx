import { useLocation } from "react-router-dom";
import "./SingleProducBanner.css";
const SingleProductBanner = () => {
  const data = useLocation();

  return (
    <div className="singleProductBannerContainer  mx-auto py-8 lg:py-[80px] rounded-lg">
      <h2 className="text-6xl text-center">Single Product Layout 01</h2>
      <p className="text-center mt-5">
        <span className="bg-white px-6 py-2 inline-block rounded-lg text-[18px] font-bold">
          {data.pathname.split("/").filter(Boolean).join("  /  ").toUpperCase()}
        </span>
      </p>
    </div>
  );
};

export default SingleProductBanner;
