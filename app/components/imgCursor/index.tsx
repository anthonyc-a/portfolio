import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  cursorActive: boolean;
  currentItem: any;
}

const ImageCursor: React.FC<Props> = ({
  cursorActive,
  currentItem,
}: any): JSX.Element => {
  const cursorRef = useRef<any>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  const cursorFunction = () =>
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef?.current?.clientWidth / 2;
      const mouseY = clientY - cursorRef?.current?.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`;
      cursorRef.current.style.opacity = 1;
    });

  useEffect(() => {
    cursorFunction();
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursorRef]);

  useEffect(() => {
    if (scrollY !== 0) {
      cursorRef.current.style.opacity = 0;
    }
  }, [scrollY]);

  return (
    <div className="img-cursor" ref={cursorRef}>
      <Image
        className={cursorActive ? "active" : "opacity-0"}
        src={currentItem}
        alt="img"
        width={160}
        height={160}
      />
    </div>
  );
};

export default ImageCursor;
