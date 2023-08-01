import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Sparkles,
} from '@react-three/drei';
import { Model } from './Model';
import { motion } from 'framer-motion-3d';

function Experience({ progress, coverColor }) {
  const cameraRef = useRef();

  const camPositions = [
    [-0.35, 0.26, 0.84],
    [0.57, 0.06, 1.01],
    [-0.48, 0.66, 0.84],
    [0.17, 0.6, 0.98],
    [0.59, 0.32, 0.73],
    [-1.2, 0.13, 0.62],
  ];

  const camRotations = [
    [-0.3, -0.38, -0.11],
    [-0.06, 0.51, 0.03],
    [-0.67, -0.42, -0.31],
    [-0.54, 0.14, 0.08],
    [-0.41, 0.63, 0.25],
    [-0.2, -1.08, -0.18],
  ];

  // CAMERA CONSOLE LOGGER
  // useFrame(() => {
  //   const camera = cameraRef.current;
  //   if (camera) {
  //     console.log(
  //       'Position:',
  //       camera.position.x,
  //       camera.position.y,
  //       camera.position.z
  //     );
  //     console.log(
  //       'Rotation:',
  //       camera.rotation.x,
  //       camera.rotation.y,
  //       camera.rotation.z
  //     );
  //   }
  // });

  const [camPositionX, camPositionY, camPositionZ] = camPositions[progress];
  const [camRotateX, camRotateY, camRotateZ] = camRotations[progress];

  return (
    <>
      <motion.group
        name='cameraParent'
        position={camPositions[0]}
        rotation={camRotations[0]}
        animate={{
          x: camPositionX,
          y: camPositionY,
          z: camPositionZ,

          rotateX: camRotateX,
          rotateY: camRotateY,
          rotateZ: camRotateZ,
        }}
        transition={{
          delay: 0,
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <PerspectiveCamera ref={cameraRef} makeDefault />
      </motion.group>
      {/* <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={camPositions[0]}
        rotation={camRotations[0]}
      />

      <OrbitControls
        camera={cameraRef.current}
        enableZoom={true}
        enableRotate={true}
        enablePan={true}
      /> */}
      <Environment background={false} files='studio_small_08_1k.hdr' />

      <Sparkles
        count={100}
        scale={1}
        size={0.25}
        speed={0.05}
        opacity={1}
        color={'#a3e635'}
      ></Sparkles>
      <Sparkles
        count={100}
        scale={1}
        size={0.25}
        speed={0.05}
        opacity={1}
        color={'rgb(85%, 50%, 50%)'}
      ></Sparkles>

      <Sparkles
        count={100}
        scale={1}
        size={0.25}
        speed={0.05}
        opacity={1}
        color={'rgb(85%, 50%, 0%)'}
      ></Sparkles>
      <Model scale={0.75} progress={progress} coverColor={coverColor} />
    </>
  );
}

export default Experience;
