import React from "react";
import { GoSearch } from "react-icons/go";

function NavLeft() {
  return (
    <div className="flex items-center gap-2">
      {/* place logo right here */}
      <div className=" flex justify-center items-center text-white aspect-square w-11 rounded-full bg-black">
        logo
      </div>
      <div className="flex items-center bg-gray-200 py-2 px-2 rounded-full">
        <GoSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          className=" bg-transparent focus:outline-none"
          placeholder="Search Facenotebook"
        ></input>
      </div>
    </div>
  );
}

export default NavLeft;
