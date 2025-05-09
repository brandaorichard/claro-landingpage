import React, { useState } from "react";
import { planos, planosPos } from "../data/planosClaro";
import PlanoCard from "./PlanoCard";
import SectionTitle from "./SectionTitle";
import { FaMobileScreenButton } from "react-icons/fa6";

export default function SectionMobile() {
  const [cardMovelSelecionado, setCardMovelSelecionado] = useState(null);

  return (
    <section className="mb-16">
      <p className="text-sm text-[#f00000] mb-2">Para seu celular</p>
      <SectionTitle
        align="left"
        icon={<FaMobileScreenButton size={28} className="text-[#f00000]" />}
      >
        Claro Móvel
      </SectionTitle>
      <h3 className="font-bold mb-4 text-left text-lg">Claro Controle:</h3>
      <div className="flex flex-wrap gap-3 mb-10">
        {planos.map((plano, index) => (
          <PlanoCard
            plano={plano}
            key={index}
            selecionado={cardMovelSelecionado === `controle-${index}`}
            onClick={() =>
              setCardMovelSelecionado(
                cardMovelSelecionado === `controle-${index}`
                  ? null
                  : `controle-${index}`
              )
            }
          />
        ))}
      </div>
      <h3 className="font-bold mb-4 text-left text-lg">Claro Pós:</h3>
      <div className="flex flex-wrap gap-3">
        {planosPos.map((plano, index) => (
          <PlanoCard
            plano={plano}
            key={index}
            selecionado={cardMovelSelecionado === `pos-${index}`}
            onClick={() =>
              setCardMovelSelecionado(
                cardMovelSelecionado === `pos-${index}`
                  ? null
                  : `pos-${index}`
              )
            }
          />
        ))}
      </div>
    </section>
  );
}