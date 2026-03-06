import { useState, useEffect } from 'react';

interface AnimatedWordProps {
  color: string;
}

export function AnimatedWord({ color }: AnimatedWordProps) {
  const [displayText, setDisplayText] = useState('BY');

  useEffect(() => {
    const sequence = async () => {
      // Wait 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      while (true) {
        // Backspace BY
        setDisplayText('B');
        await new Promise(resolve => setTimeout(resolve, 100));
        setDisplayText('');
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Type FOR
        setDisplayText('F');
        await new Promise(resolve => setTimeout(resolve, 150));
        setDisplayText('FO');
        await new Promise(resolve => setTimeout(resolve, 150));
        setDisplayText('FOR');
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Backspace FOR
        setDisplayText('FO');
        await new Promise(resolve => setTimeout(resolve, 100));
        setDisplayText('F');
        await new Promise(resolve => setTimeout(resolve, 100));
        setDisplayText('');
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Type BY
        setDisplayText('B');
        await new Promise(resolve => setTimeout(resolve, 150));
        setDisplayText('BY');
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    };

    sequence();
  }, []);

  return (
    <span className="inline-block min-w-[3ch]" style={{ color }}>
      {displayText}
    </span>
  );
}