// src/components/SectionTitle.jsx
import claroBlackLogo from "../assets/claroBlack.svg";

export default function SectionTitle({ children, icon, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const justify = align === "left" ? "justify-start" : "justify-center";

  // Função para separar "Claro" e o restante do texto
  function renderWithLogo(text) {
    if (typeof text !== "string") return text;
    const parts = text.split(/(Claro)/);
    // parts: ["", "Claro", " Móvel"]
    return (
      <>
        {parts.map((part, idx) => {
          if (part === "Claro") {
            return (
              <span key={idx} className="flex items-center mb-2">
                <img
                  src={claroBlackLogo}
                  alt="Claro"
                  className="h-7 md:h-8 w-auto mb-1"
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                />
              </span>
            );
          }
          if (part.trim() === "") return null;
          return (
            <span
              key={idx}
              className="text-lg md:text-2xl font-bold text-red-800"
              style={{ lineHeight: 1 }}
            >
              {part}
            </span>
          );
        })}
      </>
    );
  }

  return (
    <div
      className={`flex flex-row items-center gap-2 mb-8 ${alignment} ${justify}`}
      style={{ lineHeight: 1 }}
    >
      {/* Ícone do celular */}
      {icon && (
        <span className="self-start md:self-center mr-1">
          {icon}
        </span>
      )}
      {/* Logo Claro e texto, cada um em seu próprio span */}
      {renderWithLogo(children)}
    </div>
  );
}