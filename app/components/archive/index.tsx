import React, { useState } from "react";
import ImageCursor from "../imgCursor";
import Image from "next/image";
import { CiLink } from "react-icons/ci";

const Archive = () => {
  const data = [
    {
      name: "Epoch A — E-Commerce Jewellery Website",
      img: "/double.png",
      link: "",
    },
    {
      name: "R Architecture — Architecture Portfolio",
      img: "/r-architecture.jpg",
      link: "",
    },

    {
      name: "The Dean Dsouza Mindset — Mental Health Blog",
      img: "/me.jpg",
      link: "https://example.com",
    },

    { name: "Chroma — Brand Builder Project", img: "/chroma.jpg", link: "" },
    {
      name: "Carhartt WIP Clone — E-Commerce Fashion Website",
      img: "/double.png",
      link: "https://example.com",
    },
    {
      name: "SUI Wine Imports — Wine Imports Catalogue",
      img: "/double.png",
      link: "https://example.com",
    },
    {
      name: "Studio PB — Design Studio Website",
      img: "/studio-pb.jpg",
      link: "",
    },
    {
      name: "Pinque — E-Commerce Health & Beauty Website",
      img: "/studio-pb.jpg",
      link: "",
    },
    {
      name: "Studio PB — Design Studio Website",
      img: "/studio-pb.jpg",
      link: "",
    },
    {
      name: "Genesis — Web3 Marketplace & Community",
      img: "/genesis.jpg",
      link: "https://example.com",
    },
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
      <div className="flex flex-col border-b w-full border-[#999]  items-center justify-between">
        {data.map((item: any, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => {
              setCursorActive(true);
              setCurrentItem(item.img);
            }}
            onMouseLeave={() => {
              setCursorActive(false);
            }}
            onClick={() => handleItemClick(item)}
            className={`py-[14px] hover:px-3 flex gap-2 items-center transition-all ease-in-out border-t w-full border-[#999] ${
              expandedItem === item.name ? "bg-gray-200 md:bg-transparent" : ""
            }`}
          >
            {item.link && <CiLink />}
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Archive;
