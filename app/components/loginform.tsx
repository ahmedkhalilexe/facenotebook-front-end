"use client";
import React, { useState } from "react";

import SignUp from "./signupform";
function Login() {
  const [Display, setDisplay] = useState("hidden");
  function DisplaySwitch() {
    Display == "flex" ? setDisplay("hidden") : setDisplay("flex");
  }
  return (
    <div>
      <div className=" flex bg-white flex-col pt-4 pb-6 px-4 rounded-lg">
        <input
          placeholder="Email or phone number"
          className=" h-12 mb-4 text-black py-4 pl-4 border-2 rounded-md border-gray-300 outline-blue-600"
          type="email"
        ></input>
        <input
          placeholder="Password"
          className=" h-12 text-black  py-4 pl-4 border-2 rounded-md border-gray-300 outline-blue-600"
          type="password"
        ></input>
        <button className="bg-blue-700  font-bold text-white text-center py-3 my-4 cursor-pointer rounded-md">
          Login
        </button>
        <a className=" text-blue-700 text-center cursor-pointer">
          Forgot password?
        </a>
        <button
          onClick={() => DisplaySwitch()}
          className="w-fit mt-12 mx-auto p-4 bg-green-600 text-lg font-bold text-white text-center py-3 my-4 cursor-pointer rounded-md"
        >
          Create new account
        </button>
        <div
          className={`${Display} fixed top-0 left-0 w-screen h-screen bg-white/60 justify-center items-center py-5 rounded-lg `}
        >
          <SignUp DisplaySwitch={DisplaySwitch} />
        </div>
      </div>
    </div>
  );
}

export default Login;
