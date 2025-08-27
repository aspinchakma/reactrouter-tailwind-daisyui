import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-10 lg:w-[80%] mx-auto py-6 lg:py-[70px]">
        <img
          className="rounded-full  object-cover w-[450px] h-[450px] lg:ml-auto"
          src="https://i.ibb.co.com/m5xfWSBr/aboutus.png"
          alt=""
        />
        <div>
          <h2
            className="text-5xl"
            style={{ fontFamily: "Berkshire Swash, serif" }}
          >
            Our <span className="text-[#f73e8e]">Journey</span> Began With a
            Simple Dream
          </h2>
          <p className="text-[#646464] my-3">
            Our goal is to make the best ice cream using only the finest,
            natural ingredients. From rich, creamy classics to adventurous new
            creations, every flavor is meticulously crafted in-house to ensure
            the highest quality and freshness.
          </p>
          <p className="text-[#646464] mb-3">
            We take pride in offering a diverse range of options, including
            dairy-free, vegan, and gluten-free choices, so everyone can find
            their perfect scoop.
          </p>

          <button className="text-white text-xl bg-[#f83d8e] flex items-center  py-3 px-6 rounded-full hover:bg-transparent hover:text-[#f83d8e] border-1 border-[#f83d8e] cursor-pointer duration-500">
            Read More <FaArrowRight className="ml-2 text-[16px]" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
