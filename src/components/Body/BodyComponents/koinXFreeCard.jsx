import Frame from "../../../Assets/Frame.svg"
export const KoinXFreeCard = () => {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#0052FE] mx-4 py-12 w-[426px] h-[515px] text-center text-[#ffffff] ">
      <h1 className="text-[24px] font-semibold "> Get Started with KoinX<br/> for FREE </h1>
      <p className=" text-[14px] ">
        With our range of features that you can equip for<br/> free, KoinX allows you
        to be more educated and<br/> aware of your tax reports
      </p>
      <img className="flex flex-wrap justify-center mx-auto" src={Frame} alt="frame" style={{height:166, width:178}} />
      <button className="mx-auto rounded-lg text-[20px] w-[237px] h-[48px] bg-[#ffffff] text-black font-medium">Get Started for FREE →</button>
    </div>
  );
};
