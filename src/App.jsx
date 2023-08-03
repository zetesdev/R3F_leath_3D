import './App.css';
import { useState, useEffect, useRef, Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Loader from './components/Loader';
import Experience from './components/Experience';
import Titles from './components/Titles';
import About from './components/AboutDev';
import ColorChanger from './components/ColorChanger';

function App() {
  const [progress, setProgress] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [coverColor, setCoverColor] = useState('0x27272a');
  const [loader, setLoader] = useState(true);
  // const [viewportHeight, setViewportHeight] = useState(window.innerHeight); //MOBILE BROWSERS VIEWPORT VH FIX

  // const handleWindowResize = () => {
  //   setViewportHeight(window.innerHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);

  const handleSetCoverColor = (arg) => {
    setCoverColor(arg);
  };

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
      <div className='h-screen w-full'>
        {/* <div style={{ height: viewportHeight }}> */}
        {loader && <Loader onComplete={() => setLoader(false)} />}
        <Canvas
          onWheel={handleChangeProgress}
          // onTouchMove={handleChangeProgress}
          // onTouchEnd={handleChangeProgress}
        >
          <Suspense>
            <Experience progress={progress} coverColor={coverColor} />
          </Suspense>
        </Canvas>

        <About showAbout={showAbout} setShowAbout={handleSetShowAbout} />
        <Titles progress={progress} />

        <ColorChanger
          progress={progress}
          setCoverColor={handleSetCoverColor}
          decrementProgress={decrementProgress}
          incrementProgress={incrementProgress}
        />
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
