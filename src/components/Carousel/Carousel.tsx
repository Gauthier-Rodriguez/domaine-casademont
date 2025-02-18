import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useRef, useEffect } from "react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const getImageAlt = (index: number) => {
  const altTexts = [
    "Vue aérienne du Domaine Casademont et ses vignes en Roussillon",
    "Vignoble du Domaine Casademont au coucher du soleil",
    "Grappes de raisin mûres dans les vignes",
    "Cave de vinification du Domaine Casademont",
    "Dégustation des vins naturels du domaine"
  ];
  return altTexts[index] || `Image ${index + 1} du Domaine Casademont`;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setIsOpenModal(true)
  };

  const handelCloseModal = () => {
    setSelectedImage(null);
    setIsOpenModal(false)
  };
  const handleClickOutside = (event : MouseEvent) => {
    if(modalRef.current && !modalRef.current.contains(event.target as Node)){
      handelCloseModal();
    }
  }

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
      <section className="w-[48rem] sm:w-full mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-[1rem]">
            {slides.map((index) => (
              <div className="flex-[0_0_86%] min-w-0 pl-[1rem]" key={index}>
                <div className="shadow-inner border-gray-500 rounded-[1.8rem] text-[4rem] font-semibold flex items-center justify-center h-[19rem] sm:h-1/3 select-none">
                  <img
                    src={`/pictures/${index + 1}.jpg`}
                    alt={getImageAlt(index)}
                    className="rounded-[1.8rem] w-full h-full object-cover cursor-pointer"
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative max-w-4xl w-full mx-4" ref={modalRef}>
            
            <button
              onClick={handelCloseModal}
              className="absolute -top-12 right-0 p-2 text-white hover:bg-white/20 rounded-full w-auto h-auto transition-colors"
            >
             x
            </button>
            <img
              src={`/pictures/${selectedImage + 1}.jpg`}
              alt={getImageAlt(selectedImage)}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;