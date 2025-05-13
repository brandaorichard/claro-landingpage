import React from "react";
import { motion } from "framer-motion";
import iphoneclaro from "../assets/iphone16pm.png";
import appleLogo from "../assets/iphone-16-pro-max.png"; // logo do iphone 16
import appleLogo2 from "../assets/art16pro.png"; // logo do iphone 16

export default function AppleCard3({ selected, onClick }) {
  return (
    <motion.div
      className={`bg-gradient-to-b from-[#A80000] to-[#3B1812] rounded-2xl shadow-lg w-[65%] h-120 mx-auto flex flex-col justify-between items-center p-6 overflow-hidden cursor-pointer transition-all duration-200
        ${selected ? "border-4 border-[#FFD700]" : "border-4 border-transparent"}`}
      whileTap={{ scale: 2.00 }}
      onClick={onClick}
    >
      {/* Container da imagem */}
      <div className="h-[250px] w-[250px] flex items-center justify-center">
        <img
          src={iphoneclaro}
          alt="iPhone Claro"
          className="w-50 h-auto object-contain mb-2 mt-10"
          draggable={false}
        />
      </div>
      {/* Container da logo e texto */}
      <div className="flex flex-col items-center flex-shrink-0">
        <img
          src={appleLogo}
          alt="Logo iPhone 16"
          className="w-auto h-4 object-contain mb-2 mx-auto"
          style={{ filter: "brightness(0) invert(1)" }}
          draggable={false}
        />
        <img
          src={appleLogo2}
          alt="Logo iPhone 16 - 2"
          className="w-auto h-auto object-contain mb-2 mx-auto"
          draggable={false}
        />
      </div>
      {/* Container do botão */}
      <div className="flex-shrink-0">
        <button
          className="w-30 py-3 rounded-full bg-[#ffd500d2] text-[#222] font-bold text-lg shadow hover:bg-yellow-400 transition mb-2 cursor-pointer"
          style={{ maxWidth: 150 }}
          onClick={onClick}
        >
          Eu quero
        </button>
      </div>
    </motion.div>
  );
}