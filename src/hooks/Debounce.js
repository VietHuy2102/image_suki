import { useState, useEffect } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 2000);

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
