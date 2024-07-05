"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const PaginationButtons = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className=" flex flex-col items-center  hover:underline ">
            <RiArrowLeftSLine className="h-7" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col items-center  hover:underline ">
            <RiArrowRightSLine className="h-7" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
