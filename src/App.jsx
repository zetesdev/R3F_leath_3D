import './App.css';
import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import AnimTrigger from './components/AnimTrigger';
import Scroller from './components/Scroller';

function App() {
  const [progress, setProgress] = useState(0);
  const touchValueY = useRef(0);
  const touchMoveDown = useRef(null);

  const handleChangeProgress = (e) => {
    switch (e.type) {
      case 'wheel':
        setProgress((prevProgress) => prevProgress + 1);
        console.log('Mouse:', e.deltaY);
        break;

      case 'touchmove':
        touchMoveDown.current = e.touches[0].clientY >= touchValueY.current;
        touchValueY.current = e.touches[0].clientY;
        console.log('tochMoveDown', touchMoveDown.current);
        break;

      case 'touchend':
        console.log('FINAL:', touchValueY.current);
        setProgress((prevProgress) => prevProgress + 1);
        break;

      default:
        break;
    }
  };

  const debugLog = () => {
    console.log(touchValueY.current);
  };

  return (
    <>
      <Scroller />
      <Canvas
        onWheel={handleChangeProgress}
        onTouchMove={handleChangeProgress}
        onTouchEnd={handleChangeProgress}
      >
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
      <button
        onClick={debugLog}
        className='z-23 fixed bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-500 w-auto h-11 rounded-md'
      >
        DEBUG
      </button>
    </>
  );
}

export default App;
