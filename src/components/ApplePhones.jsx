import React, { useState } from "react";
import applelogo from "../assets/applelogo.png";
import AppleCard1 from "./AppleCard1";
import AppleCard2 from "./AppleCard2";
import AppleCard3 from "./AppleCard3";

export default function ApplePhones() {
  const [selected, setSelected] = useState(null); // null, 0, 1, 2

  const handleCardClick = (idx) => {
    setSelected(selected === idx ? null : idx);
  };

  return (
    <div className="w-full flex flex-col gap-4 mb-8 mt-30">
      <img
        src={applelogo}
        alt="Apple"
        className="w-auto h-25 mb-2 mx-auto"
        draggable={false}
      />
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch font-sans">
        <AppleCard1 selected={selected === 0} onClick={() => handleCardClick(0)} />
        <AppleCard2 selected={selected === 1} onClick={() => handleCardClick(1)} />
        <AppleCard3 selected={selected === 2} onClick={() => handleCardClick(2)} />
      </div>
    </div>
  );
}