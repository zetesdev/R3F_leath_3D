import './App.css';
import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import AnimTrigger from './components/AnimTrigger';
import Titles from './components/Titles';
import About from './components/AboutDev';
import ColorChanger from './components/ColorChanger';
import { OrbitControls } from '@react-three/drei';

function App() {
  const [progress, setProgress] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  const handleSetShowAbout = () => {
    setShowAbout((prevShowAbout) => !prevShowAbout);
  };

  ///HANDLE PROGRESS
  const touchValueY = useRef(0);
  const touchMoveDown = useRef(null);
  const multiTouchEnd = useRef(false);
  const lastWheelEventTime = useRef(0);
  const timeThreshold = 500;

  const decrementProgress = () => {
    setProgress((prevProgress) =>
      prevProgress === 0 ? prevProgress : prevProgress - 1
    );
  };
  //MAXIMUM PROGRESS STEPS HERE
  const incrementProgress = () => {
    setProgress((prevProgress) =>
      prevProgress === 5 ? prevProgress : prevProgress + 1
    );
  };

  const handleChangeProgress = (e) => {
    const currentTime = Date.now();
    switch (e.type) {
      case 'wheel':
        if (currentTime - lastWheelEventTime.current <= timeThreshold) {
          // checking many events in short period of time
          // console.log(currentTime);
          return;
        }
        lastWheelEventTime.current = currentTime;

        e.deltaY > 0 ? incrementProgress() : decrementProgress();
        // console.log('wheel');
        break;

      case 'touchmove':
        touchMoveDown.current = e.touches[0].clientY >= touchValueY.current;
        touchValueY.current = e.touches[0].clientY;
        multiTouchEnd.current = true;
        break;

      case 'touchend':
        if (multiTouchEnd.current) {
          //TEST IF it is single touch or on the end of moving on screen
          touchMoveDown.current ? incrementProgress() : decrementProgress();
        }
        multiTouchEnd.current = false;
        break;

      default:
        break;
    }
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
      <Titles progress={progress} />

      <ColorChanger
        colors={['lime', 'sky', 'red', 'slate', 'fuchsia']}
        // colors={['red', 'red', 'red', 'red', 'red']}
        progress={progress}
      />

      {/* <AnimTrigger progress={progress} changeProgress={incrementProgress} />
      <button
        onClick={decrementProgress}
        className='z-23 fixed bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-500 w-auto h-11 rounded-md'
      >
        DEBUG
      </button> */}
    </>
  );
}

export default App;
