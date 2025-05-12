import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SectionMobile from "./components/SectionMobile";
import SectionFibra from "./components/SectionFibra";
import SectionTVPlus from "./components/SectionTVPlus";
import DescontoBadge from "./components/DescontoBadge";
import Header from "./components/Header";
import FormClaro from "./components/FormClaro";
import FormVerticalTab from "./components/FormVerticalTab";
import SectionSmartphones from "./components/SectionSmartphone";

export default function Home() {
  // Estados de seleção por seção
  const [cardMovelSelecionado, setCardMovelSelecionado] = useState(null);
  const [cardFibraSelecionado, setCardFibraSelecionado] = useState(null);
  // Se quiser TV+, descomente:
  // const [cardTVSelecionado, setCardTVSelecionado] = useState(null);

  // Desconto acumulado
  const desconto =
    (cardMovelSelecionado ? 5 : 0) + (cardFibraSelecionado ? 5 : 0);
  // + (cardTVSelecionado ? 5 : 0);

  // Animação do círculo
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.4, times: [0, 0.5, 1] },
    });
  }, [desconto]);

  // Sticky badge logic
  const badgeRef = useRef();
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (badgeRef.current) observer.observe(badgeRef.current);
    return () => observer.disconnect();
  }, []);

  // Função para scroll suave
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const formRef = useRef();

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white pt-15 font-sans">
      {/* Header recebe a função de scroll */}
      <Header onSectionClick={scrollToSection} />

      <div className="text-black py-10 px-4 max-w-6xl mx-auto">
        <h3
          className="text-black font-black uppercase tracking-tight text-2xl md:text-3xl mb-15 text-left"
          style={{ lineHeight: 1, letterSpacing: "-2px" }}
        >
          Selecione seus serviços Claro para somar descontos em smartphones.
        </h3>

        {/* Círculo de desconto original (visível no topo) */}
        <div ref={badgeRef} className="flex items-center gap-3 mb-10">
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

        {/* Seções com id para scroll */}
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
        <div id="claro-tvplus" className="scroll-mt-20">
          <SectionTVPlus
          // cardSelecionado={cardTVSelecionado}
          // onSelecionarCard={setCardTVSelecionado}
          />
        </div>
      </div>

      <div id="smartphones" className="scroll-mt-20">
        <SectionSmartphones />
      </div>

      {/* Formulário abaixo da seção TV */}
      <FormClaro formRef={formRef} />

      {/* Aba vertical fixa para o formulário */}
      <FormVerticalTab onClick={scrollToForm} />

      {/* Círculo de desconto flutuante (fixo) */}
      {showFloating && (
        <DescontoBadge desconto={desconto} controls={controls} />
      )}
    </div>
  );
}
