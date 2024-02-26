import Frame from "../../../Assets/Frame.svg"
export const KoinXFreeCard = () => {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#0052FE] py-12 md:w-[426px] md:h-[515px] h-[440px] text-center text-[#ffffff] ">
      <h1 className="md:text-[24px] text-[18px] font-semibold "> Get Started with KoinX<br/> for FREE </h1>
      <p className=" md:text-[14px] text-[12px] md:p-0 p-4 ">
        With our range of features that you can equip for<br/> free, KoinX allows you
        to be more educated and<br/> aware of your tax reports
      </p>
      <img className="flex flex-wrap justify-center mx-auto md:pb-0 pb-4" src={Frame} alt="frame" style={{height:166, width:178}} />
      <button className="mx-auto rounded-lg text-[20px] w-[237px] h-[48px] bg-[#ffffff] text-black font-medium">Get Started for FREE →</button>
    </div>
  );
};
