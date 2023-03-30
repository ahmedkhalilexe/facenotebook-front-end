"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Input from "./input";
import { DAYS, MONTHS, YEARS } from "../consts/bday";
import DateSelect from "./dateselect";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
interface Switch {
  DisplaySwitch: CallableFunction;
}
function SignUp({ DisplaySwitch }: Switch) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const handleSignUp = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
          }).then(() => {
            console.log(`Welcome ${user.displayName}`);
            router.push("./feed");
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-1/3 bg-white h-auto drop-shadow-md rounded-md py-4 overflow-hidden">
      <div className="flex justify-between  mb-2 px-4">
        <h1 className=" text-3xl font-bold">Sign Up</h1>
        <button className=" text-3xl" onClick={() => DisplaySwitch()}>
          <IoClose className=" text-gray-600" />
        </button>
      </div>
      <h2 className=" text-gray-500 pl-4 mb-3">It’s quick and easy.</h2>
      <div className=" w-full h-[1px] bg-slate-300 "></div>
      <div className=" p-4 flex flex-col">
        <div className=" flex flex-col xl:flex-row justify-between gap-2">
          <Input
            setVariable={setFirstName}
            placeholder="First name"
            type="text"
          />
          <Input
            setVariable={setLastName}
            placeholder="Last name"
            type="text"
          />
        </div>
        <Input setVariable={setEmail} placeholder="Email" type="email" />
        <Input
          setVariable={setPassword}
          placeholder="New password"
          type="password"
        />
        {/* <div className=" text-md text-gray-600 mt-2 mb-1">Birthday</div>
        <div className="flex justify-between gap-1">
          <DateSelect setVariable={setDay} dataName="Days" dataArray={DAYS} />
          <DateSelect
            setVariable={setMonth}
            dataName="Months"
            dataArray={MONTHS}
          />
          <DateSelect
            setVariable={setYear}
            dataName="Years"
            dataArray={YEARS}
          />
        </div> */}
        {/* <div className=" text-md text-gray-600 mt-2 mb-1">Gender</div>
        <div className="flex gap-2">
          <label className="flex justify-between gap-8 items-center mb-4 px-4 py-2 border-[1px] rounded-md border-gray-300">
            <span className="mr-6 text-gray-700">Female</span>
            <input
              type="radio"
              className="form-radio h-4 w-4"
              name="gender"
              value="female"
            />
          </label>
          <label className="flex justify-between gap-8 items-center mb-4 px-4 py-2 border-[1px] rounded-md border-gray-300">
            <span className="mr-6 text-gray-700">Male</span>
            <input
              type="radio"
              className="form-radio h-4 w-4 checked:bg-blue-500"
              name="gender"
              value="male"
            />
          </label>
        </div> */}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSignUp}
          className="w-fit mx-auto bg-green-600 text-lg font-bold text-white text-center py-2 px-12 my-4 cursor-pointer rounded-md"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
