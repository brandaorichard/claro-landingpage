import React from "react";
import applelogo from "../assets/applelogo.png"; // logo da Apple
import AppleCard1 from "./AppleCard1";
import AppleCard2 from "./AppleCard2";
import AppleCard3 from "./AppleCard3";

export default function ApplePhones() {
  return (
    <div className="w-full flex flex-col gap-4 mb-8 mt-30">
      {/* Logo centralizada acima dos cards */}
      <img
        src={applelogo}
        alt="Apple"
        className="w-auto h-25 mb-2 mx-auto"
        draggable={false}
      />
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch font-sans">
        <AppleCard1 />
        <AppleCard2 />
        <AppleCard3 />
      </div>
    </div>
  );
}
