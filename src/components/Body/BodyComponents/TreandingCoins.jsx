import { coinsData } from "../../../utiles/coinsData";
import Polygon from "../../../Assets/Polygon.svg";
export const TreandingCoins = () => {
  console.log(coinsData);
  return (
    <div className="rounded-xl bg-[#ffffff] p-6 ">
        <h1 className="text-[24px] font-semibold">Trending Coins (24h)</h1>
      {coinsData.map((item, index) => (
        <div key={index} className=" grid grid-cols-2  text-[16px] pt-4">
          <div className="flex flex-wrap justify-start gap-1 items-center  ">
            <img src={item.coin} alt="coin" style={{ height: 24, width: 24 }} />
            <h1>{item.name}</h1>
          </div>
          <div className="flex flex-wrap justify-end">
          <div className="flex flex-wrap justify-center items-center rounded-md bg-[#EBF9F4] text-[#14B079] w-[80px] h-[24px] gap-2 ">
            <img src={Polygon} alt="coin" style={{ height: 8, width: 11 }} />
            <h1>{item.rate}</h1>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};
