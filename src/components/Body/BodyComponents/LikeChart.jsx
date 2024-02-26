import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LikeChart = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
 
// trading_aap_key	 https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=CG-FRLs6QtupHKG5T3MpXv9zPb4
  return (
    <React.Fragment>
      <div>You may also like</div>
      <div className=" w-3/4 m-auto">
      <Slider {...sliderSettings}>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">hii</div>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">hi454i</div>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">hii3</div>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">hfua</div>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">
          hi45fdsgfdqyuEYH4i
        </div>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">hii3FDSGV</div>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">hiiFDYWTI</div>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">hi454FYYGFINi</div>
        <div className="w-[200px] h-[90px] bg-slate-300 m-4 p-auto border border-black">hii3GGFH</div>
      </Slider>
      </div>
    </React.Fragment>
  );
};
