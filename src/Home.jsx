// src/pages/Home.jsx
import { planos, planosPos } from "./data/planosClaro";
import PlanoCard from "./components/PlanoCard";
import SectionTitle from "./components/SectionTitle";
import Header from "./components/Header";

export default function Home() {
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
          <div className="text-sm text-black">Ofertas disponíveis para Claro Paranaíba em:</div>
          <div className="text-lg font-bold text-black leading-tight">
            Três Lagoas - MS
          </div>
        </div>
      </div>
      <div className="text-black py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-16 text-center">
          Qual plano você possui?
        </h2>

        {/* Seção 1: Claro Móvel */}
        <section className="mb-16">
          <SectionTitle align="left">Claro Móvel</SectionTitle>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-left">
            Claro Controle:
          </h3>
          <div className="flex flex-wrap gap-6 mb-10">
            {planos.map((plano, index) => (
              <PlanoCard plano={plano} key={index} />
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-left">
            Claro Pós:
          </h3>
          <div className="flex flex-wrap gap-6">
            {planosPos.map((plano, index) => (
              <PlanoCard plano={plano} key={index} />
            ))}
          </div>
        </section>

        {/* Seção 2: Claro Fibra+ */}
        <section className="mb-16">
          <SectionTitle align="left">Claro Fibra+</SectionTitle>
          <div className="flex flex-wrap gap-6">
            {/* Cards da Fibra+ vão aqui */}
          </div>
        </section>

        {/* Seção 3: Claro TV+ */}
        <section>
          <SectionTitle align="left">Claro TV+</SectionTitle>
          <div className="flex flex-wrap gap-6">
            {/* Cards da TV+ vão aqui */}
          </div>
        </section>
      </div>
    </div>
  );
}
