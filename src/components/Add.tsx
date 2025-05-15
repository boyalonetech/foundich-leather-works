"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

// TEMPORARY
    const stock = 6;


  const handleQuantity = (type: "i" | "d") => {
    if(type === "d" && quantity  > 1){
        setQuantity(prev=> prev - 1)
  }

      if(type === "i" && quantity  < stock){
        setQuantity(prev=> prev + 1)
  }
}

  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-meduim">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <div className="bg-gray-100 py-1 px-4 rounded-3xl flex items-center justify-between w-32 ">
            <button className="cursor-pointer text-xl" onClick={() =>handleQuantity("d")}>-</button>
            {quantity}
            <button className="cursor-pointer text-xl" onClick={() =>handleQuantity("i")}>+</button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">6 items</span> left! <br />{" "}
            {"Don't"} miss it{" "}
          </div>
        </div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-found py-2 px-4 text-found hover:bg-found hover:text-white disabled:cursor-not-allowed disabled:bg-red-400 disabled:text-white disabled:ring-none ">
        Add To Cart
      </button>
      </div>
    </div>
  );
};

export default Add;
