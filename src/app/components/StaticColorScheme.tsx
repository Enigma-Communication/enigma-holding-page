import { AnimatedWord } from './AnimatedWord';
import { ContactForm } from './ContactForm';

interface StaticColorSchemeProps {
  bg: string;
  text: string;
}

export function StaticColorScheme({ bg, text }: StaticColorSchemeProps) {
  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: bg }}
    >
      {/* Hero Section */}
      <div className="h-screen flex flex-col">
        <div className="relative flex flex-col items-center justify-center h-full px-8">
          {/* Date and Tagline */}
          <div className="absolute top-8 left-8 right-8 flex items-start justify-between">
            <span
              className="tracking-wider"
              style={{ color: text, fontSize: '37px' }}
            >
              01.04.26
            </span>
            <div
              className="text-xs text-center max-w-xs"
              style={{ color: text, fontFamily: "'Courier Prime', 'OCR B', 'Courier New', monospace" }}
            >
              We'll be back soon.
              <br />
              A new chapter is under construction.
            </div>
            <span
              className="tracking-wider"
              style={{ color: text, fontSize: '37px' }}
            >
              00:30:55:23
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center">
            <h1
              className="text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-8"
              style={{ 
                color: text,
                fontFamily: 'serif'
              }}
            >
              UNIGNORABLE
              <br />
              <span className="block">WORK</span>
              <span className="block italic">
                MADE <AnimatedWord color={text} />
              </span>
              <span className="block">UNIGNORABLE</span>
              <span className="block">PEOPLE</span>
            </h1>

            <button
              className="mt-8 px-6 py-2 border rounded-full text-sm tracking-wider"
              style={{
                color: text,
                borderColor: text,
                fontFamily: "'Courier Prime', 'OCR B', 'Courier New', monospace"
              }}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-8">
        <ContactForm textColor={text} borderColor={text} />
      </div>
    </div>
  );
}
