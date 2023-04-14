import React, { useState, useEffect } from 'react';
import style from './index.module.css';
import { getPopularReviews } from '@/services/article';
import { IArticleCard } from '@/interfaces/article';

interface ICarouselProps {
  interval?: number;
}

const Carousel: React.FC<ICarouselProps> = ({ interval = 5000 }) => {
  const [images, setImages] = useState<IArticleCard[]>([]);
  const [currentSlide, setCurrentSlide] = useState<IArticleCard>(images[0]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [msg, setMsg] = useState<string>('Loading...');

  useEffect(() => {
    const getImages = async () => {
      await getPopularReviews()
        .then((res) => {
          setImages(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setMsg(err.error);
        });
    };
    getImages();
  }, []);

  useEffect(() => {
    setCurrentSlide(images[0]);
  }, [images]);

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
      {isLoading
        ? [msg]
        : images.map((image) => (
            <div key={image.id}>
              <a href={image.coverImgUrl}>
                <img
                  src={image.coverImgUrl}
                  alt={image.title}
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
                <a href={image.coverImgUrl}>{image.title}</a>
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
