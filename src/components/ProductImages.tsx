"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1, src: "/d75797127382bb43ca47e161230dbbfe.jpg", alt: "image1" },
  { id: 2, src: "/e8589163c4e02be787f946269bec8911.jpg", alt: "image2" },
  { id: 3, src: "/86e9ddd81e81b2a8ba32deffd122390e.jpg", alt: "image3" },
  { id: 4, src: "/9062a50652fd552448ec72ac8eea2b89.jpg", alt: "image4" },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].src}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
