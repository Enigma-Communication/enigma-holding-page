interface AnimatedWordProps {
  color: string;
}

export function AnimatedWord({ color }: AnimatedWordProps) {
  return (
    <span className="inline-block min-w-[3ch]" style={{ color }}>
      FOR
    </span>
  );
}
