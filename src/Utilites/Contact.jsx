import { FaArrowRight, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="w-[80%] mx-auto py-6 lg:py-[80px]">
        <h2
          className="text-4xl text-center lg:text-5xl"
          style={{ fontFamily: "Berkshire Swash, serif" }}
        >
          Get in <span className="text-[#f83d8e]">Touch</span> With Us
        </h2>
        <p className="text-[#646464] text-center mt-3">
          Reach out and connect with us today for any inquiries or assistance!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
          <div>
            <div className="flex items-center gap-3 shadow-lg rounded-lg p-4">
              <div className="w-fit p-4 bg-[#683292] rounded-full">
                <FaLocationDot className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Location</h3>
                <p className="text-[#646464]">121 King Street, Melbourne</p>
                <p className="text-[#646464]">Victoria 3000 Australia</p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-4 shadow-lg rounded-lg p-4">
              <div className="w-fit p-4 bg-[#683292] rounded-full">
                <FaPhone className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Phone Number</h3>
                <p className="text-[#646464]">(+61 3 8376 6284)</p>
                <p className="text-[#646464]">(+800 2345 6789)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shadow-lg rounded-lg p-4">
              <div className="w-fit p-4 bg-[#683292] rounded-full">
                <TiMessages className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email us at</h3>
                <p className="text-[#646464]">info@icedelights.com</p>
                <p className="text-[#646464]">icedelights@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 text-[#636363] gap-5 h-auto self-start">
            <div>
              <h3 className="text-[17px] mb-2">First Name</h3>
              <input
                placeholder="Write Your First Name"
                type="text"
                className="border-1 border-[#636363] w-full rounded-[8px] p-2"
              />
            </div>
            <div>
              <h3 className="text-[17px] mb-2">Last Name</h3>
              <input
                placeholder="Write Your Last Name"
                type="text"
                className="border-1 border-[#636363] w-full rounded-[8px] p-2"
              />
            </div>
            <div>
              <h3 className="text-[17px] mb-2">Email address</h3>
              <input
                type="email"
                placeholder="Write Your Email"
                className="border-1 border-[#636363] w-full rounded-[8px] p-2"
              />
            </div>
            <div>
              <h3 className="text-[17px] mb-2">Phone Number</h3>
              <input
                type="text"
                placeholder="Write Your Phone Number"
                className="border-1 border-[#636363] w-full rounded-[8px] p-2"
              />
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-[17px] mb-2 ">Message</h3>
              <textarea
                className="border-1 border-[#636363] w-full rounded-[8px] p-2"
                name=""
                id=""
                rows={`5`}
              ></textarea>
            </div>
            <button className="text-white text-xl bg-[#f83d8e] flex items-center  py-3 px-6 rounded-full hover:bg-transparent hover:text-[#f83d8e] border-1 border-[#f83d8e] cursor-pointer duration-500 w-fit">
              Submit Now <FaArrowRight className="ml-2 text-[16px]" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
