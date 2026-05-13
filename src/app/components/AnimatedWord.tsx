import { useState, useEffect } from 'react';

interface AnimatedWordProps {
  color: string;
}

export function AnimatedWord({ color }: AnimatedWordProps) {
  const [displayText, setDisplayText] = useState('BY');

  useEffect(() => {
    let cancelled = false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayText('BY');
      return () => {
        cancelled = true;
      };
    }

    const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));
    const show = (text: string) => {
      if (!cancelled) {
        setDisplayText(text);
      }
    };

    const sequence = async () => {
      // Wait 3 seconds
      await wait(3000);
      
      while (!cancelled) {
        // Backspace BY
        show('B');
        await wait(100);
        show('');
        await wait(100);
        
        // Type FOR
        show('F');
        await wait(150);
        show('FO');
        await wait(150);
        show('FOR');
        await wait(3000);
        
        // Backspace FOR
        show('FO');
        await wait(100);
        show('F');
        await wait(100);
        show('');
        await wait(100);
        
        // Type BY
        show('B');
        await wait(150);
        show('BY');
        await wait(3000);
      }
    };

    sequence();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span className="inline-block min-w-[3ch]" style={{ color }}>
      {displayText}
    </span>
  );
}
