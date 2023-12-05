import Button from "../button";
import Location from "../location";
import Socials from "../socials";

const Hero = () => {
  return (
    <div className="hero flex items-center ml-6 md:ml-auto mr-[20%] w-fit">
      <div className="inner pt-[50%] md:pt-2">
        <h1>
          <span className="rise">Digital Designer</span>
          <br />
          <span className="rise">and Full-Stack</span>
          <br />
          <span className="rise">Developer currently</span>
          <br />

          <span className="rise">based in London.</span>
        </h1>
        <div className="relative mt-5 z-20">
          <p className="relative z-10 text-white  w-fit whitespace-nowrap">
            <span className="rise">
              Mainly working as an independent, I create
            </span>
            <br />
            <span className="rise">
              digital experiences and solve problems through{" "}
            </span>
            <br />
            <span className="rise">clear and functional design.</span>
          </p>
        </div>
        <div className="mt-10">
          <Button />
        </div>
      </div>

      <Location />
      <div className="txt hidden absolute top-9 h-[42px] md:flex flex-col justify-center">
        <span className="rise">Available for freelance</span>
        <span className="rise">projects in January 2024</span>
      </div>

      <div className="bottom absolute bottom-0 right-0 md:right-[unset] md:left-0 md:w-full p-6 flex justify-between items-center">
        <div className="hidden md:block">
          <Socials />
        </div>
        <span className="txt rise">© 2023</span>
      </div>
    </div>
  );
};

export default Hero;
