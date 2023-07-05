import { useRef } from 'react';
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Float,
} from '@react-three/drei';
import { Model } from './Model';
import { motion } from 'framer-motion-3d';

function Experience({ progress }) {
  const cameraRef = useRef();

  const camPositions = [
    [-0.48, 0.66, 0.84],
    [0.44, 0.26, 0.29],
    [0.2, -0.58, -0.28],
  ];

  const camRotations = [
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

  const [camPositionX, camPositionY, camPositionZ] = camPositions[progress];
  const [camRotateX, camRotateY, camRotateZ] = camRotations[progress];

  return (
    <>
      <Float>
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
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <PerspectiveCamera ref={cameraRef} makeDefault />
        </motion.group>
      </Float>
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
