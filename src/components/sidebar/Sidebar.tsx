import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { SideItem } from "./SideItem";
import { FaBriefcase, FaCode, FaFileAlt } from "react-icons/fa";

import imagen from "../../../public/img/RubenMunoz.jpeg";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { MdContactMail, MdPlace } from "react-icons/md";

const menuItems = [
  {
    path: "/dashboard",
    title: "Inicio",
    icon: <AiFillHome size={30} />,
  },
  {
    path: "/dashboard/cv",
    title: "CV",
    icon: <FaFileAlt size={30} />,
  },
  {
    path: "/dashboard/portafolio",
    title: "Portafolio",
    icon: <FaBriefcase size={30} />,
  },
  {
    path: "/dashboard/contacto",
    title: "Contacto",
    icon: <MdContactMail size={30} />,
  },
  {
    path: "/dashboard/google",
    title: "¿Google Maps?",
    icon: <MdPlace size={30} />,
  },
];

export const Sidebar = () => {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <span className="text-2xl flex felx-row items-center">
              <FaCode className="me-1" /> <span>Developer</span>
            </span>
          </div>

          <div className="mt-8 text-center">
            <Image
              src={imagen}
              alt=""
              className="w-32 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={200}
              height={200}
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Lic. Ruben Muñoz
            </h5>
            <span className="hidden text-gray-400 lg:block">Programador</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {menuItems.map((item) => (
              <SideItem
                key={item.path}
                path={item.path}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
