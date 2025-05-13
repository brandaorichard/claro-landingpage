import React from "react";
import motorolalogo from "../assets/motorolalogo.png";
import MotorolaCard1 from "./MotorolaCard1";
import MotorolaCard2 from "./MotorolaCard2";
import MotorolaCard3 from "./MotorolaCard3";
import { motorolaCellphones } from "../data/products.js";

const cardComponents = [MotorolaCard1, MotorolaCard2, MotorolaCard3];

export default function MotorolaPhones({ selected, onSelect }) {
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
        {motorolaCellphones.map((cel, idx) => {
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