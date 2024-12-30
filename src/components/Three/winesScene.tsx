import * as THREE from 'three';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Model from '../3D/FlorangeModel';
import { wineStore } from '../Store/wines';

gsap.registerPlugin(ScrollTrigger);

export default function WinesScene() {
  const wine = wineStore((state: any) => state.wine); // Access current wine state
  const updateWine = wineStore((state: any) => state.updateWine); // Function to update wine state
  const bottle1Spin = useRef<THREE.Group | null>(null); // Reference for rotation
  const initialGroup = useRef<THREE.Group | null>(null); // Reference for position animation

  const initialPosition: [number, number, number] = [-100, 0, 0]; // Start at x = -100
  const initialRotation: [number, number, number] = [0, 0, 0];

  useEffect(() => {
    // Animate initial position from x: -100 to x: 0
    if (initialGroup.current) {
      gsap.fromTo(
        initialGroup.current.position,
        { x: -100 }, // Initial position
        {
          x: 0, // Final position
          duration: 1.5, // Duration of the animation
          ease: 'power3.out', // Smooth easing
        }
      );
    }

    const breakpoints = [50, 150, 250, 350]; // Scroll breakpoints in vh for state changes
    let lastWineNum = wine.num; // Track the last updated wine.num value

    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      markers: false, // Enable markers for debugging
      onUpdate: (self) => {
        const totalHeight = self.end - self.start; // Total scrollable height
        const scrollProgress = self.progress * totalHeight; // Current scroll position in px
        const currentVH = (scrollProgress / window.innerHeight) * 100; // Convert to vh

        // Determine the new num based on the breakpoints
        let newNum = 1;
        for (let i = 0; i < breakpoints.length; i++) {
          if (currentVH >= breakpoints[i]) {
            newNum = i + 2;
          }
        }

        // Update the wine.num only if it has changed
        if (newNum !== lastWineNum) {
          updateWine(newNum); // Update wine.num in the Zustand store
          lastWineNum = newNum; // Update the lastWineNum tracker
        }
      },
    });

    // Timeline for the bottle spin animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: false, // Disable markers for the spin trigger
      },
    });

    if (bottle1Spin.current) {
      timeline.to(bottle1Spin.current.rotation, {
        y: Math.PI * 10, // Spin 4 full rotations (4 rotations * 2π radians)
        ease: 'none', // Linear animation to sync with scroll
      });
    }

    return () => {
      ScrollTrigger.killAll();
    };
  }, [updateWine]);

  return (
    <>
      <group ref={initialGroup} position={initialPosition} rotation={initialRotation} >
        <group ref={bottle1Spin}>
          <Model children={undefined} />
        </group>
      </group>
    </>
  );
}
