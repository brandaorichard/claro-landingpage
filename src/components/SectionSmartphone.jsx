import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { FaMobileAlt, FaApple } from "react-icons/fa";
import iphonezera from "../assets/iphone13redbg.png";
import claroLogoPreta from "../assets/clarotv.png";
import s24 from "../assets/s24.png";
import motorolaedge2 from "../assets/motorolaedge2.png";
import samsungLogo from "../assets/samsungwhite.png"; // logo da Samsung
import galaxy from "../assets/galaxytext.png"; // logo da Galaxy
import motorolalogo from "../assets/motorolalogo.png"; // logo da Motorola
import edgepro from "../assets/edgepro50.png"; // logo da Motorola Edge Pro
import { AnimatePresence, motion } from "framer-motion";
import ApplePhones from "./ApplePhones";
import SamsungPhones from "./SamsungPhones";
import MotorolaPhones from "./MotorolaPhones";

const carouselData = [
  {
    title: "iPhone 14",
    description: "Um iPhone incrível por dentro e por fora com o Claro 5G+.",
  },
  {
    title: "Smartphone 2",
    description: "Tecnologia de ponta e design moderno.",
  },
  {
    title: "Smartphone 3",
    description: "O melhor da Motorola para você.",
  },
];

export default function SectionSmartphones() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-16">
      <div className="w-screen sm:w-full sm:max-w-2xl mt-8 relative left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0">
        <SectionTitle
          align="left"
          icon={<FaMobileAlt size={28} className="text-[#f00000]" />}
        >
          <span className="flex gap-2 font-bold text-black text-2xl">
            Smartphones
          </span>
        </SectionTitle>
        <div
          className="w-full flex flex-col justify-center items-center text-white transition-all duration-500 relative overflow-hidden"
          style={
            active === 0
              ? {
                  borderRadius: 0,
                  background:
                    "linear-gradient(to bottom, #A80000 20%, #000 100%)",
                }
              : {
                  borderRadius: 0,
                  background: "transparent",
                }
          }
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex flex-col justify-center items-center relative"
            >
              {/* Card Samsung */}
              {active === 1 && (
                <>
                  <img
                    src={s24}
                    alt="Galaxy S24"
                    className="w-screen sm:w-full h-auto max-h-[28rem] object-contain pointer-events-none"
                    style={{ borderRadius: 0, background: "#000" }}
                    draggable={false}
                  />
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-center items-start z-20 px-12 py-6">
                    <img
                      src={samsungLogo}
                      alt="Samsung"
                      className="w-40 h-24 object-contain mb-2"
                      draggable={false}
                    />
                    <img
                      src={galaxy}
                      alt="Galaxy"
                      className="w-40 h-24 object-contain mb-4"
                      style={{ filter: "invert(1) brightness(2)" }}
                      draggable={false}
                    />
                  </div>
                </>
              )}

              {/* Card Motorola */}
              {active === 2 && (
                <>
                  <img
                    src={motorolaedge2}
                    alt="Motorola Edge"
                    className="w-screen sm:w-full h-auto max-h-[28rem] object-contain pointer-events-none"
                    style={{ borderRadius: 0, background: "#000" }}
                    draggable={false}
                  />
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-center items-start z-20 px-12 py-6">
                    <img
                      src={motorolalogo}
                      alt="Motorola"
                      className="w-33 h-24 object-contain mb-2"
                      style={{ filter: "invert(1) brightness(2)" }}
                      draggable={false}
                    />
                    <img
                      src={edgepro}
                      alt="Edge Pro"
                      className="w-33 h-24 object-contain mb-4"
                      style={{ filter: "invert(1) brightness(2)" }}
                      draggable={false}
                    />
                  </div>
                </>
              )}

              {/* Card iPhone */}
              {active === 0 && (
                <img
                  src={iphonezera}
                  alt="iPhone"
                  className="w-screen sm:w-full h-auto max-h-[28rem] object-contain pointer-events-none"
                  style={{ borderRadius: 0, background: "#000" }}
                  draggable={false}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Toggle/indicador */}
        <div className="flex justify-center gap-2 mt-4">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === idx ? "bg-[#f00000]" : "bg-gray-300"
              }`}
              aria-label={`Selecionar smartphone ${idx + 1}`}
            />
          ))}
        </div>

        <ApplePhones />
        <SamsungPhones />
        <MotorolaPhones />
      </div>
    </section>
  );
}
