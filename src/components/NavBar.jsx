import React, { useState } from "react";
import KoinXLogo from "../Assets/KoinXLogo.svg";
import menu from "../Assets/menu.svg";

export const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="grid grid-cols-3 bg-[#ffffff] pt-6 pb-4 shadow-lg">
        <div className="col-span-2 mx-12">
          <img className="h-[24px] w-[96px]" src={KoinXLogo} alt="coinXlogo" />
        </div>
        <div className="flex flex-wrap justify-end mx-12 bg-red=300 font-semibold md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="btn btn-primary mb-5"
          >
            <img className="h-[24px] w-[24px]" src={menu} alt="coinXlogo" />
          </button>
          {toggle && (
            <ul className="list-group">
              <li className="list-group-item">Crypto Taxes</li>
              <li className="list-group-item">Free Tools</li>
              <li className="list-group-item">Resources Center</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">
                <button className="rounded-lg bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-4 py-2 font-[16px] text-[#FFFFFF]">
                  Get Started
                </button>
              </li>
            </ul>
          )}
        </div>
        <div className="hidden lg:block">
        <div className="flex flex-wrap justify-between mx-12 font-semibold ">
          <span>Crypto Taxes</span>
          <span>Free Tools</span>
          <span>Resources Center</span>
          <button className="rounded-lg bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-4 py-2 font-[16px] text-[#FFFFFF]">
            Get Started
          </button>
        </div>
        </div>
      </div>
    </>
  );
};
