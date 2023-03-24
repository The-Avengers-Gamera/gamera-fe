import React, { useState, useEffect } from 'react';

interface ICarouselProps {
  interval?: number;
}

const images = [
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Super-Mario-Odyssey.jpg',
    name: 'Super Mario Odyssey',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Super-Mario-World.jpg',
    name: 'Super Mario World',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Mario-Kart-DS.jpg',
    name: 'Mario Kart DS',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Mario-Kart-DS.jpg',
    name: 'Mario Kart DS',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/Mario-Kart-8-Deluxe.jpg',
    name: 'Mario Kart 8 Deluxe',
  },
  {
    src: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/New-Super-Mario-Bros..jpg',
    name: 'New Super Mario Bros.',
  },
];

const Carousel: React.FC<ICarouselProps> = ({ interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState<{ src: string; name: string }>(images[0]);

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
    <div
      style={{
        width: '1065px',
        height: '595px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      {images.map((image) => (
        <div key={image.src}>
          <img
            src={image.src}
            alt={image.name}
            style={{
              opacity: image === currentSlide ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontSize: '16px',
              padding: '4px 8px',
              opacity: image === currentSlide ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {image.name}
          </div>
        </div>
      ))}
      <button
        type="button"
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          fontSize: '30px',
          textAlign: 'center',
          lineHeight: '50px',
          cursor: 'pointer',
          left: -30,
        }}
        onClick={prevSlide}
      >
        {'<'}
      </button>
      <button
        type="button"
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          color: '#fff',
          fontSize: '30px',
          textAlign: 'center',
          lineHeight: '50px',
          cursor: 'pointer',
          right: -30,
        }}
        onClick={nextSlide}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
