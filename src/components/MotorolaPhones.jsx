// MotorolaPhones.jsx
import React, { useState } from "react";
import motorolalogo from "../assets/motorolalogo.png";
import MotorolaCard1 from "./MotorolaCard1";
import MotorolaCard2 from "./MotorolaCard2";
import MotorolaCard3 from "./MotorolaCard3";

export default function MotorolaPhones() {
  const [selected, setSelected] = useState(null); // null, 0, 1, 2

  const handleCardClick = (idx) => {
    setSelected(selected === idx ? null : idx);
  };

  return (
    <div className="w-full flex flex-col gap-4 mb-8 mt-30">
      {/* Logo centralizada acima dos cards */}
      <img
        src={motorolalogo}
        alt="motorola"
        className="w-auto h-15 mb-2 mx-auto"
        draggable={false}
      />
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch font-sans">
        <MotorolaCard1
          selected={selected === 0}
          onClick={() => handleCardClick(0)}
        />
        <MotorolaCard2
          selected={selected === 1}
          onClick={() => handleCardClick(1)}
        />
        <MotorolaCard3
          selected={selected === 2}
          onClick={() => handleCardClick(2)}
        />
      </div>
    </div>
  );
}
