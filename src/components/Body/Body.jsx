import { KoinXFreeCard } from "./BodyComponents/koinXFreeCard";
import TradingViewWidget from "./BodyComponents/TradingViewWidget";
import div from "../../Assets/div.svg";
import { TreandingCoins } from "./BodyComponents/TreandingCoins";

export const Body = () => {
  return (
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
  );
};
