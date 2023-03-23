import React, { useState, useEffect } from 'react';
import style from './index.module.css';

interface ICarouselProps {
  interval?: number;
}

const images = [
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Super-Mario-Odyssey.jpg',
    name: 'Super Mario Odyssey',
    url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Super-Mario-World.jpg',
    name: 'Super Mario World',
    url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Mario-Kart-DS.jpg',
    name: 'Mario Kart DS',
    url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/New-Super-Mario-Bros.-Wii.jpg',
    name: 'New Super Mario Bros. Wii',
    url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Mario-Kart-8-Deluxe.jpg',
    name: 'Mario Kart 8 Deluxe',
    url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/New-Super-Mario-Bros..jpg',
    name: 'New Super Mario Bros.',
    url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md',
  },
];

const Carousel: React.FC<ICarouselProps> = ({ interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState<{ src: string; name: string; url: string }>(
    images[0]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex: number = images.indexOf(currentSlide);
      setCurrentSlide(images[(currentIndex + 1) % images.length]);
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, interval]);

  const prevSlide = (): void => {
    const currentIndex: number = images.indexOf(currentSlide);
    const prevIndex: number = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentSlide(images[prevIndex]);
  };

  const nextSlide = (): void => {
    const currentIndex: number = images.indexOf(currentSlide);
    const nextIndex: number = (currentIndex + 1) % images.length;
    setCurrentSlide(images[nextIndex]);
  };

  return (
    <div className={style.container}>
      {images.map((image) => (
        <div key={image.src}>
          <a href={image.url}>
            <img
              src={image.src}
              alt={image.name}
              style={{
                opacity: image === currentSlide ? 1 : 0,
              }}
              className={style.carouselImg}
            />
          </a>

          <div className={style.contentBackground} />
          <div
            className={style.title}
            style={{
              opacity: image === currentSlide ? 1 : 0,
            }}
          >
            <a href={image.url}> {image.name}</a>
          </div>
        </div>
      ))}
      <div className={style.carouselBtnContainer}>
        <button
          type="button"
          className={`${style.carouselBtn} ${style.carouselBtnPrev}`}
          onClick={prevSlide}
        >
          {'<'}
        </button>
        <button
          type="button"
          className={`${style.carouselBtn} ${style.carouselBtnNext}`}
          onClick={nextSlide}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
