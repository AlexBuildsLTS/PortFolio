<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import { useState, useEffect } from "react";
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

<<<<<<< HEAD
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
=======
    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
    };
  }, [query]);

  return matches;
};
