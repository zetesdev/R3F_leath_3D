import './App.css';
import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import AnimTrigger from './components/AnimTrigger';
import About from './components/About';

function App() {
  const [progress, setProgress] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  const handleSetShowAbout = () => {
    setShowAbout((prevShowAbout) => !prevShowAbout);
  };

  ///HANDLE PROGRESS
  const touchValueY = useRef(0);
  const touchMoveDown = useRef(null);

  const decrementProgress = () => {
    setProgress((prevProgress) =>
      prevProgress === 0 ? prevProgress : prevProgress - 1
    );
  };
  //CAMERA ANIMATION MAXIMUM STEPS HERE
  const incrementProgress = () => {
    setProgress((prevProgress) =>
      prevProgress === 2 ? prevProgress : prevProgress + 1
    );
  };

  const handleChangeProgress = (e) => {
    switch (e.type) {
      case 'wheel':
        e.deltaY > 0 ? incrementProgress() : decrementProgress();
        // console.log('Mouse:', e.deltaY);
        break;

      case 'touchmove':
        touchMoveDown.current = e.touches[0].clientY >= touchValueY.current;
        touchValueY.current = e.touches[0].clientY;
        // console.log('tochMoveDown', touchMoveDown.current);
        break;

      case 'touchend':
        touchMoveDown.current ? incrementProgress() : decrementProgress();
        console.log('FINAL:', touchValueY.current);
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
      <Canvas
        onWheel={handleChangeProgress}
        onTouchMove={handleChangeProgress}
        onTouchEnd={handleChangeProgress}
      >
        <Experience progress={progress} />
      </Canvas>
      <About showAbout={showAbout} setShowAbout={handleSetShowAbout} />

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
