import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactForm } from './components/ContactForm';
import heroHeadingSvgRaw from '../assets/Images/hero-heading.svg?raw';
import wordmarkSvgRaw from '../assets/Images/Wordmark.svg?raw';

function MadeWordmark({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 601 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      style={{
        color,
        display: 'inline-block',
        height: '0.70em',
        width: 'auto',
        verticalAlign: '-0.00em',
      }}
    >
      <g clipPath="url(#clip0_made)">
        <path d="M223.07 1.85V4.63C223.07 5.74 221.77 6.48 220.85 6.48H214.36C208.98 6.48 203.05 9.45 200.64 17.42L172.64 112.36C170.23 120.33 173.94 123.3 179.5 123.3H185.8C186.91 123.3 187.47 124.04 187.47 125.15V127.93C187.47 129.04 186.73 129.78 185.8 129.78H130.91C129.8 129.78 129.06 129.04 129.06 127.93V125.15C129.06 124.04 129.8 123.3 130.91 123.3H137.21C142.77 123.3 148.89 120.33 151.3 112.36L174.48 34.3L91.97 128.5C91.23 129.24 90.3 129.8 89.37 129.8H87.14C86.21 129.8 85.66 129.24 85.47 128.5L55.8 33.56L34.29 106.8C30.77 118.48 33.73 123.3 44.12 123.3H48.94C50.05 123.3 50.98 124.04 50.98 125.15V127.93C50.98 129.04 50.05 129.78 48.94 129.78H1.67C0.56 129.78 0 129.04 0 127.93V125.15C0 124.04 0.56 123.3 1.67 123.3H8.35C13.91 123.3 20.96 118.48 24.48 106.8L49.51 22.25C51.74 14.09 51.18 6.49 40.98 6.49H34.68C33.57 6.49 33.01 5.93 33.01 4.64V1.85C33.01 0.74 33.57 0 34.68 0H64.9C65.83 0 67.13 0.56 67.31 1.3L100.32 105.88L191.36 1.3C192.1 0.56 192.84 0 193.77 0H221.03C222.14 0 223.07 0.74 223.07 1.85ZM194.14 83.44L258.48 1.3C259.22 0.37 260.15 0 261.08 0H264.6C265.53 0 266.27 0.37 266.45 1.3L287.22 113.67C288.33 119.23 291.3 123.31 299.27 123.31C300.2 123.31 300.38 124.05 300.38 125.16V127.94C300.38 129.05 299.82 129.79 298.71 129.79H251.43C250.32 129.79 249.39 129.05 249.39 127.94V125.16C249.39 124.05 250.5 123.31 251.62 123.31H254.59C263.49 123.31 266.46 116.82 264.97 109.4L261.45 90.3H196.37C192.48 89.74 191.55 86.96 194.15 83.44H194.14ZM259.78 81.96L249.4 27.07L205.83 81.96H259.79H259.78Z" fill="currentColor" />
        <path d="M295.93 127.94V125.16C295.93 124.05 296.67 123.31 297.78 123.31H304.08C309.64 123.31 315.95 120.34 318.17 112.37L346.35 17.43C347.83 11.13 347.28 6.49 339.49 6.49H333.19C332.08 6.49 331.52 5.75 331.52 4.64V1.85C331.52 0.74 332.08 0 333.19 0H403.28C439.44 0 461.69 16.87 461.69 48.21C461.69 91.6 424.79 129.8 367.86 129.8H297.77C296.66 129.8 295.92 129.06 295.92 127.95L295.93 127.94ZM364.91 121.45C414.97 121.45 439.08 86.03 439.08 54.7C439.08 16.32 416.83 8.16 395.32 8.16C385.49 8.16 376.78 9.64 369.17 12.42L338.02 117.56C344.14 119.97 352.3 121.45 364.91 121.45Z" fill="currentColor" />
        <path d="M569.79 38.94C570.16 37.83 571.09 37.09 572.2 37.09H574.8C575.73 37.09 576.28 37.83 576.1 38.94L563.31 82.14C562.94 83.25 562.01 83.99 561.08 83.99H558.3C557.19 83.99 556.63 83.25 557 82.14C559.78 72.5 553.29 64.71 541.05 64.71H502.48L488.94 110.51C486.34 118.48 490.42 121.45 495.99 121.45H523.8C541.23 121.45 556.62 114.96 584.06 88.07C586.66 85.66 589.07 87.33 587.58 89.74L559.95 128.31C559.21 129.42 558.84 129.79 557.17 129.79H446.29C445.18 129.79 444.44 129.05 444.44 127.94V125.16C444.44 124.05 445.18 123.31 446.29 123.31H452.59C458.15 123.31 464.46 120.34 466.68 112.37L494.86 17.43C497.09 9.46 493.38 6.49 488 6.49H481.7C480.59 6.49 480.03 5.75 480.03 4.64V1.85C480.03 0.74 480.59 0 481.7 0H599.26C600.19 0 600.74 0.56 600.56 1.85L593.33 35.97C592.77 38.57 588.32 39.31 588.14 36.9C585.92 9.09 579.98 8.34 564.41 8.34H519.17L504.89 56.36H543.46C555.7 56.36 567.01 48.57 569.79 38.93V38.94Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_made">
          <rect width="600.61" height="129.8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const colorizeSvg = (svgRaw: string) =>
  svgRaw
    .replace(/\sfill="(?!none|transparent|currentColor)[^"]*"/gi, ' fill="currentColor"')
    .replace(/\sstroke="(?!none|transparent|currentColor)[^"]*"/gi, ' stroke="currentColor"')
    .replace(/fill:\s*(?!none|transparent|currentColor)[^;"}]+/gi, 'fill: currentColor')
    .replace(/stroke:\s*(?!none|transparent|currentColor)[^;"}]+/gi, 'stroke: currentColor')
    .replace(
      /<(path|circle|ellipse|polygon|polyline|rect|line)\b((?:(?!\sfill=)[^>])*)\/?>/gi,
      (match, tag, attrs) => {
        if (/\sfill=/.test(match)) return match;
        if (/\/>$/.test(match)) return `<${tag}${attrs} fill="currentColor" />`;
        return `<${tag}${attrs} fill="currentColor">`;
      }
    )
    .replace(
      /<svg([^>]*)>/,
      '<svg$1 style="width: 100%; height: auto;" role="img" aria-hidden="true">'
    );

function WordmarkSvg({ color }: { color: string }) {
  const svgHtml = colorizeSvg(wordmarkSvgRaw);

  return (
    <div
      className="mx-auto max-w-7xl mb-1 md:mb-2"
      style={{ color }}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
}

function HeroHeadingSvg({ color }: { color: string }) {
  const svgHtml = colorizeSvg(heroHeadingSvgRaw);

  return (
    <div
      className="mx-auto w-full max-w-7xl mb-0 md:mb-6 md:scale-[1.00] lg:scale-[1.03] origin-center"
      style={{ color }}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
}

interface ColorScheme {
  bg: string;
  text: string;
}

const colorSchemes: ColorScheme[] = [
  { bg: '#0A289C', text: '#F9F6E3' },
  { bg: '#FF98EC', text: '#F10000' },
  { bg: '#10E086', text: '#FFF775' },
  { bg: '#000000', text: '#F9F6E3' },
  { bg: '#FFF775', text: '#000000' },
  { bg: '#F10000', text: '#000000' },
  { bg: '#262626', text: '#595959' },
  { bg: '#F9F6E3', text: '#0A289C' },
];

const heroInfoMonoFont = "'ABCFavoritMono', monospace";
const heroDateFont = "'ABCGaisyr-Light', sans-serif";
const heroDisplayFont = "'Enigma-EnigmaLargeRoman', serif";
const utilityMonoClass = 'text-[13px] md:text-sm';
const serifBodyClass = 'text-[15px] md:text-[17px]';
const heroTaglineClass = utilityMonoClass;
const heroHeadingWrapClass = 'w-full max-w-7xl mx-auto text-center mt-auto pb-2 md:pb-0 md:mt-4 lg:mt-6';
const desktopHeroMetaRowClass = 'hidden md:grid md:grid-cols-[12rem_1fr_12rem] items-start';
const desktopHeroDateClass = 'tracking-wider md:text-[35px] md:translate-x-4 whitespace-nowrap';
const desktopHeroCountdownClass = 'tracking-wider md:text-[35px] text-right md:-translate-x-6 whitespace-nowrap tabular-nums';
const mobileHeroMetaClass = 'md:hidden w-full';
const mobileHeroTaglineClass = 'mt-4 text-[13px] text-center mx-auto max-w-[24rem]';

function Footer({ textColor }: { textColor: string }) {
  return (
    <footer className="relative z-10 mt-16 md:mt-14 pt-8 md:pt-12 pb-10 md:pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid gap-6 md:gap-12 md:grid-cols-2 md:items-end">
        {/* Left */}
        <div
          className={`order-2 md:order-1 flex items-baseline gap-6 md:gap-12 flex-wrap md:justify-start mt-2 md:mt-0 ${utilityMonoClass}`}
          style={{
            color: textColor,
            fontFamily: heroInfoMonoFont,
            letterSpacing: "0.02em",
          }}
        >
          <a href="mailto:hello@enigma.net.au" className="hover:opacity-80 transition-opacity">CONTACT</a>
          <a href="/privacy-policy.html" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">PRIVACY POLICY</a>
          <span className="inline-flex items-baseline gap-[0.18em]">
            <span className="text-[1em] leading-none">&copy;</span>
            <span className="text-[1em] leading-none">2026</span>
          </span>
        </div>

        {/* Right */}
        <div
          className={`order-1 md:order-2 max-w-[620px] md:max-w-none ${serifBodyClass}`}
          style={{
            color: textColor,
            fontFamily: heroDateFont,
            lineHeight: 1.28,
            opacity: 0.9,
          }}
        >
          We acknowledge the Traditional Custodians of the lands where we work and live. We celebrate the
          diversity of Aboriginal peoples and their ongoing cultures and connections to the lands and
          waters of NSW and QLD. We pay our respects to Elders past, present and emerging, and acknowledge
          the Aboriginal and Torres Strait Islander people who contributed to the development of this
          website. We advise this website may contain images, voices or names of deceased persons in
          photographs, film, audio recordings or historical content.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [showShowcase, setShowShowcase] = useState(false);
  const [hasDesktopLens, setHasDesktopLens] = useState(false);
  const [currentSchemeIndex, setCurrentSchemeIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  // Shared form state (keeps the main layer + preview layer perfectly in sync)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    enquiryType: '',
    message: '',
  });
  const setFormField = (field: keyof typeof formValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // Single location selection (radio behaviour)
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  // Track whether the cursor is currently over the contact form
  const isOverFormRef = useRef(false);

  // Launch date + live countdown
  const LAUNCH_DATE_LABEL = '15.07.26';
  // Target: 15 July 2026 00:00 (local time)
  const launchDateRef = useRef(new Date(2026, 6, 15, 0, 0, 0));

  const pad2 = (n: number) => String(n).padStart(2, '0');
  const formatCountdown = (msRemaining: number) => {
    const totalSeconds = Math.max(0, Math.floor(msRemaining / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${pad2(days)}:${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
  };

  const [countdown, setCountdown] = useState(() => {
    const diff = launchDateRef.current.getTime() - Date.now();
    return formatCountdown(diff);
  });

  const SMALL_RADIUS = 10;
  const LARGE_RADIUS = 860;
  const IDLE_DELAY_MS = 1000; // 1 second delay before the lens expands

  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const previewMaskRef = useRef<HTMLDivElement>(null);
  const previewContentRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const pendingPointerRef = useRef<{ x: number; y: number } | null>(null);
  const lensRadiusRef = useRef(SMALL_RADIUS);
  const lensTransitionModeRef = useRef<'active' | 'idle'>('active');
  const pointerFrameRef = useRef<number | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const formBoundsRef = useRef<DOMRectReadOnly | null>(null);

  // Check URL for showcase mode
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('showcase') === 'true') {
      setShowShowcase(true);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateHasDesktopLens = () => setHasDesktopLens(mediaQuery.matches);

    updateHasDesktopLens();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateHasDesktopLens);
      return () => mediaQuery.removeEventListener('change', updateHasDesktopLens);
    }

    mediaQuery.addListener(updateHasDesktopLens);

    return () => mediaQuery.removeListener(updateHasDesktopLens);
  }, []);

  useEffect(() => {
    const update = () => {
      const diff = launchDateRef.current.getTime() - Date.now();
      setCountdown(formatCountdown(diff));
    };

    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  // If showcase mode, render all color schemes
  if (showShowcase) {
    return (
      <div className="w-full">
        {colorSchemes.map((scheme, index) => (
          <div
            key={index}
            className="w-full min-h-screen"
            style={{ backgroundColor: scheme.bg }}
          >
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col py-8 md:py-0">
              <div className="relative flex flex-col items-center justify-start min-h-screen pt-4 px-4 md:pt-2 md:px-8">
                <div className="absolute top-4 md:top-8 left-0 right-0 mx-auto w-full max-w-7xl z-10">
                  <WordmarkSvg color={scheme.text} />
                </div>

                {/* Date and Tagline */}
                <div className="absolute top-20 md:top-24 left-0 right-0 mx-auto w-full max-w-7xl z-0">
                  {/* Desktop: date | tagline | countdown on one line */}
                  <div className={desktopHeroMetaRowClass}>
                    <span
                      className={desktopHeroDateClass}
                      style={{ color: scheme.text, fontFamily: heroDateFont }}
                    >
                      {LAUNCH_DATE_LABEL}
                    </span>

                    <div
                      className={`mt-3 ${heroTaglineClass} text-center mx-auto max-w-[24rem]`}
                    style={{ color: scheme.text, fontFamily: heroInfoMonoFont }}
                    >
                      WE'LL BE RIGHT BACK.
                      <br />
                      A NEW ENIGMA IS UNDER CONSTRUCTION.
                    </div>

                    <span
                      className={desktopHeroCountdownClass}
                      style={{ color: scheme.text, fontFamily: heroDateFont }}
                    >
                      {countdown}
                    </span>
                  </div>

                  {/* Mobile: date + countdown row, tagline underneath centred */}
                  <div className={mobileHeroMetaClass}>
                    <div className="flex items-start justify-between">
                      <span
                        className="tracking-wider text-lg"
                        style={{ color: scheme.text, fontFamily: heroDateFont }}
                      >
                        {LAUNCH_DATE_LABEL}
                      </span>
                      <span
                        className="tracking-wider text-lg text-right"
                        style={{ color: scheme.text, fontFamily: heroDateFont }}
                      >
                        {countdown}
                      </span>
                    </div>

                    <div
                      className={mobileHeroTaglineClass}
                    style={{ color: scheme.text, fontFamily: "'OCR-B', 'OCR B', monospace" }}
                    >
                      WE'LL BE RIGHT BACK.
                      <br />
                      A NEW ENIGMA IS UNDER CONSTRUCTION.
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-7xl flex flex-col flex-1">
                  {/* Main Heading */}
                  <div className={heroHeadingWrapClass}>
                    <HeroHeadingSvg color={scheme.text} />
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer between hero CTA and contact section */}
            <div className="h-16 sm:h-20 md:h-40 lg:h-48" />

            {/* Contact Section */}
            <div id="contact" className="pt-6 pb-12 md:py-8">
              <ContactForm
                backgroundColor={scheme.bg}
                textColor={scheme.text}
                borderColor={scheme.text}
                submitButtonActive={isSubmitButtonActive}
                onSubmitButtonActiveChange={setIsSubmitButtonActive}
              />
            </div>
            <Footer textColor={scheme.text} />
          </div>
        ))}
      </div>
    );
  }

  const currentScheme = colorSchemes[currentSchemeIndex];
  const nextScheme = colorSchemes[(currentSchemeIndex + 1) % colorSchemes.length];

  const getLensTransition = (idle: boolean) =>
    idle
      ? 'clip-path 1.34s cubic-bezier(0.15, 0.78, 0.72, 1), background-color 0.5s ease-out'
      : 'clip-path 0.22s ease-out, background-color 0.5s ease-out';

  const getCursorTransition = (idle: boolean) =>
    idle
      ? 'width 1.34s cubic-bezier(0.15, 0.78, 0.72, 1), height 1.34s cubic-bezier(0.15, 0.78, 0.72, 1)'
      : 'width 0.22s ease-out, height 0.22s ease-out';

  const updateFormBounds = () => {
    const form = contactRef.current?.querySelector('form');
    formBoundsRef.current = form?.getBoundingClientRect() ?? null;
  };

  const isPointOverForm = (x: number, y: number) => {
    const rect = formBoundsRef.current;
    return !!rect && x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };

  const applyLensPosition = (x: number, y: number) => {
    if (previewMaskRef.current) {
      previewMaskRef.current.style.clipPath = `circle(${Math.round(lensRadiusRef.current)}px at ${x}px ${y}px)`;
    }

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    }
  };

  const syncLensPosition = (x: number, y: number) => {
    lastPointerRef.current = { x, y };
    pendingPointerRef.current = { x, y };

    if (pointerFrameRef.current !== null) return;

    pointerFrameRef.current = window.requestAnimationFrame(() => {
      pointerFrameRef.current = null;

      const point = pendingPointerRef.current;
      if (!point) return;

      applyLensPosition(point.x, point.y);
    });
  };

  const syncLensRadius = (radius: number, idle: boolean) => {
    const nextMode = idle ? 'idle' : 'active';
    const nextRadius = Math.round(radius);
    const currentRadius = Math.round(lensRadiusRef.current);

    if (nextRadius === currentRadius && lensTransitionModeRef.current === nextMode) {
      return;
    }

    lensRadiusRef.current = radius;
    lensTransitionModeRef.current = nextMode;

    const { x, y } = lastPointerRef.current;

    if (previewMaskRef.current) {
      previewMaskRef.current.style.transition = getLensTransition(idle);
      previewMaskRef.current.style.clipPath = `circle(${Math.round(radius)}px at ${x}px ${y}px)`;
    }

    if (cursorRef.current) {
      const diameter = `${Math.round(radius * 2)}px`;
      cursorRef.current.style.transition = getCursorTransition(idle);
      cursorRef.current.style.width = diameter;
      cursorRef.current.style.height = diameter;
    }
  };

  const syncPreviewScroll = () => {
    updateFormBounds();

    if (previewContentRef.current) {
      previewContentRef.current.style.transform = `translate3d(0, -${window.scrollY}px, 0)`;
    }
  };

  const schedulePreviewScrollSync = () => {
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      syncPreviewScroll();
    });
  };

  useEffect(() => {
    if (!hasDesktopLens) {
      lensRadiusRef.current = SMALL_RADIUS;
      return;
    }

    const clampToViewport = (x: number, y: number) => ({
      x: Math.max(0, Math.min(x, window.innerWidth)),
      y: Math.max(0, Math.min(y, window.innerHeight)),
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y } = clampToViewport(e.clientX, e.clientY);

      syncLensPosition(x, y);
      syncLensRadius(SMALL_RADIUS, false);

      // If the cursor is over the form, keep the lens small (no idle expansion)
      const overForm = isPointOverForm(x, y);
      isOverFormRef.current = overForm;

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      // If we're over the form, don't schedule idle expansion at all
      if (overForm) {
        return;
      }

      // After a brief pause, grow the lens with an ease-in curve.
      idleTimerRef.current = setTimeout(() => {
        // If the cursor ended up over the form, still do not expand
        if (isOverFormRef.current) return;

        syncLensRadius(LARGE_RADIUS, true);
      }, IDLE_DELAY_MS);
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || (e as MouseEvent & { toElement?: EventTarget | null }).toElement) return;
      const { x, y } = clampToViewport(e.clientX, e.clientY);
      syncLensPosition(x, y);
    };

    const handleScroll = () => schedulePreviewScrollSync();
    const handleResize = () => {
      updateFormBounds();
      syncLensPosition(lastPointerRef.current.x, lastPointerRef.current.y);
    };

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    lastPointerRef.current = { x: initialX, y: initialY };
    applyLensPosition(initialX, initialY);
    syncLensRadius(SMALL_RADIUS, false);
    syncPreviewScroll();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' && contactRef.current
        ? new ResizeObserver(updateFormBounds)
        : null;
    if (resizeObserver && contactRef.current) {
      resizeObserver.observe(contactRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      resizeObserver?.disconnect();

      if (pointerFrameRef.current !== null) {
        window.cancelAnimationFrame(pointerFrameRef.current);
        pointerFrameRef.current = null;
      }

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };
  }, [hasDesktopLens]);

  const handleClick = (e: React.MouseEvent) => {
    // Don't trigger the colour transition when interacting with links or form controls.
    const target = e.target as HTMLElement | null;
    if (target) {
      const isInteractiveElement = !!target.closest(
        'a, button, input, textarea, select, label, [role="button"], [role="link"]'
      );
      if (isInteractiveElement) return;
    }

    if (isTransitioning) return;

    const { clientX, clientY } = e;
    const nextClickPosition =
      clientX || clientY
        ? { x: clientX, y: clientY }
        : lastPointerRef.current;

    setClickPosition(nextClickPosition);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSchemeIndex((prev) => (prev + 1) % colorSchemes.length);
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <div
      className={`relative w-full min-h-screen overflow-y-auto overflow-x-hidden transition-colors duration-500 ease-out ${
        hasDesktopLens ? 'cursor-none' : ''
      }`}
      style={{ backgroundColor: currentScheme.bg }}
      onClick={handleClick}
    >
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col">
        {/* Main Content - Current Color Scheme */}
        <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-4 px-4 md:pt-1 md:px-8">
          <div className="w-full max-w-7xl flex flex-col flex-1">
            <div className="mt-0.5 md:mt-1">
              <WordmarkSvg color={currentScheme.text} />
            </div>

            {/* Date and Tagline */}
            <div className="mt-0">
              <div className={desktopHeroMetaRowClass}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`${desktopHeroDateClass} transition-colors duration-500 ease-out`}
                  style={{ color: currentScheme.text, fontFamily: heroDateFont }}
                >
                  {LAUNCH_DATE_LABEL}
                </motion.span>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`mt-2 ${heroTaglineClass} text-center mx-auto max-w-[24rem] transition-colors duration-500 ease-out`}
                  style={{ color: currentScheme.text, fontFamily: heroInfoMonoFont }}
                >
                  WE'LL BE RIGHT BACK.
                  <br />
                  A NEW ENIGMA IS UNDER CONSTRUCTION.
                </motion.div>

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`${desktopHeroCountdownClass} transition-colors duration-500 ease-out`}
                  style={{ color: currentScheme.text, fontFamily: heroDateFont }}
                >
                  {countdown}
                </motion.span>
              </div>

              <div className={mobileHeroMetaClass}>
                <div className="flex items-start justify-between">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="tracking-wider text-lg transition-colors duration-500 ease-out"
                    style={{ color: currentScheme.text, fontFamily: heroDateFont }}
                  >
                    {LAUNCH_DATE_LABEL}
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="tracking-wider text-lg text-right transition-colors duration-500 ease-out"
                    style={{ color: currentScheme.text, fontFamily: heroDateFont }}
                  >
                    {countdown}
                  </motion.span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`${mobileHeroTaglineClass} transition-colors duration-500 ease-out`}
                  style={{ color: currentScheme.text, fontFamily: heroInfoMonoFont }}
                >
                  WE'LL BE RIGHT BACK.
                  <br />
                  A NEW ENIGMA IS UNDER CONSTRUCTION.
                </motion.div>
              </div>
            </div>
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={heroHeadingWrapClass}
            >
              <HeroHeadingSvg color={currentScheme.text} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Spacer between hero CTA and contact section */}
      <div className="h-16 sm:h-20 md:h-40 lg:h-48" />

      {/* Contact Section - Current Color Scheme */}
      <div
        id="contact"
        ref={contactRef}
        className="relative z-10 pt-6 pb-12 md:pt-14 md:pb-8"
      >
        <ContactForm
          backgroundColor={currentScheme.bg}
          textColor={currentScheme.text}
          borderColor={currentScheme.text}
          submitButtonActive={isSubmitButtonActive}
          onSubmitButtonActiveChange={setIsSubmitButtonActive}
          selectedLocations={selectedLocation ? [selectedLocation] : []}
          onToggleLocation={(loc) => setSelectedLocation(selectedLocation === loc ? '' : loc)}
          formValues={formValues}
          onFormFieldChange={setFormField}
        />
      </div>
      <Footer textColor={currentScheme.text} />

      {hasDesktopLens ? (
        <>
          {/* Unified Preview Layer - Next Color Scheme with Cursor Mask */}
          <div
            ref={previewMaskRef}
            className="fixed inset-0 z-20 pointer-events-none"
            style={{
              backgroundColor: nextScheme.bg,
              clipPath: 'circle(0px at 0px 0px)',
              transition: getLensTransition(false),
              willChange: 'clip-path',
            }}
          >
            <div
              ref={previewContentRef}
              style={{
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform',
                contain: 'layout paint style',
              }}
            >
              {/* Hero Section Preview */}
              <div className="min-h-screen flex flex-col">
                <div className="relative flex flex-col items-center justify-start min-h-screen pt-4 px-4 md:pt-1 md:px-8">
                  <div className="w-full max-w-7xl flex flex-col flex-1">
                    <div className="mt-0.5 md:mt-1">
                      <WordmarkSvg color={nextScheme.text} />
                    </div>

                    {/* Date and Tagline - Preview */}
                    <div className="mt-0">
                      <div className={desktopHeroMetaRowClass}>
                        <span
                          className={`${desktopHeroDateClass} transition-colors duration-500 ease-out`}
                          style={{ color: nextScheme.text, fontFamily: heroDateFont }}
                        >
                          {LAUNCH_DATE_LABEL}
                        </span>

                        <div
                          className={`mt-2 ${heroTaglineClass} text-center mx-auto max-w-[24rem] transition-colors duration-500 ease-out`}
                          style={{ color: nextScheme.text, fontFamily: heroInfoMonoFont }}
                        >
                          WE'LL BE RIGHT BACK.
                          <br />
                          A NEW ENIGMA IS UNDER CONSTRUCTION.
                        </div>

                        <span
                          className={`${desktopHeroCountdownClass} transition-colors duration-500 ease-out`}
                          style={{ color: nextScheme.text, fontFamily: heroDateFont }}
                        >
                          {countdown}
                        </span>
                      </div>

                      <div className={mobileHeroMetaClass}>
                        <div className="flex items-start justify-between">
                          <span
                            className="tracking-wider text-lg transition-colors duration-500 ease-out"
                            style={{ color: nextScheme.text, fontFamily: heroDateFont }}
                          >
                            {LAUNCH_DATE_LABEL}
                          </span>
                          <span
                            className="tracking-wider text-lg text-right transition-colors duration-500 ease-out"
                            style={{ color: nextScheme.text, fontFamily: heroDateFont }}
                          >
                            {countdown}
                          </span>
                        </div>

                        <div
                          className={`${mobileHeroTaglineClass} transition-colors duration-500 ease-out`}
                          style={{ color: nextScheme.text, fontFamily: heroInfoMonoFont }}
                        >
                          WE'LL BE RIGHT BACK.
                          <br />
                          A NEW ENIGMA IS UNDER CONSTRUCTION.
                        </div>
                      </div>
                    </div>

                    {/* Main Heading */}
                    <div className={heroHeadingWrapClass}>
                      <HeroHeadingSvg color={nextScheme.text} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-16 sm:h-20 md:h-40 lg:h-48" />

              <div className="pt-6 pb-12 md:pt-14 md:pb-8">
                <ContactForm
                  formId="contact-form-preview"
                  isPreview
                  backgroundColor={nextScheme.bg}
                  textColor={nextScheme.text}
                  borderColor={nextScheme.text}
                  submitButtonActive={isSubmitButtonActive}
                  onSubmitButtonActiveChange={setIsSubmitButtonActive}
                  selectedLocations={selectedLocation ? [selectedLocation] : []}
                  onToggleLocation={(loc) => setSelectedLocation(selectedLocation === loc ? '' : loc)}
                  formValues={formValues}
                  onFormFieldChange={setFormField}
                />
              </div>
              <Footer textColor={nextScheme.text} />
            </div>
          </div>

          <AnimatePresence>
            {!isTransitioning && (
              <div
                ref={cursorRef}
                className="fixed pointer-events-none z-50 rounded-full"
                style={{
                  border: `2px solid ${nextScheme.text}`,
                  left: '0px',
                  top: '0px',
                  width: `${SMALL_RADIUS * 2}px`,
                  height: `${SMALL_RADIUS * 2}px`,
                  transform: 'translate3d(0, 0, 0) translate(-50%, -50%)',
                  transition: getCursorTransition(false),
                  willChange: 'transform, width, height',
                }}
              />
            )}
          </AnimatePresence>
        </>
      ) : null}

      {/* Expanding Circle Transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed pointer-events-none z-[100] rounded-full"
            style={{
              left: clickPosition.x,
              top: clickPosition.y,
              backgroundColor: nextScheme.bg,
            }}
            initial={{
              width: 80,
              height: 80,
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              width: '300vmax',
              height: '300vmax',
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
