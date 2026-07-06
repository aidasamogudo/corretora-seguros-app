import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detetar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Controlar o header no scroll (apenas mobile)
  useEffect(() => {
    if (!isMobile) {
     
      return;
    }

    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scroll para baixo - esconde o header
        setHideHeader(true);
      } else {
        // Scroll para cima - mostra o header
        setHideHeader(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY, isMobile]);

  return (
    <header 
      className="header"
      style={{
        transform: hideHeader && isMobile ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease-in-out'
      }}
    >
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