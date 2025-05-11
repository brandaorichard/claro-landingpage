import React from "react";

export default function FormClaro({ formRef }) {
  return (
    <form
      ref={formRef}
      className="bg-white border border-gray-200 rounded-xl shadow-md p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-10"
    >
      <h4 className="text-xl font-bold mb-4 text-[#f00000]">Solicite seu desconto</h4>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="nome">
          Nome:
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00000]"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="cpf">
          CPF:
        </label>
        <input
          id="cpf"
          name="cpf"
          type="text"
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
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f00000]"
          required
        />
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