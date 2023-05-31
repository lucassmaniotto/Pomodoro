import { useEffect, useRef } from 'react';

export default function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null,
) {
  const savedCallback = useRef<C | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
