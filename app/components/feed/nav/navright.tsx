import React from "react";
import { BsMessenger } from "react-icons/bs";
import { IoApps, IoNotifications } from "react-icons/io5";

function NavRight() {
  return (
    <div className="flex items-center gap-2">
      <div className=" flex justify-center items-center text-gray-900 aspect-square w-11 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
        <IoApps className=" text-2xl" />
      </div>
      <div className=" flex justify-center items-center text-gray-900 aspect-square w-11 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
        <BsMessenger className=" text-2xl" />
      </div>
      <div className=" flex justify-center items-center text-gray-900 aspect-square w-11 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
        <IoNotifications className=" text-2xl" />
      </div>
      <div className=" flex justify-center items-center text-gray-900 aspect-square w-11 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
        logo
      </div>
    </div>
  );
}

export default NavRight;
