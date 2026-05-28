import { useState } from 'react';
import Mapa from '../components/Mapa';
import { 
  FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, 
  FaFileAlt, FaCheckCircle, FaExclamationCircle, FaClock 
} from 'react-icons/fa';

function Contactos() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [status, setStatus] = useState('');
  const [mensagemStatus, setMensagemStatus] = useState('');
  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (erros[e.target.name]) {
      setErros({ ...erros, [e.target.name]: '' });
    }
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarTelefone = (telefone) => {
    let numero = telefone.replace(/\s/g, '').replace(/[^\d]/g, '');
    if (numero.startsWith('258')) {
        numero = numero.slice(3);
    }
    const prefixosValidos = ['82', '83', '84', '85', '86', '87'];
    const temTamanhoCorreto = numero.length === 9;
    const temPrefixoValido = prefixosValidos.some(prefixo => numero.startsWith(prefixo));
    return temTamanhoCorreto && temPrefixoValido;
  };

  const validarTexto = (texto) => {
    return texto.trim().length >= 5;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const novosErros = {};

    if (!validarTexto(formData.nome)) {
      novosErros.nome = 'Nome deve ter pelo menos 5 letras';
    }
    if (!validarTexto(formData.assunto)) {
      novosErros.assunto = 'Assunto deve ter pelo menos 5 letras';
    }
    if (!validarTexto(formData.mensagem)) {
      novosErros.mensagem = 'Mensagem deve ter pelo menos 5 letras';
    }
    if (formData.email && !validarEmail(formData.email)) {
      novosErros.email = 'Digite um email válido (ex: nome@dominio.com)';
    }
    if (formData.telefone && !validarTelefone(formData.telefone)) {
      novosErros.telefone = 'Digite um telefone válido (ex: 84 123 4567) - deve começar com 82, 83, 84, 85, 86 ou 87';
    }

    if (!formData.email && !formData.telefone) {
      setStatus('erro');
      setMensagemStatus('Por favor, preencha o email OU o telefone para contacto.');
      setTimeout(() => {
        setStatus('');
        setMensagemStatus('');
      }, 5000);
      return;
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      setStatus('erro');
      setMensagemStatus('Por favor, corrija os erros no formulário.');
      setTimeout(() => {
        setStatus('');
        setMensagemStatus('');
      }, 5000);
      return;
    }

    setStatus('enviando');

    setTimeout(() => {
      setStatus('sucesso');
      setMensagemStatus('Mensagem enviada com sucesso! Entraremos em contacto brevemente.');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
      setErros({});
      setTimeout(() => {
        setStatus('');
        setMensagemStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#D1B274', marginBottom: '30px' }}>Contactos</h1>
      
      {/* Layout principal com 2 colunas */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
        
        {/* Coluna Esquerda - Informações */}
        <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #888' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D1B274' }}>
              <FaPhone /> Telefones
            </h3>
            <p style={{ color: '#000000' }}>82 / 84 / 87 444 8881</p>
            <p style={{ color: '#000000' }}>86 132 4444</p>
            <p style={{ color: '#000000' }}>84 747 5190</p>
            
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D1B274', marginTop: '20px' }}>
              <FaEnvelope /> Email
            </h3>
            <p style={{ color: '#000000' }}>premium@premiumcorretoraseguros.com</p>
            
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D1B274', marginTop: '20px' }}>
              <FaClock /> Horário
            </h3>
            <p style={{ color: '#000000' }}>Segunda - Sexta: 8h - 17h</p>
            <p style={{ color: '#000000' }}>Sábado: 8h - 12h</p>
            
            <hr style={{ margin: '20px 0', borderColor: '#888' }} />
            
            <h3 style={{ color: '#000000', marginBottom: '15px' }}>Redes Sociais</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
              <a href="https://business.facebook.com/latest/home?business_id=408569482257918&asset_id=109508805497322" target="_blank" rel="noopener noreferrer" 
                style={{ textAlign: 'center', padding: '10px', background: '#f8f9fa', border: '1px solid #888', borderRadius: '5px', textDecoration: 'none', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <FaFacebook color="#D1B274" /> Facebook
              </a>
              <a href="https://www.instagram.com/premium_corretora_seguros_mz/" target="_blank" rel="noopener noreferrer" 
                style={{ textAlign: 'center', padding: '10px', background: '#f8f9fa', border: '1px solid #888', borderRadius: '5px', textDecoration: 'none', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <FaInstagram color="#D1B274" /> Instagram
              </a>
              <a href="https://www.tiktok.com/@aidamanuelsamogud" target="_blank" rel="noopener noreferrer" 
                style={{ textAlign: 'center', padding: '10px', background: '#f8f9fa', border: '1px solid #888', borderRadius: '5px', textDecoration: 'none', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <FaTiktok color="#D1B274" /> TikTok
              </a>
              <a href="https://wa.me/258861324444" target="_blank" rel="noopener noreferrer" 
                style={{ textAlign: 'center', padding: '10px', background: '#f8f9fa', border: '1px solid #888', borderRadius: '5px', textDecoration: 'none', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <FaWhatsapp color="#D1B274" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Coluna Direita - Mapa */}
        <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #888', height: '100%' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D1B274' }}>
              <FaMapMarkerAlt /> Onde Estamos
            </h3>
            <Mapa />
          </div>
        </div>
      </div>

      {/* Formulário centralizado */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #888', maxWidth: '800px', width: '100%' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D1B274' }}>
            <FaEnvelope /> Envie-nos uma mensagem
          </h3>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <input 
                type="text" 
                name="nome" 
                placeholder="Nome completo *" 
                value={formData.nome}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px' }}
                required
              />
              {erros.nome && <small style={{ color: 'red' }}>{erros.nome}</small>}
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '15px' }}>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px' }}
                />
                {erros.email && <small style={{ color: 'red' }}>{erros.email}</small>}
              </div>
              <div>
                <input 
                  type="tel" 
                  name="telefone" 
                  placeholder="Telefone" 
                  value={formData.telefone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px' }}
                />
                {erros.telefone && <small style={{ color: 'red' }}>{erros.telefone}</small>}
              </div>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <input 
                type="text" 
                name="assunto" 
                placeholder="Assunto *" 
                value={formData.assunto}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px' }}
                required
              />
              {erros.assunto && <small style={{ color: 'red' }}>{erros.assunto}</small>}
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <textarea 
                name="mensagem" 
                placeholder="Mensagem *" 
                rows="4"
                value={formData.mensagem}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px' }}
                required
              />
              {erros.mensagem && <small style={{ color: 'red' }}>{erros.mensagem}</small>}
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'enviando'}
              style={{ background: '#D1B274', color: '#000000', padding: '12px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold', fontSize: '16px' }}>
              {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            
            {status === 'sucesso' && (
              <div style={{ background: '#d4edda', color: '#155724', padding: '10px', borderRadius: '5px', marginTop: '15px', textAlign: 'center' }}>
                <FaCheckCircle /> {mensagemStatus}
              </div>
            )}
            
            {status === 'erro' && (
              <div style={{ background: '#f8d7da', color: '#721c24', padding: '10px', borderRadius: '5px', marginTop: '15px', textAlign: 'center' }}>
                <FaExclamationCircle /> {mensagemStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactos;