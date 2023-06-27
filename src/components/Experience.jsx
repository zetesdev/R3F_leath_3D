import { OrbitControls } from '@react-three/drei';
import { Model } from './Model';

function Experience() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />

      <Model scale={10} />
    </>
  );
}

export default Experience;
