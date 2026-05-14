import { StaticColorScheme } from './components/StaticColorScheme';

const colorSchemes = [
  { bg: '#0A289C', text: '#F9F6E3' },
  { bg: '#FF98EC', text: '#F10000' },
  { bg: '#10E086', text: '#FFF775' },
  { bg: '#000000', text: '#F9F6E3' },
  { bg: '#FFF775', text: '#000000' },
  { bg: '#F10000', text: '#000000' },
  { bg: '#262626', text: '#595959' },
  { bg: '#F9F6E3', text: '#0A289C' },
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
