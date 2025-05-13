import React from "react";
import applelogo from "../assets/applelogo.png";
import { appleCellphones } from "../data/products.js";
import AppleCard1 from "./AppleCard1";
import AppleCard2 from "./AppleCard2";
import AppleCard3 from "./AppleCard3";

// Se quiser manter os cards separados:
const cardComponents = [AppleCard1, AppleCard2, AppleCard3];

export default function ApplePhones({ selected, onSelect }) {
  return (
    <div className="w-full flex flex-col gap-4 mb-8 mt-15">
      <img
        src={applelogo}
        alt="Apple"
        className="w-auto h-25 mb-2 mx-auto"
        draggable={false}
      />
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch font-sans">
        {appleCellphones.map((cel, idx) => {
          const CardComponent = cardComponents[idx];
          return (
            <CardComponent
              key={cel.nome}
              selected={selected === cel.nome}
              onClick={() => {
                // Se já está selecionado, desmarca (passa null)
                if (selected === cel.nome) {
                  onSelect(null);
                } else {
                  onSelect(idx);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}