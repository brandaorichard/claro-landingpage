import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { products } from "./data/products"; // opcional

const planos = [
  {
    nome: "Claro Controle",
    total: "15 GB",
    detalhes: ["Single Total: 20 GB", "+ 5GB bônus", "Multi Total: 30 GB"],
    preco: "R$59,90/mês",
  },
  {
    nome: "Claro Controle",
    total: "20 GB",
    detalhes: ["Single Total: 25 GB", "+ 5GB bônus", "Multi Total: 35 GB"],
    preco: "R$69,90/mês",
  },
  {
    nome: "Claro Controle",
    total: "20 GB GeForce",
    detalhes: ["Single Total: 25 GB", "+ 5GB bônus", "Multi Total: 35 GB"],
    preco: "R$99,90/mês",
  },
];


export default function App() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formData, setFormData] = useState({ nome: "", cpf: "", servicos: {} });

  const handleSelectPlano = (servico, plano) => {
    setFormData((prev) => ({
      ...prev,
      servicos: {
        ...prev.servicos,
        [servico]: plano,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const servicosSelecionados = Object.keys(formData.servicos).length;
    if (
      !formData.nome ||
      !formData.cpf ||
      servicosSelecionados === 0 ||
      !selectedProduct
    ) {
      alert("Preencha todos os campos corretamente.");
      return;
    }
    console.log("Lead capturado:", { ...formData, produto: selectedProduct });
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7e0000] via-[#c10000] to-[#ff1a1a] text-white py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Planos Claro Controle
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {planos.map((plano, index) => (
          <motion.div
            key={index}
            className="bg-[#A80000] border-4 border-white rounded-3xl p-6 shadow-xl text-center cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl font-semibold">{plano.nome}</h2>
            <p className="text-4xl font-extrabold my-2">{plano.total}</p>

            <ul className="space-y-1 text-sm">
              {plano.detalhes.map((detalhe, idx) => (
                <li key={idx}>{detalhe}</li>
              ))}
            </ul>

            {/* Preço */}
            <motion.div
              className="mt-4 bg-yellow-300 text-black font-bold rounded-xl py-2 cursor-pointer"
              whileHover={{
                scale: 1.08,
                backgroundColor: "#fde047",
              }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              POR {plano.preco}
            </motion.div>

            {/* Benefícios */}
            <div className="mt-4 text-sm font-semibold text-white">
              Benefícios:
            </div>
            <div className="flex justify-center items-center gap-3 mt-2 flex-wrap">
              <FaInstagram size={20} />
              <FaFacebook size={20} />
              <FaXTwitter size={20} />
              <FaTiktok size={20} />
              <FaYoutube size={20} />
              <span className="text-white font-bold ml-2">5GB</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
