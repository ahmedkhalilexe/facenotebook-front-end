import React from "react";

function Login() {
  return <div>
    <div className=" flex bg-white flex-col pt-4 pb-6 px-4 rounded-lg">
    <input placeholder="Email or phone number" className=" h-12 mb-4 text-black py-4 pl-4 border-2 rounded-md border-gray-300 outline-blue-600" type="email"></input>
    <input placeholder="Password" className=" h-12 text-black  py-4 pl-4 border-2 rounded-md border-gray-300 outline-blue-600" type="password"></input>
    <a className=" bg-blue-700  font-bold text-white text-center py-3 my-4 cursor-pointer rounded-md">Login</a>
    <a className=" text-blue-700 text-center cursor-pointer">Forgot password?</a>
    <a className=" w-fit mt-12 mx-auto p-4 bg-green-600 text-lg font-bold text-white text-center py-3 my-4 cursor-pointer rounded-md">Create new account</a>
      

    </div>
    </div>;
}

export default Login;
