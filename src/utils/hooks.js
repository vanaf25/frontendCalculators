import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants';

export const useWindowWidth = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return widthSize;
};

export const useIsMobile = () => {
  return useWindowWidth() < BREAKPOINTS.MD;
};
