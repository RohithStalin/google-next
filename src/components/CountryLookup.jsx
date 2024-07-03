"use client";
import React, { useState, useEffect } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("china");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);
  return (
    <div>
      <h1>{country}</h1>
    </div>
  );
};

export default CountryLookup;
