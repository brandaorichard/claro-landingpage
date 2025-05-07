// src/components/PlanoCard.jsx
import { FaInstagram, FaFacebook, FaXTwitter, FaTiktok, FaYoutube, FaPlus } from "react-icons/fa6";
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

export default function PlanoCard({ plano }) {
  const { moeda, valor, centavos, sufixo } = formatPreco(plano.preco);

  return (
    <motion.div
      className="bg-white border border-black rounded-xl p-6 text-black w-full max-w-[260px] transition-all"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 32px 0 rgba(168,0,0,0.18)",
        y: -8,
        borderColor: "#A80000",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 12 }}
    >
      {/* Primeira parte do card */}
      <div className="mb-4">
        <div className="uppercase font-bold text-sm text-[#A80000] mb-1 tracking-wide">
          {plano.nome}
        </div>
        <div className="text-5xl font-extrabold text-black leading-tight mb-1">
          {plano.total}
        </div>
        <div className="flex flex-col gap-0.5">
          {plano.detalhes.map((detalhe, idx) => (
            <span key={idx} className="text-sm text-gray-700">
              {detalhe}
            </span>
          ))}
        </div>
      </div>

      {/* Valor estilizado */}
      <div className="flex items-end justify-center mb-4">
        <span className="text-base font-normal mr-1">{moeda}</span>
        <span className="text-5xl font-extrabold leading-none">{valor}</span>
        <span className="text-sm font-bold align-super ml-0.5">{centavos}</span>
        <span className="text-base font-normal ml-1">{sufixo}</span>
      </div>

      {/* Botão estilizado com hover Framer Motion */}
      <motion.button
        className="w-full bg-[#FFC557] text-black font-bold text-lg rounded-full py-2 mb-4 transition-colors cursor-pointer"
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
      <div className="flex items-center justify-center my-4">
        <div className="flex-1 border-t border-[#A80000]"></div>
        <FaPlus className="mx-3 text-[#A80000]" size={22} />
        <div className="flex-1 border-t border-[#A80000]"></div>
      </div>

      <div className="text-xs font-semibold mb-2">Benefícios:</div>
      <div className="flex items-center gap-2 flex-wrap">
        <FaInstagram size={16} />
        <FaFacebook size={16} />
        <FaXTwitter size={16} />
        <FaTiktok size={16} />
        <FaYoutube size={16} />
        <span className="font-bold ml-2">5GB</span>
      </div>
    </motion.div>
  );
}