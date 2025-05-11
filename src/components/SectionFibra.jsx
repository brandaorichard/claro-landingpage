import React from "react";
import SectionTitle from "./SectionTitle";
import { BsFillRouterFill } from "react-icons/bs";
import PlanoCard from "./PlanoCard";
import { planosFibra } from "../data/planosClaro";

export default function SectionFibra({ cardSelecionado, onSelecionarCard }) {
  return (
    <section className="mb-16">
      <p className="text-sm text-[#f00000] mb-2">Para sua casa</p>
      <SectionTitle
        align="left"
        icon={<BsFillRouterFill size={28} className="text-[#f00000]" />}
      >
        Claro Fibra+
      </SectionTitle>
      <h3
        className="text-black font-black uppercase tracking-tight text-3xl md:text-2xl text-left mt-5 mb-8"
        style={{ lineHeight: 1, letterSpacing: "-1px" }}
      >
        NAVEGUE COM A ULTRAVELCIDADE DA CLARO FIBRA+
        <br />
        TENHA INTERNET ESTÁVEL, RÁPIDA E SEGURA PARA TODA A FAMÍLIA!
      </h3>
      {/* Cards de planos fibra */}
      <div className="flex flex-wrap gap-3 mb-10">
        {planosFibra.map((plano, index) => {
          const id = `fibra-${index}`;
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