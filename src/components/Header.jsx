import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo e Nome da Empresa */}
        <Link to="/" className="logo-link">
          <img 
            src="/logo.png" 
            alt="Premium Corretora" 
            className="logo"
          />
          <div className="logo-text">
            <div className="logo-title">
              Premium
            </div>
            <div className="logo-subtitle">
              Corretora de Seguros SU, Lda
            </div>
          </div>
        </Link>

        {/* Menu de Navegação - ALINHADO À ESQUERDA */}
        <nav className="nav-menu">
          <div className="nav-links">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
            <span className="nav-separator">|</span>
            <Link 
              to="/servicos" 
              className={location.pathname === '/servicos' ? 'active' : ''}
            >
              Serviços
            </Link>
            <span className="nav-separator">|</span>
            <Link 
              to="/sobre" 
              className={location.pathname === '/sobre' ? 'active' : ''}
            >
              Sobre Nós
            </Link>
            <span className="nav-separator">|</span>
            <Link 
              to="/parceiros" 
              className={location.pathname === '/parceiros' ? 'active' : ''}
            >
              Parceiros
            </Link>
            <span className="nav-separator">|</span>
            <Link 
              to="/contactos" 
              className={location.pathname === '/contactos' ? 'active' : ''}
            >
              Contactos
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;