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

const PlanoCard = React.memo(function PlanoCard({
  plano,
  fibra = false,
  selecionado = false,
  onClick,
}) {
  const { moeda, valor, centavos, sufixo } = formatPreco(plano.preco);

  // Define cor do texto principal
  const textColor = fibra ? "text-white" : "text-black";
  const subTextColor = fibra ? "text-gray-200" : "text-gray-700";
  const nomeColor = fibra ? "text-[#FFC557]" : "text-[#A80000]";

  // Define a borda do card
  const borderClass = selecionado
    ? "border-4 border-red-600"
    : "border border-black";

  return (
    <motion.div
      className={`${
        fibra
          ? "bg-black/40 backdrop-blur-sm"
          : "bg-white"
      } ${borderClass} rounded-xl p-4 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] transition-all ${textColor}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 32px 0 rgba(168,0,0,0.18)",
        y: -8,
        borderColor: selecionado ? "#dc2626" : "#A80000",
      }}
      style={{
        cursor: onClick && !fibra ? "pointer" : "default",
        borderColor: selecionado ? "#dc2626" : undefined,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 12 }}
      onClick={!fibra ? onClick : undefined}
    >
      {/* Primeira parte do card */}
      <div className="mb-3">
        <div className={`uppercase font-bold text-xs mb-1 tracking-wide ${nomeColor}`}>
          {plano.nome}
        </div>
        <div className={`text-3xl font-extrabold leading-tight mb-1 ${textColor}`}>
          {plano.total}
        </div>
        <div className="flex flex-col gap-0.5">
          {plano.detalhes.map((detalhe, idx) => (
            <span key={idx} className={`text-xs ${subTextColor}`}>
              {detalhe}
            </span>
          ))}
        </div>
      </div>

      {/* Valor estilizado */}
      <div className={`flex items-end justify-center mb-3 ${textColor}`}>
        <span className="text-xs font-normal mr-1">{moeda}</span>
        <span className="text-3xl font-extrabold leading-none">{valor}</span>
        <span className="text-xs font-bold align-super ml-0.5">{centavos}</span>
        <span className="text-xs font-normal ml-1">{sufixo}</span>
      </div>

      {/* Botão apenas se NÃO for fibra */}
      {!fibra && (
        <motion.button
          className="w-full bg-red-600 text-white font-bold text-base rounded-full py-1.5 mb-3 transition-colors cursor-pointer"
          whileHover={{
            backgroundColor: "#b91c1c", // Tailwind red-700
            color: "#fff",
            scale: 1.04,
            boxShadow: "0 4px 16px 0 rgba(168,0,0,0.10)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          type="button"
        >
          Quero este!
        </motion.button>
      )}

      {/* Divisor com "+" */}
      <div className="flex items-center justify-center my-3">
        <div className={`flex-1 border-t ${fibra ? "border-[#FFC557]" : "border-[#A80000]"}`}></div>
        <span className={`mx-2 font-bold text-lg ${fibra ? "text-[#FFC557]" : "text-[#A80000]"}`}>+</span>
        <div className={`flex-1 border-t ${fibra ? "border-[#FFC557]" : "border-[#A80000]"}`}></div>
      </div>

      {/* Benefícios */}
      <div className={`text-xs font-semibold mb-2 ${textColor}`}>Benefícios:</div>
      <div className="flex items-center gap-2 flex-wrap">
        {plano.beneficios?.map((beneficio, idx) =>
          beneficio.icon ? (
            <span key={idx} title={beneficio.label}>
              <beneficio.icon
                size={16}
                color={fibra ? "#FFC557" : beneficio.color || "#000"}
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
                    ? { width: 25, height: 16, verticalAlign: "middle" }
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