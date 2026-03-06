import { StaticColorScheme } from './components/StaticColorScheme';

const colorSchemes = [
  { bg: '#081d83', text: '#FFFFFF' },
  { bg: '#000000', text: '#00ff89' },
  { bg: '#f1a2e4', text: '#dd3021' },
  { bg: '#dd3021', text: '#000000' },
  { bg: '#ffff89', text: '#f1a2e4' },
  { bg: '#00ff89', text: '#000000' },
];

export default function Showcase() {
  return (
    <div className="w-full">
      {colorSchemes.map((scheme, index) => (
        <StaticColorScheme
          key={index}
          bg={scheme.bg}
          text={scheme.text}
        />
      ))}
    </div>
  );
}
