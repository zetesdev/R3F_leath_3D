import { useGLTF, useTexture, Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

export function Model(props) {
  const { progress, coverColor } = props;
  const { nodes } = useGLTF('/models/tool_01.glb');

  // // console.log('Progress:', progress);
  // console.log(nodes.SM_cover_01.material.color);

  nodes.SM_cover_01.material.color.setHex(coverColor);
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

  // //ANIMATIONS
  let SM_cover_01_rotateZ = 0;
  let SM_body_01_rotateZ = 0;
  let SM_pliers_01_rotateZ = 0;
  let SM_pliers_02_rotateZ = 0;
  let SM_screwdriver_01_rotateZ = 0;
  let SM_myEmpty_rotateX = 0;
  let SM_scissors_01_rotateZ = 0;
  let SM_scissors_02_rotateZ = 0;

  switch (progress) {
    case 1:
      SM_cover_01_rotateZ = -2.75;
      SM_body_01_rotateZ = 2.75;
      SM_pliers_01_rotateZ = 0.15;
      SM_pliers_02_rotateZ = -0.15;
      break;
    case 2:
      break;
    case 3:
      SM_screwdriver_01_rotateZ = 3.15;
      SM_myEmpty_rotateX = 2.5;
      break;
    case 4:
      break;
    case 5:
      SM_scissors_01_rotateZ = -3;
      SM_scissors_02_rotateZ = -0.5;
      break;
    default:
      break;
  }

  return (
    <group {...props} dispose={null}>
      <Float speed={2} floatingRange={[-0.025, 0.025]} rotationIntensity={0.7}>
        <motion.mesh
          name='myEmpty'
          animate={{
            rotateX: SM_myEmpty_rotateX,
          }}
          transition={{
            delay: 1.1,
            duration: 0.7,
            ease: 'easeInOut',
          }}
        >
          <motion.mesh
            geometry={nodes.SM_pliers_01.geometry}
            material={nodes.SM_pliers_01.material}
            position={[-0.122, 0.001, -0.019]}
            animate={{
              rotateZ: SM_pliers_01_rotateZ,
            }}
            transition={{
              delay: 0,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <motion.mesh
              geometry={nodes.SM_body_01.geometry}
              material={nodes.SM_body_01.material}
              position={[-0.163, -0.053, 0.064]}
              animate={{
                rotateZ: SM_cover_01_rotateZ,
              }}
              transition={{
                delay: 0,
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              <mesh
                geometry={nodes.SM_bodyBottom_003.geometry}
                material={nodes.SM_bodyBottom_003.material}
                position={[0, 0, 0.011]}
              />
              <mesh
                geometry={nodes.SM_bodyCylinder.geometry}
                material={nodes.SM_bodyCylinder.material}
                position={[0.499, 0, -0.057]}
              />
              <motion.mesh
                geometry={nodes.SM_scissors_01.geometry}
                material={nodes.SM_scissors_01.material}
                position={[0, 0, 0.008]}
                animate={{
                  rotateZ: SM_scissors_01_rotateZ,
                }}
                transition={{
                  delay: 0,
                  duration: 1,
                  ease: 'easeInOut',
                }}
              >
                <mesh
                  geometry={nodes.SM_bodyBottom_002.geometry}
                  material={nodes.SM_bodyBottom_002.material}
                  position={[0, 0, -0.008]}
                />
                <motion.mesh
                  geometry={nodes.SM_scissors_02.geometry}
                  material={nodes.SM_scissors_02.material}
                  position={[0.267, -0.009, -0.023]}
                  animate={{
                    rotateZ: SM_scissors_02_rotateZ,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.7,
                    ease: 'easeInOut',
                  }}
                />
                <mesh
                  geometry={nodes.SM_scissors_03.geometry}
                  material={nodes.SM_scissors_03.material}
                  position={[0.267, -0.009, -0.023]}
                />
              </motion.mesh>
            </motion.mesh>
            <mesh
              geometry={nodes.SM_bodyBottom.geometry}
              material={nodes.SM_bodyBottom.material}
              position={[-0.163, -0.053, 0.064]}
            />
            <mesh
              geometry={nodes.SM_bodyBottom_001.geometry}
              material={nodes.SM_bodyBottom_001.material}
              position={[-0.163, -0.053, 0.064]}
            />
            <mesh
              geometry={nodes.SM_screw_01.geometry}
              material={nodes.SM_screw_01.material}
              position={[-0.163, -0.053, 0.072]}
            />
          </motion.mesh>
          <mesh
            geometry={nodes.SM_pliers_03.geometry}
            material={nodes.SM_pliers_03.material}
            position={[-0.122, 0.001, -0.019]}
          />
          <motion.mesh
            geometry={nodes.SM_pliers_02.geometry}
            material={nodes.SM_pliers_02.material}
            position={[-0.122, 0.001, -0.019]}
            animate={{
              rotateZ: SM_pliers_02_rotateZ,
            }}
            transition={{
              delay: 0,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <mesh
              geometry={nodes.SM_bodyTop_001.geometry}
              material={nodes.SM_bodyTop_001.material}
              position={[-0.164, 0.05, 0]}
            />
            <motion.mesh
              geometry={nodes.SM_cover_01.geometry}
              material={nodes.SM_cover_01.material}
              position={[-0.164, 0.051, 0.053]}
              animate={{
                rotateZ: SM_body_01_rotateZ,
              }}
              transition={{
                delay: 0,
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              <mesh
                geometry={nodes.SM_bodyTop_003.geometry}
                material={nodes.SM_bodyTop_003.material}
                position={[0, -0.001, -0.053]}
              />
              <mesh
                geometry={nodes.SM_peseta_01.geometry}
                material={nodes.SM_peseta_01.material}
                position={[0.277, -0.025, -0.008]}
              />
              <motion.mesh
                geometry={nodes.SM_screwdriver_01.geometry}
                material={nodes.SM_screwdriver_01.material}
                position={[0, -0.001, -0.053]}
                animate={{
                  rotateZ: SM_screwdriver_01_rotateZ,
                }}
                transition={{
                  delay: 0,
                  duration: 1,
                  ease: 'easeInOut',
                }}
              />
            </motion.mesh>
            <mesh
              geometry={nodes.SM_screw_02.geometry}
              material={nodes.SM_screw_02.material}
              position={[-0.164, 0.05, 0.076]}
            />
          </motion.mesh>
        </motion.mesh>
      </Float>
    </group>
  );
}

useGLTF.preload('/models/tool_01.glb');
