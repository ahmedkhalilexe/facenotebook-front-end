import React from "react";
import Image from "next/image";
interface Post {
  name: string;
  title: string;
  url: string;
}
function Post({ name, title, url }: Post) {
  return (
    <div className="w-3/4  bg-white drop-shadow-md rounded-md  px-3 py-2 my-3">
      <div className=" flex w-full items-center gap-2 py-2">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" aspect-square h-10 bg-slate-200 rounded-full p-1 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div>
          <div className=" font-medium cursor-pointer hover:underline-offset-1 hover:underline">
            {name}
          </div>
          <div className=" text-xs -mt-1 text-gray-500">time posted</div>
        </div>
      </div>
      <div className=" text-lg my-2">{title}</div>
      <Image
        src={url}
        alt="test"
        width={600}
        height={600}
        className=" w-full h-fit"
      />
    </div>
  );
}

export default Post;
