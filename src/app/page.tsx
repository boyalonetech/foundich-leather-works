"use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { get } from "http";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const wixClient = useContext(WixClientContext);

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();

console.log(res);

    };

    getProducts();
  }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:16 xl:32 2xl:64">
        <div className="text-3xl font-bold text-center">Featured Products</div>
        <ProductList />
      </div>{" "}
      <div className="mt-24">
        <div className="px-4 md:px-8 lg:16 xl:32 2xl:64 text-center font-bold text-3xl mb-12">
          Categories
        </div>
        <CategoryList />
      </div>{" "}
      <div className="mt-24 px-4 md:px-8 lg:16 xl:32 2xl:64">
        <div className="text-3xl font-bold text-center">New Products</div>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
