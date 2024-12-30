import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
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
                  alt={`Slide ${index}`}
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
