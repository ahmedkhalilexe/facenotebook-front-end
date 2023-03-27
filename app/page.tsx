import Login from "./components/loginform";

export default function Home() {
  return (
    <section className=" flex justify-center lg:items-center  h-screen w-screen bg-[#F0F2F5]">
      <div className="flex w-2/3 flex-col lg:flex-row h-3/5 justify-between gap-10">
        <div className=" basis-1/2 w-fit mt-11  lg:mt-20 text-center lg:text-left">
          <h1 className=" text-5xl font-bold text-blue-700 mb-2 lg:mb-11  ">FaceNotebook</h1>
          <h3 className=" text-2xl">Connect with friends and the world around you on FaceNotebook.</h3>
        </div>
        <div className="basis-1/2">
          <Login />
        </div>
      </div>
    </section>
  );
}
