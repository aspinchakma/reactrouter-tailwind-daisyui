import { FaCalendarDays } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Blog = ({ blog }) => {
  const { date, img, title, writerName, description } = blog;
  return (
    <div className="shadow-lg p-5 rounded-lg flex flex-col">
      <img
        className="h-[300px] w-full object-cover rounded-lg"
        src={img}
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
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-[#636363] flex-1 mb-2">
        {description.split(" ").slice(0, 16).join(" ")} ...
      </p>
      <NavLink
        className="font-bold pb-1 border-b-black border-b-2 w-fit hover:text-[#f83d8e] hover:border-b-[#f83d8e] duration-500"
        to={`/home/blogs/${blog.id}`}
      >
        Read More
      </NavLink>
    </div>
  );
};

export default Blog;
