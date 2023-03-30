import React from "react";
import NavLeft from "../components/feed/nav/navleft";
import NavMiddle from "../components/feed/nav/navmiddle";
import NavRight from "../components/feed/nav/navright";

function Feed() {
  return (
    <div className=" relative">
      <nav className="fixed flex justify-between items-center px-5 py-1 top-0 left-0 w-screen h-14 bg-white drop-shadow-md">
        <NavLeft />
        <NavMiddle />
        <NavRight />
      </nav>
    </div>
  );
}

export default Feed;
