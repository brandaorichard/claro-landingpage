import React from "react";
import SectionTitle from "./SectionTitle";
import { BsFillRouterFill } from "react-icons/bs";
import clarofibra from "../assets/clarofibra.png";
import { planosFibra } from "../data/planosClaro";

export default function SectionFibra() {
  return (
    <section className="mb-16">
      <p className="text-sm text-[#f00000] mb-2">Para sua casa</p>
      <SectionTitle
        align="left"
        icon={<BsFillRouterFill size={28} className="text-[#f00000]" />}
      >
        Claro Fibra+
      </SectionTitle>
      <h3
        className="text-black font-black uppercase tracking-tight text-3xl md:text-2xl text-left mt-5 mb-8"
        style={{ lineHeight: 1, letterSpacing: "-1px" }}
      >
        NAVEGUE COM A ULTRAVELCIDADE DA CLARO FIBRA+
        <br></br>
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
            fontSize: "70%",
          }}
        >
          {/* Blocos dos planos fibra */}
          {planosFibra.map((plano, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-black/50 rounded-lg p-2 md:p-4 mx-1 min-w-[140px] max-w-[160px]"
              style={{ color: "#fff" }}
            >
              <div className="uppercase font-bold text-xs text-[#FFC557] mb-1 tracking-wide">
                {plano.nome}
              </div>
              <div className="text-xl font-extrabold leading-tight mb-1">
                {plano.total}
              </div>
              <div className="flex flex-col gap-0.5 mb-1">
                {plano.detalhes.map((detalhe, i) => (
                  <span key={i} className="text-xs text-gray-200">
                    {detalhe}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {plano.beneficios?.map((beneficio, i) =>
                  beneficio.icon ? (
                    <span key={i} title={beneficio.label}>
                      <beneficio.icon
                        size={14}
                        color="#FFC557"
                        className="inline"
                      />
                    </span>
                  ) : beneficio.img ? (
                    <span key={i} title={beneficio.label}>
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
                    <span key={i} className="font-bold ml-2">
                      {beneficio.text}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
