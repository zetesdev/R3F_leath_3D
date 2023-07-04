import './App.css';
import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import AnimTrigger from './components/AnimTrigger';

function App() {
  const [progress, setProgress] = useState(0);

  const handleChangeProgress = () => {
    setProgress((prevProgress) => prevProgress + 1);
  };

  return (
    <>
      <Canvas>
        <Experience progress={progress} />
      </Canvas>
      <AnimTrigger progress={progress} changeProgress={handleChangeProgress} />
    </>
  );
}

export default App;
