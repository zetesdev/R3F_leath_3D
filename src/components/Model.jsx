import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { progress } = props;
  const { nodes, materials } = useGLTF('/models/SM_test_01.gltf');

  const customRotation = [0, 0, 0];

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.element_02.geometry}
        material={materials.M_test_02}
        position={[-0.029977, 0.005329, 0.002927]}
        rotation={customRotation}
      >
        <mesh
          geometry={nodes.element_03.geometry}
          material={materials.M_test_03}
          position={[0.0256305, 0.000169, -0.0023475]}
        />
      </mesh>
      <mesh
        geometry={nodes.element_01.geometry}
        material={materials.M_test_01}
      />
    </group>
  );
}

useGLTF.preload('/models/SM_test_01.gltf');
