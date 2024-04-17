import React from "react";
import { BiLogoGmail, BiMailSend, BiPhone } from "react-icons/bi";
import { CiMenuBurger, CiSearch, CiChat1, CiBellOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export const TopMenu = () => {
  return (
    <div>
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4">
          <div hidden className=" text-gray-500 font-medium lg:block">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <BiLogoGmail /> <span>rubenmunozf3@gmail.com |</span>
              </div>

              <div className="flex items-center gap-2">
                <BiPhone />
                55 7912 4843
              </div>
            </div>
          </div>
          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <CiMenuBurger size={30} />
          </button>
          <div className="flex space-x-2">
            <div hidden className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                  <CiSearch />
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="leadingIcon"
                  placeholder="Search here"
                  className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                />
              </div>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
              <CiSearch />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <CiChat1 size={25} />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <CiBellOn size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
