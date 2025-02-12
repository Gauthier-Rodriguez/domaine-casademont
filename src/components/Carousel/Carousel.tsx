import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

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

  return (
    <section className="max-w-[48rem] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-[1rem]">
          {slides.map((index) => (
            <div className="flex-[0_0_86%] min-w-0 pl-[1rem]" key={index}>
              <div className="shadow-inner border-gray-500 rounded-[1.8rem] text-[4rem] font-semibold flex items-center justify-center h-[19rem] select-none">
                <img
                  src={`/pictures/${index + 1}.jpg`}
                  alt={getImageAlt(index)}
                  className="rounded-[1.8rem] w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
