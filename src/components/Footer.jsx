import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ 
      background: '#1a1a1a', 
      color: '#ccc', 
      padding: '3rem 5% 1rem', 
      marginTop: '3rem' 
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '2rem', 
        marginBottom: '2rem' 
      }}>
        
        {/* Coluna 1 - Produtos e Serviços */}
        <div>
          <h4 style={{ color: '#D1B274', marginBottom: '1rem', fontSize: '1.1rem' }}>Produtos e Serviços</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/servicos" style={{ color: '#aaa', textDecoration: 'none' }}>Seguro Automóvel</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/servicos" style={{ color: '#aaa', textDecoration: 'none' }}>Seguro de Saúde</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/servicos" style={{ color: '#aaa', textDecoration: 'none' }}>Seguro de Vida</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/servicos" style={{ color: '#aaa', textDecoration: 'none' }}>Seguro Empresarial</a>
            </li>
          </ul>
        </div>

        {/* Coluna 2 - Ajuda e Suporte */}
        <div>
          <h4 style={{ color: '#D1B274', marginBottom: '1rem', fontSize: '1.1rem' }}>Ajuda e Suporte</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/contactos" style={{ color: '#aaa', textDecoration: 'none' }}>Contactos</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Atendimento */}
        <div>
          <h4 style={{ color: '#D1B274', marginBottom: '1rem', fontSize: '1.1rem' }}>Atendimento</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://wa.me/258861324444" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaWhatsapp size={14} color="#D1B274" /> WhatsApp Chat
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="tel:874448881" style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaPhone size={14} color="#D1B274" /> Ligação Gratuita
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 - Premium Corretora */}
        <div>
          <h4 style={{ color: '#D1B274', marginBottom: '1rem', fontSize: '1.1rem' }}>Premium Corretora</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/sobre" style={{ color: '#aaa', textDecoration: 'none' }}>Sobre nós</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/parceiros" style={{ color: '#aaa', textDecoration: 'none' }}>Seguradoras Parceiras</a>
            </li>
          </ul>
        </div>

        {/* Coluna 5 - Legal */}
        <div>
          <h4 style={{ color: '#D1B274', marginBottom: '1rem', fontSize: '1.1rem' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/sobre" style={{ color: '#aaa', textDecoration: 'none' }}>Termos e Condições</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/sobre" style={{ color: '#aaa', textDecoration: 'none' }}>Política de Privacidade</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha de contacto rápido - CORRIGIDA (telefones em linhas separadas no mobile) */}
      <div className="footer-contacts" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        padding: '1.5rem 0', 
        borderTop: '1px solid #333', 
        borderBottom: '1px solid #333',
        marginBottom: '1.5rem',
        gap: '1rem'
      }}>
        {/* Telefones - em coluna no mobile */}
        <div className="footer-phone-numbers" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <FaPhone color="#D1B274" size={14} />
          <span>86 132 4444</span>
          <span>|</span>
          <span>84 747 5190</span>
          <span>|</span>
          <span>82/84/87 444 8881</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaEnvelope color="#D1B274" size={14} />
          <span>premium@premiumcorretoraseguros.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaMapMarkerAlt color="#D1B274" size={14} />
          <span>Av. Lucas Luali – Nr 470, Maputo</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaClock color="#D1B274" size={14} />
          <span>Seg-Sex: 8h-17h | Sáb: 8h-12h</span>
        </div>
      </div>

      {/* Redes sociais */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://business.facebook.com/latest/home?business_id=408569482257918&asset_id=109508805497322" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa' }}>
            <FaFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/premium_corretora_seguros_mz/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa' }}>
            <FaInstagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@premiumcorretoraseguros" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa' }}>
            <FaTiktok size={20} />
          </a>
          <a href="https://wa.me/258861324444" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa' }}>
            <FaWhatsapp size={20} />
          </a>
        </div>
        <div>
          <span style={{ fontSize: '0.8rem', color: '#666' }}>
            © 2025 Premium Corretora de Seguros SU, Lda.
          </span>
        </div>
      </div>

      {/* Copyright final */}
      <div style={{ 
        textAlign: 'center', 
        paddingTop: '1rem', 
        fontSize: '0.7rem', 
        color: '#555',
        borderTop: '1px solid #333'
      }}>
        <p>Desde 2020 protegendo famílias e empresas em Moçambique | Corretora de Seguros licenciada</p>
      </div>

      {/* CSS para mobile - telefones em linhas separadas */}
      <style>{`
        @media (max-width: 768px) {
          .footer-phone-numbers {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
          }
          .footer-phone-numbers span:not(:first-child) {
            display: none !important;
          }
          .footer-contacts {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.8rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;