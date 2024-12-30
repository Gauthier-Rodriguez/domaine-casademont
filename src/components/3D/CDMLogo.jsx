import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { Mesh, MeshStandardMaterial } from 'three'

function Model({ color = 'white', children, roughness = 0 }) {
  const { nodes } = useGLTF('/CDM_LogoDef.glb')
  const ref = useRef(null)

  useFrame((_, delta) => {
    if (ref.current) {
      easing.dampC(ref.current.material, color, 0.2, delta)
    }
  })

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.Curve.geometry}
      position={[0.1, 0, 0]}
      scale={30}
      rotation={[2, 0, 0]}
    >
      <meshStandardMaterial metalness={0.2} roughness={0.2} color={0x000000} />
      {children}
    </mesh>
  )
}

useGLTF.preload('/CDM_LogoDef.glb')

export default Model