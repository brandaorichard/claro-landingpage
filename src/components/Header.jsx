// src/components/Header.jsx
import claroLogo from "../assets/claro.svg";
import { FaCheckCircle } from "react-icons/fa";

const checks = [
  "Exclusivo para quem já é da Claro",
  "Combos integrados em uma só fatura",
  "Atendimento especial e consultoria personalizada",
];

const textoImagem = (
  <>
    <span className="block">Planos móveis, banda larga e TV</span>
    <span className="block">com benefícios exclusivos para você</span>
    <span className="block">e sua família.</span>
  </>
);

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-[#7e0000] via-[#c10000] to-[#ff1a1a] text-white py-10 px-4 flex flex-col items-center relative">
      {/* Logo Claro: centralizado no mobile, absoluto à esquerda no md+ */}
      <img
        src={claroLogo}
        alt="Claro"
        className="w-20 h-auto mb-4 md:mb-0 md:w-24 md:absolute md:left-6 md:top-6 md:block"
      />

      <h1 className="text-lg md:text-2xl font-extrabold tracking-tight text-center mb-6 mt-2 md:mt-0" style={{ lineHeight: 1, letterSpacing: "-1px" }}>
        CLIENTE CLARO TEM MAIS VANTAGENS!
      </h1>
      <div className="flex flex-col tracking-tight md:flex-row justify-center items-center gap-8 mb-6">
        {checks.map((texto, idx) => (
          <div className="flex items-center gap-2" key={idx} style={{ letterSpacing: "-1px" }}>
            <FaCheckCircle className="text-green-400" size={28} />
            <span className="font-semibold text-lg text-center">{texto}</span>
          </div>
        ))}
      </div>
      <div className="text-center text-white text-xl tracking-tight md:text-2xl font-bold leading-tight" style={{ letterSpacing: "-1px" }}>
        {textoImagem}
      </div>
    </header>
  );
}