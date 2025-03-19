import { useSyncExternalStore } from 'react';

function useMediaQuery(query: string) {
  const getSnapshot = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    // Возвращаем значение по умолчанию на сервере
    return false;
  };

  const getServerSnapshot = () => {
    // На сервере возвращаем значение по умолчанию
    return false;
  };

  const subscribe = (callback: (event: MediaQueryListEvent) => void) => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', callback);

      return () => mediaQueryList.removeEventListener('change', callback);
    }
    // На сервере возвращаем пустую функцию
    return () => {};
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;
