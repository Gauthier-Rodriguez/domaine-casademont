import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import WinesScene from "./winesScene";
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';

type Props = {};

export default function WinesCanvas({ }: Props) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const sections = [
    { text: "FLORANGE",
       gradient: "from-amber-500 to-pink-500",
        description: "Crafted with minimal intervention to highlight the purity of its grapes. Bursting with fresh citrus and floral aromas, it offers a crisp, well-balanced palate with a touch of minerality. Unfiltered and free from additives.",
        cepage: "CHARDONNAY" },
    { text: "GOT DE BLANC",
      gradient: "from-amber-200 to-yellow-400",
      description: "Crafted with minimal intervention to highlight the purity of its grapes. Bursting with fresh citrus and floral aromas, it offers a crisp, well-balanced palate with a touch of minerality. Unfiltered and free from additives.",
      cepage: ["MUSCAT", "SAUVIGNON"]},
    { text: "GOT DE VI",
      gradient: "from-pink-500 to-rose-500",
      description: "Crafted with minimal intervention to highlight the purity of its grapes. Bursting with fresh citrus and floral aromas, it offers a crisp, well-balanced palate with a touch of minerality. Unfiltered and free from additives.",
      cepage: ["MARSELAN"]},
    { text: "ROSÉ",
      gradient: "from-violet-200 to-pink-200",
      description: "Crafted with minimal intervention to highlight the purity of its grapes. Bursting with fresh citrus and floral aromas, it offers a crisp, well-balanced palate with a touch of minerality. Unfiltered and free from additives.",
      cepage: ["PINOT NOIR"]},
  ];

  const handleOpenModal = (index: number) => {
    setActiveSection(index);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setActiveSection(null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isOpenModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenModal]);


  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 z-10">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 6], fov: 55 }}
        >
          <ambientLight intensity={2.2} />
          <Environment preset="night" />
          <WinesScene />
        </Canvas>
      </div>

      <div className="relative">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`w-screen h-[100vh] rounded-lg flex items-center justify-center relative`}
          >
            <button
              className="text-2xl absolute z-50 -mt-64 right-20 h-10 w-10 rounded-full cursor-pointer bg-white/70 backdrop-blur-sm hover:bg-white/80 transition-colors sm:hidden"
              onClick={() => handleOpenModal(index)}
              aria-label={`Open ${section.text} details`}
            >
              +
            </button>
            <p className="text-6xl text-center">{section.text}</p>
            <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce z-10 hidden sm:block">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="black transition-colors"
                onClick={() => {
                  const currentScroll = window.scrollY
                  window.scrollTo({
                    top: currentScroll + window.innerHeight, // Scroll to the bottom section (250vh)
                    behavior: 'smooth'
                  })
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div className="hidden sm:block absolute left-0 text-justify w-1/4 ml-10">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {section.description}
              </motion.p>
            </div>
            <div className="hidden sm:block absolute right-0 text-justify w-1/4 ml-10">
              {Array.isArray(section.cepage) ? (
                section.cepage.map((cepage, index) => (
                  <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={index}
              >
                {cepage}
              </motion.p>
                ))
              ) : (
                <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {section.cepage}
              </motion.p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpenModal && activeSection !== null && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg max-w-lg w-full mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {sections[activeSection].text}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            <div className="mt-4">
              {/* Add your modal content here */}
              <p>Details about {sections[activeSection].text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}