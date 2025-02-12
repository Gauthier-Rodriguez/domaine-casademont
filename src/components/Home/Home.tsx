import MainCanvas from '../Three/mainCanvas';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'

const Home = () => {
  const divRef = useRef<HTMLDivElement>(null);
  // Add hydrated state
  const [isHydrated, setIsHydrated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  // Handle hydration complete
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="h-[300vh] w-screen flex items-center justify-center">
      {/* Main Canvas */}
      <MainCanvas />
      <Analytics />

      {isScrolled && (
        <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce z-10">
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
          onClick={() => window.scrollTo({ 
            top: window.innerHeight * 2.5, // Scroll to the bottom section (250vh)
            behavior: 'smooth' 
          })}
        >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      )}

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