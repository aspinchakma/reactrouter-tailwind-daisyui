import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-[#683292] mt-10 ">
      <div className="lg:pt-[60px] pt-10 text-white lg:grid grid-cols-3 w-[80%] mx-auto items-center">
        <img
          className="mx-auto my-2"
          src="https://i.ibb.co.com/mVGtRHbF/logo.png"
          alt=""
        />
        <div>
          <div className="flex gap-4 items-center">
            <MdLocationOn className="text-white font-bold text-4xl" />
            <div className="mb-4">
              <h3 className="text-xl font-bold">Address:</h3>
              <p className="text-[#cfb6e2]">
                Rangamati, Chittagong, Bangladesh.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <MdOutlineEmail className="text-white font-bold text-4xl" />
            <div>
              <h3 className="text-xl font-bold">Email:</h3>
              <p className="text-[#cfb6e2]">aspinchakma2019@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center mb-5">
            <FaPhoneAlt className="text-3xl" />
            <div>
              <h3 className="text-2xl font-bold">+12342343243</h3>
              <p className="text-[#cfb6e2]">Got Questions? Call us 24/7</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaFacebookF className="text-3xl" />
            <FaLinkedinIn className="text-3xl" />
            <FaInstagram className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto h-[2px] bg-[#7f51a2] mt-4"></div>
      <p className="text-center text-[#cfb6e2] py-3">
        Copyright © 2025 BlackRise Themes Inc All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
