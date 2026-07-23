import { useEffect, useState } from 'react';

const carouselImages = Object.entries(
  import.meta.glob(
    '../../assets/Images/Carousel/*.{avif,webp,png,jpg,jpeg}',
    {
      eager: true,
      import: 'default',
    }
  )
)
  .sort(([firstPath], [secondPath]) => {
    const firstFilename = firstPath.split('/').pop() ?? firstPath;
    const secondFilename = secondPath.split('/').pop() ?? secondPath;

    return firstFilename.localeCompare(secondFilename, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  })
  .map(([, src]) => src as string);

export function CampaignCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval: number | undefined;
    let cancelled = false;

    const preloadImages = carouselImages.map(
      (src) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = src;

          if (image.complete) resolve();
        })
    );

    Promise.all(preloadImages).then(() => {
      if (cancelled || carouselImages.length < 2) return;

      interval = window.setInterval(() => {
        setActiveIndex((index) => (index + 1) % carouselImages.length);
      }, 1000);
    });

    return () => {
      cancelled = true;
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, []);

  if (carouselImages.length === 0) return null;

  return (
    <section className="campaign-carousel" aria-hidden="true">
      {carouselImages.map((src, index) => (
        <div
          key={src}
          className="campaign-carousel__slide"
          data-active={index === activeIndex}
        >
          <img
            className="campaign-carousel__image"
            src={src}
            alt=""
            loading="eager"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        </div>
      ))}
    </section>
  );
}
