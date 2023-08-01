import { useProgress } from '@react-three/drei';
import { useState, useEffect } from 'react';

function Loader() {
  const { progress, total, loaded, item } = useProgress();

  //   useEffect(() => {
  //     console.log(progress, total, loaded, item);
  //   }, [progress, total, loaded, item]);

  return (
    <div className='z-50 z fixed flex items-center justify-center top-0 left-0  bg-red-500 w-full h-full text-6xl opacity-100 '>
      <div>LOADER {progress} </div>
    </div>
  );
}

export default Loader;
