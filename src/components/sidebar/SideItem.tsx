"use client";
import Link from "next/link";
import React from "react";
import path from "path";
import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";

interface SideItemProps {
  path: string;
  title: string;
  icon: React.ReactNode;
}

export const SideItem = ({ path, icon, title }: SideItemProps) => {
  const pathActive = usePathname();
  const isActive = path === pathActive;
  const activeClass = " text-white bg-gradient-to-r from-sky-600 to-cyan-400";
  const noActive = "text-gray-600 group";

  return (
    <>
      <li>
        <Link
          href={path}
          className={`px-4 py-3 flex items-center space-x-4 rounded-md ${
            isActive ? activeClass : noActive
          }`}>
          {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>
    </>
  );
};
