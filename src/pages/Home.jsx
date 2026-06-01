import { Shield, Car, Heart, Building2, ArrowRight } from 'lucide-react';
import SliderHome from '../components/SliderHome';

function Home() {
  return (
    <div>
      {/* Carrossel de imagens - componente separado */}
      <SliderHome />

      {/* Hero Section */}
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        padding: '4rem 2rem',
        margin: '2rem 5%',
        borderRadius: '5px',
        border: '1px solid #888',
        transition: 'all 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#D1B274';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#888';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        <div className="hero-content" style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#D1B274',
            fontSize: '4rem',
            marginBottom: '0.5rem',
            fontWeight: '800',
            letterSpacing: '-1px'
          }}>Premium</h1>
          <div className="hero-subtitle" style={{
            color: '#ffffff',
            fontSize: '1.5rem',
            marginBottom: '1rem',
            fontWeight: '500'
          }}>Corretora de Seguros SU, Lda</div>
          <div className="hero-question" style={{
            color: '#D1B274',
            fontSize: '2rem',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>E se HOJE tiver um acidente?</div>
          <p style={{
            color: '#e0e0e0',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>Garantimos Tranquilidade e Segurança Familiar, com a Escolha Certa dos Seguros aos Clientes.</p>
          <button 
            onClick={() => window.location.href = '/contactos'}
            style={{
              background: '#D1B274',
              color: '#1a1a1a',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b89a5e';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#D1B274';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            Proteja-se Agora <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </div>

      {/* Cards de Diferenciais */}
      <div className="diferenciais-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        padding: '2rem 5%',
        marginBottom: '3rem'
      }}>
        <div className="diferencial-card" style={{
          background: '#ffffff',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1px solid #888',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#D1B274';
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#888';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <Shield size={48} color="#D1B274" />
          <h3 style={{ color: '#D1B274', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Proteção Total</h3>
          <p style={{ color: '#000000', fontSize: '0.95rem', lineHeight: '1.5' }}>Cobertura completa para você e sua família</p>
        </div>

        <div className="diferencial-card" style={{
          background: '#ffffff',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1px solid #888',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#D1B274';
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#888';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <Car size={48} color="#D1B274" />
          <h3 style={{ color: '#D1B274', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Seguro Auto</h3>
          <p style={{ color: '#000000', fontSize: '0.95rem', lineHeight: '1.5' }}>Proteja seu veículo com as melhores parceiras</p>
        </div>

        <div className="diferencial-card" style={{
          background: '#ffffff',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1px solid #888',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#D1B274';
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#888';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <Heart size={48} color="#D1B274" />
          <h3 style={{ color: '#D1B274', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Saúde e Vida</h3>
          <p style={{ color: '#000000', fontSize: '0.95rem', lineHeight: '1.5' }}>Cuide do que mais importa com tranquilidade</p>
        </div>

        <div className="diferencial-card" style={{
          background: '#ffffff',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1px solid #888',
          transition: 'all 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#D1B274';
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#888';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <Building2 size={48} color="#D1B274" />
          <h3 style={{ color: '#D1B274', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Empresas</h3>
          <p style={{ color: '#000000', fontSize: '0.95rem', lineHeight: '1.5' }}>Soluções corporativas para seu negócio</p>
        </div>
      </div>

      {/* CSS para responsividade */}
      <style>{`
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem !important;
          }
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          .hero-question {
            font-size: 1.3rem !important;
          }
          .hero-content p {
            font-size: 0.95rem !important;
          }
          .diferenciais-grid {
            gap: 1rem !important;
            padding: 1rem 3% !important;
          }
          .diferencial-card {
            padding: 1.5rem !important;
          }
          .diferencial-card h3 {
            font-size: 1.1rem !important;
          }
          .diferencial-card p {
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem !important;
          }
          .hero-question {
            font-size: 1.1rem !important;
          }
          .hero-section button {
            padding: 0.6rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;