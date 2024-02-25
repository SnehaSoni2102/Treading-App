import { KoinXFreeCard } from "./BodyComponents/koinXFreeCard";
import div from "../../Assets/div.svg";

export const Body = () => {
  return (
    <div className="flex flex-row justify-center m-[56px]">
      {/* <div className="bg-red-100">
         <TradingViewWidget /> 
      </div> */}
      <div>
        <img src={div} alt="trade" style={{ height: 711, width: 881 }} />
      </div>
      <div>
        <KoinXFreeCard />
      </div>
    </div>
  );
};
