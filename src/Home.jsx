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
import netflixWhite from "./assets/netflixwhite.svg";
import maxWhite from "./assets/maxwhite.svg";
import disneyWhite from "./assets/disneywhite.svg";
import gpWhite from "./assets/gpwhite.svg";
import primeWhite from "./assets/primewhite.svg";
import telecine from "./assets/telecine.svg";
import starWhite from "./assets/starwhite.svg";
import dcWhite from "./assets/dcwhite.png";
import claro from "./assets/claro.svg";
import netflixred from "./assets/netflixred.svg";
import globoplaywhite from "./assets/globoplaywhite.png";
import tvbox1 from "./assets/tvbox1.png";
import tvbox2 from "./assets/tvbox2.png";
import tvbox4k from "./assets/tvbox4k.png";

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
      <div className="text-black py-10 px-4 max-w-6xl mx-auto">
        <h3
          className="text-black font-black uppercase tracking-tight text-2xl md:text-3xl mb-15 text-left"
          style={{ lineHeight: 1, letterSpacing: "-2px" }}
        >
          Qual plano você possui?
        </h3>

        {/* Seção 1: Claro Móvel */}
        <section className="mb-16">
          <p className="text-sm text-[#f00000] mb-2">Para seu celular</p>
          <SectionTitle
            align="left"
            icon={<FaMobileScreenButton size={28} className="text-[#f00000]" />}
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
          <p className="text-sm text-[#f00000] mb-2">Para sua casa</p>
          <SectionTitle
            align="left"
            icon={<BsFillRouterFill size={28} className="text-[#f00000]" />}
          >
            Claro Fibra+
          </SectionTitle>
          <h3
            className="text-black font-black uppercase tracking-tight text-3xl md:text-2xl text-left mt-15"
            style={{ lineHeight: 1, letterSpacing: "-1px" }}
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
            icon={<IoTvSharp size={28} className="text-[#f00000]" />}
          >
            Claro TV+
          </SectionTitle>
          <section className="mb-16">
            <h3
              className="text-black font-black uppercase tracking-tight text-3xl md:text-2xl text-left mb-8 mt-15"
              style={{ lineHeight: 1, letterSpacing: "-1px" }}
            >
              Transforme sua TV numa Smart TV com muito mais mobilidade
            </h3>
            {/* <h3
              className="text-black font-black uppercase tracking-tight text-3xl mb-8 md:text-2xl text-left"
              style={{ lineHeight: 1, letterSpacing: "-2px" }}
            >
              ÚNICA TV DO MERCADO QUE UNE TUDO EM UM SÓ LUGAR!
            </h3> */}

            {/* Cards coloridos ocupando todo o container, responsivos */}
            <div className="flex flex-col sm:flex-row max-w-4xl gap-4 mb-8">
              {/* Card 1 */}
              <div
                className="w-full sm:flex-1 sm:min-w-[220px] sm:max-w-[400px] rounded-xl h-[320px] sm:h-[405px] flex flex-col items-start justify-end text-white font-bold text-lg px-4 sm:px-6 pb-2 relative overflow-hidden mb-4 sm:mb-0"
                style={{
                  background: `linear-gradient(to bottom, #A80000 20%, #000 100%)`,
                }}
              >
                {/* Logos como background decorativo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                  <div className="flex flex-col gap-4 w-full items-center justify-center -mt-10">
                    <div className="flex flex-row gap-8 justify-center w-full">
                      <img
                        src={netflixWhite}
                        alt="Netflix"
                        className="h-12 w-auto opacity-65"
                        style={{ maxWidth: 80 }}
                      />
                      <img
                        src={maxWhite}
                        alt="Max"
                        className="h-12 w-auto opacity-65"
                        style={{ maxWidth: 80 }}
                      />
                    </div>
                    <div className="flex flex-row gap-8 justify-center w-full">
                      <img
                        src={disneyWhite}
                        alt="Disney"
                        className="h-12 w-auto opacity-65"
                        style={{ maxWidth: 80 }}
                      />
                      <img
                        src={gpWhite}
                        alt="Globoplay"
                        className="h-12 w-auto opacity-65"
                        style={{ maxWidth: 80 }}
                      />
                    </div>
                    <div className="flex flex-row gap-8 justify-center w-full">
                      <img
                        src={primeWhite}
                        alt="Prime Video"
                        className="h-12 w-auto opacity-65"
                        style={{ maxWidth: 80 }}
                      />
                      <img
                        src={telecine}
                        alt="Telecine"
                        className="h-12 w-auto opacity-65"
                        style={{ maxWidth: 80 }}
                      />
                    </div>
                    <div className="flex flex-row gap-8 justify-center w-full">
                      <img
                        src={starWhite}
                        alt="star"
                        className="h-12 w-auto opacity-30"
                        style={{ maxWidth: 95 }}
                      />
                      <img
                        src={dcWhite}
                        alt="discovery"
                        className="h-12 w-auto opacity-30"
                        style={{
                          maxWidth: 95,
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Conteúdo do card na frente */}
                <div className="relative z-10 w-full mb-4">
                  <span
                    className="block font-bold text-lg text-left drop-shadow-md mb-2"
                    style={{ color: "#fff" }}
                  >
                    Apps de streaming integrados
                  </span>
                  <p
                    className="text-sm font-normal text-left max-w-[90%] drop-shadow-md"
                    style={{ color: "#fff" }}
                  >
                    Seus apps de streaming favoritos já estão integrados no seu
                    ClaroTV+
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="w-full sm:flex-1 sm:min-w-[220px] sm:max-w-[400px] rounded-xl h-[320px] sm:h-[405px] flex flex-col items-start justify-end text-white font-bold text-lg px-4 sm:px-6 pb-2 relative overflow-hidden mb-4 sm:mb-0"
                style={{ background: "#1A1A1A" }}
              >
                {/* Logos e "com" centralizados como background decorativo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                  <div className="flex flex-col items-center justify-center w-full -mt-34">
                    <div className="flex items-center justify-center">
                      <img
                        src={claro}
                        alt="Claro"
                        className="w-[104px] h-auto"
                        style={{ maxWidth: 120 }}
                      />
                      <span
                        className="ml-2 text-2xl font-bold text-[#fff] drop-shadow-md mt-4"
                        style={{ letterSpacing: "1px" }}
                      >
                        TV+
                      </span>
                    </div>
                    <div className="flex items-center justify-center mt-0">
                      <span
                        className="block font-bold text-lg text-center drop-shadow-md -mt-2"
                        style={{ color: "#fff" }}
                      >
                        com
                      </span>
                    </div>
                    <div className="flex items-center justify-center -mt-10">
                      <img
                        src={netflixred}
                        alt="netflixred"
                        className="w-[180px] h-auto"
                        style={{ maxWidth: 180 }}
                      />
                    </div>
                  </div>
                </div>
                {/* Conteúdo do card na frente, alinhado à esquerda e abaixo */}
                <div className="relative z-10 w-full mb-4">
                  <span
                    className="block font-bold text-lg text-left drop-shadow-md"
                    style={{ color: "#fff" }}
                  >
                    Netflix em todos os pacotes
                  </span>
                  <p
                    className="text-sm font-normal text-left max-w-[90%] drop-shadow-md mt-2"
                    style={{ color: "#fff" }}
                  >
                    Tenha os melhores filmes e séries para ver onde e quando
                    quiser
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="w-full sm:flex-1 sm:min-w-[220px] sm:max-w-[400px] rounded-xl h-[320px] sm:h-[405px] flex flex-col items-start justify-end text-white font-bold text-lg px-4 sm:px-6 pb-2 relative overflow-hidden mb-4 sm:mb-0"
                style={{
                  background: `linear-gradient(to bottom, #A80000 60%, #000 100%)`,
                }}
              >
                {/* Logos e "com" centralizados como background decorativo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                  <div className="flex flex-col items-center justify-center w-full -mt-23">
                    <div className="flex items-center justify-center">
                      <img
                        src={claro}
                        alt="Claro"
                        className="w-[104px] h-auto"
                        style={{ maxWidth: 120 }}
                      />
                      <span
                        className="ml-2 text-2xl font-bold text-[#fff] drop-shadow-md mt-4"
                        style={{ letterSpacing: "1px" }}
                      >
                        TV+
                      </span>
                    </div>
                    <div className="flex items-center justify-center mt-0">
                      <span
                        className="block font-bold text-lg text-center drop-shadow-md -mt-2"
                        style={{ color: "#fff" }}
                      >
                        com
                      </span>
                    </div>
                    <div className="flex items-center justify-center -mt-20">
                      <img
                        src={globoplaywhite}
                        alt="globoplaywhite"
                        className="w-[180px] h-auto"
                        style={{
                          maxWidth: 180,
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Conteúdo do card na frente, alinhado à esquerda e abaixo */}
                <div className="relative z-10 w-full mb-4">
                  <span
                    className="block font-bold text-lg text-left drop-shadow-md"
                    style={{ color: "#fff" }}
                  >
                    Globoplay em todos os pacotes
                  </span>
                  <p
                    className="text-sm font-normal text-left max-w-[90%] drop-shadow-md mt-2"
                    style={{ color: "#fff" }}
                  >
                    Tenha os melhores conteúdos Globo para ver onde e quando
                    quiser
                  </p>
                </div>
              </div>
            </div>

            {/* Seção de TV Box */}
            <h3 className="text-black font-black uppercase tracking-tight text-3xl md:text-2xl text-left mb-8 mt-15">
              Conheça os modelos Box Claro tv+
            </h3>
            <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-6 justify-start items-start mb-8">
              {/* TV Box 1 */}
              <div className="flex flex-col items-center w-full sm:w-1/3">
                <img
                  src={tvbox1}
                  alt="TV Box 1"
                  className="w-40 sm:w-56 h-auto mb-4"
                  style={{ maxWidth: 240 }}
                />
                <span className="block font-bold text-2xl text-center drop-shadow-md mb-1">
                  <span style={{ color: "#000" }}>Box </span>
                  <span style={{ color: "#f00000" }}>Claro tv+</span>
                </span>
                <p
                  className="text-sm font-bold text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Resolução Full HD.
                </p>
                <p
                  className="text-sm font-normal text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Comandos de voz Alexa.
                  <br></br>
                  Wi-fi: Leve sua box para onde quiser
                  <br></br>
                  Acesse o app Claro tv+
                </p>
              </div>
              {/* TV Box 2 */}
              <div className="flex flex-col items-center w-full sm:w-1/3">
                <img
                  src={tvbox2}
                  alt="TV Box 2"
                  className="w-40 sm:w-56 h-auto mb-4"
                  style={{ maxWidth: 240 }}
                />
                <span className="block font-bold text-2xl text-center drop-shadow-md mb-1">
                  <span style={{ color: "#000" }}>4K </span>
                  <span style={{ color: "#f00000" }}>Claro tv+</span>
                </span>
                <p
                  className="text-sm font-bold text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Resolução 4K Ultra HD com Doubly Atmos.
                </p>
                <p
                  className="text-sm font-bold text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Volte a programação em até 7 dias.
                </p>
                <p
                  className="text-sm font-normal text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Comandos de voz Alexa.
                  <br></br>
                  Wi-fi: Leve sua box para onde quiser
                  <br></br>
                  Acesse o app Claro tv+
                </p>
              </div>
              {/* TV Box 4K */}
              <div className="flex flex-col items-center w-full sm:w-1/3">
                <img
                  src={tvbox4k}
                  alt="TV Box 4k"
                  className="w-40 sm:w-56 h-auto mb-4"
                  style={{ maxWidth: 240 }}
                />
                <span className="block font-bold text-2xl text-center drop-shadow-md mb-1">
                  <span style={{ color: "#000" }}>Soundbox </span>
                  <span style={{ color: "#f00000" }}>Claro tv+</span>
                </span>
                <p
                  className="text-sm font-bold text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Resolução 4K HDR e SoundBar embutido.
                </p>
                <p
                  className="text-sm font-bold text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Som refinado por Bang & Olufsen e Doubly atmos.
                </p>
                <p
                  className="text-sm font-bold text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Volte a programação em até 7 dias.
                </p>
                <p
                  className="text-sm font-normal text-center max-w-[90%] drop-shadow-md"
                  style={{ color: "#000000" }}
                >
                  Comandos de voz Alexa.
                  <br></br>
                  Wi-fi: Leve sua box para onde quiser
                  <br></br>
                  Acesse o app Claro tv+
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
