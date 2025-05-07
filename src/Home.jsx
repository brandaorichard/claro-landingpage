// src/pages/Home.jsx
import { planos, planosPos } from "./data/planosClaro";
import PlanoCard from "./components/PlanoCard";
import SectionTitle from "./components/SectionTitle";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white">
      <Header />
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