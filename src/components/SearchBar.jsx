"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMic } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex border border-gray-200 rounded-3xl hover:shadow-lg ml-10 mr-5 px-5 py-2 max-w-3xl  flex-grow items-center"
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl text-gray-500 sm:mr-2"
      />
      <IoMic className="hidden sm:inline pl-2  mr-2 border-l-2 border-gray-300 text-4xl text-blue-500 cursor-pointer" />
      <IoIosSearch className="text-4xl hidden sm:inline-flex text-blue-500 cursor-pointer pl-4" />
    </form>
  );
};

export default SearchBar;
