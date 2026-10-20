import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SliderHome.css';

const slides = [
  { 
    id: 1, 
    img: '/images/home/carro.png',
    titulo: "Encontramos o seguro automóvel ideal para si",
    subtitulo: "O seguro automóvel certo espera por si. Nós ajudamos a encontrá-lo."
  },
  { 
    id: 2, 
    img: '/images/home/familia.png', 
    titulo: "Soluções de seguro para o que mais importa",
    subtitulo: "Proteja a sua família com as melhores opções do mercado. Nós fazemos a pesquisa por si."
  },
  { 
    id: 3, 
    img: '/images/home/negocio.png', 
    titulo: "A proteção certa para o seu negócio",
    subtitulo: "Encontramos as soluções empresariais mais adequadas, com as melhores parceiras."
  }
];

function SliderHome() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const directionRef = useRef(1);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const nextIndex = prev + directionRef.current;
        
        if (nextIndex >= slides.length) {
          directionRef.current = -1;
          return prev - 1;
        }
        if (nextIndex < 0) {
          directionRef.current = 1;
          return prev + 1;
        }

        return nextIndex;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="slider-container-full">
      {/* Setas de navegação */}
      <div 
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          borderRadius: '50%',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
      >
        <ChevronLeft size={24} color="#fff" />
      </div>

      <div 
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          borderRadius: '50%',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
      >
        <ChevronRight size={24} color="#fff" />
      </div>

      {/* Slides empilhados com transição suave (crossfade) */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide-full ${index === current ? 'active' : ''}`}
          aria-hidden={index !== current}
          style={{ '--slide-img': `url(${slide.img})` }}
        >
          {/* Fundo desfocado que preenche as laterais + foto inteira, sem cortes */}
          <div className="slide-fundo" />
          <div className="slide-foto" />

          <div className="content-left">
            <h2>{slide.titulo}</h2>
            <p>{slide.subtitulo}</p>
            <button 
              className="btn-saiba-mais"
              onClick={() => window.location.href = '/contactos'}
            >
              Saiba Mais →
            </button>
          </div>
        </div>
      ))}

      {/* Indicadores (dots) */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlaying(false);
            }}
          />
        ))}
      </div>

      {/* Ajustes responsivos */}
      <style>{`
        @media (max-width: 768px) {
          .slider-container-full div[style*="position: 'absolute'"] {
            width: 30px !important;
            height: 30px !important;
          }
          .content-left h2 {
            font-size: 1.5rem !important;
          }
          .content-left p {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default SliderHome;