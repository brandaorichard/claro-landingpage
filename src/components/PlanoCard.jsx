// src/components/PlanoCard.jsx
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaXTwitter, FaTiktok, FaYoutube, FaPlus} from "react-icons/fa6";

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

export default function PlanoCard({ plano, index }) {
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
        <FaPlus className="mx-2 text-[#A80000]" size={18} />
        <div className="flex-1 border-t border-[#A80000]"></div>
      </div>

      <div className="text-xs font-semibold mb-2">Benefícios:</div>
      <div className="flex items-center gap-2 flex-wrap">
        <FaInstagram size={12} />
        <FaFacebook size={12} />
        <FaXTwitter size={12} />
        <FaTiktok size={12} />
        <FaYoutube size={12} />
        <span className="font-bold ml-2">5GB</span>
      </div>
    </motion.div>
  );
}