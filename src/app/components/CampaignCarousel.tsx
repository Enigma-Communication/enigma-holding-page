import { useEffect, useState } from 'react';
import carouselOne from '../../assets/Images/Carousel/Carousel1.avif';
import carouselTwo from '../../assets/Images/Carousel/Carousel2.avif';
import carouselThree from '../../assets/Images/Carousel/Carousel3.avif';

const campaignSlides = [
  {
    src: carouselOne,
    width: 2000,
    height: 1041,
  },
  {
    src: carouselTwo,
    width: 3024,
    height: 4032,
  },
  {
    src: carouselThree,
    width: 2048,
    height: 1166,
  },
];

export function CampaignCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval: number | undefined;
    let cancelled = false;

    const preloadImages = campaignSlides.map(
      ({ src }) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = src;

          if (image.complete) resolve();
        })
    );

    Promise.all(preloadImages).then(() => {
      if (cancelled || campaignSlides.length < 2) return;

      interval = window.setInterval(() => {
        setActiveIndex((index) => (index + 1) % campaignSlides.length);
      }, 1000);
    });

    return () => {
      cancelled = true;
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="campaign-carousel" aria-hidden="true">
      {campaignSlides.map((slide, index) => (
        <div
          key={slide.src}
          className="campaign-carousel__slide"
          data-active={index === activeIndex}
        >
          <img
            className="campaign-carousel__image"
            src={slide.src}
            alt=""
            width={slide.width}
            height={slide.height}
            loading="eager"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        </div>
      ))}
    </section>
  );
}
