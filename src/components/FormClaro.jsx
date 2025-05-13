import React, { useState } from "react";

function getPlanoResumo(plano) {
  if (!plano) return { titulo: "", descricao: "" };
  return {
    titulo: `${plano.nome} ${plano.total}`,
    descricao: plano.detalhes ? plano.detalhes.join(" ") : ""
  };
}

// Função para aplicar máscara de CPF
function maskCPF(value) {
  value = value.replace(/\D/g, "");
  value = value.slice(0, 11);
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
}

// Função para aplicar máscara de telefone
function maskPhone(value) {
  value = value.replace(/\D/g, "");
  value = value.slice(0, 11);
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
}

export default function FormClaro({ formRef, planoMovel, planoFibra }) {
  const movel = getPlanoResumo(planoMovel);
  const fibra = getPlanoResumo(planoFibra);

  // Estados controlados
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeErro, setNomeErro] = useState("");
  const [possuiTV, setPossuiTV] = useState(""); // novo estado

  // Validação do nome
  const handleNomeChange = (e) => {
    const value = e.target.value;
    setNome(value);
    setNomeErro(value.length > 0 && value.length < 6 ? "Mínimo 6 caracteres" : "");
  };

  // Máscara e validação do CPF
  const handleCpfChange = (e) => {
    setCpf(maskCPF(e.target.value));
  };

  // Máscara do telefone
  const handleTelefoneChange = (e) => {
    setTelefone(maskPhone(e.target.value));
  };

  // Validação final no submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.length < 6) {
      setNomeErro("Mínimo 6 caracteres");
      return;
    }
    // Aqui você pode adicionar outras validações e lógica de envio
    alert(
      `Formulário enviado!\nTV+: ${possuiTV === "sim" ? "Sim" : "Não"}`
    );
  };

  return (
    <form
      
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white border align-center justify-center border-gray-200 rounded-xl shadow-md p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-10"
    >
      <h4 className="text-xl font-bold mb-4 text-[#f00000]">
        Solicite seu desconto
      </h4>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="nome">
          Nome:
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          minLength={6}
          value={nome}
          onChange={handleNomeChange}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00000] ${nomeErro ? "border-red-500" : ""}`}
          required
        />
        {nomeErro && <div className="text-xs text-red-500">{nomeErro}</div>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="cpf">
          CPF:
        </label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          inputMode="numeric"
          maxLength={14} // 000.000.000-00
          value={cpf}
          onChange={handleCpfChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00000]"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1" htmlFor="telefone">
          Telefone:
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          inputMode="numeric"
          maxLength={15} // (00) 00000-0000
          value={telefone}
          onChange={handleTelefoneChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00000]"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Plano móvel:</label>
        <input
          type="text"
          value={movel.titulo}
          readOnly
          className="w-full border rounded px-3 py-2 bg-gray-100"
        />
        <div className="text-xs text-gray-500">{movel.descricao}</div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Plano fibra:</label>
        <input
          type="text"
          value={fibra.titulo}
          readOnly
          className="w-full border rounded px-3 py-2 bg-gray-100"
        />
        <div className="text-xs text-gray-500">{fibra.descricao}</div>
      </div>
      {/* Novo campo TV+ */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Você possui Claro tv+?
        </label>
        <div className="flex gap-6 mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="possuiTV"
              value="sim"
              checked={possuiTV === "sim"}
              onChange={() => setPossuiTV("sim")}
              className="form-radio text-[#f00000] focus:ring-[#f00000]"
              required
            />
            <span className="ml-2">Sim</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="possuiTV"
              value="nao"
              checked={possuiTV === "nao"}
              onChange={() => setPossuiTV("nao")}
              className="form-radio text-[#f00000] focus:ring-[#f00000]"
              required
            />
            <span className="ml-2">Não</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-[#f00000] text-white font-bold py-2 rounded hover:bg-red-700 transition"
      >
        Enviar
      </button>
    </form>
  );
}