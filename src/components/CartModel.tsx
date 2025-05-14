"use client";

import Image from "next/image";

const CartModel = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20 top-12 right-0 flex flex-col gap-6 bg-white">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl font-[600]">Shopping Cart</h2>
          {/* // LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4 ">
              <Image
                src="https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full ">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold ">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm ">$49</div>
                  </div>
                  {/* Desc */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">QTY.2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold ">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping free available goods now{" "}
            </p>
            <div className="flex justify-between text:sm ">
              <button className="rounded-md py-2 px-3 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-2 px-3 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>

           {/* ITEM */}
            <div className="flex gap-4 ">
              <Image
                src="https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full ">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold ">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm ">$49</div>
                  </div>
                  {/* Desc */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">QTY.2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold ">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping free available goods now{" "}
            </p>
            <div className="flex justify-between text:sm ">
              <button className="rounded-md py-2 px-3 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-2 px-3 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
