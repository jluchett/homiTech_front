// components/HeroSection.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useStore from '../../store/globalStore';
import './heroSection.css';

const HeroSection = () => {
  const { currentSlide, setCurrentSlide, isAutoplaying, setAutoplaying } = useStore();
  const slides = [
    {
      image: '/images/promo3.jpg',
      ctaText: 'Compra ahora',
      link: '/productos',
    },
    {
      image: '/images/promo3.jpg',
      ctaText: 'Ver ofertas',
      link: '/ofertas',
    },
    {
      image: '/images/promo3.jpg',
      ctaText: 'Nuevas colecciones',
      link: '/colecciones',
    },
  ];

  useEffect(() => {
    let sliderInterval;
    if (isAutoplaying) {
      sliderInterval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }, 5000);
    }

    return () => clearInterval(sliderInterval);
  }, [currentSlide, isAutoplaying, setCurrentSlide, slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <section className="hero-section" onMouseEnter={() => setAutoplaying(false)} onMouseLeave={() => setAutoplaying(true)}>
      <div className="slider">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
          <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
          <div className="cta">
            <Link to={slide.link} className="cta-button">{slide.ctaText}</Link>
          </div>
        </div>
        
        ))}
        <button className="prev" onClick={handlePrevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next" onClick={handleNextSlide}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
