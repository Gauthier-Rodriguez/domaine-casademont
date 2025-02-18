/* import { motion } from 'framer-motion';
import Image from 'next/image';

interface BentoGridProps {
  images: {
    src: string;
    alt: string;
    size?: 'large' | 'medium' | 'small';
  }[];
}

export default function BentoGrid({ images }: BentoGridProps) {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => {
          const isLarge = image.size === 'large';
          const isMedium = image.size === 'medium';
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl ${
                isLarge ? 'md:col-span-2 md:row-span-2' : 
                isMedium ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative ${
                isLarge ? 'h-[30rem]' : 
                isMedium ? 'h-[20rem]' : 
                'h-[15rem]'
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes={
                    isLarge ? '(max-width: 768px) 100vw, 66vw' : 
                    isMedium ? '(max-width: 768px) 100vw, 66vw' : 
                    '(max-width: 768px) 100vw, 33vw'
                  }
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}  */