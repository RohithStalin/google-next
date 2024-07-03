import HomeHeader from "@/components/HomeHeader";
import React from "react";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

const page = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="google logo"
          height={100}
          width={300}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default page;
