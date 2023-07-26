import { useGLTF, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

// export function Model(props) {
//   const { progress } = props;
//   const { nodes, materials } = useGLTF('/models/tool_01.glb');

//   const customRotation = [0, 0, 0];

//   progress === 1 ? (customRotation[2] = -2) : (customRotation[2] = 0);

//   return (
//     <group {...props} dispose={null}>
//       <motion.mesh
//         geometry={nodes.element_02.geometry}
//         material={materials.M_test_02}
//         position={[-0.029977, 0.005329, 0.002927]}
//         animate={{
//           rotateZ: customRotation[2],
//         }}
//         transition={{
//           delay: 0.5,
//           duration: 1,
//           ease: 'easeInOut',
//         }}
//       >
//         <mesh
//           geometry={nodes.element_03.geometry}
//           material={materials.M_test_03}
//           position={[0.0256305, 0.000169, -0.0023475]}
//         />
//       </motion.mesh>
//       <mesh
//         geometry={nodes.element_01.geometry}
//         material={materials.M_test_01}
//       />
//     </group>
//   );
// }

// useGLTF.preload('/models/SM_test_01.gltf');

export function Model(props) {
  const { progress } = props;
  const { nodes } = useGLTF('/models/tool_01.glb');

  console.log('Progress:', progress);

  //TEXTURE SETUP
  const textures = useTexture({
    cover_01_normalMap: 'textures/T_cover_Normal.png',
    metalBody_01_baseColor: 'textures/T_metalBody_01_BaseColor.png',
    metalBody_01_normalMap: 'textures/T_metalBody_01_Normal.png',
    metalBody_02_normalMap: 'textures/T_MetalBody_02_Normal.png',
    peseta_normalMap: 'textures/T_peseta_Normal.png',
    pliers_normalMap: 'textures/T_pliers_Normal.png',
    scissors_normalMap: 'textures/T_scissors_Normal.png',
  });

  nodes.SM_cover_01.material.normalMap = textures.cover_01_normalMap;
  nodes.SM_cover_01.material.normalMap.flipY = false;

  nodes.SM_body_01.material.map = textures.metalBody_01_baseColor;
  nodes.SM_body_01.material.map.flipY = false;
  nodes.SM_body_01.material.normalMap = textures.metalBody_01_normalMap;
  nodes.SM_body_01.material.normalMap.flipY = false;
  nodes.SM_bodyTop_003.material.normalMap = textures.metalBody_02_normalMap;
  nodes.SM_bodyTop_003.material.normalMap.flipY = false;
  nodes.SM_screwdriver_01.material.normalMap = textures.peseta_normalMap;
  nodes.SM_screwdriver_01.material.normalMap.flipY = false;
  nodes.SM_pliers_01.material.normalMap = textures.pliers_normalMap;
  nodes.SM_pliers_01.material.normalMap.flipY = false;
  nodes.SM_scissors_01.material.normalMap = textures.scissors_normalMap;
  nodes.SM_scissors_01.material.normalMap.flipY = false;
  //TEXTURE SETUP END

  //ANIMATIONS

  const customRotation = [0, 0, 0];
  progress === 1 ? (customRotation[2] = 2.5) : (customRotation[2] = 0);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_pliers_01.geometry}
        material={nodes.SM_pliers_01.material}
        position={[-0.122, 0.001, -0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_body_01.geometry}
          material={nodes.SM_body_01.material}
          position={[-0.163, -0.053, 0.064]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_bodyBottom_003.geometry}
            material={nodes.SM_bodyBottom_003.material}
            position={[0, 0, 0.011]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_bodyCylinder.geometry}
            material={nodes.SM_bodyCylinder.material}
            position={[0.499, 0, -0.057]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_scissors_01.geometry}
            material={nodes.SM_scissors_01.material}
            position={[0, 0, 0.008]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SM_bodyBottom_002.geometry}
              material={nodes.SM_bodyBottom_002.material}
              position={[0, 0, -0.008]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SM_scissors_02.geometry}
              material={nodes.SM_scissors_02.material}
              position={[0.267, -0.009, -0.023]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SM_scissors_03.geometry}
              material={nodes.SM_scissors_03.material}
              position={[0.267, -0.009, -0.023]}
            />
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_bodyBottom.geometry}
          material={nodes.SM_bodyBottom.material}
          position={[-0.163, -0.053, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_bodyBottom_001.geometry}
          material={nodes.SM_bodyBottom_001.material}
          position={[-0.163, -0.053, 0.064]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_screw_01.geometry}
          material={nodes.SM_screw_01.material}
          position={[-0.163, -0.053, 0.072]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_pliers_03.geometry}
        material={nodes.SM_pliers_03.material}
        position={[-0.122, 0.001, -0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_pliers_02.geometry}
        material={nodes.SM_pliers_02.material}
        position={[-0.122, 0.001, -0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_bodyTop_001.geometry}
          material={nodes.SM_bodyTop_001.material}
          position={[-0.164, 0.05, 0]}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_cover_01.geometry}
          material={nodes.SM_cover_01.material}
          position={[-0.164, 0.051, 0.053]}
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
            castShadow
            receiveShadow
            geometry={nodes.SM_bodyTop_003.geometry}
            material={nodes.SM_bodyTop_003.material}
            position={[0, -0.001, -0.053]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_peseta_01.geometry}
            material={nodes.SM_peseta_01.material}
            position={[0.277, -0.025, -0.008]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_screwdriver_01.geometry}
            material={nodes.SM_screwdriver_01.material}
            position={[0, -0.001, -0.053]}
          />
        </motion.mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_screw_02.geometry}
          material={nodes.SM_screw_02.material}
          position={[-0.164, 0.05, 0.076]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/tool_01.glb');
