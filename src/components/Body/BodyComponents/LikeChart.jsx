import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetTrendingCoinService from "../../service/TrendingCoinsService";

export const LikeChart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
      <div className="bg-[#ffffff] pt-8">
        <div className=" w-11/12 m-auto">
          <h1 className="py-4 text-[24px] font-medium">You may also like</h1>
          <Slider {...sliderSettings}>
            {data?.coins?.map((item, index) => (
              <div
                key={item?.item?.coinId}
                className="bg-[#ffffff] gap-4"
              >
                <div className="m-2 bg-[#ffffff] p-4 border border-gray-400 rounded-lg">
                  <div className="flex flex-wrap justify-start items-center gap-2 text-[16px]">
                    <img
                      src={item?.item?.small}
                      alt="coin"
                      style={{ height: 26, width: 26 }}
                    />
                    <h1 className="text-[16px]">{item?.item?.symbol}</h1>
                    <div className="flex flex-wrap justify-center items-center rounded-sm bg-[#EBF9F4] text-[#14B079] text-[10px] px-1 h-[16px]">
                      <h1>{item?.item?.data?.price}</h1>
                    </div>
                  </div>
                  <h1 className="font-medium">{item?.item?.data?.price}</h1>
                  <div className="p-2 mx-auto">
                  <img src={item?.item?.data?.sparkline} alt="coin" style={{ height: 80, width: 100 }} />
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
