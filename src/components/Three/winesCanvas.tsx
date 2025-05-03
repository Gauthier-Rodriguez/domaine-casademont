import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import WinesScene from "./winesScene";
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import CircularText from '../Wines/CircularText';


type Props = {};

export default function WinesCanvas({ }: Props) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      text: "FLORANGE",
      gradient: "from-amber-500 to-pink-500",
      color: "from-amber-500 to-pink-500",
      description: "GRENACHE and MARSELAN direct press and MUSCAT PETIT GRAIN 6 days maceration",
      cepage: "GRENACHE*MARSELAN*MUSCAT*",
      link: "/tech_sheets/florange.pdf"
    },
    {
      text: "GOT DE BLANC",
      gradient: "from-amber-200 to-yellow-400",
      color: "from-amber-500 to-pink-500",
      description: "SAUVIGNON BLANC direct press",
      cepage: "SAUVIGNON*SAUVIGNON*",
      link: "/tech_sheets/gotdeblanc.pdf"
    },
    {
      text: "GOT DE VI",
      gradient: "from-pink-500 to-rose-500",
      color: "from-amber-500 to-pink-500",
      description: "GRENACHE and SYRAH 12 days maceration",
      cepage: "GRENACHE*SYRAH*",
      link: "/tech_sheets/gotdevi.pdf"
    },
    {
      text: "ROSÉ",
      gradient: "from-violet-200 to-pink-200",
      color: "from-amber-500 to-pink-500",
      description: "GRENACHE direct press",
      cepage: "GRENACHE*GRENACHE*",
      link: "/tech_sheets/rose.pdf"
    },
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
      <div className="w-screen h-screen fixed top-0 left-0 z-10 overflow-x-hidden">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 6], fov: 55 }}
          className="" 
        >
          <ambientLight intensity={2.2} />
          <Environment preset="night" />
          <WinesScene />
        </Canvas>
      </div>

      <div className="relative overflow-x-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full h-[100vh] rounded-lg flex items-center justify-center relative"
          >
            <button
              className="text-2xl absolute z-50 -mt-64 right-20 h-10 w-10 rounded-full cursor-pointer bg-white/70 backdrop-blur-sm hover:bg-white/80 transition-colors sm:hidden"
              onClick={() => handleOpenModal(index)}
              aria-label={`Open ${section.text} details`}
            >
              +
            </button>
            <p className="text-6xl sm:text-8xl text-center">{section.text}</p>
            <div className="absolute hidden sm:block bottom-10 transform -translate-x-1/2 animate-bounce z-10">
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
                    top: currentScroll + window.innerHeight,
                    behavior: 'smooth'
                  })
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div className="absolute bottom-10 right-10 z-50 hidden sm:block">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.8 }}
                className="p-3 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/80 transition-colors"
                onClick={() => {
                  document.documentElement.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }}
                aria-label="Scroll to top"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </motion.button>
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
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`hidden sm:block absolute left-10 top-2/3 text-sm text-white text-bold bg-gradient-to-r ${section.color} px-4 py-2 rounded-full hover:scale-105 transition-transform z-50`}
              href={section.link}
              download={true}
            >

              DOWNLOAD TECH SHEET

            </motion.a>

            <div className="absolute right-16 hidden sm:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <CircularText
                  text={section.cepage}
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class" />
              </motion.div>
            </div>


            {/* <div className="hidden sm:block absolute right-0 text-justify w-1/4 ml-10">
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
            </div> */}
          </div>
        ))}
      </div>

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
              <div>
                <p>{sections[activeSection].description}</p>
              </div>


              {/*   <div className="mt-5">
                {Array.isArray(sections[activeSection].cepage) ? (
                  sections[activeSection].cepage.map((cepage, index) => (
                    <p className="font-bold" key={index}>{cepage}</p>
                  ))
                ) : (
                  <p className="font-bold">{sections[activeSection].cepage}</p>
                )}
              </div> */}
            </div>
            <div className="mt-5">
              <a
                className={`text-sm text-white text-bold bg-gradient-to-r ${sections[activeSection].gradient} px-4 py-2 rounded-full hover:scale-105 transition-transform z-50`}
                href={sections[activeSection].link}
                download={true}
              >
                DOWNLOAD TECH SHEET
              <img src="/download.svg" alt="Download" className="inline-block ml-2 w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}