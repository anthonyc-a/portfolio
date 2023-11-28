import React, { useState } from "react";
import ImageCursor from "../imgCursor";
import Image from "next/image";

const Archive = () => {
  const data = [
    { name: "SUI Wine Imports - Freelance", img: "/double.png" },
    { name: "The Dean Dsouza Mindset - Freelance", img: "/me.jpg" },
    { name: "Epoch A - E-Commerce", img: "/double.png" },
    { name: "R Architecture - Concept", img: "/r-architecture.jpg" },
    { name: "Blok Studios - Personal Project", img: "/blok-studios.jpg" },
    { name: "Genesis - Freelance", img: "/genesis.jpg" },
    { name: "Chroma - Personal Project", img: "/chroma.jpg" },
    { name: "Space - Concept", img: "/space.jpg" },
    { name: "Studio PB - Concept", img: "/studio-pb.jpg" },
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
    <>
      <ImageCursor cursorActive={cursorActive} currentItem={currentItem} />
      <div className="flex flex-col border-b w-full border-[#999] col-span-3 items-center justify-between">
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
            className={`p-2 border-t w-full border-[#999] ${
              expandedItem === item.name ? "bg-gray-200 md:bg-transparent" : ""
            }`}
          >
            <h4 className="">{item.name}</h4>
            {expandedItem === item.name && (
              <Image
                width={200}
                height={200}
                src={item.img}
                alt={item.name}
                className="w-full md:hidden"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Archive;
