import { OrbitControls, Environment } from '@react-three/drei';
import { Model } from './Model';

function Experience({ progress }) {
  return (
    <>
      <OrbitControls />
      <Environment background files='studio_small_08_1k.hdr' />
      <Model scale={10} progress={progress} />
    </>
  );
}

export default Experience;
