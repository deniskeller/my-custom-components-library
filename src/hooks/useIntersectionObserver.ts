import { useEffect, useRef, useState } from 'react';

type UseIntersectionObserverOptions = IntersectionObserverInit & {
  triggerOnce?: boolean;
};

const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {},
): [React.RefObject<HTMLElement | null>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);

      if (entry.isIntersecting && options.triggerOnce) {
        observer.unobserve(entry.target);
      }
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
