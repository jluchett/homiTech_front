import React, { useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useSliderStore from '../../store/sliderStore';
import './carousel.css';

// Importar imágenes
import imagen1 from '../../assets/Fondo.jpg';
import imagen2 from '../../assets/Homitech.png';

const HeroSection = () => {
  const { currentSlide, setCurrentSlide, isAutoplaying, setAutoplaying } = useSliderStore();

  // Usar las imágenes importadas en el array de slides
  const slides = [
    {
      image: imagen1,
      ctaText: 'Compra ahora',
      link: '/productos',
    },
    {
      image: imagen2,
      ctaText: 'Ver ofertas',
      link: '/ofertas',
    },
    {
      image: imagen1,
      ctaText: 'Nuevas colecciones',
      link: '/colecciones',
    },
  ];

  const sliderIntervalRef = useRef(null);  

  useEffect(() => {  
    if (isAutoplaying) {  
      sliderIntervalRef.current = setInterval(() => {  
        setCurrentSlide((currentSlide + 1) % slides.length);  
      }, 2000);  
    }  

    return () => {  
      if (sliderIntervalRef.current !== null) {  
        clearInterval(sliderIntervalRef.current);  
      }  
    };  
  }, [currentSlide, isAutoplaying, setCurrentSlide, slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <section
      className="hero-section"
      onMouseEnter={() => setAutoplaying(false)}
      onMouseLeave={() => setAutoplaying(true)}
    >
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-background" style={{ backgroundImage: `url(${slide.image})` }} />
            {/* Este div está siempre presente pero solo visible cuando es el slide activo */}
            {index === currentSlide && (
              <div className="cta">
                <Link to={slide.link} className="cta-button">{slide.ctaText}</Link>
              </div>
            )}
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
