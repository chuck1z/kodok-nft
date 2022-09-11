import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { LineChart, AssetInvestment } from "../components";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      {/* left right button container (vertical) */}
      {/* button container (horizontal) */}
      <div className="flex flex-row space-x-3 mr-14 float-right">
        <button className="outline outline-offset-1 outline-2 w-18 p-2 text-sm rounded-md">
          <AiOutlineLeft />
        </button>
        <button className="outline outline-offset-1 outline-2 w-18 p-2 text-sm rounded-md">
          <AiOutlineRight />
        </button>
      </div>

      {/* monthly summary */}
      <div className="clear-both m-14 text-justify text-gray-400 tracking-wide leading-loose w-3/4">
        26 August Summary <br />
        1. Realised 274,535 USDC in profits from Operations. Buybacks will be
        initiated as per PIP-2. <br />
        2. Invested value experienced some paper losses mainly due to
        Karmaverse, softening of valuations for recently IDO-ed tokens and
        generally bearish NFT markets
      </div>

      {/* treasury */}
      <div className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-4 place-item-center h-96 ml-14 mr-14">
        {/* left */}
        <div className="row-span-3 col-span-2 flex flex-col justify-between p-4 border border-[#d7dbec] align-middle rounded-lg">
          <span className="flex relative text-xl">TREASURY VALUE</span>
          <span className="text-5xl -mt-20 font-extrabold">
            16,282,256
          </span>{" "}
          <br />
          <span className="-mt-72">USDC</span>
          <span className="text-gray-600 text-xs">
            Updated on Fri, 26 August 2022
          </span>
        </div>

        <div className="row-span-2 flex flex-col justify-between p-4 border border-[#d7dbec] rounded-lg">
          <span>TOTAL INVESTMENT VALUE</span>
          <span className="text-3xl font-extrabold">6,054,941</span>
          <span>USDC</span>
          <span>Learn More</span>
        </div>

        <div className="flex flex-col p-4 border border-[#d7dbec] rounded-lg  text-white bg-blue-500">
          <span className="text-[10px]">
            TREASURY VALUE PER CIRCULATING $PATH SUPPLY
          </span>
          <div className="mt-2">
            <span className="mr-2 text-3xl">0.0848</span>
            <span>USDC</span>
          </div>
        </div>

        {/* right 2 */}
        <div className="row-span-2 flex flex-col justify-between p-4 border border-[#d7dbec] rounded-lg">
          <span>CASH ON HAND</span>
          <span className="text-3xl font-extrabold ">10,227,315</span>
          <span>USDC</span>
          <span>Learn More</span>
        </div>

        <div className="flex flex-col justify-between p-4 border border-[#d7dbec] rounded-lg text-white bg-cyan-500">
          <span className="text-[12px] font-bold">
            Start Staking $PATH And Enjoy 93.80% APR.
          </span>
          <span>Stake Now</span>
        </div>
      </div>

      {/* performance overview */}
      <LineChart />

      {/* asset investments */}
      <AssetInvestment />

      {/* unutilized treasury */}
      <div className="border gap-4 place-item-center h-96 ml-14 mr-14 mt-14 p-4 border-[#d7dbec] rounded-lg">
        <div>
          <span>Unutilized Treasury</span>
        </div>
      </div>

      <div className="h-48"></div>
    </div>
  );
};

export default Ecommerce;
