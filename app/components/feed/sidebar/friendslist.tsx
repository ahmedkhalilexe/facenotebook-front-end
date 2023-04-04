import React from "react";
import UserImage from "../../../assets/userimg.jpg";
function FriendsList() {
  return (
    <div className="hidden md:flex flex-col w-80">
      <h2 className=" text-lg font-medium text-gray-500 mb-2">Contacts</h2>
      <div className="flex items-center gap-2 h-11 w-full py-2 px-1 rounded-lg hover:bg-gray-300 cursor-pointer ">
        <img
          src={UserImage.src}
          className="aspect-square h-full rounded-full"
        />
        <span className=" font-medium">MrXp</span>
      </div>
      <div className="flex items-center gap-2 h-11 w-full py-2 px-1 rounded-lg hover:bg-gray-300 cursor-pointer ">
        <img
          src={UserImage.src}
          className="aspect-square h-full rounded-full"
        />
        <span className=" font-medium">User Name</span>
      </div>
      <div className="flex items-center gap-2 h-11 w-full py-2 px-1 rounded-lg hover:bg-gray-300 cursor-pointer ">
        <img
          src={UserImage.src}
          className="aspect-square h-full rounded-full"
        />
        <span className=" font-medium">User Name</span>
      </div>
      <div className="flex items-center gap-2 h-11 w-full py-2 px-1 rounded-lg hover:bg-gray-300 cursor-pointer ">
        <img
          src={UserImage.src}
          className="aspect-square h-full rounded-full"
        />
        <span className=" font-medium">User Name</span>
      </div>
    </div>
  );
}

export default FriendsList;
