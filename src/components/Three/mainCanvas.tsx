import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import MainScene from './mainScene';

type Props = {}

export default function MainCanvas({ }: Props) {

  return (
    <div className='w-screen h-screen fixed top-0 left-0'>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 55 }}>

        <Environment /* files='/gainMap.jpg' */ preset='city' />
        <MainScene />
      </Canvas>


    </div>
  )
}