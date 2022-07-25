import { useState, useEffect, useRef } from "react";

function useLocalStorage(localStorageKey, defaultValue) {
  const [value, setValue] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(localStorageKey);
    if (valueInLocalStorage) return JSON.parse(valueInLocalStorage);
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(localStorageKey);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== localStorageKey) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = localStorageKey;
    window.localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
}

export default useLocalStorage;
