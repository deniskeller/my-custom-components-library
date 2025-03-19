import { useEffect, useRef, useState } from 'react';

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

function useResizeObserver(): [
  React.RefObject<Element | null>,
  ObserverRect | undefined,
] {
  const ref = useRef<Element>(null);
  const [rect, setRect] = useState<ObserverRect>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setRect(entry.contentRect);
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, rect];
}

export default useResizeObserver;
