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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
    </div>
  );
}

export default NavRight;
