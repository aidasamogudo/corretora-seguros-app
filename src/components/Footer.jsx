import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaShieldAlt, FaHandshake, FaUserFriends, FaBuilding } from 'react-icons/fa';

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
            <li style={{ marginBottom: '0.5rem' }}><a href="/servicos" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Seguro Automóvel</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/servicos" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Seguro de Saúde</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/servicos" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Seguro de Vida</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/servicos" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Seguro de Acidente</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/servicos" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Seguro Empresarial</a></li>
          </ul>
        </div>

        {/* Coluna 2 - Ajuda e Suporte */}
        <div>
          <h4 style={{ color: '#D1B274', marginBottom: '1rem', fontSize: '1.1rem' }}>Ajuda e Suporte</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="/contactos" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Contactos</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/faq" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Perguntas Frequentes</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/simular" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Simular Seguro</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/reclamacoes" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Livro de Reclamações</a></li>
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
              <a href="https://business.facebook.com/latest/home?business_id=408569482257918&asset_id=109508805497322" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaFacebook size={14} color="#D1B274" /> Facebook Chat
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.instagram.com/premium_corretora_seguros_mz/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaInstagram size={14} color="#D1B274" /> Instagram Chat
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="tel:8284448881" style={{ color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaPhone size={14} color="#D1B274" /> Ligação Gratuita
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 - Premium Corretora */}
        <div>
          <h4 style={{ color: '#D1B274', marginBottom: '1rem', fontSize: '1.1rem' }}>Premium Corretora</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="/sobre" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Sobre nós</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/parceiros" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Seguradoras Parceiras</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/blog" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Blog e Dicas</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/vagas" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Vagas</a></li>
          </ul>
        </div>

        {/* Coluna 5 - Legal */}
        <div>
          <h4 style={{ color: '#D1B274', marginBottom: '1rem', fontSize: '1.1rem' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="/termos" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Termos e Condições</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/privacidade" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Política de Privacidade</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/cookies" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Política de Cookies</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/dados" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Meus dados pessoais</a></li>
          </ul>
        </div>
      </div>

      {/* Linha de contacto rápido */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        padding: '1.5rem 0', 
        borderTop: '1px solid #333', 
        borderBottom: '1px solid #333',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaPhone color="#D1B274" size={14} />                 
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
          <a href="https://business.facebook.com/latest/home?business_id=408569482257918&asset_id=109508805497322" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: '0.3s' }}>
            <FaFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/premium_corretora_seguros_mz/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: '0.3s' }}>
            <FaInstagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@aidamanuelsamogud" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: '0.3s' }}>
            <FaTiktok size={20} />
          </a>
          <a href="https://wa.me/258861324444" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: '0.3s' }}>
            <FaWhatsapp size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: '0.3s' }}>
            <FaLinkedin size={20} />
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
    </footer>
  );
}

export default Footer;