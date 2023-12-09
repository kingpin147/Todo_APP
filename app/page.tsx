import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    // title
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40px] underline">My Todo App</h1>
      {/* input div */}
      <div className="flex justify-between gap-4">
        <input
          className="w-[60%] p-3 ml-3  text-lg border-b focus: outline-none "
          placeholder="Write movie name"
        />
        <input
          className="w-[20%] p-3 ml-3  text-lg border-b focus: outline-none "
          placeholder="Write id"
        />
        {/* button */}
        <button className="bg-blue-700 w-[20%] text-white p-2 rounded-md  hover:bg-blue-200 hover:text-black">
          {" "}
          Add movie{" "}
        </button>
      </div>
      <h1 className="text-center text-[40px] underline mt-5 ">List</h1>
      {/* grid */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {/* grid item */}
        <div className="shadow p-4">
          <div className="flex justify-between ">
            <span className="shadow rounded-full h-8 w-8 text-center  my-auto">
              1
            </span>
            <span className="shadow rounded-full h-8 w-8 text-center  my-auto">
              X
            </span>
          </div>
          <div className="mt-5 text-[30px] text-gray-700">Movies Name</div>
          {/* data div */}
        </div>
        <div className="bg-blue-400">09</div>
      </div>
    </div>
  );
}
