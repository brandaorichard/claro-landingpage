import React, { useState } from "react";
import claroLogo from "../assets/claro.svg";
// import { FiPhone } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";

const sections = [
  { label: "Para seu celular", id: "claro-movel" },
  { label: "Para sua casa", id: "claro-fibra" },
  { label: "Smartphones", id: "smartphones" },
];

export default function Header({ onSectionClick, onContrateClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f30000] text-white px-0 py-4 shadow z-30 font-sans">
      {/* Dropdown mobile: antes do container, colado à esquerda */}
      {open && (
        <div className="absolute left-0 top-full w-1/2 bg-white py-3 px-4 rounded-b-lg shadow-lg z-20 flex flex-col items-start md:hidden">
          {sections.map((section, idx) => (
            <span
              key={idx}
              className="uppercase font-bold text-base tracking-tight text-[#C10000] mb-2 cursor-pointer"
              style={{ letterSpacing: "-0.5px" }}
              onClick={() => {
                if (section.id && onSectionClick) {
                  onSectionClick(section.id);
                  setOpen(false);
                }
              }}
            >
              {section.label}
            </span>
          ))}
        </div>
      )}

      {/* Container centralizado */}
      <div className="max-w-7xl mx-auto w-full flex items-center px-4">
        {/* Botão de menu à esquerda */}
        <button
          className="md:hidden p-2 mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="white" />
            <rect y="11" width="24" height="2" rx="1" fill="white" />
            <rect y="17" width="24" height="2" rx="1" fill="white" />
          </svg>
        </button>

        {/* Logo da Claro */}
        <div className="flex-shrink-0 flex items-center">
          <img src={claroLogo} alt="Claro" className="w-22 h-auto pb-3" />
        </div>

        {/* Seções centralizadas (desktop) */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex flex-row gap-6 items-center">
            {sections.map((section, idx) => (
              <span
                key={idx}
                className="uppercase font-bold text-base tracking-tight text-white cursor-pointer"
                style={{ letterSpacing: "-0.5px" }}
                onClick={() =>
                  section.id && onSectionClick && onSectionClick(section.id)
                }
              >
                {section.label}
              </span>
            ))}
          </nav>
        </div>

        {/* Botões miniatura + Contrate */}
        <div className="flex flex-shrink-0 items-center gap-2 ml-auto">
          {/* <button
            className="bg-white text-[#C10000] rounded-full p-2 shadow hover:bg-gray-100 transition-colors duration-150"
            style={{ fontSize: 18 }}
            aria-label="Ligar"
            type="button"
          >
            <FiPhone />
          </button>
          <button
            className="bg-white text-[#25D366] rounded-full p-2 shadow hover:bg-gray-100 transition-colors duration-150"
            style={{ fontSize: 18 }}
            aria-label="WhatsApp"
            type="button"
          >
            <FaWhatsapp />
          </button> */}
          <button
            onClick={onContrateClick}
            className="bg-[#ffd900] text-[#000000] font-sans px-6 py-2 rounded-full text-sm shadow cursor-pointer"
          >
            Contrate
          </button>
        </div>
      </div>
    </header>
  );
}
