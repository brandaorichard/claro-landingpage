export default function SectionTitle({ children, icon, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const justify = align === "left" ? "justify-start" : "justify-center";

  return (
    <h2
      className={`flex items-center gap-2 text-2xl md:text-3xl font-bold mb-8 ${alignment} ${justify}`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </h2>
  );
}