import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

function Scroller(props) {
  const handleClick = () => {
    console.log('Clicked!');
  };
  // const data = useScroll();
  // const lastScroll = useRef(0);
  // const isAnimating = useRef(false);

  // useFrame(() => {
  //   console.log(data.scroll.current);
  // });

  // return <div onWheel={handleClick} />;
}

export default Scroller;
