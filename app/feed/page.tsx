import React from "react";
import NavLeft from "../components/feed/nav/navleft";
import NavMiddle from "../components/feed/nav/navmiddle";
import NavRight from "../components/feed/nav/navright";
import SideBar from "../components/feed/sidebar/sidebar";
import Mid from "../components/feed/mid";
import FriendsList from "../components/feed/sidebar/friendslist";

function Feed() {
  return (
    <div className=" relative ">
      <nav className="fixed z-50 flex justify-between items-center px-5 py-1 top-0 left-0 w-screen h-14 bg-white drop-shadow-md">
        <NavLeft />
        <NavMiddle />
        <NavRight />
      </nav>
      <main className=" flex justify-between min-h-screen  mt-14 py-4 px-3 bg-slate-200">
        <SideBar />
        <Mid />
        <FriendsList />
      </main>
    </div>
  );
}

export default Feed;
