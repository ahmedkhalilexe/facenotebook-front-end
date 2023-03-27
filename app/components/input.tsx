import React from "react";
interface props {
  type: string;
  placeholder: string;
}
function Input({ type, placeholder }: props) {
  return (
    <input
      placeholder={placeholder}
      className=" h-12 mb-4 text-black py-4 pl-4 border-2 rounded-md border-gray-300 outline-blue-600"
      type={type}
    ></input>
  );
}

export default Input;
