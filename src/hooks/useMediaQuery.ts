import { useSyncExternalStore } from 'react';

type MediaQueryResult = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const queries = {
  isMobile: '(max-width: 768px)',
  isTablet: '(min-width: 769px) and (max-width: 1200px)',
  isDesktop: '(min-width: 1201px)',
};

const useMediaQuery = (): MediaQueryResult => {
  const getSnapshot = (query: string) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false; // Значение по умолчанию на сервере
  };

  const subscribe = (
    query: string,
    callback: (event: MediaQueryListEvent) => void,
  ) => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', callback);
      return () => mediaQueryList.removeEventListener('change', callback);
    }
    return () => {}; // Пустая функция на сервере
  };

  // Динамически создаем объект с результатами
  return Object.entries(queries).reduce((acc, [key, query]) => {
    acc[key as keyof MediaQueryResult] = useSyncExternalStore(
      (callback) => subscribe(query, callback),
      () => getSnapshot(query),
      () => false, // Значение по умолчанию для SSR
    );
    return acc;
  }, {} as MediaQueryResult);
};

export default useMediaQuery;
