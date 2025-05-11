// src/components/DescontoBadge.jsx
import { motion } from "framer-motion";

export default function DescontoBadge({ desconto, controls }) {
  return (
    <motion.div
      animate={controls}
      className="fixed bottom-6 right-6 z-50 bg-[#f00000] text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-black shadow-lg"
      style={{ pointerEvents: "none" }} // impede clique, remova se quiser clicável
    >
      {desconto}%
    </motion.div>
  );
}