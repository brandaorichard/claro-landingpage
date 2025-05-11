export default function FormVerticalTab({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed right-0 top-1/2 z-50
        bg-[#f00000] text-white
        rounded-l-lg
        px-1 py-2
        flex flex-col items-center
        shadow-lg
        hover:bg-red-700 transition
        select-none
        cursor-pointer
      "
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        fontSize: "0.85rem", // diminua para 0.75rem se quiser ainda menor
        borderTopLeftRadius: "0.75rem",
        borderBottomLeftRadius: "0.75rem",
        transform: "translateY(-50%)",
      }}
      aria-label="Ir para o formulário"
    >
      Preencha o formulário
    </button>
  );
}