import React, { useState } from "react";
import ImageCursor from "../imgCursor";
import Image from "next/image";

const Archive = () => {
  const data = [
    { name: "SUI Wine Imports — Wine Imports Catalogue", img: "/double.png" },
    { name: "The Dean Dsouza Mindset — Mental Health Blog", img: "/me.jpg" },
    { name: "Epoch A — E-Commerce Jewellery Website", img: "/double.png" },
    { name: "R Architecture — Architecture Portfolio", img: "/r-architecture.jpg" },
    { name: "Blok Studios — Modular Housing Project", img: "/blok-studios.jpg" },
    { name: "Genesis — Web3 Marketplace & Community", img: "/genesis.jpg" },
    { name: "Chroma — Brand Builder Project", img: "/chroma.jpg" },
    { name: "Space — Design Concept", img: "/space.jpg" },
    { name: "Studio PB — Design Studio Website", img: "/studio-pb.jpg" },
  ];

  const [cursorActive, setCursorActive] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [expandedItem, setExpandedItem] = useState("");

  const handleItemClick = (item: any) => {
    if (expandedItem === item.name) {
      setExpandedItem("");
    } else {
      setExpandedItem(item.name);
    }
  };

  return (
    <div className="rounded-md w-full col-span-3">
      <ImageCursor cursorActive={cursorActive} currentItem={currentItem} />
      <div className="flex flex-col border-b w-full border-[#999]   items-center justify-between">
        {data.map((item: any, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setCursorActive(true);
              setCurrentItem(item.img);
            }}
            onMouseLeave={() => {
              setCursorActive(false);
            }}
            onClick={() => handleItemClick(item)}
            className={`py-3 hover:px-3 transition-all ease-in-out border-t w-full border-[#999] ${
              expandedItem === item.name ? "bg-gray-200 md:bg-transparent" : ""
            }`}
          >
            <h4 className="text-[90%]">{item.name}</h4>
            {expandedItem === item.name && (
              <Image
                width={600}
                height={600}
                src={item.img}
                alt={item.name}
                className="w-full md:hidden"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
