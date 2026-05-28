import { Shield, Car, Heart, Building2, ArrowRight } from 'lucide-react';
import SliderHome from '../components/SliderHome';

function Home() {
  return (
    <div>
      {/* Carrossel de imagens - componente separado */}
      <SliderHome />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Premium</h1>
          <div className="hero-subtitle">Corretora de Seguros SU, Lda</div>
          <div className="hero-question">E se HOJE tiver um acidente?</div>
          <p>Garantimos Tranquilidade e Segurança Familiar, com a Escolha Certa dos Seguros aos Clientes.</p>
          <button onClick={() => window.location.href = '/contactos'}>
            Proteja-se Agora <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </div>

      {/* Cards de Diferenciais */}
      <div className="diferenciais-grid">
        <div className="diferencial-card">
          <Shield size={48} color="#D1B274" />
          <h3>Proteção Total</h3>
          <p>Cobertura completa para você e sua família</p>
        </div>
        <div className="diferencial-card">
          <Car size={48} color="#D1B274" />
          <h3>Seguro Auto</h3>
          <p>Proteja seu veículo com as melhores parceiras</p>
        </div>
        <div className="diferencial-card">
          <Heart size={48} color="#D1B274" />
          <h3>Saúde e Vida</h3>
          <p>Cuide do que mais importa com tranquilidade</p>
        </div>
        <div className="diferencial-card">
          <Building2 size={48} color="#D1B274" />
          <h3>Empresas</h3>
          <p>Soluções corporativas para seu negócio</p>
        </div>
      </div>
    </div>
  );
}

export default Home;