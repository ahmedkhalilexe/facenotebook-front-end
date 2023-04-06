"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import Post from "./post";
import { SpinnerCircular } from "spinners-react";
interface PostInterface {
  id: number;
  title: string;
  url: string;
}
interface UserInterface {
  id: number;
  name: string;
}

function Mid() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const fetchapi = async () => {
    setLoading(true);
    console.log(loading);
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPosts(data));
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    setLoading(false);
    console.log(loading);
  };
  useEffect(() => {
    fetchapi();
  }, []);
  return (
    <div className="flex flex-col items-center basis-full">
      <div className=" w-4/5 min-w-fit  md:w-[700px] flex flex-col items-center ">
        <div className=" w-3/4  bg-white drop-shadow-md rounded-md  px-3 py-2">
          <div className=" flex items-center gap-2 mb-2">
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
            <div className=" flex items-center gap-2 h-11 w-full py-4 px-2 text-lg text-gray-500 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer ">
              what&apos;s on ur mind, Name?
            </div>
          </div>
          <div className=" w-full h-[2px] bg-gray-300 mb-2"></div>
          <div className=" flex items-center w-full h-11 ">
            <div className="flex items-center justify-center gap-1 px-1 h-full basis-full rounded-md cursor-pointer  hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="aspect-square h-7 text-red-500"
              >
                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
              </svg>

              <span className=" hidden sm:inline text-md font-medium text-slate-500">
                Live Video
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 px-1 h-full  basis-full rounded-md cursor-pointer  hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="aspect-square h-7 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>

              <span className=" hidden sm:inline text-md font-medium text-slate-500">
                Photo/video
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 px-1 h-full  basis-full rounded-md cursor-pointer  hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="aspect-square h-7 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>

              <span className=" hidden sm:inline text-md font-medium text-slate-500">
                Feeling/activity
              </span>
            </div>
          </div>
        </div>
        {loading == true ? (
          <SpinnerCircular />
        ) : (
          users.map((user: UserInterface) =>
            posts
              .slice(0, 10)
              .map((post: PostInterface) =>
                user.id == post.id ? (
                  <Post
                    key={post.id}
                    title={post.title}
                    url={post.url}
                    name={user.name}
                  />
                ) : (
                  <div key={post.id}></div>
                )
              )
          )
        )}
      </div>
    </div>
  );
}

export default Mid;
