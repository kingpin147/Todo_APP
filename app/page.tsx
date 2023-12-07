import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40px] underline">My Todo App</h1>
      <div className="flex justify-between gap-4">
        <input className="w-[80%] p-2 ml-3  text-lg border-b focus: outline-none " placeholder="Write movie name" />
        <button  className="bg-blue-700 w-[20%] text-white p-2 rounded-md  hover:bg-blue-200 hover:text-black"> Add movie </button>
      </div>
    </div>
  );
}
