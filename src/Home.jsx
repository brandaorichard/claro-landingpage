import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionMobile from "./components/SectionMobile";
import SectionFibra from "./components/SectionFibra";
import SectionTVPlus from "./components/SectionTVPlus";
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
      <Header onSectionClick={scrollToSection} />

      <div className="text-black py-10 px-4 max-w-6xl mx-auto">
        <h3
          className="text-black font-black uppercase tracking-tight text-2xl md:text-3xl mb-15 text-left"
          style={{ lineHeight: 1, letterSpacing: "-2px" }}
        >
          Selecione seus serviços Claro para somar descontos em smartphones.
        </h3>

        <span className="text-base font-medium text-[#f00000]">
            Combine serviços Claro e ganhe mais desconto no seu smartphone: <br></br>
            quanto mais serviços, maior o desconto.
          </span>

        {/* Seções com id para scroll */}
        <div id="claro-movel" className="scroll-mt-20 mt-15">
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
        {/* AGORA DENTRO DO MESMO CONTAINER */}
        <div id="smartphones" className="scroll-mt-20">
          <SectionSmartphones />
        </div>
      </div>

      {/* Formulário abaixo da seção TV */}
      <FormClaro formRef={formRef} />

      {/* Aba vertical fixa para o formulário */}
      <FormVerticalTab onClick={scrollToForm} />
    </div>
  );
}
