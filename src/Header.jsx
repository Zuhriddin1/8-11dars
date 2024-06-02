import React from "react";
import { FaSun, FaBell } from "react-icons/fa";
import profile from "./assets/react.svg";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Integrations</h1>
      <div className="flex items-center space-x-4">
        <FaSun className="text-gray-500" />
        <div className="relative">
          <div className="indicator">
            <div className="grid  cursor-pointer w-[50px] h-[50px] rounded-full bg-base-300 place-items-center">
               <FaBell></FaBell>
            </div>
          </div>
        </div>
        <div className="avatar">
          <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
