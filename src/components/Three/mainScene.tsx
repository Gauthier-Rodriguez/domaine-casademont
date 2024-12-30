import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Model from '../3D/CDMLogo';

gsap.registerPlugin(ScrollTrigger)

export default function MainScene() {
    const can1Ref = useRef<THREE.Group | null>(null)
    const can1Spin = useRef<THREE.Group | null>(null)
    const initialPosition: [number, number, number] = [0, 0, 0]

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            }
        })

        if (can1Ref.current && can1Spin.current) {
            timeline
                .to(can1Ref.current.rotation, {
                    x: Math.PI * 1.36,
                    duration: 2,
                    ease: 'power4.inOut'
                }, 0)
                .to(can1Ref.current.position, {
                    z: 4.780,
                    duration: 2,
                }, 0)

        }
    })



    return (
        <>
            <group ref={can1Ref} position={initialPosition}>
                <group ref={can1Spin}>
                    <Model children={undefined} />
                </group>
            </group>
        </>
    )
}