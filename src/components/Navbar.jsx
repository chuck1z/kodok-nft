import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const { setActiveMenu, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  });

  return (
    <div className="flex justify-between p-2 md:mx-6 relative mt-5">
      <div className="flex">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />
        <span className="ml-6 p-1 text-2xl font-extrabold">Dashboard</span>
      </div>

      <div className="flex">
        <div className="shrink w-28 border mr-5 rounded-md text-14">
          <span className="ml-2 font-extralight">PATH</span>
          <br />
          <span className="ml-2 font-extrabold">0.015</span>
          <span className="ml-2 text-emerald-500">3.88%</span>
        </div>
        <button className="w-28 border border-[2px] border-sky-600 mr-5 rounded-md text-sky-600">
          Connect
        </button>
        <button className="w-28 bg-gradient-to-r from-cyan-500 to-blue-500 mr-5 rounded-md text-white">
          Stake
        </button>
      </div>
    </div>
  );
};

export default Navbar;
