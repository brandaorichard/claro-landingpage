// src/pages/Home.jsx
import React, { useState } from "react";
import { planos, planosPos, planosFibra } from "./data/planosClaro";
import PlanoCard from "./components/PlanoCard";
import SectionTitle from "./components/SectionTitle";
import Header from "./components/Header";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsFillRouterFill } from "react-icons/bs";
import { IoTvSharp } from "react-icons/io5";
import clarotv from "./assets/clarotv.png";
import clarofibra from "./assets/clarofibra.png";

export default function Home() {
  // Estado para seleção dos cards móveis
  const [cardMovelSelecionado, setCardMovelSelecionado] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white">
      <Header />
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
      <div className="text-black py-10 px-4 max-w-4xl mx-auto">
        <h3
          className="text-black font-black uppercase tracking-tight text-2xl md:text-3xl mb-15 text-left"
          style={{ lineHeight: 1, letterSpacing: "-2px" }}
        >
          Qual plano você possui?
        </h3>

        {/* Seção 1: Claro Móvel */}
        <section className="mb-16">
          <p className="text-sm text-[#C10000] mb-2">Para seu celular</p>
          <SectionTitle
            align="left"
            icon={<FaMobileScreenButton size={28} className="text-[#A80000]" />}
          >
            Claro Móvel
          </SectionTitle>
          <h3 className="font-bold mb-4 text-left text-lg">Claro Controle:</h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {planos.map((plano, index) => (
              <PlanoCard
                plano={plano}
                key={index}
                selecionado={cardMovelSelecionado === `controle-${index}`}
                onClick={() =>
                  setCardMovelSelecionado(
                    cardMovelSelecionado === `controle-${index}`
                      ? null
                      : `controle-${index}`
                  )
                }
              />
            ))}
          </div>
          <h3 className="font-bold mb-4 text-left text-lg">Claro Pós:</h3>
          <div className="flex flex-wrap gap-3">
            {planosPos.map((plano, index) => (
              <PlanoCard
                plano={plano}
                key={index}
                selecionado={cardMovelSelecionado === `pos-${index}`}
                onClick={() =>
                  setCardMovelSelecionado(
                    cardMovelSelecionado === `pos-${index}`
                      ? null
                      : `pos-${index}`
                  )
                }
              />
            ))}
          </div>
        </section>

        {/* Seção 2: Claro Fibra+ */}
        <section className="mb-16">
          <p className="text-sm text-[#C10000] mb-2">Para sua casa</p>
          <SectionTitle
            align="left"
            icon={<BsFillRouterFill size={28} className="text-[#A80000]" />}
          >
            Claro Fibra+
          </SectionTitle>
          <h3
            className="text-black font-black uppercase tracking-tight text-3xl md:text-2xl text-left"
            style={{ lineHeight: 1, letterSpacing: "-2px" }}
          >
            NAVEGUE COM A ULTRAVELCIDADE DA CLARO FIBRA+
          </h3>
          <h3
            className="text-black font-black uppercase tracking-tight text-3xl mb-8 md:text-2xl text-left"
            style={{ lineHeight: 1, letterSpacing: "-2px" }}
          >
            TENHA INTERNET ESTÁVEL, RÁPIDA E SEGURA PARA TODA A FAMÍLIA!
          </h3>
          {/* Imagem de fundo com blocos informativos sobrepostos */}
          <div className="relative w-full h-[350px] md:h-[400px] mb-8">
            <img
              src={clarofibra}
              alt="Claro fibra"
              className="w-full h-full object-cover rounded-xl"
            />
            <div
              className="
        absolute inset-0 flex flex-row items-center justify-center gap-2
        px-2 md:px-8
      "
              style={{
                fontSize: "70%", // Reduz o tamanho em 30%
              }}
            >
              {/* Primeiro plano */}
              <div
                className="flex flex-col items-center bg-black/50 rounded-lg p-2 md:p-4 mx-1 min-w-[140px] max-w-[160px]"
                style={{ color: "#fff" }}
              >
                <div className="uppercase font-bold text-xs text-[#FFC557] mb-1 tracking-wide">
                  {planosFibra[0].nome}
                </div>
                <div className="text-xl font-extrabold leading-tight mb-1">
                  {planosFibra[0].total}
                </div>
                <div className="flex flex-col gap-0.5 mb-1">
                  {planosFibra[0].detalhes.map((detalhe, idx) => (
                    <span key={idx} className="text-xs text-gray-200">
                      {detalhe}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {planosFibra[0].beneficios?.map((beneficio, idx) =>
                    beneficio.icon ? (
                      <span key={idx} title={beneficio.label}>
                        <beneficio.icon
                          size={14}
                          color="#FFC557"
                          className="inline"
                        />
                      </span>
                    ) : beneficio.img ? (
                      <span key={idx} title={beneficio.label}>
                        <img
                          src={beneficio.img}
                          alt={beneficio.label}
                          style={{
                            width: 14,
                            height: 14,
                            verticalAlign: "middle",
                          }}
                        />
                      </span>
                    ) : (
                      <span key={idx} className="font-bold ml-2">
                        {beneficio.text}
                      </span>
                    )
                  )}
                </div>
              </div>
              {/* Segundo plano */}
              <div
                className="flex flex-col items-center bg-black/50 rounded-lg p-2 md:p-4 mx-1 min-w-[140px] max-w-[160px]"
                style={{ color: "#fff" }}
              >
                <div className="uppercase font-bold text-xs text-[#FFC557] mb-1 tracking-wide">
                  {planosFibra[1].nome}
                </div>
                <div className="text-xl font-extrabold leading-tight mb-1">
                  {planosFibra[1].total}
                </div>
                <div className="flex flex-col gap-0.5 mb-1">
                  {planosFibra[1].detalhes.map((detalhe, idx) => (
                    <span key={idx} className="text-xs text-gray-200">
                      {detalhe}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {planosFibra[1].beneficios?.map((beneficio, idx) =>
                    beneficio.icon ? (
                      <span key={idx} title={beneficio.label}>
                        <beneficio.icon
                          size={14}
                          color="#FFC557"
                          className="inline"
                        />
                      </span>
                    ) : beneficio.img ? (
                      <span key={idx} title={beneficio.label}>
                        <img
                          src={beneficio.img}
                          alt={beneficio.label}
                          style={{
                            width: 14,
                            height: 14,
                            verticalAlign: "middle",
                          }}
                        />
                      </span>
                    ) : (
                      <span key={idx} className="font-bold ml-2">
                        {beneficio.text}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: Claro TV+ */}
        <section className="mb-16">
          <SectionTitle
            align="left"
            icon={<IoTvSharp size={28} className="text-[#A80000]" />}
          >
            Claro TV+
          </SectionTitle>
          <h3
            className="text-black font-black uppercase tracking-tight text-3xl md:text-2xl text-left"
            style={{ lineHeight: 1, letterSpacing: "-2px" }}
          >
            TUDO FICA AINDA MAIS COMPLETO COM A CLARO TV+
          </h3>
          <h3
            className="text-black font-black uppercase tracking-tight text-3xl mb-8 md:text-2xl text-left"
            style={{ lineHeight: 1, letterSpacing: "-2px" }}
          >
            ÚNICA TV DO MERCADO QUE UNE TUDO EM UM SÓ LUGAR!
          </h3>
          <img
            src={clarotv}
            alt="Claro TV+"
            className="w-full h-auto rounded-xl shadow-md"
            style={{ objectFit: "cover" }}
          />
        </section>
      </div>
    </div>
  );
}
