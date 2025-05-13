import React from "react";
import samsungLogo from "../assets/samsunglogo.png";
import SamsungCard1 from "./SamsungCard1";
import SamsungCard2 from "./SamsungCard2";
import SamsungCard3 from "./SamsungCard3";
import { samsungCellphones } from "../data/products.js";

const cardComponents = [SamsungCard1, SamsungCard2, SamsungCard3];

export default function SamsungPhones({ selected, onSelect }) {
  return (
    <div className="w-full flex flex-col gap-4 mb-8 mt-30">
      <img
        src={samsungLogo}
        alt="Samsung"
        className="w-auto h-25 mb-2 mx-auto"
        draggable={false}
      />
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch font-sans">
        {samsungCellphones.map((cel, idx) => {
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