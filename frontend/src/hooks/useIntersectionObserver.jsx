import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(([entry]) => setEntry(entry), options);

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, options]);

  return [setNode, entry];
};

export const useCountUp = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * end);
        
        if (current !== countRef.current) {
          countRef.current = current;
          setCount(current);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return count;
};