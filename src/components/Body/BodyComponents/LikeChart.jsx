import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetTrendingCoinService from "../../service/TrendingCoinsService";

export const LikeChart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

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
  console.log(data, "dararfac");

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className=" w-11/12 m-auto">
        <h1>You may also like</h1>
          <Slider {...sliderSettings}>
          {data?.coins?.map((item, index) => (
        <div key={item?.item?.coinId} className="w-[200px] h-[150px] bg-[#ffffff] gap-4">
          <div className="m-2 bg-[#ffffff] p-4 border border-gray-400 rounded-lg">
            <div className="flex flex-wrap justify-start items-center gap-2">
            <img src={item?.item?.small} alt="coin" style={{ height: 24, width: 24 }} />
          <h1>{item?.item?.symbol}</h1>
          <div className="flex flex-wrap justify-center items-center rounded-sm bg-[#EBF9F4] text-[#14B079] text-[10px] px-1 h-[16px]">
            <h1>{item?.item?.data?.price}</h1>
          </div>
            </div>
           
          </div>
          
        </div>
      ))}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};
