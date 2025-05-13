import React from "react";
import claroLogo from "../assets/claro.svg";

export default function Footer() {
  return (
    <footer className="bg-[#f30000] text-white pt-8 pb-4 px-4 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Logo no canto superior esquerdo */}
        <div className="flex-shrink-0 mb-4">
          <img src={claroLogo} alt="Claro" className="w-20 h-auto" />
        </div>
        {/* Informações alinhadas abaixo da logo */}
        <div className="flex flex-col gap-1 pl-1">
          <p className="text-base font-semibold">
            Nome do vendedor:{" "}
            <span className="font-normal">consultor Thiago Jr.</span>
          </p>
          <p className="text-base font-semibold">
            Endereço da loja:{" "}
            <span className="font-normal">
              R. Paranaíba, 327 - Centro, Três Lagoas - MS, 79600-040
            </span>
          </p>
          <p className="text-base font-semibold">
            Telefone do consultor:{" "}
            <span className="font-normal">(67) 99126-2455</span>
          </p>
          <p className="text-base font-semibold">
            Telefone da loja:{" "}
            <span className="font-normal">(67) 3521-3824</span>
          </p>
          <p className="text-base font-semibold">
            Site oficial:{" "}
            <a
              href="https://www.claro.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#ffd900] hover:text-white transition"
            >
              www.claro.com.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
