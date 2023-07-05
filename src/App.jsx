import './App.css';
import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import AnimTrigger from './components/AnimTrigger';
import { Scroll, ScrollControls } from '@react-three/drei';
import Scroller from './components/Scroller';

function App() {
  const [progress, setProgress] = useState(0);

  const handleChangeProgress = (e) => {
    if (e.type === 'wheel') {
      // Obsługa eventu scrollowania myszką

      setProgress((prevProgress) => prevProgress + 1);
      console.log('Scrollowanie myszką:', e.deltaY);
    } else if (e.type === 'touchmove') {
      // Obsługa eventu dotyku
      console.log('Przesunięcie dotyku:', e.touches[0].clientY);
    }
  };

  return (
    <>
      <Scroller />
      <Canvas onWheel={handleChangeProgress} onTouchMove={handleChangeProgress}>
        {/* <ScrollControls pages={1} damping={0.1}> */}
        <Experience progress={progress} />

        {/* <Scroll html>
            <div className='bg-slate-600 h-20 mb-96'>
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
            <div className='bg-slate-600 h-20 mb-96'>TEST</div>
          </Scroll>
        </ScrollControls> */}
      </Canvas>
      <AnimTrigger progress={progress} changeProgress={handleChangeProgress} />
    </>
  );
}

export default App;
