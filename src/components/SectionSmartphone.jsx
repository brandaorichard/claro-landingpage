import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { FaMobileAlt, FaApple } from "react-icons/fa";
import iphonezera from "../assets/iphonezera.png";
import claroLogoPreta from "../assets/clarotv.png";
import s24 from "../assets/s24.png";
import motorolaedge2 from "../assets/motorolaedge2.png";
import samsungLogo from "../assets/samsungwhite.png"; // logo da Samsung
import galaxy from "../assets/galaxytext.png"; // logo da Galaxy
import motorolalogo from "../assets/motorolalogo.png"; // logo da Motorola
import edgepro from "../assets/edgepro50.png"; // logo da Motorola Edge Pro

const carouselData = [
  {
    title: "iPhone 14",
    description: "Um iPhone incrível por dentro e por fora com o Claro 5G+.",
  },
  {
    title: "Smartphone 2",
    description: "Tecnologia de ponta e design moderno.",
  },
  {
    title: "Smartphone 3",
    description: "O melhor da Motorola para você.",
  },
];

export default function SectionSmartphones() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-16">
      <SectionTitle
        align="left"
        icon={<FaMobileAlt size={28} className="text-[#f00000]" />}
      >
        <span className="flex items-center gap-2 font-bold text-black text-2xl">
          Smartphones
        </span>
      </SectionTitle>

      <div className="w-full max-w-2xl mx-auto mt-8">
        <div
          className={`w-full min-h-[22rem] flex flex-col justify-between items-center text-white transition-all duration-500 relative`}
          style={
            active === 0
              ? {
                  borderRadius: 0,
                  background:
                    "linear-gradient(to bottom, #A80000 20%, #000 100%)",
                }
              : {
                  borderRadius: 0,
                  background: "transparent",
                }
          }
        >
          {/* Card 2: Samsung S24 */}
          {active === 1 && (
            <>
              {/* Imagem de fundo */}
              <img
                src={s24}
                alt="Galaxy S24"
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                style={{ borderRadius: 0, background: "#000" }}
                draggable={false}
              />
              {/* Conteúdo sobreposto */}
              <div className="absolute top-6 left-2 w-full flex flex-col items-start z-20">
                <img
                  src={samsungLogo}
                  alt="Samsung"
                  className="w-50 h-30 object-contain mt-10"
                  draggable={false}
                />
                <img
                  src={galaxy}
                  alt="Galaxy"
                  className="w-50 h-30 object-contain -mt-10"
                  style={{ filter: "invert(1) brightness(2)" }}
                  draggable={false}
                />
              </div>
            </>
          )}

          {/* Card 3: Motorola */}
          {active === 2 && (
            <>
              {/* Imagem de fundo */}
              <img
                src={motorolaedge2}
                alt="Motorola Edge"
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                style={{ borderRadius: 0, background: "#000" }}
                draggable={false}
              />
              {/* Logo da Motorola sobreposta, alinhada à esquerda */}
              <div className="absolute top-26 left-6 w-full flex flex-col items-start z-20">
                <img
                  src={motorolalogo}
                  alt="Motorola"
                  className="w-40 h-20 object-contain mb-2"
                  style={{ filter: "invert(1) brightness(2)" }}
                  draggable={false}
                />
                {/* Se quiser adicionar texto abaixo, basta colocar aqui */}
              </div>
              {/* Logo da Motorola sobreposta, alinhada à esquerda */}
              <div className="absolute top-36 left-6 w-full flex flex-col items-start z-20">
                <img
                  src={edgepro}
                  alt="Motorola"
                  className="w-40 h-20 object-contain mb-2"
                  style={{ filter: "invert(1) brightness(2)" }}
                  draggable={false}
                />
                {/* Se quiser adicionar texto abaixo, basta colocar aqui */}
              </div>
            </>
          )}

          {/* Card 1: iPhone */}
          {active === 0 && (
            <img
              src={iphonezera}
              alt="iPhone"
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
              style={{ borderRadius: 0, background: "#000" }}
              draggable={false}
            />
          )}
        </div>
        {/* Toggle/indicador */}
        <div className="flex justify-center gap-2 mt-4">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === idx ? "bg-[#f00000]" : "bg-gray-300"
              }`}
              aria-label={`Selecionar smartphone ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
