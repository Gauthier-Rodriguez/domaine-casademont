import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Instagram from "../../../public/instagram.svg";
import Email from "../../../public/Email.svg";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (h1Ref.current) {
            // Create a GSAP ScrollTrigger instance
            const animation = gsap.to(h1Ref.current, {
                fontSize: "5rem", // Target font size
                duration: 2, // Animation duration
                ease: "power4.inOut", // Easing for smooth animation
                scrollTrigger: {
                    trigger: h1Ref.current, // Trigger the animation when h1Ref is in view
                    start: "top bottom", // Start animation when h1Ref is 80% into the viewport
                    end: "top center", // End animation when h1Ref is 30% into the viewport
                    scrub: true, // Smooth animation synced with scroll
                },
            });

            // Cleanup ScrollTrigger when the component unmounts
            return () => {
                animation.scrollTrigger?.kill(); // Destroy the ScrollTrigger instance
                animation.kill(); // Kill the GSAP animation
            };
        }
    }, []);

    return (
        <div className="h-[100vh] w-screen bg-slate-300 flex flex-col justify-center items-center relative z-50">
            <h1
                ref={h1Ref}
                className="text-5xl text-white font-bold transition-all duration-500 ease-in-out"
            >
                CONTACT
            </h1>
            <div className="flex justify-center items-center mt-10 gap-20 ">
                <a href="mailto:casawines@gmail.com"><img className="cursor-pointer" src={Email} alt="email" /></a>
                <a href="https://www.instagram.com/domaine_casademont?igsh=em12cW1iZTVkZTdu"><img className=" cursor-pointer" src={Instagram} alt="InstagramLogo" />
                </a>
            </div>
            <div className="absolute bottom-0 w-full text-center text-white p-4">
                <p>ALL RIGHTS RESERVED 2025</p>
                <p>DOMAINE CASADEMONT</p>
            </div>
        </div>
    );
};

export default Footer;