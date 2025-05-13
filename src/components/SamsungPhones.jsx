import React, { useState } from "react";
import samsungLogo from "../assets/samsunglogo.png";
import SamsungCard1 from "./SamsungCard1";
import SamsungCard2 from "./SamsungCard2";
import SamsungCard3 from "./SamsungCard3";

export default function ApplePhones() {
  const [selected, setSelected] = useState(null); // null, 0, 1, 2

  const handleCardClick = (idx) => {
    setSelected(selected === idx ? null : idx);
  };

  return (
    <div className="w-full flex flex-col gap-4 mb-8 mt-30">
      <img
        src={samsungLogo}
        alt="Apple"
        className="w-auto h-25 mb-2 mx-auto"
        draggable={false}
      />
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch font-sans">
        <SamsungCard1 selected={selected === 0} onClick={() => handleCardClick(0)} />
        <SamsungCard2 selected={selected === 1} onClick={() => handleCardClick(1)} />
        <SamsungCard3 selected={selected === 2} onClick={() => handleCardClick(2)} />
      </div>
    </div>
  );
}