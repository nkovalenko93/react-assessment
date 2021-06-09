import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      let handler;
      if (debouncedValue !== value) {
        handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
      }
      return () => (handler ? clearTimeout(handler) : null);
    },
    [value]
  );
  return debouncedValue;
};

export default useDebounce;
