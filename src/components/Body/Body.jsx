import React, { useEffect } from "react";
import { KoinXFreeCard } from "./BodyComponents/koinXFreeCard";
import TradingViewWidget from "./BodyComponents/TradingViewWidget";
import before from "../../Assets/before.svg";
import { TreandingCoins } from "./BodyComponents/TreandingCoins";
import { LikeChart } from "./BodyComponents/LikeChart";
import { TrendingCoinCarousel } from "./BodyComponents/TrendingCoinCarousel";

export const Body = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row justify-start m-4 gap-2">
        <h1 className="text-[12px] text-gray-400">Cryptocurrencies</h1>
        <img className="mt-1.5" src={before} alt="coin" style={{ height: 8, width: 8 }} />
        <h1 className="text-[12px]">Bitcoin</h1>
      </div>
      <div className="flex flex-row justify-center gap-4 md:m-[56px] m-4">
        <div className="bg-red-100 md:w-[881px] w-full  md:h-[711px] h-[491px]">
         <TradingViewWidget /> 
      </div>
      <div className="hidden lg:block">
      <div className=" flex flex-col gap-4">
          <KoinXFreeCard />
          <TreandingCoins />
        </div>
      </div>
      </div>
      <div>
        <div className="md:m-0 m-4">
          <LikeChart />
          <TrendingCoinCarousel />
        </div>
        <div className="md:hidden">
          <div className="mx-4 my-14">
          <KoinXFreeCard />
          </div>
          <TreandingCoins />
        </div>
      </div>
    </React.Fragment>
  );
};
