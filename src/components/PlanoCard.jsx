// src/components/PlanoCard.jsx
import React from "react";
import { motion } from "framer-motion";

function formatPreco(preco) {
  const match = preco.match(/(R\$)?\s?(\d+),(\d+)(.*)/);
  if (!match) return { moeda: "", valor: preco, centavos: "", sufixo: "" };
  return {
    moeda: match[1] || "",
    valor: match[2],
    centavos: match[3],
    sufixo: match[4] || "",
  };
}

const PlanoCard = React.memo(function PlanoCard({ plano }) {
  const { moeda, valor, centavos, sufixo } = formatPreco(plano.preco);

  return (
    <motion.div
      className="bg-white border border-black rounded-xl p-4 text-black w-full max-w-[195px] transition-all"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 32px 0 rgba(168,0,0,0.18)",
        y: -8,
        borderColor: "#A80000",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 12 }}
    >
      {/* Primeira parte do card */}
      <div className="mb-3">
        <div className="uppercase font-bold text-xs text-[#A80000] mb-1 tracking-wide">
          {plano.nome}
        </div>
        <div className="text-3xl font-extrabold text-black leading-tight mb-1">
          {plano.total}
        </div>
        <div className="flex flex-col gap-0.5">
          {plano.detalhes.map((detalhe, idx) => (
            <span key={idx} className="text-xs text-gray-700">
              {detalhe}
            </span>
          ))}
        </div>
      </div>

      {/* Valor estilizado */}
      <div className="flex items-end justify-center mb-3">
        <span className="text-xs font-normal mr-1">{moeda}</span>
        <span className="text-3xl font-extrabold leading-none">{valor}</span>
        <span className="text-xs font-bold align-super ml-0.5">{centavos}</span>
        <span className="text-xs font-normal ml-1">{sufixo}</span>
      </div>

      {/* Botão estilizado com hover Framer Motion */}
      <motion.button
        className="w-full bg-[#FFC557] text-black font-bold text-base rounded-full py-1.5 mb-3 transition-colors cursor-pointer"
        whileHover={{
          backgroundColor: "#FFD700",
          color: "#A80000",
          scale: 1.04,
          boxShadow: "0 4px 16px 0 rgba(168,0,0,0.10)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        type="button"
      >
        Quero este!
      </motion.button>

      {/* Divisor com "+" */}
      <div className="flex items-center justify-center my-3">
        <div className="flex-1 border-t border-[#A80000]"></div>
        <span className="mx-2 text-[#A80000] font-bold text-lg">+</span>
        <div className="flex-1 border-t border-[#A80000]"></div>
      </div>

      {/* Benefícios */}
      <div className="text-xs font-semibold mb-2">Benefícios:</div>
      <div className="flex items-center gap-2 flex-wrap">
        {plano.beneficios?.map((beneficio, idx) =>
          beneficio.icon ? (
            <span key={idx} title={beneficio.label}>
              <beneficio.icon
                size={16}
                color={beneficio.color || "#000"}
                className="inline"
              />
            </span>
          ) : beneficio.img ? (
            <span key={idx} title={beneficio.label}>
              <img
                src={beneficio.img}
                alt={beneficio.label}
                style={
                  beneficio.label === "wifi"
                    ? { width: 25, height: 16, verticalAlign: "middle" } // 16 * 1.2 = 19.2
                    : { width: 16, height: 16, verticalAlign: "middle" }
                }
              />
            </span>
          ) : (
            <span key={idx} className="font-bold ml-2">
              {beneficio.text}
            </span>
          )
        )}
      </div>
    </motion.div>
  );
});

export default PlanoCard;
