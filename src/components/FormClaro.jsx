import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Função para aceitar apenas números e limitar a 11 dígitos
function onlyNumbers(value, max = 11) {
  return value.replace(/\D/g, "").slice(0, max);
}

export default function FormClaro({
  formRef,
  planoMovel,
  planoFibra,
  smartphonesSelecionados,
  limparSmartphonesSelecionados,
  limparPlanosSelecionados,
}) {
  // Estados controlados
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [possuiTV, setPossuiTV] = useState("");
  const [modelosCelulares, setModelosCelulares] = useState("");
  const [nomeErro, setNomeErro] = useState("");
  const [cpfErro, setCpfErro] = useState("");
  const [telErro, setTelErro] = useState("");

  // Atualiza modelosCelulares se vierem selecionados via props
  React.useEffect(() => {
    if (smartphonesSelecionados) {
      const modelos = [
        smartphonesSelecionados.apple,
        smartphonesSelecionados.samsung,
        smartphonesSelecionados.motorola,
      ]
        .filter(Boolean)
        .join("\n");
      setModelosCelulares(modelos);
    }
  }, [smartphonesSelecionados]);

  // Validação do nome
  const handleNomeChange = (e) => {
    const value = e.target.value;
    setNome(value);
    setNomeErro(value.length > 0 && value.length < 6 ? "Mínimo 6 caracteres" : "");
  };

  // Apenas números, mínimo 6 dígitos
  const handleCpfChange = (e) => {
    const value = onlyNumbers(e.target.value, 11);
    setCpf(value);
    setCpfErro(value.length > 0 && value.length < 6 ? "Mínimo 6 dígitos" : "");
  };

  const handleTelefoneChange = (e) => {
    const value = onlyNumbers(e.target.value, 11);
    setTelefone(value);
    setTelErro(value.length > 0 && value.length < 6 ? "Mínimo 6 dígitos" : "");
  };

  // Função para enviar para o Google Forms (adapte os entrys se for enviar esses campos)
  async function sendToGoogleFormsTeste(data) {
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeU6dUXcif9Ue7pZdPo4VGDe2sFLPqIj_FcVlaL51kU1nuRyQ/formResponse";
    const formData = new URLSearchParams();

    formData.append("entry.779768189", data.nome || "");
    formData.append("entry.1027134583", data.cpf || "");
    formData.append("entry.844116459", data.telefone || "");
    formData.append("entry.2138925042", data.possuiTV || "");
    formData.append("entry.1545885356", data.modelosCelulares || "");
    formData.append("entry.361377747", data.planoMovel || "");
    formData.append("entry.1664288804", data.planoFibra || ""); 

    console.log("Payload enviado:", formData.toString());

    return fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nome.length < 6) {
      setNomeErro("Mínimo 6 caracteres");
      return;
    }
    if (cpf.length < 6) {
      setCpfErro("Mínimo 6 dígitos");
      return;
    }
    if (telefone.length < 6) {
      setTelErro("Mínimo 6 dígitos");
      return;
    }

    const data = {
      nome,
      cpf,
      telefone,
      possuiTV,
      modelosCelulares,
      planoMovel: planoMovel
        ? `${planoMovel.nome || planoMovel.titulo || ""} ${planoMovel.total || ""} ${planoMovel.detalhes ? planoMovel.detalhes.join(" ") : ""}`
        : "",
      planoFibra: planoFibra
        ? `${planoFibra.nome || planoFibra.titulo || ""} ${planoFibra.total || ""} ${planoFibra.detalhes ? planoFibra.detalhes.join(" ") : ""}`
        : "",
    };

    try {
      await sendToGoogleFormsTeste(data);
      toast.success("Enviado!");
      setNome("");
      setCpf("");
      setTelefone("");
      setPossuiTV("");
      setModelosCelulares("");
      setNomeErro("");
      setCpfErro("");
      setTelErro("");
      if (limparSmartphonesSelecionados) limparSmartphonesSelecionados();
      if (limparPlanosSelecionados) limparPlanosSelecionados();
    } catch (err) {
      toast.error("Erro ao enviar.");
    }
  };

  return (
    <>
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
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00000] ${
              nomeErro ? "border-red-500" : ""
            }`}
            required
          />
          {nomeErro && <div className="text-xs text-red-500">{nomeErro}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="cpf">
            CPF (apenas números):
          </label>
          <input
            id="cpf"
            name="cpf"
            type="text"
            inputMode="numeric"
            maxLength={11}
            value={cpf}
            onChange={handleCpfChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00000] ${
              cpfErro ? "border-red-500" : ""
            }`}
            required
          />
          {cpfErro && <div className="text-xs text-red-500">{cpfErro}</div>}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1" htmlFor="telefone">
            Telefone (apenas números):
          </label>
          <input
            id="telefone"
            name="telefone"
            type="text"
            inputMode="numeric"
            maxLength={11}
            value={telefone}
            onChange={handleTelefoneChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00000] ${
              telErro ? "border-red-500" : ""
            }`}
            required
          />
          {telErro && <div className="text-xs text-red-500">{telErro}</div>}
        </div>

        {/* Seção de seleção de planos */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Plano móvel:</label>
          <input
            type="text"
            value={
              planoMovel
                ? planoMovel.nome || planoMovel.titulo || ""
                : ""
            }
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-100"
          />
          <div className="text-xs text-gray-500">
            {planoMovel
              ? planoMovel.detalhes
                ? planoMovel.detalhes.join(" ")
                : planoMovel.descricao || ""
              : ""}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Plano fibra:</label>
          <input
            type="text"
            value={
              planoFibra
                ? planoFibra.nome || planoFibra.titulo || ""
                : ""
            }
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-100"
          />
          <div className="text-xs text-gray-500">
            {planoFibra
              ? planoFibra.detalhes
                ? planoFibra.detalhes.join(" ")
                : planoFibra.descricao || ""
              : ""}
          </div>
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

        {/* Campo de modelos de celulares */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Smartphones de interesse:
          </label>
          <textarea
            value={modelosCelulares}
            onChange={(e) => setModelosCelulares(e.target.value)}
            rows={3}
            className="w-full border rounded px-3 py-2 bg-gray-100 resize-none"
            placeholder="Selecione até 3 modelos (Apple, Samsung, Motorola)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#f00000] text-white font-bold py-2 rounded hover:bg-red-700 transition"
        >
          Enviar
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}