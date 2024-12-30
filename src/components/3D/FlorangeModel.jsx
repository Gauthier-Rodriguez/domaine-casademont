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
      {/* Label Flo */}
      <mesh
        geometry={nodes.LabelFlo.geometry}
        material={materials['Label.Flo']}
        position={[0.003, -0.057, 0]}
        scale={-0.04}
        visible={wine.num === 1}
      />
      {/* Label BL */}
      <mesh
        geometry={nodes.LabelBL.geometry}
        material={materials['Label.BL']}
        position={[0.003, -0.057, 0]}
        scale={-0.04}
        visible={wine.num === 2}
      />
      
      {/* Label Vi */}
      <mesh
        geometry={nodes.LabelVI.geometry}
        material={materials['Label.Vi']}
        position={[0.003, -0.057, 0]}
        scale={-0.04}
        visible={wine.num === 3}
      />
      
      {/* Label Rosé */}
      <mesh
        geometry={nodes.LabelRosé.geometry}
        material={materials['Label.Rosé']}
        position={[0.003, -0.057, 0]}
        scale={-0.04}
        visible={wine.num === 4}
      />
    </group>
  );
}

useGLTF.preload('/casa_bottle.glb');