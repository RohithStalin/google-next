import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-5 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent text-4xl p-2 hover:bg-gray-200 rounded-full" />
        <button className="bg-blue-500 px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow text-white">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
