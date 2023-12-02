"use client";

import React, { useState } from "react";
import ImageCursor from "../imgCursor";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const data = [
  {
    name: "Epoch A — E-Commerce Jewellery Website",
    img: "/epoch.png",
    link: "",
  },
  {
    name: "R Architecture — Architecture Portfolio",
    img: "/r-arch.png",
    link: "",
  },

  {
    name: "The Dean Dsouza Mindset — Mental Health Blog",
    img: "/epoch.png",
    link: "https://example.com",
  },

  {
    name: "Chroma — Brand Builder Project",
    img: "/chroma-prev.png",
    link: "",
  },
  {
    name: "Carhartt WIP Clone — E-Commerce Website",
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
    img: "/pb.png",
    link: "",
  },
  {
    name: "Pinque — E-Commerce Health & Beauty Website",
    img: "/pinque.png",
    link: "",
  },
  {
    name: "Genesis — Web3 Marketplace & Community",
    img: "/genesis.jpg",
    link: "https://example.com",
  },
  {
    name: "Agora — Digital Art Marketplace",
    img: "/agora.png",
    link: "",
  },
];

const Archive = () => {
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

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <div className="rounded-md relative w-full col-span-3">
      <ImageCursor cursorActive={cursorActive} currentItem={currentItem} />

      <div
        ref={inViewRef}
        className="flex relative flex-col  w-full    items-center justify-between"
      >
        <div
          className="h-[1px] w-full bg-[#999] transition-all"
          style={{ width: inView ? "100%" : "100%" }}
        ></div>

        {data.map((item: any, index) => (
          <a
            href={item.link ? item.link : null}
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
            className={`int py-[14px] md:hover:px-3 relative flex flex-col md:flex-row gap-2 md:items-center transition-all ease-in-out w-full  ${
              expandedItem === item.name
                ? "md:bg-gray-200 md:bg-transparent"
                : ""
            }`}
          >
            <h4 className="text-[95%] flex gap-2 int">
              {item.link && <IoIosLink size={14} />}
              {item.name}
            </h4>
            {expandedItem === item.name && (
              <Image
                width={600}
                height={600}
                src={item.img}
                alt={item.name}
                className="w-full md:hidden mt-4 md:mt-0"
              />
            )}
            <div
              className="divide absolute bottom-0 left-0"
              style={{ width: inView ? "100%" : 0 }}
            ></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Archive;
