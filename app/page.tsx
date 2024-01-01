"use client"
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { useState } from "react";

export default function Home() {
  //define state
  const [todos, setTodos] = useState([
    { movie: "Django  Unchained", id: 1 },
    { movie: "Catch me if you can",  id:2 },
  ]);
 const [inputVal, setInput]= useState("");
 const [id , setId]:any = useState("");
//functions
const addItem  = ()=>{
  let obj:any = todos.find(item=>item.id==id);
  if(obj){
    let newArray = todos.filter(item=> item.id !== obj.id)

    setTodos([...newArray,{movie:inputVal, id:id}])
    setInput("")
    setId(0)
    return
  }

  setTodos([...todos,{movie:inputVal, id:id}])
  setInput("")
  setId(0)
};
const editItems=(id:any)=>{
  let obj:any = todos.find(item=>item.id==id);
  setInput(obj.movie);
  setId(obj.id);
console.log(obj);
};
const delItem = (id:any) => {
  let newArray = todos.filter(item=> item.id !== id)

  setTodos([...newArray])
}
  return (
    // title
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40px] underline">My Todo App</h1>
      {/* input div */}
      <div className="flex justify-between gap-4">
        <input
        type ="text"
        value={inputVal}
        onChange={(e)=> setInput(e.target.value)}
          className="w-[60%] p-3 ml-3  text-lg border-b focus: outline-none "
          placeholder="Write movie name"
        />
        <input
         type ="number"
         value={id}
         onChange={(e:any)=> setId(e.target.value)}
          className="w-[20%] p-3 ml-3  text-lg border-b focus: outline-none "
          placeholder="Write id"
        />
        {/* button */}
        <button onClick={addItem} className="bg-blue-700 w-[20%] text-white p-2 rounded-md  hover:bg-blue-200 hover:text-black">
          {" "}
          Add movie{" "}
        </button>
      </div>
      <h1 className="text-center text-[40px] underline mt-5 ">List</h1>
      {/* grid */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {/* grid item */}
        {todos.map((item: any, index: any) => {
          return (
            <div className="shadow p-4" key={index}>
              <div className="flex justify-between text-lg ">
                <span className="cursor-pointer shadow rounded-full h-8 w-8 text-center my-auto">
                  {index+1}
                </span>
                <span onClick={()=>delItem(item.id)}  className="cursor-pointer shadow rounded-full h-8 w-8 text-center my-auto text-red-700">
                  X
                </span>
              </div>
              <div className="mt-5 text-[30px] text-gray-700">{item.movie}</div>
              {/* data div */}
              <div>
                <h2 onClick={()=>editItems(item.id)} className="text-right cursor-pointer">Edit</h2>
                {/* <h2 className="text-green-600">id:{item.id}</h2> */}
              </div>
            </div>
          );
        })}

        {/* <div className="bg-blue-400">09</div> */}
      </div>
    </div>
  );
}
