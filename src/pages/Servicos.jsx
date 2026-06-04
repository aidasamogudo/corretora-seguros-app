import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FaCar, FaHeartbeat, FaUserInjured, FaHardHat, 
  FaFire, FaTruck, FaPlane, FaHeart, FaShieldAlt,
  FaChevronRight, FaChevronLeft
} from 'react-icons/fa';

function Servicos() {
  const location = useLocation();
  
  // Mapeamento dos nomes para os IDs
  const servicoMap = {
    'automovel': 0,
    'saude': 1,
    'acidente-pessoal': 2,
    'acidente-trabalho': 3,
    'incendio': 4,
    'transporte': 5,
    'viagem': 6,
    'vida': 7,
    'garantia': 8,
    'empresarial': 3
  };

  // Pega o parâmetro da URL e define o índice inicial
  const params = new URLSearchParams(location.search);
  const servicoParam = params.get('servico');
  
  const [servicoIndex, setServicoIndex] = useState(() => {
    if (servicoParam && servicoMap[servicoParam]) {
      return servicoMap[servicoParam];
    }
    return 0;
  });
  
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('right');

  const servicos = [
    {
      id: 0,
      nome: "Seguro Automóvel",
      icone: <FaCar size={20} color="#D1B274" />,
      descricao: "Proteja o seu veículo contra roubo, acidentes e danos a terceiros. Com o seguro automóvel, você tem cobertura nacional. Ideal para carros particulares, motas, táxis e chapas. Conte com as melhores seguradoras parceiras para garantir tranquilidade nas estradas.",
      imagem: "/images/servicos/automovel.jpg"
    },
    {
      id: 1,
      nome: "Seguro de Saúde",
      icone: <FaHeartbeat size={20} color="#D1B274" />,
      descricao: "Cuide da sua saúde e da sua família com planos adaptados às suas necessidades. Cobertura para consultas, exames, internações e cirurgias. Tenha acesso à rede de hospitais e clínicas parceiras em todo o país. A sua saúde não pode esperar – proteja-se hoje.",
      imagem: "/images/servicos/saude.jpg"
    },
    {
      id: 2,
      nome: "Seguro de Acidente pessoal",
      icone: <FaUserInjured size={20} color="#D1B274" />,
      descricao: "Imprevistos acontecem. Com o seguro de acidente pessoal, você e seus familiares estão protegidos contra invalidez permanente, morte acidental e despesas médicas de emergência. Cobertura 24h, dentro e fora de casa. Simples, acessível e essencial.",
      imagem: "/images/servicos/acidente-pessoal.jpg"
    },
    {
      id: 3,
      nome: "Seguro de Acidente de trabalho",
      icone: <FaHardHat size={20} color="#D1B274" />,
      descricao: "Obrigatório por lei e essencial para qualquer empresa. O seguro de acidente de trabalho protege os seus funcionários contra acidentes durante o expediente ou no trajeto casa-trabalho. Cobertura para despesas médicas, afastamento e invalidez. Conformidade legal e cuidado com quem mais importa.",
      imagem: "/images/servicos/acidente-trabalho.jpg"
    },
    {
      id: 4,
      nome: "Seguro de Incêndio",
      icone: <FaFire size={20} color="#D1B274" />,
      descricao: "Proteja o seu património contra incêndios, quedas de raio e explosões. Ideal para residências, comércios e indústrias. Cobertura para danos estruturais, conteúdo e bens móveis. Tenha a segurança de reconstruir o que o fogo destruir.",
      imagem: "/images/servicos/incendio.jpg"
    },
    {
      id: 5,
      nome: "Seguro de Transporte de mercadoria",
      icone: <FaTruck size={20} color="#D1B274" />,
      descricao: "Transporta mercadorias? Proteja a sua carga contra roubo, danos, acidentes e perdas. O seguro de transporte cobre nacionais, garantindo que o seu negócio não pare. Ideal para transportadores, empresas de logística e comerciantes.",
      imagem: "/images/servicos/transporte.jpg"
    },
    {
      id: 6,
      nome: "Seguro de Viagem",
      icone: <FaPlane size={20} color="#D1B274" />,
      descricao: "Viaje com tranquilidade! Cobertura para despesas médicas no exterior, cancelamento de voos, e perda de bagagem. Seja a lazer ou negócios, o seguro de viagem é o seu companheiro indispensável para qualquer destino.",
      imagem: "/images/servicos/viagem.jpg"
    },
    {
      id: 7,
      nome: "Seguro de Vida",
      icone: <FaHeart size={20} color="#D1B274" />,
      descricao: "O futuro é incerto, mas o seu amor pela família não precisa ser. O seguro de vida garante proteção financeira aos seus beneficiários em caso de imprevistos. Cobertura para morte natural, acidental, invalidez e doenças graves. Planeje o amanhã com quem cuida de si.",
      imagem: "/images/servicos/vida.jpg"
    },
    {
      id: 8,
      nome: "Seguro de Garantia entre outros",
      icone: <FaShieldAlt size={20} color="#D1B274" />,
      descricao: "Soluções personalizadas para garantir contratos, licitações e obrigações legais. O seguro garantia substitui cauções em dinheiro, libertando o seu capital de giro. Ideal para empresas que participam de concursos públicos e contratos com o estado. Consulte-nos para soluções à medida.",
      imagem: "/images/servicos/garantia.jpg"
    }
  ];

  const servicoAtual = servicos[servicoIndex];

  const proximoServico = () => {
    setDirection('right');
    setServicoIndex((prev) => (prev + 1) % servicos.length);
    setIsAutoPlaying(false);
  };

  const servicoAnterior = () => {
    setDirection('left');
    setServicoIndex((prev) => (prev - 1 + servicos.length) % servicos.length);
    setIsAutoPlaying(false);
  };

  // Auto-play que vai e volta
  useEffect(() => {
    if (isAutoPlaying) {
      let currentDirection = 1;
      
      const interval = setInterval(() => {
        setServicoIndex((prev) => {
          const nextIndex = prev + currentDirection;
          
          if (nextIndex >= servicos.length) {
            currentDirection = -1;
            setDirection('left');
            return prev - 1;
          }
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
  }, [isAutoPlaying]);

  return (
    <div>
      <h1 style={{ color: '#D1B274', marginBottom: '2rem' }}>
        Serviços que oferecemos
      </h1>

      {/* Carrossel Automático com Efeito de Slide */}
      <div style={{ position: 'relative' }}>
        {/* Setas de navegação */}
        <div 
          onClick={servicoAnterior}
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
          <FaChevronLeft size={24} color="#888" />
        </div>

        <div 
          onClick={proximoServico}
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
          <FaChevronRight size={24} color="#888" />
        </div>

        {/* Conteúdo do carrossel com animação de slide */}
        <div className="carrossel-wrapper" style={{
          overflow: 'hidden',
          borderRadius: '5px'
        }}>
          <div 
            key={servicoIndex}
            className={`slide-animation slide-${direction}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              background: '#ffffff',
              borderRadius: '5px',
              overflow: 'hidden',
              minHeight: '450px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              border: '1px solid #ddd',
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {/* IMAGEM - LADO ESQUERDO */}
            <div style={{
              background: `linear-gradient(135deg, rgba(209, 178, 116, 0.1), rgba(0,0,0,0.3)), url(${servicoAtual.imagem})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '450px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} />

            {/* TEXTO - LADO DIREITO */}
            <div style={{
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
                {servicoAtual.icone}
                <h2 style={{ color: '#D1B274', margin: 0 }}>{servicoAtual.nome}</h2>
              </div>
              <p style={{
                color: '#000000',
                lineHeight: '1.8',
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                {servicoAtual.descricao}
              </p>
              <button
                onClick={() => window.location.href = '/contactos'}
                style={{
                  background: '#D1B274',
                  color: '#020202',
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
                Solicitar Cotação <FaChevronRight size={14} />
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
        marginTop: '1.5rem',
        marginBottom: '2rem'
      }}>
        {servicos.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              if (index > servicoIndex) {
                setDirection('right');
              }
              if (index < servicoIndex) {
                setDirection('left');
              }
              setServicoIndex(index);
              setIsAutoPlaying(false);
            }}
            style={{
              width: index === servicoIndex ? '30px' : '10px',
              height: '10px',
              borderRadius: index === servicoIndex ? '5px' : '50%',
              background: index === servicoIndex ? '#D1B274' : '#ccc',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

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
          .slide-animation {
            grid-template-columns: 1fr !important;
          }
          .slide-animation > div:first-child {
            min-height: 250px !important;
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

export default Servicos;