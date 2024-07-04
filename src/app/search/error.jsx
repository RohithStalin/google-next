"use client";
import React, { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl mb-4">Something went Wrong</h1>
      <button className="text-blue-500">Try Again</button>
    </div>
  );
};

export default error;
