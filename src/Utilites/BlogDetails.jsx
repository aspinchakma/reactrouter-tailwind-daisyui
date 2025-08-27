import { FaCalendarDays } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const BlogDetails = () => {
  const data = useLoaderData();
  const { writerName, img, title, hashtag, description, date } = data;
  const page = useNavigate();
  const handleBackToThePreviousPage = () => {
    page(-1);
  };
  return (
    <div>
      <div className="w-[90%] mx-auto lg:w-[60%] py-7 lg:py-[30px]">
        <img
          src={img}
          className="w-full max-h-[300px] object-cover rounded-lg"
          alt=""
        />
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-3 text-[18px] text-[#636363] font-bold">
            <IoPerson className="text-[#f83d8e]" />
            <p>{writerName}</p>
          </div>
          <div className="flex items-center gap-3 text-[18px] text-[#636363] font-bold">
            <FaCalendarDays className="text-[#f83d8e]" />
            <p>{date}</p>
          </div>
        </div>
        <h2 className="text-3xl font-bold my-1">{title}</h2>
        <ol className="flex gap-3 text-[#646464] text-[18px]">
          {hashtag?.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ol>

        <p className="text-[18px] text-[#646464] leading-[40px] mt-5">
          {description}
        </p>
        <button
          onClick={handleBackToThePreviousPage}
          className="py-2 border-1 bg-green-600 text-white px-6 mt-3 rounded-[4px] cursor-pointer"
        >
          Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
