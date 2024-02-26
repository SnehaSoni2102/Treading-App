import { useEffect,useState } from "react";
import { coinsData } from "../../../utiles/coinsData";
import Polygon from "../../../Assets/Polygon.svg";
import GetTrendingCoinService from "../../service/TrendingCoinsService"

export const TreandingCoins = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetTrendingCoinService.getTrendingCoin();
        setData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="rounded-xl bg-[#ffffff] p-6 ">
        <h1 className="text-[24px] font-semibold">Trending Coins (24h)</h1>
      {data?.coins?.slice(0, 3).map((item, index) => (
        <div key={item?.item?.coinId} className=" grid grid-cols-2  text-[16px] pt-4">
          <div className="flex flex-wrap justify-start gap-1 items-center  ">
            <img src={item?.item?.small} alt="coin" style={{ height: 24, width: 24 }} />
            <h1>{item?.item?.name}({item?.item?.symbol})</h1>
          </div>
          <div className="flex flex-wrap justify-end">
          <div className="flex flex-wrap justify-center items-center rounded-md bg-[#EBF9F4] text-[#14B079] px-2 h-[24px] gap-2 ">
            <img src={Polygon} alt="coin" style={{ height: 8, width: 11 }} />
            <h1>{item?.item?.data?.price}</h1>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};
