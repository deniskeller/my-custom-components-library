import { useState, useEffect } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((val: T) => T)) => void] {
  // Функция для получения значения из localStorage
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Ошибка чтения ключа localStorage “${key}”:`, error);
      return initialValue;
    }
  };

  // Состояние для хранения значения
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Функция для обновления значения в localStorage и состоянии
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Ошибка установки ключа localStorage “${key}”:`, error);
    }
  };

  // Эффект для синхронизации состояния с localStorage при изменении ключа
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage;
