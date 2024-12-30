import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import WinesScene from "./winesScene";
import { useEffect, useState, useRef } from "react";
type Props = {};

export default function WinesCanvas({}: Props) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const sections = [
    { text: "FLORANGE", gradient: "from-amber-500 to-pink-500" },
    { text: "GOT DE BLANC", gradient: "from-amber-200 to-yellow-400" },
    { text: "GOT DE VI", gradient: "from-pink-500 to-rose-500" },
    { text: "ROSÉ", gradient: "from-violet-200 to-pink-200" },
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
              className="text-2xl absolute z-50 -mt-64 right-20 h-10 w-10 rounded-full cursor-pointer bg-white/70 backdrop-blur-sm hover:bg-white/80 transition-colors"
              onClick={() => handleOpenModal(index)}
              aria-label={`Open ${section.text} details`}
            >
              +
            </button>
            <p className="text-6xl text-center">{section.text}</p>
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