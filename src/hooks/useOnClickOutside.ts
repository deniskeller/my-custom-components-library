import { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;
declare global {
  interface Window {
    offsetWidth: number;
    clientWidth: number;
  }
}

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;

      if (event instanceof MouseEvent) {
        const x = event?.offsetX || 0;
        const width = window?.innerWidth - 18;

        if (x >= width) {
          return;
        }
      }

      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
