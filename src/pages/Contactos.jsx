import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Mapa from '../components/Mapa';
import { 
  FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, 
  FaFileAlt, FaCheckCircle, FaExclamationCircle, FaClock 
} from 'react-icons/fa';

// INICIALIZA COM SUA PUBLIC KEY
emailjs.init("yX4GiHC0Vd2p9B7CA");

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

    // ENVIO REAL DE EMAIL COM EMAILJS
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email || 'Não informado',
      from_telefone: formData.telefone || 'Não informado',
      assunto: formData.assunto,
      mensagem: formData.mensagem,
      current_date: new Date().toLocaleString('pt-PT')
    };

    try {
      const response = await emailjs.send(
        'service_1alndbj',        // SEU SERVICE ID
        'yX4GiHC0Vd2p9B7CA',      // SEU TEMPLATE ID
        templateParams
      );
      
      console.log('Email enviado!', response);
      
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
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus('erro');
      setMensagemStatus('Erro ao enviar mensagem. Tente novamente ou contacte-nos por telefone.');
      setTimeout(() => {
        setStatus('');
        setMensagemStatus('');
      }, 5000);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', overflowX: 'hidden' }}>
      <h1 style={{ color: '#D1B274', marginBottom: '30px' }}>Contactos</h1>
      
      {/* Layout principal com 2 colunas */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
        
        {/* Coluna Esquerda - Informações */}
        <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #888' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D1B274' }}>
              <FaPhone /> Telefones
            </h3>
            <p style={{ color: '#000000', wordBreak: 'break-word' }}>86 132 4444</p>
            <p style={{ color: '#000000', wordBreak: 'break-word' }}>84 747 5190</p>
            <p style={{ color: '#000000', wordBreak: 'break-word' }}>82 / 84 / 87 444 8881</p>
            
            
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D1B274', marginTop: '20px' }}>
              <FaEnvelope /> Email
            </h3>
            <p style={{ 
              color: '#000000', 
              wordBreak: 'break-all', 
              overflowWrap: 'break-word',
              whiteSpace: 'normal',
              maxWidth: '100%'
            }}>
              premium@premiumcorretoraseguros.com
            </p>
            
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D1B274', marginTop: '20px' }}>
              <FaClock /> Horário
            </h3>
            <p style={{ color: '#000000', wordBreak: 'break-word' }}>Segunda - Sexta: 8h - 17h</p>
            <p style={{ color: '#000000', wordBreak: 'break-word' }}>Sábado: 8h - 12h</p>
            
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
                style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px', boxSizing: 'border-box' }}
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
                  style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px', boxSizing: 'border-box' }}
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
                  style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px', boxSizing: 'border-box' }}
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
                style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px', boxSizing: 'border-box' }}
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
                style={{ width: '100%', padding: '12px', border: '1px solid #888', borderRadius: '5px', fontSize: '16px', boxSizing: 'border-box' }}
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

      <style>{`
        @media (max-width: 768px) {
          .email-container {
            word-break: break-all !important;
            overflow-wrap: break-word !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Contactos;