import { useState, useEffect } from 'react';
import { Shield, Users, Building2, Target, Award, Heart, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

function Sobre() {
  
  const [publicoIndex, setPublicoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('right');

  const publicos = [
    {
      id: 0,
      nome: "Particulares",
      icone: <Users size={24} color="#D1B274" />,
      descricao: "Para as famílias e indivíduos, a Premium Corretora oferece proteção completa para o seu património, saúde e bem-estar. Trabalhamos com as melhores seguradoras para encontrar soluções acessíveis e personalizadas. Seja para o seu carro, casa, saúde ou vida, nós cuidamos de tudo para que você tenha tranquilidade. O nosso compromisso é proteger o que é mais importante para si e sua família, com transparência e atendimento humanizado.",
      imagem: "/images/sobre/particulares.png"
    },
    {
      id: 1,
      nome: "Empresas",
      icone: <Building2 size={24} color="#D1B274" />,
      descricao: "As empresas enfrentam desafios únicos e precisam de proteção à altura. A Premium Corretora desenvolve soluções corporativas completas, incluindo seguros de acidente de trabalho, transporte de mercadorias, incêndio e garantia. Ajudamos o seu negócio a cumprir as obrigações legais enquanto protege o seu património e colaboradores. Com as nossas parceiras, garantimos a continuidade das suas operações mesmo diante de imprevistos. Conte connosco para crescer com segurança.",
      imagem: "/images/sobre/empresas.jpg"
    }
  ];

  const publicoAtual = publicos[publicoIndex];

  const proximoPublico = () => {
    setDirection('right');
    setPublicoIndex((prev) => (prev + 1) % publicos.length);
    setIsAutoPlaying(false);
  };

  const publicoAnterior = () => {
    setDirection('left');
    setPublicoIndex((prev) => (prev - 1 + publicos.length) % publicos.length);
    setIsAutoPlaying(false);
  };

  // Auto-play que vai e volta (alterna entre 0 e 1)
  useEffect(() => {
    if (isAutoPlaying) {
      let currentDirection = 1; // 1 = próximo, -1 = anterior
      
      const interval = setInterval(() => {
        setPublicoIndex((prev) => {
          const nextIndex = prev + currentDirection;
          
          // Se chegou no fim, volta
          if (nextIndex >= publicos.length) {
            currentDirection = -1;
            setDirection('left');
            return prev - 1;
          }
          // Se chegou no início, vai
          if (nextIndex < 0) {
            currentDirection = 1;
            setDirection('right');
            return prev + 1;
          }
          
          setDirection(currentDirection === 1 ? 'right' : 'left');
          return nextIndex;
        });
      }, 5000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying]);

  return (
    <div style={{ padding: '20px', maxWidth: '100%', overflowX: 'hidden' }}>
      <h1 style={{ color: '#D1B274', marginBottom: '30px' }}>Sobre a Premium</h1>
      
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#000000' }}>
        Somos uma empresa de corretagem de seguros dedicada a oferecer soluções personalizadas e seguras para cada cliente. 
        Atuamos com profissionalismo e transparência, conectando você às melhores opções do mercado. 
        A nossa missão é proteger o que é mais importante para você, com confiança e tranquilidade.
      </p>
      
      {/* Missão, Visão, Valores */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: '#ffffff',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1px solid #888',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#D1B274';
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#888';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }}>
          <Target size={48} color="#D1B274" />
          <h3 style={{ color: '#D1B274', marginTop: '1rem' }}>Missão</h3>
          <p style={{ color: '#000000' }}>Proteger o que é mais importante para você com soluções personalizadas</p>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1px solid #888',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#D1B274';
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#888';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }}>
          <Award size={48} color="#D1B274" />
          <h3 style={{ color: '#D1B274', marginTop: '1rem' }}>Visão</h3>
          <p style={{ color: '#000000' }}>Ser referência em corretagem de seguros em Moçambique</p>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1px solid #888',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#D1B274';
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#888';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }}>
          <Shield size={48} color="#D1B274" />
          <h3 style={{ color: '#D1B274', marginTop: '1rem' }}>Valores</h3>
          <p style={{ color: '#000000' }}>Transparência, confiança e compromisso com o cliente</p>
        </div>
      </div>

      <h3 style={{ color: '#D1B274', marginBottom: '1rem' }}>Público Alvo</h3>
      
      {/* Carrossel Automático com Efeito de Slide */}
      <div style={{ position: 'relative' }}>
        {/* Setas de navegação */}
        <div 
          onClick={publicoAnterior}
          style={{
            position: 'absolute',
            left: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '50%',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
        >
          <ChevronLeft size={24} color="#888" />
        </div>

        <div 
          onClick={proximoPublico}
          style={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '50%',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
        >
          <ChevronRight size={24} color="#888" />
        </div>

        {/* Conteúdo do carrossel com animação de slide */}
        <div className="carrossel-wrapper" style={{
          overflow: 'hidden',
          borderRadius: '5px'
        }}>
          <div 
            key={publicoIndex}
            className={`slide-animation slide-${direction}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '2rem',
              background: '#ffffff',
              border: '1px solid #888',
              borderRadius: '5px',
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <div className="detalhe-imagem" style={{
              flex: '1',
              minWidth: '250px',
              position: 'relative',
              minHeight: '300px',
              overflow: 'hidden'
            }}>
              <img 
                src={publicoAtual.imagem}
                alt={publicoAtual.nome}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=Premium+Corretora';
                }}
              />
            </div>

            <div className="detalhe-texto" style={{
              flex: '1',
              minWidth: '250px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1rem'
              }}>
                {publicoAtual.icone}
                <h2 style={{ color: '#D1B274', margin: 0 }}>{publicoAtual.nome}</h2>
              </div>
              <p style={{
                color: '#000000',
                lineHeight: '1.8',
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                {publicoAtual.descricao}
              </p>
              <button
                onClick={() => window.location.href = '/contactos'}
                style={{
                  background: '#D1B274',
                  color: '#000000',
                  border: 'none',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: 'fit-content'
                }}
              >
                Solicitar Cotação <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores (dots) */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '1.5rem'
      }}>
        {publicos.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              if (index > publicoIndex) {
                setDirection('right');
              }
              if (index < publicoIndex) {
                setDirection('left');
              }
              setPublicoIndex(index);
              setIsAutoPlaying(false);
            }}
            style={{
              width: index === publicoIndex ? '30px' : '10px',
              height: '10px',
              borderRadius: index === publicoIndex ? '5px' : '50%',
              background: index === publicoIndex ? '#D1B274' : '#ccc',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>


{/* Porquê escolher a Premium - SEM ESPAÇOS VAZIOS */}
<div style={{
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem'
}}>
  <div className="porque-escolher-container" style={{ 
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0',
    background: '#ffffff',
    border: '1px solid #888',
    borderRadius: '5px',
    overflow: 'hidden',
    transition: 'all 0.3s',
    maxWidth: '900px',
    width: '100%'
  }}>
    {/* Imagem - sem espaços vazios */}
    <div className="porque-escolher-imagem" style={{
      flex: '1',
      minWidth: '250px',
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'stretch',
      backgroundColor: '#f5f5f5',
      margin: 0,
      padding: 0,
      lineHeight: 0
    }}>
      <img 
        src="/images/sobre/porque-escolher.png"
        alt="Premium Corretora de Seguros"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>

    {/* Texto */}
    <div className="porque-escolher-texto" style={{
      flex: '1',
      minWidth: '250px',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', color: '#D1B274', fontSize: '1.2rem', fontWeight: '600' }}>
        <Heart color="#D1B274" size={24} /> Porquê escolher a Premium?
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CheckCircle size={18} color="#D1B274" />
          <span style={{ color: '#000000', fontSize: '0.95rem' }}>Atendimento personalizado e humanizado</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CheckCircle size={18} color="#D1B274" />
          <span style={{ color: '#000000', fontSize: '0.95rem' }}>As melhores seguradoras parceiras do mercado</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CheckCircle size={18} color="#D1B274" />
          <span style={{ color: '#000000', fontSize: '0.95rem' }}>Soluções sob medida para cada cliente</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CheckCircle size={18} color="#D1B274" />
          <span style={{ color: '#000000', fontSize: '0.95rem' }}>Transparência e confiança em cada negociação</span>
        </div>
      </div>
    </div>
  </div>
</div>

{/* CSS Responsivo - mobile imagem por cima */}
<style>{`
  @media (max-width: 768px) {
    .porque-escolher-container {
      flex-direction: column !important;
    }
    .porque-escolher-imagem {
      width: 100% !important;
      justify-content: center !important;
    }
    .porque-escolher-texto {
      text-align: left;
      padding: 1.5rem !important;
    }
  }
`}</style>

      {/* CSS Animations e Responsivo */}
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-animation {
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }

        .slide-right {
          animation-name: slideInFromRight;
        }

        .slide-left {
          animation-name: slideInFromLeft;
        }

        @media (max-width: 768px) {
          .detalhe-container {
            flex-direction: column !important;
          }
          .detalhe-imagem {
            order: -1 !important;
            min-height: 200px !important;
          }
          .detalhe-texto {
            order: 0 !important;
          }
          .porque-escolher-container {
            flex-direction: column !important;
          }
          .porque-escolher-imagem {
            order: -1 !important;
            margin-bottom: 1rem !important;
          }
          .porque-escolher-texto {
            order: 0 !important;
          }
          div[style*="position: 'absolute'"] {
            width: 30px !important;
            height: 30px !important;
          }
          div[style*="left: '-20px'"] {
            left: -10px !important;
          }
          div[style*="right: '-20px'"] {
            right: -10px !important;
          }
        }
      `}</style>
    </div>
  );
}
export default Sobre;