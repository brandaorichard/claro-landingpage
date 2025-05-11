import React from "react";
import { planos, planosPos } from "../data/planosClaro";
import PlanoCard from "./PlanoCard";
import SectionTitle from "./SectionTitle";
import { FaMobileScreenButton } from "react-icons/fa6";

export default function SectionMobile({ cardSelecionado, onSelecionarCard }) {
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
        {planos.map((plano, index) => {
          const id = `controle-${index}`;
          return (
            <PlanoCard
              plano={plano}
              key={id}
              selecionado={cardSelecionado === id}
              onClick={() => onSelecionarCard(id)}
            />
          );
        })}
      </div>
      <h3 className="font-bold mb-4 text-left text-lg">Claro Pós:</h3>
      <div className="flex flex-wrap gap-3">
        {planosPos.map((plano, index) => {
          const id = `pos-${index}`;
          return (
            <PlanoCard
              plano={plano}
              key={id}
              selecionado={cardSelecionado === id}
              onClick={() => onSelecionarCard(cardSelecionado === id ? null : id)}
            />
          );
        })}
      </div>
    </section>
  );
}