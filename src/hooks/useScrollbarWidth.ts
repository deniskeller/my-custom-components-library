import { useState, useEffect } from 'react';

const useScrollbarWidth = (): number => {
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

  useEffect(() => {
    const calculateScrollbarWidth = (): number => {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll';
      document.body.appendChild(outer);

      const inner = document.createElement('div');
      outer.appendChild(inner);

      const width = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode?.removeChild(outer);

      return width;
    };

    setScrollbarWidth(calculateScrollbarWidth());
  }, []);

  return scrollbarWidth;
};

export default useScrollbarWidth;