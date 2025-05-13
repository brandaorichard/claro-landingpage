import React from "react";
import { motion } from "framer-motion";
import samsungclaro from "../assets/s24cell.png";
import samsungS24 from "../assets/s24art.png";
import samsungLogo from "../assets/s24letter.png";

export default function SamsungCard3({ selected, onClick }) {
  return (
    <motion.div
      className={`bg-gradient-to-b from-[#A80000] to-[#3B1812] rounded-2xl shadow-lg w-[65%] h-120 mx-auto flex flex-col justify-between items-center p-6 overflow-hidden cursor-pointer transition-all duration-200
    ${selected ? "border-6 border-[#f8b807]" : "border-2 border-transparent"}`}
      whileTap={{ scale: 2.0 }}
      onClick={onClick}
    >
      {/* Container da imagem */}
      <div className="h-[250px] w-[300px] flex items-center justify-center">
        <img
          src={samsungclaro}
          alt="Samsung Claro"
          className="h-84 w-49 object-contain"
          draggable={false}
        />
      </div>
      {/* Container da logo e texto */}
      <div className="flex flex-col items-center flex-shrink-0">
        <img
          src={samsungS24}
          alt="Logo iPhone 16"
          className="w-auto h-10 object-contain mb-2 mx-auto"
          style={{ filter: "brightness(0) invert(1)" }}
          draggable={false}
        />
        <img
          src={samsungLogo}
          alt="Logo Samsung"
          className="w-56 h-auto object-contain mx-auto"
          style={{ filter: "brightness(0) invert(1)" }}
          draggable={false}
        />
      </div>
      {/* Container do botão */}
      <div className="flex-shrink-0">
        <button
          className="w-30 py-3 rounded-full bg-[#ffd500d2] text-[#222] font-bold text-lg shadow hover:bg-yellow-400 transition mb-2"
          style={{ maxWidth: 150 }}
        >
          Eu quero
        </button>
      </div>
    </motion.div>
  );
}
