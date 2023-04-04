import React from "react";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { IoStorefrontOutline, IoStorefrontSharp } from "react-icons/io5";
function NavMiddle() {
  return (
    <div className=" flex items-center gap-2 h-full mr-10">
      <div className="flex items-center justify-center h-full px-10 rounded-md cursor-pointer  hover:bg-gray-200">
        <AiOutlineHome className=" text-3xl text-gray-500" />
      </div>
      <div className="flex items-center justify-center h-full px-10 rounded-md cursor-pointer hover:bg-gray-200">
        <BsPeople className=" text-3xl text-gray-500" />
      </div>
      <div className="flex items-center justify-center h-full px-10 rounded-md cursor-pointer hover:bg-gray-200">
        <MdOndemandVideo className=" text-3xl text-gray-500" />
      </div>
      <div className="flex items-center justify-center h-full px-10 rounded-md cursor-pointer hover:bg-gray-200">
        <IoStorefrontOutline className=" text-3xl text-gray-500" />
      </div>
    </div>
  );
}

export default NavMiddle;
