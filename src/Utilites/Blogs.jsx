import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import Footer from "./Footer";

const Blogs = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 py-4 lg:py-6">
        {data.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
