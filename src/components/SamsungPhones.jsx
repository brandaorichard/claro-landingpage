import React from "react";
import samsungLogo from "../assets/samsunglogo.png";

export default function SamsungPhones() {
  return (
    <div className="w-full flex flex-col gap-4 mb-8 mt-30">
      {/* Logo centralizada acima dos cards */}
      <img
        src={samsungLogo}
        alt="samsung"
        className="w-70 h-auto mb-2 mx-auto"
        style={{ filter: "brightness(0)" }}
        draggable={false}
      />
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch font-sans">
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-[#A80000] to-[#3B1812] rounded-2xl shadow-lg w-[65%] h-120 mx-auto flex flex-col justify-end items-center p-6"
          >
            <button
              className="w-30 py-3 mt-6 rounded-full bg-[#ffd500d2] text-[#222] font-bold text-lg shadow hover:bg-yellow-400 transition"
              style={{ maxWidth: 150 }}
            >
              Eu quero
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
