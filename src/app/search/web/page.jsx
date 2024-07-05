import React from "react";
import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";
import { resolve } from "styled-jsx/css";
const WebSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_API_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );
  if (!response.ok) throw new Error("Something Went Wrong");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No Results Found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try Searching the web or images for something else
          <Link href="/" className="text-blue-500">
            {" "}
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <div>{results && <WebSearchResults results={data} />}</div>;
};

export default WebSearchPage;
