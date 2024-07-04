"use client";
import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const SearchHeaderOptions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className="flex select-none border-b space-x-2 justify-center w-full text-gray-700 lg:justify-start lg:pl-52 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-blue-600 border-blue-600"
        }`}
      >
        <IoIosSearch />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-blue-600 border-blue-600"
        }`}
      >
        <IoCameraOutline />
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
