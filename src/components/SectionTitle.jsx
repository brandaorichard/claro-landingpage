// src/components/SectionTitle.jsx
import claroBlackLogo from "../assets/claroBlack.svg";

export default function SectionTitle({ children, icon, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const justify = align === "left" ? "justify-start" : "justify-center";

  // Função para substituir "Claro" pelo logo
  function renderWithLogo(text) {
    if (typeof text !== "string") return text;
    const parts = text.split(/(Claro)/);
    return (
      <span className="flex items-center gap-2">
        {parts.map((part, idx) =>
          part === "Claro" ? (
            <img
              key={idx}
              src={claroBlackLogo}
              alt="Claro"
              className="h-7 md:h-8 w-auto"
              style={{ minWidth: 28, minHeight: 28 }}
            />
          ) : (
            <span
              key={idx}
              className="text-lg md:text-xl font-bold text-black mt-2"
              style={{ lineHeight: 1 }}
            >
              {part}
            </span>
          )
        )}
      </span>
    );
  }

  return (
    <h2
      className={`flex items-center gap-6 mb-8 ${alignment} ${justify}`}
      style={{ lineHeight: 1 }}
    >
      {icon && <span>{icon}</span>}
      {renderWithLogo(children)}
    </h2>
  );
}
