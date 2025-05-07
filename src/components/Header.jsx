// src/components/Header.jsx
import { FaCheckCircle } from "react-icons/fa";

const checks = [
  "Exclusivo para quem já é da Claro",
  "Combos integrados em uma só fatura",
  "Atendimento especial e consultoria personalizada",
];

// Texto da imagem, com quebras de linha para responsividade
const textoImagem = (
  <>
    <span className="block">Planos móveis, banda larga e TV</span>
    <span className="block">com benefícios exclusivos para você</span>
    <span className="block">e sua família.</span>
  </>
);

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-[#7e0000] via-[#c10000] to-[#ff1a1a] text-white py-10 px-4 flex flex-col items-center">
      <h1 className="text-lg md:text-2xl font-extrabold tracking-widest text-center mb-6">
        CLIENTE CLARO TEM MAIS VANTAGENS!
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
        {checks.map((texto, idx) => (
          <div className="flex items-center gap-2" key={idx}>
            <FaCheckCircle className="text-green-400" size={28} />
            <span className="font-semibold text-lg text-center">{texto}</span>
          </div>
        ))}
      </div>
      <div className="text-center text-white text-xl md:text-2xl font-bold leading-tight">
        {textoImagem}
      </div>
    </header>
  );
}