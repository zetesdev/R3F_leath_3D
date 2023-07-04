import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from '@react-three/drei';
import { Model } from './Model';
import { motion } from 'framer-motion-3d';

function Experience({ progress }) {
  const cameraRef = useRef();

  const positions = [
    [-0.48, 0.66, 0.84],
    [0.44, 0.26, 0.29],
    [0.2, -0.58, -0.28],
  ];

  const rotations = [
    [-0.67, -0.42, -0.31],
    [-0.73, 0.84, 0.59],
    [2.029, 0.3, -2.59],
  ];

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

  return (
    <>
      <motion.group
        name='cameraParent'
        position={positions[0]}
        rotation={rotations[0]}
        animate={{
          x: positions[progress][0],
          y: positions[progress][1],
          z: positions[progress][2],

          rotateX: rotations[progress][0],
          rotateY: rotations[progress][1],
          rotateZ: rotations[progress][2],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <PerspectiveCamera ref={cameraRef} makeDefault />
      </motion.group>

      {/* <OrbitControls
        camera={cameraRef.current}
        enableZoom={true}
        enableRotate={true}
        enablePan={true}
      /> */}
      <Environment background files='studio_small_08_1k.hdr' />
      {/* <motion.mesh
        animate={{
          scale: positions[progress],
        }}
      >
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color={'red'} />
      </motion.mesh> */}

      <Model scale={10} progress={progress} />
    </>
  );
}

export default Experience;
