import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const numero = "258861324444";
  const mensagem = "Olá! Gostaria de mais informações sobre os seguros.";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
    >
      <MessageCircle size={32} color="#ffffff" />
    </a>
  );
}

export default WhatsAppButton;