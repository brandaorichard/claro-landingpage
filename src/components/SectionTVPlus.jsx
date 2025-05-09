import React from "react";
import SectionTitle from "./SectionTitle";
import { IoTvSharp } from "react-icons/io5";
import netflixWhite from "../assets/netflixwhite.svg";
import maxWhite from "../assets/maxwhite.svg";
import disneyWhite from "../assets/disneywhite.svg";
import gpWhite from "../assets/gpwhite.svg";
import primeWhite from "../assets/primewhite.svg";
import telecine from "../assets/telecine.svg";
import starWhite from "../assets/starwhite.svg";
import dcWhite from "../assets/dcwhite.png";
import claro from "../assets/claro.svg";
import netflixred from "../assets/netflixred.svg";
import globoplaywhite from "../assets/globoplaywhite.png";
import tvbox1 from "../assets/tvbox1.png";
import tvbox2 from "../assets/tvbox2.png";
import tvbox4k from "../assets/tvbox4k.png";

export default function SectionTVPlus(props) {
  // Receba props ou importe os dados/planos necessários
  // ... (adicione os imports e lógica dos cards e TV Boxes aqui)

  return (
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
      {props.children}
    </section>
  );
}