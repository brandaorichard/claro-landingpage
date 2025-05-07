// src/components/SectionTitle.jsx
export default function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
      {children}
    </h2>
  );
}