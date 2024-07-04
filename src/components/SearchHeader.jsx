import Link from "next/link";
import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex p-6 w-full items-center justify-between">
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="google logo"
            height={40}
            width={120}
            priority
          />
        </Link>
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <IoSettingsOutline className="bg-transparent hover:bg-gray-200 rounded-full cursor-pointer text-4xl p-2" />
          <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full cursor-pointer text-4xl p-2" />
        </div>
        <button className="bg-blue-500 px-4 md:px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow text-white ml-2">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
