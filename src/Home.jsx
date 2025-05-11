// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SectionMobile from "./components/SectionMobile";
import SectionFibra from "./components/SectionFibra";
import SectionTVPlus from "./components/SectionTVPlus";
import { motion, useAnimation } from "framer-motion";
import DescontoBadge from "./components/DescontoBadge";

export default function Home() {
  // Estado global: apenas um card pode ser selecionado em todas as seções
  const [cardSelecionado, setCardSelecionado] = useState(null);
  const [cardMovelSelecionado, setCardMovelSelecionado] = useState(null);
  const [cardFibraSelecionado, setCardFibraSelecionado] = useState(null);

  const desconto =
    (cardMovelSelecionado ? 5 : 0) + (cardFibraSelecionado ? 5 : 0);

  // Animação
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.4, times: [0, 0.5, 1] },
    });
  }, [desconto]);

  // Função para passar para as seções filhas
  const handleSelecionarCard = (id) => {
    setCardSelecionado((prev) => (prev === id ? null : id));
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white pt-15 font-sans">
      <Header onSectionClick={scrollToSection} />

      <div className="flex items-center bg-white border border-black rounded-xl shadow-sm px-5 py-4 mt-10 mb-8 w-full max-w-lg mx-auto">
        {/* Ícone de localização em círculo vermelho escuro */}
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#A80000] mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 0112 3a8 8 0 018 8c0 4.627-3.582 10-8 10z"
            />
          </svg>
        </span>
        {/* Texto */}
        <div>
          <div className="text-sm text-black">
            Ofertas disponíveis para Claro Paranaíba em:
          </div>
          <div className="text-lg font-bold text-black leading-tight">
            Três Lagoas - MS
          </div>
        </div>
      </div>

      <div className="text-black py-10 px-4 max-w-6xl mx-auto">
        <h3
          className="text-black font-black uppercase tracking-tight text-2xl md:text-3xl mb-15 text-left"
          style={{ lineHeight: 1, letterSpacing: "-2px" }}
        >
          Selecione seus serviços Claro para somar descontos em smartphones.
        </h3>

        {/* Bloco de desconto global */}
        <div className="flex items-center gap-3 mb-10">
          <motion.div
            animate={controls}
            className="bg-[#f00000] text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-black shadow transition-all duration-300"
          >
            {desconto}%
          </motion.div>
          <span className="text-base font-medium text-[#f00000]">
            Seu desconto acumulado
          </span>
        </div>

        <div id="claro-movel" className="scroll-mt-20">
          <SectionMobile
            cardSelecionado={cardMovelSelecionado}
            onSelecionarCard={setCardMovelSelecionado}
          />
        </div>

        <div id="claro-fibra" className="scroll-mt-20">
          <SectionFibra
            cardSelecionado={cardFibraSelecionado}
            onSelecionarCard={setCardFibraSelecionado}
          />
        </div>

        {/* Seção 3: Claro TV+ */}
        <SectionTVPlus
          cardSelecionado={cardSelecionado}
          onSelecionarCard={handleSelecionarCard}
        />

        {/* Círculo de desconto fixo */}
        <DescontoBadge desconto={desconto} controls={controls} />
      </div>
    </div>
  );
}
