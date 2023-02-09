import { useEffect, useState } from 'react';
import { breakpointsNum } from '../utils/breakpoints';

export enum WindowSize {
  XS = 1,
  SM,
  MD,
  LG,
  XL,
}

export function useWindowSize() {
  const [size, setSize] = useState(WindowSize.XS);

  const getWindowSize = (width: number) => {
    if (width <= breakpointsNum.xs) {
      return WindowSize.XS;
    } else if (width > breakpointsNum.xs && width < breakpointsNum.sm) {
      return WindowSize.SM;
    } else if (width >= breakpointsNum.sm && width < breakpointsNum.md) {
      return WindowSize.MD;
    } else if (width >= breakpointsNum.md && width < breakpointsNum.lg) {
      return WindowSize.MD;
    } else if (width >= breakpointsNum.lg && width < breakpointsNum.xl) {
      return WindowSize.LG;
    } else if (width >= breakpointsNum.xl) {
      return WindowSize.XL;
    } else return WindowSize.XS;
  };

  useEffect(() => {
    const updateSize = () => {
      setSize(getWindowSize(window.innerWidth));
    };

    window.addEventListener('resize', updateSize);

    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
