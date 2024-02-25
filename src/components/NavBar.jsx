import KoinXLogo from "../Assets/KoinXLogo.svg";
export const NavBar = () => {
  return (
    <div className="grid grid-cols-3 bg-[#ffffff] pt-6 pb-4 shadow-lg ">
      <div className="col-span-2 mx-12"><img className="h-[24px] w-[96px]" src={KoinXLogo} alt="coinXlogo" /></div>
      <div className=" flex flex-wrap justify-between mx-12 font-semibold ">
        <span> Crypto Taxes </span>
        <span> Free Tools </span>
        <span> Resources Center </span>
        <button
          className=" rounded-lg bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-4 py-2   font-[16px] text-[#FFFFFF]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
