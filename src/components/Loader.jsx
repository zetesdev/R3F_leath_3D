import { useProgress } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

function Loader({ onComplete }) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(onComplete, 700);
    }
  }, [progress, onComplete]);

  return (
    <div className='z-50 text-white fixed flex flex-col items-center justify-center top-0 left-0 bg-gray-950 w-full h-full text-6xl pointer-events-none touch-events-non opacity-100'>
      <div className='text-xl'>loading experience: </div>
      <div>{Math.round(progress)} %</div>
    </div>
  );
}

export default Loader;
