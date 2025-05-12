// AppleCard1.jsx
import React from "react";
import iphoneclaro from "../assets/iphoneclaro.png";
import appleLogo from "../assets/13logo.png"; // logo do iphone 13
import applelogo2 from "../assets/art2.png"; // logo do iphone 13

export default function AppleCard1() {
  return (
    <div className="bg-gradient-to-b from-[#A80000] to-[#3B1812] rounded-2xl shadow-lg w-[65%] h-120 mx-auto flex flex-col justify-between items-center p-6 overflow-hidden">
      {/* Container da imagem */}
      <div className="h-[200px] w-[200px] flex items-center justify-center">
        <img
          src={iphoneclaro}
          alt="iPhone Claro"
          className="w-auto h-auto object-contain mb-2 mt-25"
          draggable={false}
        />
      </div>
      {/* Container da logo e texto */}
      <div className="flex flex-col items-center flex-shrink-0">
        <img
          src={appleLogo}
          alt="Logo iPhone 16"
          className="w-auto h-12 object-contain mb-2 mx-auto mt-10"
          style={{ filter: "brightness(0) invert(1)" }}
          draggable={false}
        />
      </div>
      <img
        src={applelogo2}
        alt="Logo iPhone 16 - 2"
        className="w-auto h-auto object-contain mb-2 mx-auto"
        style={{ filter: "brightness(0) invert(1)" }}
        draggable={false}
      />
      {/* Container do botão */}
      <div className="flex-shrink-0">
        <button
          className="w-30 py-3 rounded-full bg-[#ffd500d2] text-[#222] font-bold text-lg shadow hover:bg-yellow-400 transition mb-2"
          style={{ maxWidth: 150 }}
        >
          Eu quero
        </button>
      </div>
    </div>
  );
}
