import './App.css';
import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import AnimTrigger from './components/AnimTrigger';
import { Scroll, ScrollControls } from '@react-three/drei';

function App() {
  const [progress, setProgress] = useState(0);

  const handleChangeProgress = () => {
    setProgress((prevProgress) => prevProgress + 1);
    console.log(progress);
  };

  return (
    <>
      <Canvas>
        <ScrollControls pages={4} damping={0.1}>
          <Experience progress={progress} />

          <Scroll html>
            {/* <div className='bg-slate-600 h-20 mb-96'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              assumenda saepe, obcaecati ipsam sit qui tenetur doloremque labore
              atque est cupiditate omnis dolorum quaerat ex repudiandae
              voluptatibus? Sapiente, veritatis nam.
            </div>
            <div className='bg-slate-600 h-20 mb-96'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              assumenda saepe, obcaecati ipsam sit qui tenetur doloremque labore
              atque est cupiditate omnis dolorum quaerat ex repudiandae
              voluptatibus? Sapiente, veritatis nam.
            </div>
            <div className='bg-slate-600 h-20 mb-96'>TEST</div>
            <div className='bg-slate-600 h-20 mb-96'>TEST</div>
            <div className='bg-slate-600 h-20 mb-96'>TEST</div> */}
          </Scroll>
        </ScrollControls>
      </Canvas>

      <AnimTrigger progress={progress} changeProgress={handleChangeProgress} />
    </>
  );
}

export default App;
