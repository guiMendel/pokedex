import { useEffect, useState } from "react";

export default function useStickyState(key, defaultValue = null) {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    if (!value) {
      console.log(`Deleting localStorage at ${key}`);
      window.localStorage.removeItem(key);
      return;
    }
    console.log(`Updating localStorage at ${key} to ${value}`);
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
