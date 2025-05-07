// src/components/BeneficiosBanner.jsx
import { FaCheckCircle } from "react-icons/fa";

const beneficios = [
  "Exclusivo para quem já é da Claro",
  "Combos integrados em uma só fatura",
  "Atendimento especial e consultoria personalizada",
];

export default function BeneficiosBanner() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
      {beneficios.map((texto, idx) => (
        <div className="flex items-center gap-2" key={idx}>
          <FaCheckCircle className="text-green-400" size={28} />
          <span className="font-semibold text-lg text-center">{texto}</span>
        </div>
      ))}
    </div>
  );
}