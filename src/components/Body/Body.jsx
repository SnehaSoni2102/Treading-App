import React,{useEffect} from "react";
import { KoinXFreeCard } from "./BodyComponents/koinXFreeCard";
import TradingViewWidget from "./BodyComponents/TradingViewWidget";
import div from "../../Assets/div.svg";
import { TreandingCoins } from "./BodyComponents/TreandingCoins";
import { LikeChart } from "./BodyComponents/LikeChart";
import GetSimplePrice from "./BodyComponents/Cripto";


export const Body = () => {

  
  return (
    <React.Fragment>
       <div className="flex flex-row justify-center gap-4 m-[56px]">
      {/* <div className="bg-red-100 w-[881px] h-[711px]">
         <TradingViewWidget /> 
      </div> */}
      <div>
        <img src={div} alt="trade" style={{ height: 711, width: 881 }} />
      </div>
      <div className=" flex flex-col gap-4">
        <KoinXFreeCard />
        <TreandingCoins />
      </div>
    </div>
    <div>
      <LikeChart />
      {/* <GetSimplePrice /> */}
    </div>
     
    </React.Fragment> 
  );
};
