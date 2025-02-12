import React from 'react';
import { useGLTF } from '@react-three/drei';
import { wineStore } from '../Store/wines';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/casa_bottle.glb');
  const wine = wineStore((state) => state.wine);


  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      scale={10}
      rotation={[0, 0, 0]}
    >
      {/* Bottle Mesh */}
      <mesh
  geometry={nodes.Bottle.geometry}
  material={materials['Material.007']}

  position={[0.003, -0.057, 0]}
  scale={-0.04}
>
  <meshPhysicalMaterial
    roughness={0.6} // Slight roughness for a realistic glass look
    transmission={0.5} // High transmission for transparency
    thickness={1} // Thickness of the glass
    ior={2} // Index of refraction for glass
    clearcoat={1} // Adds a clear coat for shininess
    clearcoatRoughness={5} // Makes the clear coat perfectly smooth
    color="#ffffff" // Color of the glass
    envMapIntensity={1} // Intensity of the environment map reflections
  />
</mesh>
   

<mesh
        castShadow
        receiveShadow
        geometry={nodes.LabelFlo.geometry}
        material={materials['Label.Flo']}
        position={[0.003, -0.057, 0]}
        scale={-0.04}
        visible={wine.num === 1}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LabelVI.geometry}
        material={materials['Material.010']}
        scale={0.078}
        visible={wine.num === 2}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LabelBL.geometry}
        material={materials['Material.009']}
        scale={0.078}
        visible={wine.num === 3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LabelRosé.geometry}
        material={materials['Material.012']}
        scale={0.078}
        visible={wine.num === 4}
      />
    </group>
  );
}

useGLTF.preload('/casa_bottle.glb');