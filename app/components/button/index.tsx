import Image from "next/image";
import React from "react";

const Button = () => {
  const setLocation = () => {
    window.location.href = "#about";
  }

  return (
    <button onClick={setLocation} className="p-1.5 flex items-center gap-3 pt-2 px-5 border w-fit border-white rounded-full">
      Scroll for more
      <Image src="/downArrow.svg" alt='' width={7} height={7} />
    </button>
  );
};

export default Button;
