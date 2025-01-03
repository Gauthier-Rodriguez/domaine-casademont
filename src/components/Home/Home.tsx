import MainCanvas from '../Three/mainCanvas';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Link} from 'react-router-dom';


const Home = () => {
  const divRef = useRef<HTMLDivElement>(null);
  // Add hydrated state
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration complete
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Setup GSAP animation after hydration
  useEffect(() => {
    if (!isHydrated) return;

    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      divRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isHydrated]);

  // Return null or loading state while hydrating
  if (!isHydrated) {
    return (
      <div className="h-[300vh] w-screen">
        <div className="w-screen h-screen bg-black text-white absolute top-[250vh] flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-center px-4">
            DOMAINE CASADEMONT
          </h1>
          <div className="flex flex-col justify-center items-center md:flex-row gap-6 md:gap-10 lg:gap-20 mt-10 md:mt-20 text-2xl md:text-3xl lg:text-4xl">
            <Link to="/wines">Wines</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[300vh] w-screen">
      {/* Main Canvas */}
      <MainCanvas />

      {/* Animated Section */}
      <div
        className="w-screen h-screen bg-black text-white absolute top-[250vh] flex flex-col justify-center items-center"
        ref={divRef}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center px-4">
          DOMAINE CASADEMONT
        </h1>

        {/* Links Section */}
        <div className="flex flex-col justify-center items-center md:flex-row gap-6 md:gap-10 lg:gap-20 mt-10 md:mt-20 text-2xl md:text-3xl lg:text-4xl">
          <Link to="/wines">Wines</Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;