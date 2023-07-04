import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

export function Model(props) {
  const { progress } = props;
  const { nodes, materials } = useGLTF('/models/SM_test_01.gltf');

  const customRotation = [0, 0, 0];

  progress === 1 ? (customRotation[2] = -2) : (customRotation[2] = 0);

  return (
    <group {...props} dispose={null}>
      <motion.mesh
        geometry={nodes.element_02.geometry}
        material={materials.M_test_02}
        position={[-0.029977, 0.005329, 0.002927]}
        animate={{
          rotateZ: customRotation[2],
        }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <mesh
          geometry={nodes.element_03.geometry}
          material={materials.M_test_03}
          position={[0.0256305, 0.000169, -0.0023475]}
        />
      </motion.mesh>
      <mesh
        geometry={nodes.element_01.geometry}
        material={materials.M_test_01}
      />
    </group>
  );
}

useGLTF.preload('/models/SM_test_01.gltf');
