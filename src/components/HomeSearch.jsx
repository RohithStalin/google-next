"use client";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`search/web?searchTerm=${input}`);
  };
  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full border border-gray-200 rounded-full max-w-[90%]  mt-5 mx-auto px-5 py-3 sm:max-w-xl lg:max-w-2xl hover:shadow-md focus-within:shadow-md transition-shadow"
      >
        <GoSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <FaMicrophone className="text-lg mr-2" />
      </form>
      <div className="flex flex-col space-y-4 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-[#f9f8fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="bg-[#f9f8fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
        >
          {randomSearchLoading ? "Loading..." : "Iam Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
